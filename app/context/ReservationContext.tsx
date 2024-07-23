import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ReservationContextProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  dateOfBirth: Date | null;
  setDateOfBirth: Dispatch<SetStateAction<Date | null>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  cityOfPerformance: string;
  setCityOfPerformance: Dispatch<SetStateAction<string>>;
  numberOfPeopleInBand: number;
  setNumberOfPeopleInBand: Dispatch<SetStateAction<number>>;
  performanceTime: string;
  setPerformanceTime: Dispatch<SetStateAction<string>>;
  terms: boolean;
  setTerms: Dispatch<SetStateAction<boolean>>;
  disclaimer: boolean;
  setDisclaimer: Dispatch<SetStateAction<boolean>>;
}

const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cityOfPerformance, setCityOfPerformance] = useState<string>("");
  const [numberOfPeopleInBand, setNumberOfPeopleInBand] = useState<number>(1);
  const [performanceTime, setPerformanceTime] = useState<string>("");
  const [terms, setTerms] = useState<boolean>(false);
  const [disclaimer, setDisclaimer] = useState<boolean>(false);

  return (
    <ReservationContext.Provider
      value={{
        name,
        setName,
        dateOfBirth,
        setDateOfBirth,
        email,
        setEmail,
        phone,
        setPhone,
        cityOfPerformance,
        setCityOfPerformance,
        numberOfPeopleInBand,
        setNumberOfPeopleInBand,
        performanceTime,
        setPerformanceTime,
        terms,
        setTerms,
        disclaimer,
        setDisclaimer,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservationContext must be used within a ReservationProvider");
  }
  return context;
};
