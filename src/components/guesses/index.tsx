"use client";
import Image from "next/image";
import styles from "./guesses.module.css";
import "animate.css";
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
interface GuessesProps {
  hints: CharactersDataInterface;
  index: number;
  guesses: CharactersDataInterface[];
}

export default function Guesses(props: GuessesProps) {
  const { hints, index, guesses } = props;
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
          className={`${index === 0 && styles["guessesItem-1"]} group ${
            styles.guessCard
          }`}
        >
          <Image
            src={require(`../../assets/images/icons/characters/${hints.characterIcon}`)}
            alt=""
            height={70}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>{hints.name}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Location</h1>
        <div
          className={`${index === 0 && styles["guessesItem-2"]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/locations/${hints.locationIcon}`)}
            alt=""
            height={50}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>{hints.location}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Health</h1>
        <div
          className={`${index === 0 && styles["guessesItem-3"]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/health.png`)}
            alt=""
            height={70}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>{hints.health}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Geo Drop</h1>
        <div
          className={`${index === 0 && styles["guessesItem-4"]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/geo.png`)}
            alt=""
            height={70}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>{hints.geo_drop}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-['Trajan'] text-xl">Gender</h1>
        <div
          className={`${index === 0 && styles["guessesItem-5"]} 
            border border-red-800 bg-red-700 bg-opacity-15 group hover:bg-opacity-20
            ${styles.guessCard}
            `}
        >
          <Image
            src={require(`../../assets/images/icons/gender.png`)}
            alt=""
            height={70}
            className="group-hover:-translate-y-1 duration-200"
          />
          <h1 className={styles.guessDesc}>{hints.gender}</h1>
        </div>
      </div>
    </div>
  );
}
