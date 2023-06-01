import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/nirvana.jpg"
                alt="Capa de album"
              />
              <strong>Nevermind</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/foals.webp"
                alt="Capa de album"
              />
              <strong>Everything Not Saved Will Be Lost: Part 1</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/linkin_park.jpeg"
                alt="Capa de album"
              />
              <strong>Hybrid Theory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/oficinag3.jpeg"
                alt="Capa de album"
              />
              <strong>Depois da guerra</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/pf.webp"
                alt="Capa de album"
              />
              <strong>The Dark Side of the Moon</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/rhcp.jpeg"
                alt="Capa de album"
              />
              <strong>The Getaway</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for André Vieira
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/dm1.webp"
                alt="Capa de album"
              />
              <strong className="font-semibold">Rock mix</strong>
              <span className="text-sm text-zinc-500">
                Nirvana, Foo Fighters, Foals, Oficina G3
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/dm2.jpeg"
                alt="Capa de album"
              />
              <strong className="font-semibold">Alternative playlist</strong>
              <span className="text-sm text-zinc-500">
                Paramore, Calvin Harris, The Weeknd, Martin Garrix
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/dm3.jpeg"
                alt="Capa de album"
              />
              <strong className="font-semibold">Lofi and chill</strong>
              <span className="text-sm text-zinc-500">
                L&apos;indécis, Leavv, Ruck P, Ian Ewing
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
