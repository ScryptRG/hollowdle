import Image from "next/image";
import styles from "./guesses.module.css";

export default function Guesses() {
  return (
    <div className={`relative flex gap-6 justify-center mt-24 text-white`}>
      <Image
        src={require("@/assets/images/fleur-guesses.gif")}
        alt=""
        className="absolute -top-8 left-0 z-10"
      />
      {Array(5)
        .fill("")
        .map((e, i) => (
          <div
            key={i}
            className={`${
              styles[`guessesItem-${i + 1}`]
            } flex flex-col items-center gap-2 bg-red-700 bg-opacity-30 p-2 rounded-xl text-center`}
          >
            <Image
              src={require("@/assets/images/enemies-portrait/Mantis Lords - bestiary_mantis_lords_s.png")}
              alt=""
            />
            <h1 className={styles.guessDesc}>Mantis Lords</h1>
          </div>
        ))}
    </div>
  );
}
