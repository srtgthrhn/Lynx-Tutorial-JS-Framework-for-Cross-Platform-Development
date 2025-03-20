import { useNavigate } from "react-router";
import { handleTapEnd, handleTapStart } from "../utils.js";
import type { IGame } from "../types.js";

const GameCard = (props: Pick<IGame, "id" | "name" | "cover">) => {
  const { id, name, cover } = props;

  const nav = useNavigate();

  return (
    <view
      className="card"
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
      bindtap={() => nav(`/game-details/${id}`)}
    >
      <image
        src={`https://images.igdb.com/igdb/image/upload/t_1080p/${cover?.image_id}.webp`}
        className="game-image"
      />

      <text className="card-title" text-maxline="2">
        {name}
      </text>
    </view>
  );
};

export default GameCard;
