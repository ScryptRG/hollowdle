"use client";
import Image from "next/image";
import styles from "./guesses.module.css";
import "animate.css";
import { useEffect, useState } from "react";

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

interface ConfirmHints {
  desc: string | number;
}

export default function Guesses(props: GuessesProps) {
  const { hints, index, guesses } = props;

  const guessItems = [
    {
      title: "Character",
      icon: `characters/${hints.characterIcon}`,
      desc: hints.name,
    },
    {
      title: "Location",
      icon: `locations/${hints.locationIcon}`,
      desc: hints.location,
    },
    {
      title: "Health",
      icon: "health.png",
      desc: hints.health,
    },
    {
      title: "Geo Drop",
      icon: "geo.png",
      desc: hints.geo_drop,
    },
    {
      title: "Gender",
      icon: "gender.png",
      desc: hints.gender,
    },
  ];

  const gameCharacter = {
    name: "Soul Master",
    characterIcon: "Soul Master - bestiary_mage_lord_s.png",
    location: "City of Tears",
    locationIcon: "city-of-tears.png",
    health: 385,
    geo_drop: 380,
    gender: "Male",
  };

  const confirm = (i: number, e: ConfirmHints) => {
    switch (i) {
      case 1:
        if (e.desc === gameCharacter.location) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      case 2:
        if (e.desc === gameCharacter.health) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      case 3:
        if (e.desc === gameCharacter.geo_drop) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      case 4:
        if (e.desc === gameCharacter.gender) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      default:
        break;
    }
  };

  return (
    <div
      className={`relative flex flex-wrap gap-8 justify-center mt-24 text-white`}
    >
      <Image
        src={require("@/assets/images/fleur-guesses.gif")}
        alt=""
        className="absolute -top-8 -left-6 z-10"
      />
      {guessItems.map((e, i) => (
        <div
          className={`flex flex-col gap-2 items-center ${
            styles[confirm(i, e)] ?? null
          }`}
          key={i}
        >
          <h1 className="font-['Trajan'] text-xl">{e.title}</h1>
          <div
            className={`group ${index === 0 && styles[`hintItem-${i + 1}`]} ${
              styles.hintCard
            }`}
          >
            <Image
              src={require(`../../assets/images/icons/${e.icon}`)}
              alt=""
              height={70}
              className="group-hover:-translate-y-1 duration-200"
            />
            <h1 className={styles.guessDesc}>{e.desc}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
