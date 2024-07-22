import Logo from "app/assets/images/logo.png";
import Background from "app/assets/images/home_background.jpg";
import BookingVideo from "app/assets/images/booking-video.jpg";
import FormCustom from "~/component/formCustom";

export default function Booking() {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex flex-col items-center container font-medium">
          <img src={Logo} alt="Logo" className="mb-8 mt-4 w-64" />
          <p className="relative z-10 top-[50px]">Guarda il video e scopri come partecipare al contest!</p>
          <img src={BookingVideo} alt="Logo" className="max-w-[960px] rounded-xl mx-auto mb-10" />
          <p>Inserisci i tuoi dati, carica il video del tuo pezzo e partecipa al contest!</p>
        </div>
        <FormCustom />
      </div>
    </div>
  );
}
