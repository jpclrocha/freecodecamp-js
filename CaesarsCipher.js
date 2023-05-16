const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const rotAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('')

function rot13(str) {
	let decoded = ''
	let index = ''
	let i

	let stringArr = str.split('')

	for (i in stringArr) {
		if (alphabet.includes(stringArr[i])) {
			index = alphabet.indexOf(stringArr[i])
			decoded += rotAlphabet[index]
		} else {
			decoded += stringArr[i]
		}
	}

	return decoded
}

console.log(rot13('SERR PBQR PNZC'))
