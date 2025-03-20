import { useParams } from "react-router";
import BackButton from "../components/BackButton.jsx";
import useGameEvent from "../hooks/useGameEvent.js";
import Loader from "../components/Loader.jsx";
import GameCard from "../components/GameCard.jsx";

const GameEventScreen = () => {
  const { id } = useParams();

  const { data: event, isPending, error } = useGameEvent(id);

  if (isPending) return <Loader />;

  if (error) return <text>Error</text>;

  const { name, description, event_logo, games } = event;

  return (
    <scroll-view className="container" scroll-orientation="vertical">
      <view className="game-details-container">
        <BackButton />

        <image
          src={`https://images.igdb.com/igdb/image/upload/t_1080p/${event_logo.image_id}.webp`}
          className="event-image"
        />

        <text className="event-title" text-maxline="2">
          {name}
        </text>

        {description && (
          <text className="event-description">{description}</text>
        )}

        <list
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          className="horizontal-list"
          style={{
            paddingBottom: "10px",
          }}
        >
          {games?.map((game) => {
            return (
              <list-item
                item-key={`list-item-${game.id}`}
                key={`list-item-${game.id}`}
              >
                <GameCard
                  title={game.name}
                  imageId={game.cover.image_id}
                  id={game.id}
                />
              </list-item>
            );
          })}
        </list>
      </view>
    </scroll-view>
  );
};

export default GameEventScreen;
