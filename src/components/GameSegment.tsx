import useGameQuery from "../hooks/useGameQuery.js";
import GameCard from "./GameCard.jsx";
import Loader from "./Loader.jsx";

interface IGameSegment {
  title: string;
  query: string;
}

const GameSegment = (props: IGameSegment) => {
  const { title, query } = props;

  const { data, isPending, error } = useGameQuery(query);

  if (isPending) return <Loader />;

  if (error) {
    return <text>Error</text>;
  }

  return (
    <view className="game-segment">
      <text className="heading">{title}</text>

      <list
        scroll-orientation="horizontal"
        list-type="single"
        span-count={1}
        className="horizontal-list"
        style={{
          paddingBottom: "10px",
        }}
      >
        {data.map((game) => {
          return (
            <list-item
              item-key={`list-item-${game.id}`}
              key={`list-item-${game.id}`}
            >
              <GameCard
                id={game.id}
                title={game.name}
                imageId={game.cover?.image_id}
              />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};

export default GameSegment;
