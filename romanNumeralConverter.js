const numerals = {
	1000: 'M',
	900: 'CM',
	500: 'D',
	400: 'CD',
	100: 'C',
	90: 'XC',
	50: 'L',
	40: 'XL',
	10: 'X',
	9: 'IX',
	5: 'V',
	4: 'IV',
	1: 'I',
}

function convertToRoman(num) {
	let str = ''
	let n = num / 10

	if (n > 10) {
		x = Math.trunc(num / 1000)
		for (let i = 1; i <= x; i++) {
			str += numerals[1000]
		}
	}

	return str
}

console.log(convertToRoman(4999))
