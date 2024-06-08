"use client";
import Image from "next/image";
import HollowdleLogo from "@/assets/images/hollowdle-logo.png";
import CharactersData from "@/assets/json/characters_data.json";
import { FormEvent, Fragment, useEffect, useState } from "react";
import Suggestions from "@/components/suggestions";
import Guesses from "@/components/guesses";
import CorrectGuess from "@/components/correct-guess";

interface CharactersDataInterface {
  name: string;
  characterIcon: string;
  location: string;
  locationIcon: string;
  health: number;
  geo_drop: number;
  gender: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [correctGuess, setCorrectGuess] = useState(false);
  const [suggestionsBox, setSuggestionsBox] = useState(false);
  const [charactersData, setCharactersData] = useState<
    CharactersDataInterface[]
  >([]);
  const [chosenCharacter, setChosenCharacter] =
    useState<CharactersDataInterface>(
      CharactersData[Math.floor(Math.random() * CharactersData.length)]
    );
  const [hints, setHints] = useState<CharactersDataInterface[]>([]);
  const [alreadyTried, setAlreadyTried] = useState(false);

  useEffect(() => {
    const filteredCharactersData = CharactersData.filter((e) =>
      e.name.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim())
    );

    setCharactersData(filteredCharactersData);
  }, [query]);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    if (query != "") {
      if (hints.find((a) => a.name === data.get("characterValue"))) {
        setAlreadyTried(true);
      } else {
        const selectedCharacter = CharactersData.find(
          (a) => a.name === data.get("characterValue")
        );

        if (selectedCharacter) {
          setHints([...hints, selectedCharacter]);
        }

        if (selectedCharacter?.name === chosenCharacter.name) {
          setCorrectGuess(true);
        }
        setQuery("");
      }
    }
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center pt-6 pb-24"
      onClick={() => setSuggestionsBox(false)}
    >
      <Image
        src={HollowdleLogo}
        alt="Hollowdle logo"
        width={350}
        className="mb-12"
      />

      {correctGuess && (
        <CorrectGuess
          chosenCharacter={chosenCharacter}
          setChosenCharacter={setChosenCharacter}
          setCorrectGuess={setCorrectGuess}
          setHints={setHints}
          CharactersData={CharactersData}
        />
      )}
      {!correctGuess && (
        <>
          <form
            className="flex gap-2 text-neutral-200 px-6"
            onClick={(e) => e.stopPropagation()}
            onSubmit={formSubmit}
            autoComplete="false"
          >
            <div className="relative max-w-[40rem]">
              <input
                type="text"
                placeholder="Type a character name"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSuggestionsBox(true);
                  setAlreadyTried(false);
                }}
                name="characterValue"
                onFocus={() => setSuggestionsBox(true)}
                // autoFocus
                size={200}
                disabled={correctGuess}
                className="w-full p-2 rounded bg-transparent border border-neutral-600"
              />
              {suggestionsBox && (
                <Suggestions
                  charactersData={charactersData}
                  setQuery={setQuery}
                  setSuggestionsBox={setSuggestionsBox}
                />
              )}
            </div>
            <button className="bg-neutral-200 text-black px-4 rounded">
              Guess
            </button>
          </form>
          {alreadyTried && (
            <span className="text-red-500 -ml-[29rem] mt-2">
              You&apos;ve already tried this character.
            </span>
          )}
          <div className="flex flex-col-reverse gap-12">
            {hints.map((e, i) => (
              <Fragment key={i}>
                <Guesses
                  hints={e}
                  guesses={hints}
                  chosenCharacter={chosenCharacter}
                />
              </Fragment>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
