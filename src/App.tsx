import { useState } from "react";
import { LayoutHome } from "./layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen  bg-black flex flex-col items-center justify-center p-4">
      <LayoutHome />
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Feline Elegance + React + Vite + Tailwind
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <p className="text-lg mb-4">
          Count is <span className="font-mono font-bold">{count}</span>
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Increment
        </button>
        <button className="bg-zenith-orange text-slate-600 px-6 py-2 mt-4 hover:brightness-110">
          Order Now
        </button>
      </div>

      <p className="mt-8 text-gray-600">
        Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> to
        test HMR
      </p>

      <div className="mt-4 flex gap-4">
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
          TypeScript
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
          Tailwind CSS
        </span>
        <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold">
          SCSS Ready
        </span>
      </div>
    </div>
  );
}

export default App;
