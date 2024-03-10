import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen p-4 flex flex-col gap-8">
      {/* page title */}
      <div className="flex justify-center">
        <p className="text-2xl font-extrabold">Take a photo</p>
      </div>

      {/* page content */}
      <div className="space-y-4 flex-1">
        <div className="space-y-4">
          <p className="text-xl font-semibold">Tips for taking a good photo</p>
          <div className="flex flex-row gap-4">
            <FiSearch className="h-6 w-6" />
            <div>
              <p>Place the camera in focus</p>
              <p className="text-xs">
                The camera must be 10-15cm from your skin.
              </p>
            </div>
          </div>

          <p>Good lighting is key</p>
          <p>Clear, sharp images work best</p>
        </div>

        <div>
          <img src="/sample.jpeg" alt="Sample image" />
        </div>
      </div>

      {/* page buttons(footer) */}
      <div className="flex flex-col gap-4">
        <button className="bg-gray-400 py-4 px-8 rounded-2xl">
          Take photo
        </button>
        <button className="bg-blue-500 py-4 px-8 rounded-2xl">
          Choose from library
        </button>
      </div>
    </main>
  );
}
