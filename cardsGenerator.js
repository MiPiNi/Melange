import cards from "./assets/quests.js";

export function getCards(isFirstSwipe) {
	for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
	}
	isFirstSwipe ? cards.unshift("") : none;
	return cards;
}
