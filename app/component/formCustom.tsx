import { useState } from "react";
import InputSelect from "./inputSelect";
import Uploader from "./uploaderVideo";
import InputCheckbox from "./checkboxCustom";
import FormArtist from "./formForArtist";

export default function FormCustom() {
  const [numberOfArtist, setNumberOfArtist] = useState<number>(1);
  const [typeOfArtist, setTypeOfArtist] = useState<"Singolo" | "Band">("Singolo");
  const [nameOfArtist, setNameOfArtist] = useState<string>("");
  const [nameOfSong, setNameOfSong] = useState<string>("");

  console.log(numberOfArtist, typeOfArtist, nameOfArtist, nameOfSong);

  const artistArray = Array.from({ length: numberOfArtist }, (_, index) => index + 1);

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-4 max-w-[960px] w-full mb-4 text-primary-blue">
        <InputSelect
          type="typeOfArtist"
          typeOfArtist={typeOfArtist}
          numberOfArtist={numberOfArtist}
          setTypeOfArtist={setTypeOfArtist}
          setNumberOfArtist={setNumberOfArtist}
        />
        <InputSelect
          type="numbeOfArtist"
          typeOfArtist={typeOfArtist}
          numberOfArtist={numberOfArtist}
          setNumberOfArtist={setNumberOfArtist}
        />
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md"
          placeholder="Nome cantante/band"
          onChange={(e) => setNameOfArtist(e.target.value)}
        />
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md"
          placeholder="Titolo del brano"
          onChange={(e) => setNameOfSong(e.target.value)}
        />
      </div>

      <Uploader />

      <div className="max-w-[480px] mb-8">
        <p>Un solo video contenente un brano: MOV, MP4, peso max:10mb, durata max: 04:00</p>
      </div>

      {artistArray.map((artist) => (
        <FormArtist key={artist} />
      ))}

      <div className="mb-4">
        <InputCheckbox
          checked
          label="Accetto i termini di cui al regolamento e prendo visione e accetto l’informativa privacy ivi contenuta;"
          onChange={() => ""}
        />
      </div>

      <InputCheckbox
        checked
        label="Accetto il disclaimer relativo all’assunzione di responsabilità riguardo i contenuti caricati."
        onChange={() => ""}
      />
    </div>
  );
}
