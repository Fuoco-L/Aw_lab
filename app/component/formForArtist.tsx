import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerCustom from "./DatePickerCustom";

interface Artist {
  firstName: string;
  lastName: string;
  eMail: string;
  telephone: string;
  dateOfBirth: Date | null;
}

export default function ArtistForm() {
  const [artist, setArtist] = useState<Artist>({
    firstName: "",
    lastName: "",
    eMail: "",
    telephone: "",
    dateOfBirth: new Date(),
  });

  const handleInputChange = (field: keyof Artist, value: string | Date | null) => {
    setArtist((prevState) => ({ ...prevState, [field]: value }));
  };

  console.log(artist);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 max-w-[960px] w-full mx-auto mb-4 text-primary-blue">
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md"
          placeholder="Nome componente"
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md"
          placeholder="Cognome componente"
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        <input
          type="email"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md"
          placeholder="Indirizzo e-mail"
          onChange={(e) => handleInputChange("eMail", e.target.value)}
        />

        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md"
          placeholder="Numero di telefono"
          onChange={(e) => handleInputChange("telephone", e.target.value)}
        />
        <DatePickerCustom />
      </div>
      <div className="w-full border-2 border-white my-8" />
    </div>
  );
}

//<InputSelect type="placeOfBirth" setCountryOfArtist={setCountryOfArtist} />
