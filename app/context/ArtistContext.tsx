import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";

export interface SubscribedComponent {
  firstName: string;
  lastName: string;
  eMail: string;
  telephone: string;
  dateOfBirth: Date | null;
  country: string;
}

export interface ArtistContextProps {
  numberOfArtist: number;
  setNumberOfArtist: Dispatch<SetStateAction<number>>;
  typeOfArtist: "Singolo" | "Band";
  setTypeOfArtist: Dispatch<SetStateAction<"Singolo" | "Band">>;
  nameOfArtist: string;
  setNameOfArtist: Dispatch<SetStateAction<string>>;
  nameOfSong: string;
  setNameOfSong: Dispatch<SetStateAction<string>>;
  terms: boolean;
  setTerms: Dispatch<SetStateAction<boolean>>;
  disclaimer: boolean;
  setDisclaimer: Dispatch<SetStateAction<boolean>>;
  subscribedComponents: SubscribedComponent[];
  setSubscribedComponent: Dispatch<SetStateAction<SubscribedComponent[]>>;
}

const ArtistContext = createContext<ArtistContextProps | undefined>(undefined);

export const ArtistProvider = ({ children }: { children: ReactNode }) => {
  const [numberOfArtist, setNumberOfArtist] = useState<number>(1);
  const [typeOfArtist, setTypeOfArtist] = useState<"Singolo" | "Band">("Singolo");
  const [nameOfArtist, setNameOfArtist] = useState<string>("");
  const [nameOfSong, setNameOfSong] = useState<string>("");
  const [terms, setTerms] = useState<boolean>(false);
  const [disclaimer, setDisclaimer] = useState<boolean>(false);
  const [subscribedComponents, setSubscribedComponent] = useState<SubscribedComponent[]>([
    { firstName: "", lastName: "", eMail: "", telephone: "", dateOfBirth: null, country: "" },
  ]);

  useEffect(() => {
    setSubscribedComponent(
      Array(numberOfArtist).fill({ firstName: "", lastName: "", eMail: "", telephone: "", dateOfBirth: null, country: "" })
    );
  }, [numberOfArtist]);

  return (
    <ArtistContext.Provider
      value={{
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
        setSubscribedComponent,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => {
  const context = useContext(ArtistContext);
  if (!context) {
    throw new Error("useArtistContext must be used within an ArtistProvider");
  }
  return context;
};
