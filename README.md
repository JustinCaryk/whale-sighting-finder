
# App Summary

1. Contains a detailed view of whale sightings from external API
2. Contains Detailed View for each item in the list
3. Contains filtering by quantity (0 is treated the same as undefined)
4. Utilizes typescript and very simple tailwindcss 
5. Star icons save the item in local storage

# Usage

1. (Optional) Enter a number in the latency input to simulate a network slowdown. This is basically accomplished by setting the state to loading and setting a timeout before making the fetch request
2. Click the fetch data button
3. Once data has been fetched, you can filter the results by the quantity of whales sighted
4. Clicking fetch data will clear the data and refetch
5. Click `View Favorites` to see starred items

# Local Development / Setup

1. clone the repo
2. run `yarn`
3. run `yarn start`
4. navigate to `http://localhost:3000/` if browser doesn't automatically open
5. run `yarn test` to get unit tests

# TODO:

* Refactor redudant `toggleIsInDetail` in `App.tsx` and `List.tsx`. Ideally, we'd just use useContext
* Make `Detail.tsx` a modal
* Refactor repeated styles with classnames using @apply by integrating a css post processor config (this may also require changes to settings in .vscode to not throw errors, which just adds unnecessary complication for the scope of this project)
