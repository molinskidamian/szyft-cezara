const btn = document.querySelector('.encryption-start');

btn.addEventListener('click', e => {
	e.preventDefault();

	const result = document.querySelector('.result');
	const secret = [];
	const alphabet = [
		'a',
		'ą',
		'b',
		'c',
		'ć',
		'd',
		'e',
		'ę',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'ł',
		'm',
		'n',
		'ń',
		'o',
		'ó',
		'p',
		'q',
		'r',
		's',
		'ś',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
		'ź',
		'ż',
	];

	const newArr = [];

	console.log('szyfruję!');
	const text = document.querySelector('#sentence').value.toLowerCase();
	console.log(`Fraza do szyfrowania: ${text}`);

	// rozsmaruj szukabą frazę aby każda litera była osobnym elementem tablicy
	textSpreed = [...text];
	// console.log(Array.isArray(textSpreed));

	// Porównaj każdą literę z tablicy textSpreed do tablicy alphabet.
	// Indexy z tablicy alphabet zapisz w nowej tablicy newArr
	textSpreed.forEach(e => {
		newArr.push(alphabet.indexOf(e));
	});

	console.log(`Indexy w tablicy - alphabet`);
	console.log(newArr);

	// Zwiększ każdą liczbę o 13
	upperArr = newArr.map(el => {
		score = el + 13;
		if (score > alphabet.length) {
			console.log(`liczba jest większa niż ${alphabet.length}`);
			return score - 35;
		} else {
			return el + 13;
		}
	});

	console.log(`Wypisz zwiększoną/zaszyfrowaną tablicę:`);
	console.log(upperArr);

	const secretSentence = upperArr.map(el => {
		secret.push(alphabet.at(el));
	});
	console.log(secret);

	console.log(alphabet.length);

	result.textContent += ` ${text} secure: ${secretSentence.toString()}`;
});
