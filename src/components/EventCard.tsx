import { useNavigate } from "react-router";
import DateItem from "./DateItem.jsx";
import { handleTapStart, handleTapEnd } from "../utils.js";
import type { IGameEvent } from "../types.js";

const EventCard = (
  props: Pick<IGameEvent, "id" | "name" | "event_logo" | "start_time">,
) => {
  const { id, name, event_logo, start_time } = props;
  const nav = useNavigate();

  const isFutureDate = start_time > Math.floor(Date.now() / 1000);

  return (
    <view
      className="card event-card"
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
      bindtap={() => (!isFutureDate ? nav(`/game-event/${id}`) : null)}
    >
      <image
        src={`https://images.igdb.com/igdb/image/upload/t_1080p/${event_logo.image_id}.webp`}
        className="event-image"
      />

      <text className="card-title" text-maxline="2">
        {name}
      </text>

      <DateItem
        date={new Date(Number(start_time) * 1000).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      />

      {isFutureDate && <text className="event-status">Upcoming</text>}
    </view>
  );
};

export default EventCard;
