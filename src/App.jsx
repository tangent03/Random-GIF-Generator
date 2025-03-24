import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center py-8 px-4">
      <h1 className="bg-white/90 backdrop-blur-sm rounded-2xl w-11/12 max-w-2xl text-center mt-8 px-10 py-4 text-4xl md:text-5xl font-bold text-gray-800 shadow-lg">
        Random GIF Generator
      </h1>
      <div className="flex flex-col w-full items-center gap-y-8 mt-8">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
