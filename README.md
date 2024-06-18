# Betting Game Assignment

This is my submission for the betting game assignment, created using React and TypeScript

You can find the game deployed at: https://betting-game-rock-paper-scissor.netlify.app/

## Architecture Features

**Modular Design**: The game features a modular architecture that allows easy customization of gameplay mechanics with minimal changes to specific files.

**Global State Management**: Used Zustand for global state management to maintain a single of truth across the application, eliminating prop drilling.

**Responsive Design**: The game is designed to be fully responsive, ensuring a seamless experience on all screen sizes.

**Localization Support**: Implemented translations to render text dynamically, enhancing flexibility and localization capabilities.

**Folder Structure**: Organized components, utilities, higher-order components (HOCs), and constants into logical directories for improved maintainability.

**Styling with Tailwind CSS**: Utilized Tailwind CSS and `classnames` for conditional styling, providing a cleaner approach to adding dynamic class names.

## Additional Points

**Custom memoization function**: In my interview we had discussed about the implementation of a memoization function without using react `useMemo`. Inspired from that, I created a custom memoization function to optimize performance by caching the game results based on hashed arguments, reducing redundant computations.

**Enhanced User Interaction**: Added a feature to adjust bet amounts up or down, enhancing user control and interaction within the game.

**Customizable Configuration**: Centralized game configuration in constants/common and global `store` enabling easy adjustments to gameplay rules and aspects of UI elements such as their colours.

**Reusable HOC for Disabled Clicks**: Created a `withDisabledClicks` higher-order component to disable clicks conditionally, enhancing usability during gameplay.

**Followed Git best practices**: A proper branch structure has been followed, creating feature branches like `ui-interactivity`

## UX Considerations:

**Dynamic Betting**: Players can place or reduce bets based on current game state and balance.

**Interactive UI Elements**: Buttons are dynamically enabled/disabled based on game state to guide user actions appropriately.

**Post-Game Interaction**: After completing a game round, players can easily restart with the "Play Again" button, maintaining their balance.

**Error Handling**: Implemented toastr notifications to alert users of incorrect actions, such as placing bets on all the positions at the same time.
