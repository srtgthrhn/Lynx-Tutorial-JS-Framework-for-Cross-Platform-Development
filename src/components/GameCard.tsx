import { useNavigate } from "react-router";

interface GameCardProps {
  id: string;
  title: string;
  imageId: string;
}

const GameCard = ({ id, title, imageId }: GameCardProps) => {
  const nav = useNavigate();

  return (
    <view className="game-card" bindtap={() => nav(`/game-details/${id}`)}>
      <image
        src={`https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.webp`}
        className="game-image"
      />

      <text className="game-title">{title}</text>
    </view>
  );
};

export default GameCard;
