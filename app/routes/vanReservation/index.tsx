/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import Logo from "app/assets/images/logo.png";
import Reservation from "app/assets/images/van-reservation.jpg";
import PlayWithMusic from "app/assets/images/play-with-music.png";
import FormVanReservation from "~/component/formVanReservation";
import { useNavigate } from "@remix-run/react";

export default function VanReservation() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `linear-gradient(249.26deg, rgba(9, 97, 168, 0.6) 0%, rgba(165, 209, 215, 0.6) 100%), url(${Reservation})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col items-center container font-medium">
          <img src={Logo} alt="Logo" className="mb-8 mt-4 w-64" />
          <p className="max-w-[700px] text-center mb-6">Vuoi registrare il tuo video dal vivo? Hai due opzioni:</p>
          <p className="max-w-[700px] text-center mb-8">
            a Milano, durante l'AW LAB Festival del 14 settembre presso il Giardino Ventura, sarà disponibile una recording room
            dove potrai registrare il tuo brano. Nelle altre città italiane, cerca il nostro van personalizzato che fungerà da
            punto di registrazione mobile.
          </p>

          <div className="flex flex-row  mb-20">
            <div className="button-white mr-5 cursor-pointer">Milano - 14 Settembre</div>
            <div className="button-white mr-5 cursor-pointer">Roma - 5 Ottobre</div>
            <div className="button-white mr-5 cursor-pointer">Napoli - 12 Ottobre</div>
            <div className="button-white mr-5 cursor-pointer">Bari - 19 Ottobre</div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <img src={PlayWithMusic} alt="Logo" className="w-1/3" />
            <div className="flex items-end py-4">
              <div className="button-white mr-14  cursor-pointer" onClick={() => navigate("/booking")}>
                Iscriviti subito
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormVanReservation />
    </div>
  );
}
