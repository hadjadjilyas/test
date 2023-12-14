import styled from "styled-components";
import Movies from "./Movie2";

const Rowdiv = styled.div`
max-width: 900px;
min-width: 800px;
margin: 50px auto 0;
`;
let data = [
    {
      id: "4365",
      title: "Le Roi",
      date: "24 septembre 2019",
      category: "Drame historique",
      resume:
        "Dans l'Angleterre du 15e siècle, Hal, un prince capricieux et bon à rien, devient un roi puissant lorsqu'il hérite à contrec?ur du trône et de ses conflits",
      like: false,
      nbLike: 18,
      comment: 3,
      bookmark: false,
      trailer: "https://www.youtube.com/watch?v=bVH7LurFHHc",
      image: "images/the-king.jpg",
    },
    {
      id: "5307",
      title: "Joker",
      date: "09 Octobre 2019",
      category: "Drame / Thriller",
      resume:
        "A Gotham City, Arthur Fleck, un comédien de stand-up raté. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
      like: false,
      nbLike: 7,
      comment: 1,
      bookmark: false,
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      image: "images/joker.jpg",
    },
    {
      id: "6798",
      title: "Docteur Sleep",
      date: "30 Octobre 2019",
      category: "Fantasy / Thriller",
      resume:
        "Suite de Shining dans laquelle Danny, devenu adulte, est encore traumatisé et souffre de problèmes d'alcoolisme et de gestion de la colère. Comme son père.",
      like: false,
      nbLike: 10,
      comment: 6,
      bookmark: false,
      trailer: "https://www.youtube.com/watch?v=BOzFZxB-8cw",
      image: "images/docteur-sleep.jpg",
    },
  ];
  

const MovieList = () => {
    return ( 
        <Rowdiv>
          {data.map((movie) =>(
            <Movies key={movie.id} {... movie} />
            ))}
            
            

        </Rowdiv>

     );
}
 
export default MovieList;