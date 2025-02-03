'use client'
import { DiscussionEmbed } from "disqus-react";
import React from "react";

export default function Disqus({article}) {
    console.log(this);
    console.log( window.location.href);

  return (
    <div className="mt-4">

    <DiscussionEmbed
      shortname="next-rivals"
      config={{
          url: window.location.href,
          identifier: article.id,
          title: article.title,
          language: "EN", //e.g. for Traditional Chinese (Taiwan)
        }}
        />
        </div>
  );
}
