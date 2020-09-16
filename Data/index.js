"Data TODO";

const DEFAULT = {
  movie: {
    title: "Tenet",
    rating: "4",
    genres: ["Action"],
    language: "EN",
    imgPosterLarge:
      "https://www.turnerpublishing.net/news/wp-content/uploads/2020/09/tenet-11-700x364.jpg",
    imgPosterSmall:
      "https://i.ebayimg.com/images/g/gRMAAOSwXVxe~Qs7/s-l640.jpg",
    summary: "summary",
    trailers: [""],
    reviews: ["Review test"],
    cast: [
      {
        name: "cast1",
        imgProfile: "",
      },
    ],
  },
  actor: {
    name: "Bruce Willis",
    rating: "4",
    gender: "male",
    profession: "Actor",
    DOB: "19 / 01 / 1981",
    age: 39,
    imgPosterSmall:
      "https://image.tmdb.org/t/p/w92/9rbBUmRPv7DY989yUxBiVjZMFyW.jpg",
    imgPosterLarge:
      "https://www.turnerpublishing.net/news/wp-content/uploads/2020/09/tenet-11-700x364.jpg",
    biography: "Is an actor",
    roles: [
      {
        title: "Movie 1",
        character: "Character 1",
        summary: "This movie is about things",
        imgPosterMovie:
          "https://image.tmdb.org/t/p/w92/al1V9H2GEjMQNcAnUpWZvkXX0gt.jpg",
      },
    ],
  },
};

const CATEGORIES = ["UPCOMING", "POPULAR", "NOW PLAYING", "TOP RATED"];

export const getCategories = () => CATEGORIES;

export const getDefault = () => DEFAULT;
