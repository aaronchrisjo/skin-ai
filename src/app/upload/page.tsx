"use client";

import { useState } from "react";

export default function Upload() {
  const [imgUrl, setImgUrl] = useState("");

  return (
    <main className="bg-black text-white min-h-screen p-8 flex flex-col gap-10">
      {/* page title */}
      <div className="flex justify-center">
        <p className="text-2xl font-extrabold">Upload</p>
      </div>

      {/* page content */}
      <label>Please provide image url:</label>
      <input
        type="text"
        className="text-black"
        defaultValue={imgUrl}
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      ></input>
      <button
        className="bg-blue-500 py-4 px-8 rounded-2xl flex justify-center items-center gap-4"
        onClick={() => {
          console.log(imgUrl);
        }}
      >
        Submit
      </button>
    </main>
  );
}
