const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/

function telephoneCheck(str) {
	return phoneRegex.test(str)
}

console.log(telephoneCheck('555-555-5555'))
