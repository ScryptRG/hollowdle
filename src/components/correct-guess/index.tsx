import Image from "next/image";
import styles from "./style.module.css";

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
}

export default function CorrectGuess(props: CorrectGuessProps) {
  const { chosenCharacter } = props;
  return (
    <div
      className={`${styles.correct} ${styles.trajan} flex flex-col items-center gap-6`}
    >
      <h1 className="text-white text-3xl">{chosenCharacter.name}</h1>
      <Image
        src={require(`../../assets/images/icons/characters/${chosenCharacter.characterIcon}`)}
        alt=""
        height={150}
      />
      <h2 className={`${styles.trajan} font-bold text-green-600 text-3xl`}>
        YOU GUESSED IT CORRECTLY!
      </h2>
      <button className="flex gap-5 cursor-[url('../assets/images/cursor.png'),_auto] group">
        <Image
          src={require(`../../assets/images/icons/main_menu_pointer_anim0008.png`)}
          alt=""
          height={30}
          className="hidden group-hover:block"
        />
        <span className={`${styles.trajan} text-xl text-white`}>
          PLAY AGAIN
        </span>
        <Image
          src={require(`../../assets/images/icons/main_menu_pointer_anim0008.png`)}
          alt=""
          height={30}
          className="hidden rotate-180 group-hover:block"
        />
      </button>
    </div>
  );
}
