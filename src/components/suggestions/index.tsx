"use client";
import Image from "next/image";
import { useState } from "react";

interface CharactersDataInterface {
  name: string;
  characterIcon: string;
  location: string;
  locationIcon: string;
  health: number;
  geo_drop: number;
  gender: string;
}

interface SuggestionsProps {
  charactersData: CharactersDataInterface[];
  setQuery: (value: string) => void;
  setSuggestionsBox: (value: boolean) => void;
}

export default function Suggestions(props: SuggestionsProps) {
  const { charactersData, setQuery, setSuggestionsBox } = props;
  return (
    <ul className="absolute w-full top-11 flex flex-col max-h-[12rem] bg-stone-800 bg-opacity-30 rounded-es-md overflow-y-auto queries-scroll backdrop-blur-lg z-20">
      <>
        {charactersData.map((e, i) => (
          <li
            key={i}
            className={`flex items-center gap-4 border-b border-stone-600 p-3 w-full cursor-pointer hover:bg-stone-950 ${
              i === charactersData.length - 1 && "!border-none"
            }`}
            onClick={() => {
              setQuery(e.name);
              setSuggestionsBox(false);
            }}
          >
            <Image
              src={require(`./../../assets/images/icons/characters/${e.characterIcon}`)}
              width={30}
              alt={`${e.name} icon`}
            />
            {e.name}
          </li>
        ))}
        {charactersData.length < 1 && <p className="p-4">No results found</p>}
      </>
    </ul>
  );
}
