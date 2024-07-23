/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import InputSelect from "./inputSelect";
import Uploader from "./uploaderVideo";
import InputCheckbox from "./checkboxCustom";
import { useArtistContext } from "~/context/ArtistContext";
import ArtistForm from "./formForArtist";
import { sendData } from "~/utils";

export default function FormCustom() {
  const {
    numberOfArtist,
    setNumberOfArtist,
    typeOfArtist,
    setTypeOfArtist,
    nameOfArtist,
    setNameOfArtist,
    nameOfSong,
    setNameOfSong,
    terms,
    setTerms,
    disclaimer,
    setDisclaimer,
    subscribedComponents,
  } = useArtistContext();

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
          className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
          placeholder="Nome cantante/band"
          onChange={(e) => setNameOfArtist(e.target.value)}
        />
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
          placeholder="Titolo del brano"
          onChange={(e) => setNameOfSong(e.target.value)}
        />
      </div>

      <Uploader />

      <div className="max-w-[480px] mb-8">
        <p>Un solo video contenente un brano: MOV, MP4, peso max:10mb, durata max: 04:00</p>
      </div>

      {Array.from({ length: numberOfArtist }).map((_, index) => (
        <ArtistForm key={index} index={index} />
      ))}

      <div className="mb-4">
        <InputCheckbox
          checked={terms}
          label="Accetto i termini di cui al regolamento e prendo visione e accetto l’informativa privacy ivi contenuta;"
          onChange={(value) => setTerms(value)}
        />
      </div>

      <InputCheckbox
        checked={disclaimer}
        label="Accetto il disclaimer relativo all’assunzione di responsabilità riguardo i contenuti caricati."
        onChange={(value) => setDisclaimer(value)}
      />

      <div
        className="button-gradient cursor-pointer max-w-96 mx-auto text-center mt-12 w-80"
        onClick={() =>
          sendData({ typeOfArtist, nameOfArtist, nameOfSong, numberOfArtist, subscribedComponents, terms, disclaimer })
        }
      >
        Invia candidatura
      </div>
    </div>
  );
}
