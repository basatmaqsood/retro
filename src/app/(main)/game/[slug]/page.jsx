"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import getData from "@//lib/FetchGame"; // Import your API function

export default function Page() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);




  return (
    <div>
      <h1>{game?.title}</h1>
      <p>{game?.description}</p>
      {slug}
    </div>
  );
}
