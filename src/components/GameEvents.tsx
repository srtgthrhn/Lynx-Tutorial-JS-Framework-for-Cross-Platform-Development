import useGameEvents from "../hooks/useGameEvents.js";
import EventCard from "./EventCard.jsx";
import Loader from "./Loader.jsx";

const GameEvents = () => {
  const { data: events, isPending, error } = useGameEvents();

  if (isPending) return <Loader />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <view className="game-segment">
      <text className="heading">Game Events</text>

      <list
        scroll-orientation="horizontal"
        list-type="single"
        span-count={1}
        className="horizontal-list"
      >
        {events?.map((event) => {
          return (
            <list-item
              item-key={`list-item-${event.id}`}
              key={`list-item-${event.id}`}
            >
              <EventCard {...event} />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};

export default GameEvents;
