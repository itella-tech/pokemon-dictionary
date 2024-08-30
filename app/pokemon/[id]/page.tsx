"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card } from "@/components/ui/card"

interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchPokemonDetail() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemonDetail();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <button 
        onClick={() => router.back()} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        戻る
      </button>
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            width={300}
            height={300}
            className="w-full max-w-[300px]"
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h1>
            <p className="mb-2">タイプ: {pokemon.types.map(t => t.type.name).join(', ')}</p>
            <p className="mb-2">身長: {pokemon.height / 10}m</p>
            <p className="mb-2">体重: {pokemon.weight / 10}kg</p>
            <p className="mb-2">能力: {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
            <h2 className="text-xl font-semibold mt-4 mb-2">ステータス</h2>
            {pokemon.stats.map(stat => (
              <div key={stat.stat.name} className="mb-2">
                <span className="font-medium capitalize">{stat.stat.name}:</span> {stat.base_stat}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}