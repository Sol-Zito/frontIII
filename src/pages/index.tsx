import { Inter, Raleway } from "next/font/google";
import { useEffect, useState } from "react";
import { Character } from "@/interface";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const [character, setCharacter] = useState<Character[]>([]);

  const getCharacter = async () => {
    const response = await fetch("https://amiiboapi.com/api/amiibo/ ");
    const data = await response.json();
    return data.amiibo.slice(0, 20);
  };

  useEffect(() => {
    getCharacter().then((data) => setCharacter(data));
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${raleway.className}`}
    >
      <h1>Ecommerce</h1>
      <section className="grid grid-cols-4 gap-7 mt-4">
        {character.map((item) => (
          <div key={item.tail} className="col-sapn-1">
            <p>{item.name}</p>
            <Image src={item.image} alt={item.character} />
          </div>
        ))}
      </section>
    </main>
  );
}
