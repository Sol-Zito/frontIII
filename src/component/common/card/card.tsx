import { Character } from "@/interface/character";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardPops {
  character: Character;
}

export default function Card({ character }: CardPops) {
  return (
    <div
      key={character.tail}
      className="col-span-1 border border-gray-700 p-2 rounded-xl"
    >
      <p>{character.name}</p>
      <div>
        <Image
          src={character.image}
          alt={character.name}
          width={200}
          height={200}
          priority
          className="aspect-square object-contain"
        />
      </div>
      <Link
        className="underline text-gray-600"
        href={`/character/${character.tail}`}
      >
        Ver más
      </Link>
    </div>
  );
}
