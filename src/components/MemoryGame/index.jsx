import "./style.css";

const cards = [1, 2, 3, 4, 5, 6];
function shuffle(array) {
  console.log(array);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
  return array;
}

const allCards = shuffle(cards.concat(cards)); // make a doubled deck of cards

const handleCkick = () => {};
function Game() {
  return (
    <>
      <div className="cardsContainer">
        {allCards.map((item, index) => {
          return (
            <div key={index} className="card" onClick={handleCkick}>
              <div className="cardBack"></div>
              <div className="cardContent">{item}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Game;
