import Link from "next/link"
import { Input } from "@/components/ui/input"
import { BugIcon, FlameIcon, GlassWaterIcon, LeafIcon, LayoutGridIcon, PlayIcon, PowerIcon, SearchIcon } from '@/components/Icons'

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r bg-muted/40 p-6 md:block">
      <div className="flex items-center gap-2 mb-6">
        <PlayIcon className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Pokédex</h1>
      </div>
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search Pokémon..."
          className="w-full rounded-lg bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
      </div>
      <nav className="grid gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/80"
        >
          <LayoutGridIcon className="w-4 h-4" />
          <span>All Pokémon</span>
        </Link>
        <Link
          href="/type/fire"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <FlameIcon className="w-4 h-4" />
          <span>Fire</span>
        </Link>
        <Link
          href="/type/water"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <GlassWaterIcon className="w-4 h-4" />
          <span>Water</span>
        </Link>
        <Link
          href="/type/grass"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <LeafIcon className="w-4 h-4" />
          <span>Grass</span>
        </Link>
        <Link
          href="/type/electric"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <PowerIcon className="w-4 h-4" />
          <span>Electric</span>
        </Link>
        <Link
          href="/type/bug"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <BugIcon className="w-4 h-4" />
          <span>Bug</span>
        </Link>
      </nav>
    </aside>
  )
}