"use client";
import Image from "next/image";
import styles from "./guesses.module.css";
import "animate.css";
import { useState } from "react";

export default function Guesses() {
  const [hints, setHints] = useState([
    {
      title: "Character",
      name: "Mantis Lords",
      icon: "enemies-portrait/Mantis Lords - bestiary_mantis_lords_s.png",
    },
    {
      title: "Location",
      name: "Crystal",
      icon: "icons/locations/fungal-wastes.png",
    },
    {
      title: "Health",
      name: "530",
      icon: "icons/health.png",
    },
    {
      title: "Geo Drop",
      name: "0",
      icon: "icons/geo.png",
    },
    {
      title: "Gender",
      name: "Female",
      icon: "icons/gender.png",
    },
  ]);

  return (
    <div
      className={`relative flex flex-wrap gap-8 justify-center mt-24 text-white`}
    >
      <Image
        src={require("@/assets/images/fleur-guesses.gif")}
        alt=""
        className="absolute -top-8 -left-6 z-10"
      />
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Character</h1>
        <div
          className={`${styles[`guessesItem-2`]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/locations/fungal-wastes.png`)}
            alt=""
            height={60}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>Fungal Wastes</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Character</h1>
        <div
          className={`${styles[`guessesItem-2`]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/locations/fungal-wastes.png`)}
            alt=""
            height={60}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>Fungal Wastes</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Character</h1>
        <div
          className={`${styles[`guessesItem-2`]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/locations/fungal-wastes.png`)}
            alt=""
            height={60}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>Fungal Wastes</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Character</h1>
        <div
          className={`${styles[`guessesItem-2`]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/locations/fungal-wastes.png`)}
            alt=""
            height={60}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>Fungal Wastes</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Character</h1>
        <div
          className={`${styles[`guessesItem-2`]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/locations/fungal-wastes.png`)}
            alt=""
            height={60}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>Fungal Wastes</h1>
        </div>
      </div>
    </div>
  );
}
