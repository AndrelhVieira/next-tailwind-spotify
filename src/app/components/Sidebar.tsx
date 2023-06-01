import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Energia Matinal
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Chuva de Sons
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Vibrações de Verão
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Trilha Sonora da Vida
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Ritmos do Mundo
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Paz e Tranquilidade
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Exploração Musical
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Melodias Relaxantes
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Sons da Natureza
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Músicas para Dançar
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Café e Melodia
        </a>
      </nav>
    </aside>
  );
}
