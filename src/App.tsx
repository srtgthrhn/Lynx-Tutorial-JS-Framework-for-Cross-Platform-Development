import "./App.css";
import GameCard from "./components/GameCard.jsx";
import SearchBar from "./components/SearchBar.jsx";

export function App() {
  return (
    <view className="container">
      <SearchBar />

      <list
        className="list-container"
        list-type="flow"
        span-count={2}
        scroll-orientation="vertical"
      >
        {Array.from({ length: 40 }).map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
            >
              <GameCard />
            </list-item>
          );
        })}
      </list>
    </view>
  );
}
