"use client";
import Image from "next/image";
import GodhomeIoLogo from "@/assets/images/godhome-io-logo.png";
import BossesData from "@/assets/json/bosses_data.json";
import { useEffect, useState } from "react";

interface BossData {
  name: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [bossesData, setBossesData] = useState<BossData[]>([]);

  useEffect(() => {
    const filteredBossesData = BossesData.filter((e) =>
      e.name.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim())
    );

    setBossesData(filteredBossesData);
  }, [query]);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        src={GodhomeIoLogo}
        alt="Godhome.io logo"
        title="Logo generated by HOLLOW KNIGHT TITLE GENERATOR [https://prashantmohta.github.io/TitleGenerator.HollowKnight]"
        width={400}
        className="mt-24 mb-12"
      />
      <div className="text-neutral-200">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Guess a boss"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="p-2 w-[40rem] rounded bg-transparent border border-neutral-600"
          />
          <button className="bg-stone-900 px-4 rounded">Guess</button>
        </div>
        {query.length > 0 && (
          <ul className="flex flex-col h-[12rem] rounded-es overflow-y-auto queries-scroll">
            {bossesData.map((e, i) => (
              <li
                key={i}
                className="bg-neutral-950 p-3 w-full cursor-pointer hover:bg-neutral-900"
                onClick={() => setQuery(e.name)}
              >
                {e.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
