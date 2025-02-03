'use client'
import { DiscussionEmbed } from "disqus-react";
import React, { useEffect, useState } from "react";

export default function Disqus({ article }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href); // Ensure `window` is accessed only on the client
    }
  }, []);

  if (!url) return null; // Prevents rendering until URL is available

  return (
    <div className="mt-4">
        <h2 className="my-4 font-display text-xl">Comments Section :</h2>
      <DiscussionEmbed
        shortname="next-rivals"
        config={{
          url: url,
          identifier: article.id,
          title: article.title,
          language: "EN",
        }}
      />
    </div>
  );
}
