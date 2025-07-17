import Random from "./components/Random";
import Tag from "./components/Tag";
import axios from 'axios';

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative">
      <h1 className="absolute bg-white rounded-lg text-center mt-10 mx-auto px-4 py-2 text-4xl font-bold w-11/12">
        RANDOM GIFS
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[100px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
