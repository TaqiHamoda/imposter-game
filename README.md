# 🕵️ Imposter Words: Strategy Edition

A strategic, web-based pass-and-play game designed to challenge your bluffing skills and social deduction. Unlike traditional imposter games, **Imposter Words** is built with a focus on fairness and player engagement.

## 🚀 The Motivation: Fair Play
The primary inspiration for this project was the frustration caused by poor Random Number Generators (RNG) in existing party games. In many games, the same person is often chosen as the imposter multiple times in a row, while others never get a turn.

**Imposter Words** solves this by using a **Weighted RNG system**. The game tracks how many times each player has been the imposter and adjusts the odds for the next round. This ensures that:
* Everyone eventually gets a turn to be the liar.
* The "Imposter Frequency" is balanced across the entire group.
* The game remains unpredictable but mathematically fair.

## 🎮 Game Features
- **Smart Scaling:** The maximum number of imposters is capped at `(n/2) - 1` (where *n* is the number of players). This ensures the "Innocents" always have a fair chance to discuss and deduce, keeping the game competitive and fun.
- **Strategic Hints:** Designed for high-level play. Hints are specific enough to give the Imposter a "fighting chance" to blend in, but vague enough that they won't immediately give the secret word away.
- **Pass-and-Play Optimized:** Minimalist UI designed for mobile browsers, perfect for passing a single device around a circle of friends.
- **Fairness Leaderboard:** A built-in tracker that displays imposter frequency so players can see the "fairness" in action.

## 📝 How to Play
1.  **Setup:** Add at least 3 players and ensure your word pool is loaded.
2.  **The Reveal:** Each player clicks the screen to see their role. 
    * **Innocents** see the Secret Word and the Category.
    * **Imposters** see the Category and a "Conceptual Hint."
3.  **The Discussion:** The designated "Starter" begins the conversation. Innocents must describe the word without being too obvious, while Imposters must bluff their way through.
4.  **The Vote:** Discuss, argue, and find the liar!

## 🤝 Contributing
I am always looking for new, creative word additions! If you have ideas for words that fit the "specific but recognizable" criteria (like *Espresso*, *Bitcoin*, or *Batman*), please contribute.

### Contribution Guidelines:
- **Specific Words:** Avoid general terms like "Money" or "Fruit." Use "Bitcoin" or "Croissant" instead.
- **Vague Hints:** Ensure hints are conceptual. A hint for *Sushi* should be "Rice" or "Vinegar," not "Japan."
- **Pull Requests:** Feel free to open a PR to update `data.json` or open an **Issue** with a list of your suggestions.
