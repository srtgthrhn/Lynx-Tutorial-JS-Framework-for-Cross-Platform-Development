interface GameCardProps {
  title: string;
  imageId: string;
}

const GameCard = ({ title, imageId }: GameCardProps) => {
  return (
    <view className="game-card">
      <image
        src={`https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.webp`}
        className="game-image"
      />

      <text className="game-title">{title}</text>
    </view>
  );
};

export default GameCard;
