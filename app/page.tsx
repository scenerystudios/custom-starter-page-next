"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    const searchUrl = `https://www.google.com/search?q=${searchTerm}`;

    window.location.href = searchUrl;
  };

  return (
    <main>
      <Navbar />

      <div className="hero h-screen bg-base-200 overflow-hidden">
        <div className="hero-content text-center gap-3">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Search me hard 🤪</h1>
            <input
              type="text"
              id="search-input"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mt-5"
            />
            <button className="btn ml-5" type="button" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
