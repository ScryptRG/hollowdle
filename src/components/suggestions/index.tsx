"use client";
import Image from "next/image";
import { useState } from "react";

interface BossData {
  name: string;
  portrait: string;
}

interface SuggestionsProps {
  bossesData: BossData[];
  setQuery: (value: string) => void;
  setSuggestionsBox: (value: boolean) => void;
}

export default function Suggestions(props: SuggestionsProps) {
  const { bossesData, setQuery, setSuggestionsBox } = props;
  return (
    <ul className="absolute w-full top-12 flex flex-col h-[12rem] rounded-es overflow-y-auto queries-scroll">
      {bossesData.map((e, i) => (
        <li
          key={i}
          className="flex items-center gap-4 bg-stone-900 p-3 w-full cursor-pointer hover:bg-stone-800"
          onClick={() => {
            setQuery(e.name);
            setSuggestionsBox(false);
          }}
        >
          <Image
            src={require(`./../../assets/images/enemies-portrait/${e.portrait}`)}
            width={40}
            alt=""
          />
          {e.name}
        </li>
      ))}
    </ul>
  );
}
