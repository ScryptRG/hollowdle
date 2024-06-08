"use client";
import Image from "next/image";
import styles from "./style.module.css";
import "animate.css";

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
  chosenCharacter: CharactersDataInterface;
}

export default function CorrectHints(props: GuessesProps) {
  const { chosenCharacter } = props;

  const guessItems = [
    {
      title: "Character",
      icon: `characters/${chosenCharacter.characterIcon}`,
      desc: chosenCharacter.name,
    },
    {
      title: "Location",
      icon: `locations/${chosenCharacter.locationIcon}`,
      desc: chosenCharacter.location,
    },
    {
      title: "Health",
      icon: "health.png",
      desc: chosenCharacter.health,
    },
    {
      title: "Geo Drop",
      icon: "geo.png",
      desc: chosenCharacter.geo_drop,
    },
    {
      title: "Gender",
      icon: "gender.png",
      desc: chosenCharacter.gender,
    },
  ];

  return (
    <div
      className={`relative flex flex-wrap gap-8 justify-center mt-24 text-white`}
    >
      {guessItems.map((e, i) => (
        <div className={`flex flex-col gap-2 items-center`} key={i}>
          <h1 className="font-['Trajan'] text-xl">{e.title}</h1>
          <div className={`group ${styles.hintCard} ${styles["rightItem"]}`}>
            <Image
              src={require(`../../assets/images/icons/${e.icon}`)}
              alt="Hint icon"
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
