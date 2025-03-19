import "./App.css";
import GameSegment from "./components/GameSegment.jsx";

export function App() {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const endOfYear = Math.floor(
    new Date(new Date().getFullYear(), 11, 31).getTime() / 1000,
  );

  const daysAgo = Math.floor((Date.now() - 90 * 24 * 60 * 60 * 1000) / 1000);

  const segmentQueries = [
    {
      id: "1",
      title: "Most Anticipated",
      query: `
        fields name, cover.image_id, hypes, release_dates.date;
        where hypes > 0 & release_dates.date > ${currentTimestamp};
        sort hypes desc;
        limit 10;`,
    },
    {
      id: "2",
      title: "Coming Soon",
      query: `
        fields name, cover.image_id, release_dates.date;
        where release_dates.date > ${currentTimestamp} & release_dates.date <= ${endOfYear};
        sort release_dates.date asc;
        limit 10;
        `,
    },
    {
      id: "3",
      title: "Recently Released",
      query: `
        fields name, cover.image_id, release_dates.date;
        where release_dates.date >= ${daysAgo} & release_dates.date < ${currentTimestamp};
        sort release_dates.date desc;
        limit 10;
        `,
    },
    {
      id: "4",
      title: "Top 20",
      query: `
        fields name, cover.image_id, rating, rating_count;
        where rating >= 9;
        sort rating_count desc;
        limit 20;
        `,
    },
  ];

  return (
    <scroll-view scroll-orientation="vertical" className="container">
      <view class="game-segments">
        {segmentQueries.map((query) => {
          return <GameSegment title={query.title} query={query.query} />;
        })}
      </view>
    </scroll-view>
  );
}
