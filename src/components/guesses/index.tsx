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
      desc: hints.name,
    },
    {
      title: "Geo Drop",
      icon: "geo.png",
      desc: hints.name,
    },
    {
      title: "Gender",
      icon: "gender.png",
      desc: hints.name,
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Remove the class
    setAnimate(false);

    // Force a reflow to restart the animation
    const element = document.getElementById("animatable");
    if (element) {
      void element.offsetWidth;
    }

    // Re-add the class
    setAnimate(true);
  });

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
        <div className="flex flex-col gap-2 items-center" key={i}>
          <h1 className="font-['Trajan'] text-xl">{e.title}</h1>
          <div
            id="animatable"
            className={`${
              index === 0 && (animate ? styles["guessesItem"] : "")
            } group ${styles.guessCard}`}
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
