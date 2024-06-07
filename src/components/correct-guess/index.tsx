import Image from "next/image";
import styles from "./style.module.css";

export default function CorrectGuess() {
  const gameCharacter = {
    name: "Soul Master",
    characterIcon: "Soul Master - bestiary_mage_lord_s.png",
    location: "City of Tears",
    locationIcon: "city-of-tears.png",
    health: 385,
    geo_drop: 380,
    gender: "Male",
  };

  return (
    <div>
      <Image
        src={require(`../../assets/images/icons/characters/${gameCharacter.characterIcon}`)}
        alt=""
        height={150}
        className="mx-auto mt-12"
      />
      <h1 className="text-white">{gameCharacter.name}</h1>
      <h2 className={`${styles.correctText} text-green-600 text-4xl`}>
        YOU GUESSED IT CORRECTLY!
      </h2>
    </div>
  );
}
