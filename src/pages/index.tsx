import { Raleway } from "next/font/google";
import { Character } from "@/interface/character";
import Card from "@/component/common/card/card";
import Layout from "@/component/layout/Layout";
import { GetStaticProps, NextPage } from "next";
import { getCharacters } from "@/services/getCharacters";

// const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

interface HomePageProps {
  characters: Character[];
}
// export default function Home({ characters }) {
const Home: NextPage<HomePageProps> = ({ characters }) => {
  return (
    <Layout
      title="Ecommerce DH"
      description="Consigue todas la figuras coleccionables que necesitas"
      keywoards="figuras, abimes. videojueo, comic, smash"
    >
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${raleway.className}`}
      >
        <h1>Ecommerce</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
          {characters.map((item) => (
            <Card character={item} />
          ))}
        </section>
      </div>
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const characters = await getCharacters();
  return {
    props: {
      characters,
    },
  };
};
