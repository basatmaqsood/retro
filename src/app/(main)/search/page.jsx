import React, { Suspense } from "react";
import Image from "next/image";
import getData from "@//lib/FetchGame";
import ShowGames from "@//components/ShowGames";

export default async function page({ searchParams }) {
  const params = searchParams; // ✅ Await searchParams
  const query = params.q || "";
  const games = await getData(query);

  return <ShowGames games={games} title={`Search Results for : ${query}`} />;
}
