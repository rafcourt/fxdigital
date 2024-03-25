## Getting Started

Install

```bash
npm install
```

Initiate submodule
```bash
git submodule update --init --recursive
```

Create .env then add

```
AUTH=YOUR_TMDB_ACCESS_TOKEN
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or view on vercel

[https://rcourt.vercel.app/home](https://rcourt.vercel.app/home)

To analyze, in .env add

```
ANALYZE=true
```
then run

```
npm run build
```

A couple points
- ~~The rails do not scroll. I did not have time to resolve this issue. rail.tsx line 29. `x` does get passed to the callback so I suspect that there may be an issue with the class names used from tailwind may be inappropriate.~~ Opted to set left to -x with .5s second transition duration.

- `'Opens the details screen'` test is skipped for now because it fails. I did not have time to resolve this issue. The test simulates a user pressing enter on a movie tile element. This event calls `route.push` and should show the details page on the router. 

# Brief

Develop an app that integrates with the [TMDB API](https://developer.themoviedb.org/docs/getting-started) and displays in rails today’s trending films and TV shows. The app should also include a search feature that allows a user to find any film or TV show. You can use any framework you feel comfortable with but the app must be written using TypeScript.

# Requirements

- The app should have a “home” page displaying trending films and TV shows in two different rails.
- A user should be able to get more information of any given film such as cast, description and rating, release date, etc.
- A user should be able to get more information of any TV show list the TV show’s number of seasons, cast, rating, etc.
- The app should be navigational using the arrow keys and enter key on a keyboard, therefore the components should display a focus state to highlight the user’s current position.
- The app should be deployed to an environment that can be easily accessed anywhere.
- The app should not expose any auth tokens used to integrate with the API.

# What we will be looking at

- The app should be performant and responsive, i.e. the time between a user interaction and the response on the app should be minimal.
- The app should have a TTMU (Time to minimally useable) of less than 3 seconds.
- Bundle size should be as small as possible.
- App architecture.
- Tools used to develop the app such as linters and bundlers.
- Implementation of unit tests.