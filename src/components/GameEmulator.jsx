"use client";
import React, { useEffect, useState } from "react";

export default function GameEmulator({ game }) {
  const [resetKey, setResetKey] = useState(Date.now());

  useEffect(() => {
    console.log("Mounting EmulatorJS for game:", game.game_url);

    // Set up EmulatorJS variables
    window.EJS_player = "#game";
    window.EJS_core = game.categories[0]?.core || "";
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    window.EJS_gameUrl = `/games/${game.game_url}/`;

    const script = document.createElement("script");
    script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Force reset the emulator
      console.log("Unmounting EmulatorJS...");

      // Clean up: Remove everything related to the current game
      document.querySelectorAll("iframe, canvas, audio, video").forEach((el) => el.remove());

      // Remove all global variables set by EmulatorJS
      delete window.EJS_player;
      delete window.EJS_core;
      delete window.EJS_pathtodata;
      delete window.EJS_gameUrl;

      // Remove the script tag from DOM
      document.body.removeChild(script);

      // Trigger a reset for the next mount
      setResetKey(Date.now()); // Force a re-mount of the component
    };
  }, [game]);

  return (
    <div className="flex justify-center bg-main">
      <div style={{ width: "640px", height: "480px", maxWidth: "100%" }}>
        {/* Force a re-mount of the #game container */}
        <div id="game" key={resetKey}></div>
      </div>
    </div>
  );
}
