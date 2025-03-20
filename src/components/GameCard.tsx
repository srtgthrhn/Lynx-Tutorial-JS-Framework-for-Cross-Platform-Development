import { useNavigate } from "react-router";
import { handleTapEnd, handleTapStart } from "../utils.js";

interface IGameCard {
  id: string;
  name: string;
  imageId: string;
}

const GameCard = ({ id, name, imageId }: IGameCard) => {
  const nav = useNavigate();

  return (
    <view
      className="card"
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
      bindtap={() => nav(`/game-details/${id}`)}
    >
      <image
        src={`https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.webp`}
        className="game-image"
      />

      <text className="card-title" text-maxline="2">
        {name}
      </text>
    </view>
  );
};

export default GameCard;
