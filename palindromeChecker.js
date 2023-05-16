function palindrome(str) {
	const itemsToRemove = [' ', '.', '-', ',', '_', ')', '(']
	const stringArr = str
		.toLowerCase()
		.split('')
		.filter((item) => !itemsToRemove.includes(item.toLowerCase()))

	let newString = []

	for (let i = stringArr.length; i <= stringArr.length && i > 0; i--) {
		newString.push(stringArr[i - 1])
	}

	console.log(newString.toString())
	console.log(stringArr.toString())

	return JSON.stringify(newString) === JSON.stringify(stringArr)
}

console.log(palindrome('0_0 (: /- :) 0-0'))
