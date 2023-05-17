const currencyValues = {
	PENNY: 0.01,
	NICKEL: 0.05,
	DIME: 0.1,
	QUARTER: 0.25,
	ONE: 1,
	FIVE: 5,
	TEN: 10,
	TWENTY: 20,
	'ONE HUNDRED': 100,
}

function checkCashRegister(price, cash, cid) {
	let change = Math.round((cash - price) * 100) / 100
	let totalCashInDrawer =
		Math.round(cid.reduce((sum, item) => sum + item[1], 0) * 100) / 100

	let arrayOfChange = []

	if (totalCashInDrawer === change) {
		return { status: 'CLOSED', change: cid }
	} else if (totalCashInDrawer < change) {
		// Caso o valor de troco seja o mesmo do que tem no caixa
		return { status: 'INSUFFICIENT_FUNDS', change: [] }
	} else {
		// Caso tenha troco suficiente
		cid.reverse().forEach((item) => {
			const coinName = item[0]
			const coinTotalValueInDollars = Math.round(item[1] * 100) / 100
			const selectedCurrency =
				Math.round(currencyValues[coinName] * 100) / 100
			let coinsInDrawer =
				Math.round((coinTotalValueInDollars / selectedCurrency) * 100) /
				100
			let coinsQuantity = 0

			while (change >= selectedCurrency && coinsInDrawer > 0) {
				change = Math.round((change - selectedCurrency) * 100) / 100
				--coinsInDrawer
				++coinsQuantity
			}

			if (coinsQuantity > 0) {
				arrayOfChange.push([coinName, coinsQuantity * selectedCurrency])
			}
		})

		if (change === 0) {
			return { status: 'OPEN', change: arrayOfChange }
		} else {
			return { status: 'INSUFFICIENT_FUNDS', change: [] }
		}
	}
}

console.log(
	checkCashRegister(3.26, 100, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
)
