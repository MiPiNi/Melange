import raw from "./assets/quests.js";

const usedNumbers = [];

function getRandomLine() {
	let lines = raw;
	let rand = Math.floor(Math.random() * lines.length);
	while (rand in usedNumbers) {
		rand = Math.floor(Math.random() * lines.length);
	}

	return lines[Math.floor(Math.random() * lines.length)];
}
export function getCards() {
	let cards = [];
	for (let i = 0; i < 10; i++) {
		cards[i] = getRandomLine();
	}
	return cards;
}
