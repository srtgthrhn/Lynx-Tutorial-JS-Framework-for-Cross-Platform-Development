import { useNavigate, useParams } from "react-router";
import useGame from "../hooks/useGame.js";
import backIcon from "../assets/back.png";
import ratingIcon from "../assets/rating.png";
import dateIcon from "../assets/date.png";
import GameCard from "../components/GameCard.jsx";
import { useState } from "@lynx-js/react";
import Loader from "../components/Loader.jsx";

const GameDetails = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [maxLine, setMaxLine] = useState("5");

  const { data, isPending, error } = useGame(id);

  if (isPending) return <Loader />;
  if (error) return <text>Error: {error.message}</text>;

  const {
    name,
    cover,
    rating,
    release_dates,
    summary,
    genres,
    screenshots,
    platforms,
    involved_companies,
    similar_games,
  } = data;

  return (
    <scroll-view scroll-orientation="vertical" className="container">
      <view className="game-details-container">
        <view bindtap={() => nav("/")} className="back-button">
          <image src={backIcon} className="back-button-icon" />
        </view>

        <image
          src={`https://images.igdb.com/igdb/image/upload/t_1080p/${cover.image_id}.webp`}
          className="game-cover border"
        />

        <view className="game-info">
          <text className="game-name">{name}</text>

          {rating && (
            <view className="rating-container">
              <image src={ratingIcon} className="rating-icon" />
              <text className="rating">{(rating / 10).toFixed(1)}</text>
            </view>
          )}
        </view>

        <text className="developer">
          By {involved_companies[0].company.name}
        </text>

        <view className="release-date-container">
          <image src={dateIcon} className="release-date-icon" />
          <text className="release-date">{release_dates[0]?.human}</text>
        </view>

        <text className="heading">Description</text>
        <text className="summary" text-maxline={maxLine}>
          {summary}

          <inline-truncation>
            <text bindtap={() => setMaxLine("-1")}>...See More</text>
          </inline-truncation>
        </text>

        <view className="genres">
          {genres.map((genre) => (
            <text key={genre.id} className="tag">
              {genre.name}
            </text>
          ))}
        </view>

        <text className="heading">Screenshots</text>

        <list
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          className="horizontal-list"
        >
          {screenshots.map((screenshot) => {
            return (
              <list-item
                item-key={`list-item-${screenshot.id}`}
                key={`list-item-${screenshot.id}`}
              >
                <image
                  src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshot?.image_id}.webp`}
                  className="screenshot"
                />
              </list-item>
            );
          })}
        </list>

        <text className="heading">You can play on</text>

        <view className="genres">
          {platforms.map((platform) => (
            <text key={platform.id} className="tag">
              {platform.name}
            </text>
          ))}
        </view>

        <text className="heading">You may also like</text>

        <list
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          className="horizontal-list"
        >
          {similar_games?.map((similar_game) => {
            return (
              <list-item
                item-key={`list-item-${similar_game.id}`}
                key={`list-item-${similar_game.id}`}
                style={{
                  paddingBottom: "100px",
                }}
              >
                <GameCard
                  key={similar_game.id}
                  id={similar_game.id}
                  title={similar_game.name}
                  imageId={similar_game.cover?.image_id}
                />
              </list-item>
            );
          })}
        </list>
      </view>
    </scroll-view>
  );
};

export default GameDetails;
