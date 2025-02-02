"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [query, setquery] = useState("");

  function handleSearch() {
    if (query.trim() === "") return;
    router.push(`/search?q=${query}`);
    setquery("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="flex-1 flex max-h-max items-center max-w-md mx-auto gap-2  border border-gray-300 px-3 py-2 rounded-lg"
    >
      <input
        className="w-full  bg-main focus:outline-none  focus:border-transparent border-none"
        type="search"
        value={query}
        onChange={(e) => {
          setquery(e.target.value);
        }}
        placeholder="Search for games..."
      />
      <SearchIcon onClick={handleSearch} className="cursor-pointer" />
    </form>
  );
}
