import type { MainThread } from "@lynx-js/types";

export const handleTapStart = (e: MainThread.TouchEvent) => {
  "main thread";

  e.currentTarget.setStyleProperty("background-color", "#16c47f");
};

export const handleTapEnd = (e: MainThread.TouchEvent) => {
  "main thread";

  e.currentTarget.setStyleProperty("background-color", "#fff");
};
