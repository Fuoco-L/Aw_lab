import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LogoWhite from "app/assets/images/logo-white.png";

export default function Footer() {
  return (
    <div className="w-full bg-primary-blue p-12 flex flex-row justify-between text-white font-medium">
      <div className="flex flex-row">
        <img src={LogoWhite} alt="Logo" className="h-10 mr-4" />
        <div className="flex flex-col mr-4">
          <p>Copyright©2024 Compar SpA </p>
          <p>Tutti i diritti riservati.</p>
        </div>
        <p>P. IVA 00362520280</p>
      </div>
      <div className="flex flex-row items-center">
        <p className="mr-4">Privacy Policy</p>
        <p className="mr-4">Cookie Policy</p>
        <FontAwesomeIcon icon={faFacebookF} className="h-6 mr-4" />
        <FontAwesomeIcon icon={faInstagram} className="h-6 mr-4" />
        <FontAwesomeIcon icon={faTiktok} className="h-6 mr-4" />
        <FontAwesomeIcon icon={faYoutube} className="h-6 mr-4" />
        <FontAwesomeIcon icon={faLinkedin} className="h-6 " />
      </div>
    </div>
  );
}
