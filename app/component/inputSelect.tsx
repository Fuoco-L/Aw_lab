import { Dispatch, SetStateAction } from "react";

interface InputSelectProps {
  type: "typeOfArtist" | "numbeOfArtist" | "placeOfBirth";
  typeOfArtist: "Singolo" | "Band";
  numberOfArtist: number;
  setTypeOfArtist?: Dispatch<SetStateAction<"Singolo" | "Band">>;
  setNumberOfArtist?: Dispatch<SetStateAction<number>>;
}

export default function InputSelect({
  type,
  setNumberOfArtist,
  setTypeOfArtist,
  typeOfArtist,
  numberOfArtist,
}: InputSelectProps) {
  const handleTypeOfArtistChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (setTypeOfArtist && setNumberOfArtist) {
      const value = event.target.value;
      setTypeOfArtist(value as "Singolo" | "Band");
      if (value === "Singolo") setNumberOfArtist(1);
      else setNumberOfArtist(2);
    }
  };

  const handleNumberOfArtistChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (setNumberOfArtist) {
      const value = parseInt(event.target.value);
      setNumberOfArtist(value);
    }
  };

  return (
    <>
      {type === "typeOfArtist" && (
        <select
          className="w-full py-3 px-6 bg-white rounded-full shadow-md text-primary-blue"
          onChange={handleTypeOfArtistChange}
        >
          <option value="Singolo">Singolo</option>
          <option value="Band">Band</option>
        </select>
      )}
      {type === "numbeOfArtist" && (
        <select
          className="w-full py-3 px-6 bg-white rounded-full shadow-md text-primary-blue"
          onChange={handleNumberOfArtistChange}
          value={numberOfArtist}
        >
          {typeOfArtist === "Singolo" && <option value={"1"}>1</option>}
          {typeOfArtist === "Band" && <option value={"2"}>2</option>}
          {typeOfArtist === "Band" && <option value={"3"}>3</option>}
        </select>
      )}
      {type === "placeOfBirth" && (
        <select className="w-full py-3 px-6 bg-white rounded-full shadow-md text-primary-blue">
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
          <option value="city3">City 3</option>
        </select>
      )}
    </>
  );
}