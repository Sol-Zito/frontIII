export const getCharacter = async (id: string) => {
  try {
    if (id) {
      const response = await fetch(
        `https://amiiboapi.com/api/amiibo/?tail=${id}`
      );
      const data = await response.json();
      const characterApi = data.amiibo[0];
      //   setCharacter(characterApi);
    }
  } catch (error) {
    console.log(error);
  }
};
