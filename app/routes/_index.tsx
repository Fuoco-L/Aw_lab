import Logo from "app/assets/images/logo.png";
import Background from "app/assets/images/home_background.jpg";
import AaronJames from "app/assets/images/aaron-james.jpg";
import BgMusic from "app/assets/images/bg-music.jpg";
import AaronJames2 from "app/assets/images/aaron-james-2.jpg";
import PlayWithMusic from "app/assets/images/play-with-music.png";
import Footer from "~/component/footer";
import { useNavigate } from "@remix-run/react";

export default function Homepage() {
  const navigate = useNavigate();

  function handleNavigate(to: "booking" | "reservation") {
    if (to === "booking") navigate("/booking");
    else navigate("vanReservation");
  }
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
        <div className="flex flex-col items-center container">
          <img src={Logo} alt="Logo" className="mb-8 mt-4 w-64" />
          <div className="w-7/12 text-center mb-20">
            <p className="mb-8">
              <b>AW LAB</b> presenta la seconda edizione di <b>PLAY WITH MUSIC</b>, il concorso che scopre giovani artisti
              emergenti della scena musicale italiana. Con <b>Ditonellapiaga</b> come ambassador ufficiale e adidas come main
              partner, è il momento di liberare il tuo talento!
            </p>
            <p>
              Dal 19 agosto al 30 ottobre carica il <b>video</b> sulla nostra piattaforma ufficiale oppure{" "}
              <b>prenota una sessione</b> per registrarlo dal vivo nella nostra recording room mobile ad AW LAB Festival a Milano
              e nelle città italiane
            </p>
          </div>
          <div className=" flex flex-row">
            <button className="button-white mr-14 cursor-pointer" onClick={() => handleNavigate("booking")}>
              Carica video
            </button>
            <button className="button-gradient cursor-pointer mb-64" onClick={() => handleNavigate("reservation")}>
              Prenota la tua session
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${BgMusic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <img src={AaronJames} alt="Logo" className="max-w-[860px] rounded-xl mt-12 mx-auto z-50 relative top-[-200px]" />
      </div>
      <div
        style={{
          backgroundImage: `url(${AaronJames2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <img src={PlayWithMusic} alt="Logo" className="w-1/3 absolute bottom-0" />
      </div>
      <Footer></Footer>
    </div>
  );
}
