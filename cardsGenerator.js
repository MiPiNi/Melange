fs = require("fs");
function getRandomLine() {
	var data = fs.readFileSync("assets/cards", "utf8");
	var lines = data.split("\n");
	return lines[Math.floor(Math.random() * lines.length)];
}
function getCards() {
	cards = [];
	for (let i = 0; i < 30; i++) {
		cards[i] = getRandomLine();
	}
	return cards;
}
