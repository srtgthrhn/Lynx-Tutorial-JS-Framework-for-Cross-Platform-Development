import "./App.css";
import GameCard from "./components/GameCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import useSearchGames from "./hooks/useSearchGames.js";

export function App() {
  const { data, error, isPending } = useSearchGames("Assassin's Creed shadows");

  if (error) {
    return (
      <text
        style={{
          marginTop: 100,
        }}
      >
        Error: {error.message}
      </text>
    );
  }

  if (isPending) {
    return <text>Loading...</text>;
  }

  console.log(data);

  return (
    <view className="container">
      <SearchBar />

      <list
        className="list-container"
        list-type="waterfall"
        span-count={2}
        scroll-orientation="vertical"
      >
        {data.map((item) => {
          return (
            <list-item
              item-key={`list-item-${item.id}`}
              key={`list-item-${item.id}`}
            >
              <GameCard title={item.name} imageId={item.cover?.image_id} />
            </list-item>
          );
        })}
      </list>
    </view>
  );
}
