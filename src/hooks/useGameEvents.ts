import { useQuery } from "@tanstack/react-query";
import type { IGameEvent } from "../types.js";

const useGameEvents = () => {
  const getGameEvents = async (): Promise<
    Pick<IGameEvent, "id" | "name" | "event_logo" | "start_time">[]
  > => {
    const query = `
      fields id, name, event_logo.image_id, start_time;
      sort start_time desc;
      limit 10;
    `;

    const response = await fetch("https://api.igdb.com/v4/events", {
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
    return data;
  };

  return useQuery({
    queryKey: ["gameEvents"],
    queryFn: getGameEvents,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

export default useGameEvents;
