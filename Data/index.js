"Data TODO";

const DEFAULT = {
  movie: {
    title: "Tenet",
    vote_average: "3.6",
    genre_ids: ["Action"],
    language: "EN",
    backdrop_path:
      "https://www.turnerpublishing.net/news/wp-content/uploads/2020/09/tenet-11-700x364.jpg",
    poster_path: "https://i.ebayimg.com/images/g/gRMAAOSwXVxe~Qs7/s-l640.jpg",
    overview:
      "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
    trailers: [""],
    reviews: [
      {
        name: "CyrusPK",
        content:
          "Ambition is important in film making and it is always reassuring to see film-makers pushing as hard as they can against their budgets to produce something creative and dynamic. Unfortunately those behind Money Plane found themselves somewhat defeated by lack of funds. Their name actors including Kelsey Grammar, Denise Richards",
        link: "",
      },
    ],
    cast: [
      {
        name: "Adam Copeland",
        imgProfile:
          "https://image.tmdb.org/t/p/w185/xawkWKkgbOx5atAMeFDh9rjHGWt.jpg",
      },
    ],
  },
  actor: {
    name: "Bruce Willis",
    rating: "3",
    gender: "male",
    profession: "Actor",
    DOB: "19 / 01 / 1981",
    age: 39,
    imgPosterSmall:
      "https://image.tmdb.org/t/p/w92/9rbBUmRPv7DY989yUxBiVjZMFyW.jpg",
    imgPosterLarge:
      "https://www.turnerpublishing.net/news/wp-content/uploads/2020/09/tenet-11-700x364.jpg",
    biography:
      "Adam Joseph Copeland is a retired Canadian professional wrestler and actor, best known for his time with WWE under the ring name Edge. Copeland was trained by former professional wrestlers Sweet Daddy Siki and Ron Hutchinson. Throughout the 1990s, he wrestled in North American independent promotions early in his career. During his time in these promotions, he competed in singles and tag team competition, the latter with Christian, his storyline brother. In 1997, Copeland signed a developmental deal with the WWF and began competing for the company later that year; he made his televised debut the following June under the ring name Edge. In July 1999, he won the WWF Intercontinental Championship at a house show in Toronto,...",
    roles: [
      {
        title: "Movie 1",
        character: "Character 1",
        summary:
          "Detective Nick Blades is a New Orleans cop on trial for corruption. Assistant District Attorney Theo Gold is the man in charge of putting him behind bars. When these two unlikely partners from opposite sides of the law stumble onto a criminal plot, they’ll need to rely on luck",
        imgPosterMovie:
          "https://image.tmdb.org/t/p/w92/al1V9H2GEjMQNcAnUpWZvkXX0gt.jpg",
      },
      {
        title: "Movie 2",
        character: "Character 1",
        summary:
          "Detective Nick Blades is a New Orleans cop on trial for corruption. Assistant District Attorney Theo Gold is the man in charge of putting him behind bars. When these two unlikely partners from opposite sides of the law stumble onto a criminal plot, they’ll need to rely on luck",
        imgPosterMovie:
          "https://image.tmdb.org/t/p/w92/al1V9H2GEjMQNcAnUpWZvkXX0gt.jpg",
      },
    ],
  },
};

const CATEGORIES = ["UPCOMING", "POPULAR", "NOW PLAYING", "TOP RATED"];

export const getCategories = () => CATEGORIES;

export const getDefault = () => DEFAULT;
