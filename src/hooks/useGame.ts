import { useQuery } from "@tanstack/react-query";

const useGame = (id: string) => {
  const searchGame = async () => {
    if (!id) return;

    const query = `
      fields *, cover.image_id, genres.*, platforms.*, release_dates.date, release_dates.human,
      involved_companies.company.name,
      similar_games.name, similar_games.cover.image_id,
      age_ratings.category, age_ratings.rating, age_ratings.content_descriptions.description,
      screenshots.image_id;
      where id = ${id};
    `;

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        Accept: "application/json",
      },
      body: query,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }

    const data = await response.json();
    return data[0];
  };

  return useQuery({
    queryKey: ["game", id],
    queryFn: searchGame,
    enabled: !!id,
  });
};

export default useGame;
