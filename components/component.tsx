/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/LcioaKBJnbK
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

"use client"
import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export function Component() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      const detailedPokemon = await Promise.all(
        data.results.map(async (p: { url: string }) => {
          const res = await fetch(p.url);
          return res.json();
        })
      );
      setPokemon(detailedPokemon);
    }
    fetchPokemon();
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-background">
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
            href="#"
            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/80"
            prefetch={false}
          >
            <LayoutGridIcon className="w-4 h-4" />
            <span>All Pokémon</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <FlameIcon className="w-4 h-4" />
            <span>Fire</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <GlassWaterIcon className="w-4 h-4" />
            <span>Water</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <LeafIcon className="w-4 h-4" />
            <span>Grass</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <PowerIcon className="w-4 h-4" />
            <span>Electric</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <BugIcon className="w-4 h-4" />
            <span>Bug</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pokemon.map((p) => (
            <Card key={p.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Pokémon</span>
              </Link>
              <div className="flex items-center justify-center bg-muted/40 p-6">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                  alt={p.name}
                  width={200}
                  height={200}
                  className="w-full max-w-[150px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                  style={{ aspectRatio: "200/200", objectFit: "contain" }}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold capitalize">{p.name}</h2>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    {getTypeIcon(p.types[0].type.name)}
                    <span>{p.types[0].type.name}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium">HP:</span> {p.stats.find(s => s.stat.name === 'hp')?.base_stat}
                  </div>
                  <div>
                    <span className="font-medium">Attack:</span> {p.stats.find(s => s.stat.name === 'attack')?.base_stat}
                  </div>
                  <div>
                    <span className="font-medium">Defense:</span> {p.stats.find(s => s.stat.name === 'defense')?.base_stat}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'fire':
      return <FlameIcon className="w-4 h-4" />;
    case 'water':
      return <GlassWaterIcon className="w-4 h-4" />;
    case 'grass':
      return <LeafIcon className="w-4 h-4" />;
    case 'electric':
      return <PowerIcon className="w-4 h-4" />;
    case 'bug':
      return <BugIcon className="w-4 h-4" />;
    default:
      return <LayoutGridIcon className="w-4 h-4" />;
  }
}

function BugIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  )
}


function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function GlassWaterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  )
}


function LayoutGridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function PowerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
