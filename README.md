<img src="src/assets/logo.png" alt="Lynx Game Search" width="200" height="200"/>

# Lynx Game Search

## Table of contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Run the project](#run-the-project)
- [Built with](#built-with)

## Overview

### About the App

Lynx Game Search, built with Lynx by ByteDance, is a comprehensive app designed to provide users with detailed information about various video games, including game covers, ratings, release dates, screenshots, genres, platforms, developers, and similar games. It also features a list of upcoming and ongoing gaming events, categorized game lists, and a robust search functionality.

### Key Features

- **Game Details**
  - Displays video game cover, rating, release date, screenshots, genres, platforms, developers, and similar games.

- **Gaming Events**
	- Lists upcoming and ongoing gaming events.
	- Shows event logos, descriptions, and associated games.

- **Game Categories**
	- Currently Popular – Trending games based on engagement.
	- Recently Released – Highly rated games from the last three months.
	- Top-Rated (All Time) – Games with a rating of 9+.
	- Most Anticipated – Upcoming games sorted by hype.

- **IGDB API Integration**
  - Integrates with the IGDB API, owned by Twitch, to fetch comprehensive game data.

- **Search Functionality**
  - Users can search for any video games in the search screen.
  - All video games matching the search query will be fetched and displayed.

- **Lynx Dual Thread Architecture**
	- Main Thread: Handles all UI-related tasks to ensure smooth and responsive user interactions.
	- Background Thread: Manages data fetching and processing to keep the main thread free for UI updates.
	- Direct Element Manipulation: Allows direct manipulation of element properties using the main thread for immediate visual updates.

- **Navigation**:
  - `react-router` is used to manage multiple screens and facilitate smooth navigation between them.

- **Data Fetching**:
  - `TanStack Query` is used for data fetching and caching, ensuring efficient and reliable data management.

- **TypeScript**:
  - The app is developed using `TypeScript` for type safety and better code maintainability.

## Screenshots

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
    <img src="https://i.imgur.com/HEIBcYW.png" alt="screenshot 1" width="250"/>
    <img src="https://i.imgur.com/EeznSXM.png" alt="screenshot 2" width="250"/>
    <img src="https://i.imgur.com/jjNkUj2.png" alt="screenshot 3" width="250"/>
    <img src="https://i.imgur.com/rOgHh2P.png" alt="screenshot 4" width="250"/>
    <img src="https://i.imgur.com/rDlnSDJ.png" alt="screenshot 5" width="250"/>
    <img src="https://i.imgur.com/hJPDsHp.png" alt="screenshot 6" width="250"/>
    <img src="https://i.imgur.com/Kc6xrw4.png" alt="screenshot 7" width="250"/>
    <img src="https://i.imgur.com/27TkdYS.png" alt="screenshot 8" width="250"/>
    <img src="https://i.imgur.com/iviTRCc.png" alt="screenshot 9" width="250"/>
    <img src="https://i.imgur.com/1UhNrJ0.png" alt="screenshot 10" width="250"/>
    <img src="https://i.imgur.com/ECOePPR.png" alt="screenshot 11" width="250"/>
    <img src="https://i.imgur.com/xUxQEhX.png" alt="screenshot 12" width="250"/>
</div>


## Run the project

First you need to have node install in your machine to run this project.
Clone this project and open it on any Code Editor or IDE.

For detailed instructions on how to install the Lynx Explorer sandbox app to the simulator for testing the app, please refer to [this link](https://lynxjs.org/guide/start/quick-start.html#ios-simulator-platform=macos-arm64,explorer-platform=ios-simulator)

Visit [IGDB API Documentation](https://api-docs.igdb.com/#getting-started) and follow the instructions there to obtain an IGDB API key.

Now run this command. It will install all the dependencies in your project.

```
npm install
```

Then run this commands to start the project.

```
npm run dev
```

## Built with

- Lynx
- ReactLynx
- Typescript
- react-router
- tanstack-query
