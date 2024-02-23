import Card from "@/component/common/card/card";
import Layout from "@/component/layout/Layout";
import { Character } from "@/interface/character";
import { getCharacter } from "@/services/getCharacter";
import { getCharacters } from "@/services/getCharacters";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

// export default function CharacterPage(character) {
// const { query } = useRouter();
// const [character, setCharacter] = useState({} as Character);

// Hacer un fetch del lado del cliente y buscar character por id
// const getCharacter = async () => {
//   try {
//     if (query.id) {
//       const response = await fetch(
//         `https://amiiboapi.com/api/amiibo/?tail=${query.id}`
//       );
//       const data = await response.json();
//       const characterApi = data.amiibo[0];
//       setCharacter(characterApi);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   getCharacter();
// }, [query.id]);
const CharacterPage: NextPage<Character> = (character: Character) => {
  return (
    <Layout
      title={character.name}
      description={character.gameSeries}
      keywoards={character.amiiboSeries}
    >
      <div>{character.name && <Card character={character} />}</div>
    </Layout>
  );
};

export default CharacterPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.is as string;

  const character = await getCharacter(id);

  return {
    props: {
      character,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const idiomas = locales as string[];
  const characters = await getCharacters();

  const paths = characters.flatMap((character: Character) => {
    idiomas.map((idoma) => ({
      params: { id: character.tail, locale: idoma },
    }));
  });

  return {
    paths,
    fallback: "blocking",
  };
};
