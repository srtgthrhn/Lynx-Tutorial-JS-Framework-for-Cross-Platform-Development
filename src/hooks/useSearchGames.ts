import { useQuery } from "@tanstack/react-query";

const useSearchGames = (gameTitle: string) => {
  const searchGame = async () => {
    if (!gameTitle) {
      return [];
    }

    const query = `
      fields name, cover.image_id;
      search "${gameTitle}";
      limit 30;
    `;

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": process.env.IGDB_CLIENT_ID || "",
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
        "Content-Type": "text/plain",
        Accept: "application/json",
      },
      body: query,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  };

  return useQuery({
    queryKey: ["games", gameTitle],
    queryFn: searchGame,
    enabled: !!gameTitle,
  });
};

export default useSearchGames;
