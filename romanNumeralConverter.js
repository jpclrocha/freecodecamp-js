const numerals = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1,
}

function convertToRoman(num) {
	let romanConverted = ''

	for (i in numerals) {
		while (num >= numerals[i]) {
			romanConverted += i
			num -= numerals[i]
		}
	}

	return romanConverted
}

console.log(convertToRoman(2))
