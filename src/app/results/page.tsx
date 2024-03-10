import { FiSearch } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import { FiFolderPlus } from "react-icons/fi";

export default function Results() {
  return (
    <main className="bg-black text-white min-h-screen p-8 flex flex-col gap-10">
      {/* page title */}
      <div className="flex justify-center">
        <p className="text-2xl font-extrabold">Results</p>
      </div>

      {/* page content */}
      <div className="space-y-12 flex-1">
        <div className="space-y-6">
          <p className="text-xl font-semibold">Tips for taking a good photo</p>
          <div className="flex flex-row gap-4 items-center">
            <FiSearch className="size-6" />
            <div>
              <p>Place the camera in focus</p>
              <p className="text-xs text-gray-400">
                The camera must be 10-15cm from your skin.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center">
            <FiSun className="size-6" />
            <div>
              <p>Good lighting is key</p>
              <p className="text-xs text-gray-400">
                Natural light is best, avoid flash
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center">
            <FiImage className="size-6" />
            <div>
              <p>Clear, sharp images work best</p>
              <p className="text-xs text-gray-400">
                Make sure the image is not blurry or out of focus
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-300 ">
          <img className="w-full" src="/sample.jpeg" alt="Sample image" />
        </div>
      </div>

      {/* page buttons(footer) */}
      <div className="flex flex-col gap-6">
        <button className="bg-white/10 py-4 px-8 rounded-2xl flex justify-center items-center gap-4">
          <FiCamera className="size-6" />
          Take photo
        </button>
        <button className="bg-blue-500 py-4 px-8 rounded-2xl flex justify-center items-center gap-4">
          <FiFolderPlus className="size-6" />
          Choose from library
        </button>
      </div>
    </main>
  );
}