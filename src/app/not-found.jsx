import React from "react";

export default function page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[url('/images/page/not-found.jpg')] bg-cover bg-center text-white text-2xl">
     404 Page Not Found
     <a href="/" className="bg-accent hover:bg-accent-secondary transition-all ease-in text-gray-200 px-2 rounded-sm py-1 mt-4 ">Let's Go Back To Home</a>
    </div>
  );
}
