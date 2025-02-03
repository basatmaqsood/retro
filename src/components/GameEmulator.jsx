"use client";
import React, { useEffect } from "react";

export default function GameEmulator({ game }) {
  useEffect(() => {
    window.EJS_player = "#game";
    window.EJS_core = `${game.categories[0].core}`;
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    window.EJS_gameUrl = `/games/${game.game_url}/`;

    const script = document.createElement("script");
    script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="flex justify-center bg-main">
      <div style={{ width: "640px", height: "480px", maxWidth: "100%" }}>
        <div id="game"></div>
      </div>
    </div>
  );
}
