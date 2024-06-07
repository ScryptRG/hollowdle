"use client";
import Image from "next/image";
import styles from "./guesses.module.css";
import CharactersData from "@/assets/json/characters_data.json";
import "animate.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
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
  guesses: CharactersDataInterface[];
  chosenCharacter: CharactersDataInterface;
}

interface ConfirmHints {
  desc: string | number;
}

export default function Guesses(props: GuessesProps) {
  const { hints, chosenCharacter } = props;

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

  // const gameCharacter = {
  //   name: "Soul Master",
  //   characterIcon: "Soul Master - bestiary_mage_lord_s.png",
  //   location: "City of Tears",
  //   locationIcon: "city-of-tears.png",
  //   health: 385,
  //   geo_drop: 380,
  //   gender: "Male",
  // };

  type ConfirmResult = "rightItem" | "wrongItem" | "";

  const confirm = (i: number, e: ConfirmHints): ConfirmResult => {
    switch (i) {
      case 1:
        if (e.desc === chosenCharacter.location) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      case 2:
        if (e.desc === chosenCharacter.health) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      case 3:
        if (e.desc === chosenCharacter.geo_drop) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      case 4:
        if (e.desc === chosenCharacter.gender) {
          return "rightItem";
        } else {
          return "wrongItem";
        }
      case 0:
        return "";
      default:
        throw new Error("Invalid case");
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
        <div className={`flex flex-col gap-2 items-center`} key={i}>
          <h1 className="font-['Trajan'] text-xl">{e.title}</h1>
          <div
            className={`group ${styles[`hintItem-${i + 1}`]} ${
              styles.hintCard
            } ${styles[confirm(i, e)] ?? null}`}
          >
            <Image
              src={require(`../../assets/images/icons/${e.icon}`)}
              alt=""
              height={70}
              className="group-hover:-translate-y-1 duration-200"
            />
            <h1 className={styles.guessDesc}>
              {e.desc}
              {i === 2 &&
                Number(e.desc) != chosenCharacter.health &&
                (Number(e.desc) < chosenCharacter.health ? (
                  <MdOutlineArrowRightAlt
                    size={25}
                    className={styles.arrowUp}
                  />
                ) : (
                  <MdOutlineArrowRightAlt
                    size={25}
                    className={styles.arrowDown}
                  />
                ))}
              {i === 3 &&
                Number(e.desc) != chosenCharacter.geo_drop &&
                (Number(e.desc) < chosenCharacter.geo_drop ? (
                  <MdOutlineArrowRightAlt
                    size={25}
                    className={styles.arrowUp}
                  />
                ) : (
                  <MdOutlineArrowRightAlt
                    size={25}
                    className={styles.arrowDown}
                  />
                ))}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
