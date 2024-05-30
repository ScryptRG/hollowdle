"use client";
import Image from "next/image";
import styles from "./guesses.module.css";
import "animate.css";
import { useState } from "react";

export default function Guesses() {
  const [hints, setHints] = useState([
    {
      title: "Boss",
      name: "Mantis Lords",
      icon: "enemies-portrait/Mantis Lords - bestiary_mantis_lords_s.png",
      location: "Fungal Wastes",
    },
    {
      title: "Location",
      name: "Fungal Wastes",
      icon: "icons/locations/fungal-wastes.png",
    },
  ]);

  return (
    <div
      className={`relative flex flex-wrap gap-6 justify-center mt-24 text-white`}
    >
      <Image
        src={require("@/assets/images/fleur-guesses.gif")}
        alt=""
        className="absolute -top-8 left-0 z-10"
      />
      {hints.map((e, i) => (
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl">{e.title}</h1>
          <div
            key={i}
            className={`${styles[`guessesItem-${i + 1}`]} 
            ${i === 0 && "!border-transparent bg-transparent"}
            flex flex-col items-center gap-2 border border-red-800 bg-red-700 bg-opacity-20 p-2 rounded-xl text-center`}
          >
            <Image
              src={require(`../../assets/images/${e.icon}`)}
              alt=""
              width={85}
            />
            <h1 className={styles.guessDesc}>{e.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
