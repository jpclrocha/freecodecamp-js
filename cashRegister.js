// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

const currencyValues = {
	PENNY: 0.01,
	NICKEL: 0.05,
	DIME: 0.1,
	QUARTER: 0.25,
	ONE: 1,
	FIVE: 5,
	TEN: 10,
	TWENTY: 20,
	HUNDRED: 100,
}

function checkCashRegister(price, cash, cid) {
	let change = cash - price
	let totalCashInDrawer = 0

	let drawer = cid.map((item) => {
		totalCashInDrawer += item[1]
		return [item[0], Math.ceil(item[1] / currencyValues[item[0]])]
	})

	console.log('Cash in draw: ' + totalCashInDrawer)
	console.log('Change: ' + change)

	// falta a parte de se nao tiver o troco exato
	if (totalCashInDrawer < change) {
		return { status: 'INSUFFICIENT_FUNDS', change: [] }
	}
	// Caso o valor de troco seja o mesmo do que tem no caixa
	else if (totalCashInDrawer === change) {
		return { status: 'CLOSED', change: cid }
	}
	// Caso tenha troco suficiente
	else if (totalCashInDrawer > change) {
		return { status: 'OPEN', change: [] }
	}
}

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.01],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 0],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
)
