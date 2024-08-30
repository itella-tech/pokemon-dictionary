"use client"
import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { getTypeIcon } from '@/components/Icons'

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const router = useRouter();

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

  const handlePokemonClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {pokemon.map((p) => (
        <Card 
          key={p.id} 
          className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={() => handlePokemonClick(p.id)}
        >
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
  )
}
