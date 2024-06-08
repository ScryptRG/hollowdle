"use client";
import Image from "next/image";
import styles from "./style.module.css";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useEffect, useState } from "react";
import CorrectHints from "../correct-hints";

interface CharactersDataInterface {
  name: string;
  characterIcon: string;
  location: string;
  locationIcon: string;
  health: number;
  geo_drop: number;
  gender: string;
}
interface CorrectGuessProps {
  chosenCharacter: CharactersDataInterface;
  CharactersData: CharactersDataInterface[];
  setChosenCharacter: (value: CharactersDataInterface) => void;
  setCorrectGuess: (value: boolean) => void;
  setHints: (value: CharactersDataInterface[]) => void;
}

export default function CorrectGuess(props: CorrectGuessProps) {
  const {
    chosenCharacter,
    CharactersData,
    setCorrectGuess,
    setChosenCharacter,
    setHints,
  } = props;

  useEffect(() => {}, []);
  return (
    <>
      <Fireworks autorun={{ speed: 3, duration: 1500 }} />
      <div
        className={`${styles.correct} ${styles.trajan} flex flex-col items-center gap-6`}
      >
        <h1 className="text-white text-3xl">{chosenCharacter.name}</h1>
        <Image
          src={require(`../../assets/images/icons/characters/${chosenCharacter.characterIcon}`)}
          alt={`${chosenCharacter.name} icon`}
          height={120}
        />
        <h2 className={`${styles.trajan} font-bold text-green-600 text-3xl`}>
          YOU GUESSED IT CORRECTLY!
        </h2>
        <button
          onClick={() => {
            setHints([]);
            setChosenCharacter(
              CharactersData[Math.floor(Math.random() * CharactersData.length)]
            );
            setCorrectGuess(false);
          }}
          className="relative cursor-[url('../assets/images/cursor.png'),_auto] group"
        >
          <Image
            src={require(`../../assets/images/icons/main_menu_pointer_anim0008.png`)}
            alt="Menu pointer"
            height={30}
            className="absolute hidden group-hover:block -left-14 -top-[2px]"
          />
          <span className={`${styles.trajan} text-xl text-white`}>
            PLAY AGAIN
          </span>
          <Image
            src={require(`../../assets/images/icons/main_menu_pointer_anim0008.png`)}
            alt="Menu pointer"
            height={30}
            className="absolute hidden rotate-180 group-hover:block -right-14 -top-[2px]"
          />
        </button>
        <CorrectHints chosenCharacter={chosenCharacter} />
      </div>
    </>
  );
}
