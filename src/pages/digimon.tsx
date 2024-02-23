import { link } from "fs";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  data: Digimon[];
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <main>
        <div>
          <ul>
            {data?.map((obj) => (
              <li key={obj.name}>
                <h2>{obj.name}</h2>
                <Image
                  src={obj.img}
                  alt="digimos-profile"
                  width={300}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

type Digimon = {
  name: string;
  img: string;
  level: string;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data: Digimon[] = await res.json();
  return {
    props: { data },
  };
};
