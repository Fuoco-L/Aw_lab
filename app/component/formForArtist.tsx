import "react-datepicker/dist/react-datepicker.css";
import DatePickerCustom from "./DatePickerCustom";
import InputSelect from "./inputSelect";
import { SubscribedComponent, useArtistContext } from "~/context/ArtistContext";

interface ArtistFormProps {
  index: number;
}

export default function ArtistForm({ index }: ArtistFormProps) {
  const { setSubscribedComponent } = useArtistContext();

  const handleInputChange = (field: keyof SubscribedComponent, value: string | Date | null) => {
    setSubscribedComponent((prevState) => {
      const updatedComponents = [...prevState];
      updatedComponents[index] = { ...updatedComponents[index], [field]: value };
      return updatedComponents;
    });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 max-w-[960px] w-full mx-auto mb-4 text-primary-blue">
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
          placeholder="Nome componente"
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
          placeholder="Cognome componente"
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        <input
          type="email"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
          placeholder="Indirizzo e-mail"
          onChange={(e) => handleInputChange("eMail", e.target.value)}
        />
        <input
          type="text"
          className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
          placeholder="Numero di telefono"
          onChange={(e) => handleInputChange("telephone", e.target.value)}
        />
        <InputSelect type="placeOfBirth" setCountryOfArtist={(value: string) => handleInputChange("country", value)} />
        <DatePickerCustom setDateOfBirth={(value: Date) => handleInputChange("dateOfBirth", value)} />
      </div>
      <div className="w-full border-2 border-white my-8" />
    </div>
  );
}
