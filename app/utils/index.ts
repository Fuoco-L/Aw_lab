import { SubscribedComponent } from "~/context/ArtistContext";

interface BookingData {
  numberOfArtist: number;
  typeOfArtist: "Singolo" | "Band";
  nameOfArtist: string;
  nameOfSong: string;
  terms: boolean;
  disclaimer: boolean;
  subscribedComponents: SubscribedComponent[];
}

interface ReservationData {
  name: string;
  dateOfBirth: Date | null;
  email: string;
  phone: string;
  cityOfPerformance: string;
  numberOfPeopleInBand: number;
  performanceTime: string;
  terms: boolean;
  disclaimer: boolean;
}

export function sendData(data: BookingData) {
  console.log(data);
}

export function reservationData(data: ReservationData) {
  console.log(data);
}
