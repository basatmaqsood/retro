"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function CategorySlider({ categories }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  let isDragging = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Speed factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between gap-4">
        <h2 className="font-display mb-4 items-center">Categories</h2>
        <a
          href="/categories"
          className="text-sm font-medium hover:underline underline-offset-4 transition-all ease-in"
        >
          View All <ChevronRight className="h-4 w-4 inline-block text-accent" />
        </a>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-scroll no-scrollbar flex gap-4 whitespace-nowrap cursor-grab"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          handleMouseLeave();
          setIsHovered(false);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.concat(categories).map((item, i) => (
          <div key={i} className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64">
            <a href={`/categories/${item.slug}`}>
              <div className="overflow-hidden rounded-lg border-accent-secondary mb-2 w-full">
                <img
                  src={`/images/category/${item.image}`}
                  alt={item.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h2 className="text-sm font-medium">{item.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
