// export const getData = async (category) => {
//   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
//     category
//   )}&limit=10&api_key=2IYaG55WPp4iOxH8l6os5OjgjTFimzOH`;
//   const resp = await fetch(url);
//   const { data } = await resp.json();

//   const gifs = data.map((img) => {
//     return {
//       id: img.id,
//       title: img.title,
//       url: img.images?.downsized_medium.url,
//     };
//   });

//   return gifs;
// };
function getRandomCats(lista, numElementos) {
  return [...lista]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, numElementos);
}

export const getCats = async () => {
  const url = "https://api.thecatapi.com/v1/breeds";
  const resp = await fetch(url);
  const data = await resp.json();
  const newCatList = data
    .filter((o) => o?.image?.url != null)
    .map((cat) => {
      return {
        id: cat.id,
        catName: cat.name,
        url: cat.image.url,
      };
    });

  const quizOptions = getRandomCats(newCatList, 3);
  const correctAnswer = getRandomCats(quizOptions, 1)[0];

  const quizObject = {
    quizOptions,
    correctAnswer,
  };

  return quizObject;
};
