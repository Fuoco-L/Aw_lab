/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useReservationContext } from "~/context/ReservationContext";
import DatePickerCustom from "./DatePickerCustom";
import { reservationData } from "~/utils";
import InputCheckbox from "./checkboxCustom";
import Footer from "./footer";
import InputSelect from "./inputSelect";

export default function FormVanReservation() {
  const {
    name,
    dateOfBirth,
    email,
    phone,
    cityOfPerformance,
    numberOfPeopleInBand,
    performanceTime,
    terms,
    disclaimer,
    setName,
    setDateOfBirth,
    setEmail,
    setPhone,
    setCityOfPerformance,
    setNumberOfPeopleInBand,
    setPerformanceTime,
    setTerms,
    setDisclaimer,
  } = useReservationContext();

  return (
    <div>
      <div className="w-full text-primary-blue flex flex-col justify-center items-center mt-12">
        <div className="grid grid-cols-2 gap-4 max-w-[960px] w-full mx-auto mb-4 text-primary-blue">
          <input
            type="text"
            className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
            placeholder="Nome e Cognome"
            onChange={(e) => setName(e.target.value)}
          />

          <DatePickerCustom setDateOfBirth={(value: Date) => setDateOfBirth(value)} />

          <input
            type="email"
            className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
            placeholder="Indirizzo e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2"
            placeholder="Numero di telefono"
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2 text-primary-blue"
            value={cityOfPerformance}
            onChange={(e) => setCityOfPerformance(e.target.value)}
          >
            <option value="Milano">Milano</option>
            <option value="Roma">Roma</option>
            <option value="Napoli">Napoli</option>
            <option value="Bari">Bari</option>
          </select>

          <select
            className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2 text-primary-blue"
            value={performanceTime}
            onChange={(e) => setPerformanceTime(e.target.value)}
          >
            <option value="15:00">15:00 - 15:30</option>
            <option value="15:30">15:30 - 16:00</option>
            <option value="16:00">16:00 - 16:30</option>
            <option value="16:30">16:30 - 17:00</option>
            <option value="17:00">17:00 - 17:30</option>
            <option value="17:30">17:30 - 18:00</option>
            <option value="18:00">18:00 - 18:30</option>
            <option value="18:30">18:30 - 19:00</option>
            <option value="19:00">19:00 - 19:30</option>
            <option value="19:30">19:30 - 20:00</option>
            <option value="20:00">20:00 - 20:30</option>
            <option value="20:30">20:30 - 21:00</option>
            <option value="21:00">21:00 - 21:30</option>
            <option value="21:30">21:30 - 22:00</option>
            <option value="22:00">22:00 - 22:30</option>
            <option value="22:30">22:30 - 23:00</option>
            <option value="23:00">23:00 - 23:30</option>
            <option value="23:30">23:30 - 00:00</option>
          </select>
        </div>

        <div className="w-full max-w-[480px] mb-12">
          <InputSelect
            type="numbeOfArtist"
            typeOfArtist={undefined}
            numberOfArtist={numberOfPeopleInBand}
            setNumberOfArtist={setNumberOfPeopleInBand}
          />
        </div>

        <div className="mb-4 font-semibold ">
          <InputCheckbox
            checked={terms}
            label="Accetto i termini di cui al regolamento e prendo visione e accetto l’informativa privacy ivi contenuta;"
            onChange={(value) => setTerms(value)}
          />
        </div>

        <div className="mb-4 font-semibold">
          <InputCheckbox
            checked={disclaimer}
            label="Accetto il disclaimer relativo all’assunzione di responsabilità riguardo i contenuti caricati."
            onChange={(value) => setDisclaimer(value)}
          />
        </div>

        <div
          className="button-gradient cursor-pointer max-w-96 mx-auto text-center my-12 w-80"
          onClick={() =>
            reservationData({
              name,
              dateOfBirth,
              email,
              phone,
              cityOfPerformance,
              numberOfPeopleInBand,
              performanceTime,
              terms,
              disclaimer,
            })
          }
        >
          Prenota la tua session
        </div>
      </div>
      <Footer />
    </div>
  );
}

//(e) => handleInputChange("firstName", e.target.value)
