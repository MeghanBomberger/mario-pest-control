const mobData = [
	{
		name: "Goomba",
		bounty: 5,
		currentTally: 0
	}, {
		name: "BoBomb",
		bounty: 7,
		currentTally: 0
	}, {
		name: "CheepCheep",
		bounty: 11,
		currentTally: 0
	}
]

//BOUNTY BOARD SECTION
document.getElementById("checkBounty").addEventListener("click", function (e) {
	e.preventDefault()

	for (let i = 0; i < mobData.length; i++) {
		mobX = mobData[i]

		function displayBountyInCoins() {
			const bountyX = mobX.bounty

			function idClarifier(x) {
				idResult = mobX.name.toLowerCase() + x
				return idResult
			}
			coinCellX = idClarifier("Coins")

			document.getElementById(coinCellX).innerHTML = ""

			for (let i = 0; i < bountyX; i++) {

				const imgCoin = document.createElement("img")
				imgCoin.setAttribute("src", "https://art.pixilart.com/910a8762ee4a7c7.png")
				imgCoin.setAttribute("id", "coin-pic")
				document.getElementById(coinCellX).appendChild(imgCoin)
			}
		}
		displayBountyInCoins()
	}
})

//KILL LOGGER SECTION
killLogger.submitTally.addEventListener("click", function (e) {
	e.preventDefault()

	for (let i = 0; i < mobData.length; i++) {
		const goombaAdd = killLogger.goombaNewKills.valueAsNumber
		const bobombAdd = killLogger.bobombNewKills.valueAsNumber
		const cheepcheepAdd = killLogger.cheepcheepNewKills.valueAsNumber

		mobX = mobData[i]

		previousCount = mobX.currentTally

		checkInputId = mobX.name.toLowerCase() + "Add"

		checkInputId === "goombaAdd" 
			? newCount = goombaAdd
			: checkInputId === "bobombAdd" 
				? newCount = bobombAdd
				: newCount = cheepcheepAdd

		newTally = previousCount + newCount

		mobX.currentTally = newTally

		const pendingInvoiceGoomba = document.getElementById("goombaTally")
		const pendingInvoiceBobomb = document.getElementById("bobombTally")
		const pendingInvoiceCheepcheep = document.getElementById("cheepcheepTally")

		replaceTally = newTally + " x "

		mobX.name === "Goomba"
			? pendingInvoiceGoomba.textContent = replaceTally
			: mobX.name === "BoBomb"
				? pendingInvoiceBobomb.textContent = replaceTally
				: pendingInvoiceCheepcheep.textContent = replaceTally

		subTotal = mobX.bounty * newTally
		replaceSubtotal = " = " + subTotal

		const pendingInvoiceSubTotalGoomba = document.getElementById("goombaSubTotal")
		const pendingInvoiceSubTotalBobomb = document.getElementById("bobombSubTotal")
		const pendingInvoiceSubTotalCheepcheep = document.getElementById("cheepcheepSubTotal")

		mobX.name === "Goomba"
			? pendingInvoiceSubTotalGoomba.textContent = replaceSubtotal
			: mobX.name === "BoBomb"
				? pendingInvoiceSubTotalBobomb.textContent = replaceSubtotal
				: pendingInvoiceSubTotalCheepcheep.textContent = replaceSubtotal
	}

	killLogger.goombaNewKills.value = 0
	killLogger.bobombNewKills.value = 0
	killLogger.cheepcheepNewKills.value = 0
})

// INVOICER SECTION
const invoiceNum = 1000

document.getElementById("submitInvoice").addEventListener("click", function (e) {
	e.preventDefault()

	invoiceNum++

	for (let i = 0; i < mobData.length; i++) {
		mobX = mobData[i]

		mobX.name === "Goomba"
			? totalGoombaKilled = mobX.currentTally
			: mobX.name === "BoBomb"
				? totalBobombKilled = mobX.currentTally
				: totalCheepCheepKilled = mobX.currentTally

		mobX.name === "Goomba"
			? totalGoombaCoins = mobX.bounty
			: mobX.name === "BoBomb"
				? totalBobombCoins = mobX.bounty
				: totalCheepCheepCoins = mobX.bounty

		mobX.name === "Goomba"
			? goombaSubTotal = mobX.bounty * mobX.currentTally
			: mobX.name === "BoBomb"
				? bobombaSubTotal = mobX.bounty * mobX.currentTally
				: cheepcheepSubTotal = mobX.bounty * mobX.currentTally
	}

	const invoiceDiv = document.createElement("div")
	invoiceDiv.setAttribute("id", "invoiceDiv")

	const rightPeach = document.createElement("img")
	rightPeach.id = "rightPeach"
	rightPeach.src = "https://i.dlpng.com/static/png/144768_preview.png"
	invoiceDiv.appendChild(rightPeach)

	const leftPeach = document.createElement("img")
	leftPeach.id = "leftPeach"
	leftPeach.src = "https://i.dlpng.com/static/png/144768_preview.png"
	invoiceDiv.appendChild(leftPeach)

	const invoiceHeader = document.createElement("h1")
	invoiceHeader.id = "invoiceNum"
	invoiceHeader.textContent = "Invoice #" + invoiceNum
	invoiceDiv.appendChild(invoiceHeader)

	const baddiesHeader = document.createElement("p")
	baddiesHeader.id = "mobs"
	baddiesHeader.textContent = "Baddies"
	invoiceDiv.appendChild(baddiesHeader)

	const totalsHeader = document.createElement("p")
	totalsHeader.id = "totalMobs"
	totalsHeader.textContent = "Total Killed"
	invoiceDiv.appendChild(totalsHeader)

	const feesHeader = document.createElement("p")
	feesHeader.id = "fees"
	feesHeader.textContent = "Fees"
	invoiceDiv.appendChild(feesHeader)

	const goombas = document.createElement("p")
	goombas.id = "goombas"
	goombas.textContent = "Goombas "
	invoiceDiv.appendChild(goombas)

	const bobombs = document.createElement("p")
	bobombs.id = "bobombs"
	bobombs.textContent = "Bo-Bombs "
	invoiceDiv.appendChild(bobombs)

	const cheepcheeps = document.createElement("p")
	cheepcheeps.id = "cheepcheeps"
	cheepcheeps.textContent = "Cheep-Cheeps"
	invoiceDiv.appendChild(cheepcheeps)

	const subtotalLabel = document.createElement("p")
	subtotalLabel.id = "subtotalOwed"
	subtotalLabel.textContent = "Subtotal:"
	invoiceDiv.appendChild(subtotalLabel)

	const goombaCount = document.createElement("p")
	goombaCount.id = "goombaCount"
	goombaCount.textContent = totalGoombaKilled
	invoiceDiv.appendChild(goombaCount)

	const bobombCount = document.createElement("p")
	bobombCount.id = "bobombCount"
	bobombCount.textContent = totalBobombKilled
	invoiceDiv.appendChild(bobombCount)

	const cheepcheepCount = document.createElement("p")
	cheepcheepCount.id = "cheepcheepCount"
	cheepcheepCount.textContent = totalCheepCheepKilled
	invoiceDiv.appendChild(cheepcheepCount)

	const invoiceCoin = document.createElement("img")
	invoiceCoin.id = "invoiceCoin"
	invoiceCoin.src = "https://art.pixilart.com/910a8762ee4a7c7.png"

	const invoiceCoin1 = document.createElement("img")
	invoiceCoin1.id = "invoiceCoin"
	invoiceCoin1.src = "https://art.pixilart.com/910a8762ee4a7c7.png"

	const invoiceCoin2 = document.createElement("img")
	invoiceCoin2.id = "invoiceCoin"
	invoiceCoin2.src = "https://art.pixilart.com/910a8762ee4a7c7.png"

	const invoiceCoin4 = document.createElement("img")
	invoiceCoin4.id = "invoiceCoin"
	invoiceCoin4.src = "https://art.pixilart.com/910a8762ee4a7c7.png"

	const totalGoombaCoins = document.createElement("p")
	totalGoombaCoins.id = "totalGoombaCoins"
	totalGoombaCoins.textContent = goombaSubTotal + "    "
	totalGoombaCoins.appendChild(invoiceCoin)
	invoiceDiv.appendChild(totalGoombaCoins)

	const totalBobombCoins = document.createElement("p")
	totalBobombCoins.id = "totalBobombCoins"
	totalBobombCoins.textContent = bobombaSubTotal + "    "
	totalBobombCoins.appendChild(invoiceCoin1)
	invoiceDiv.appendChild(totalBobombCoins)

	const totalCheepcheepCoins = document.createElement("p")
	totalCheepcheepCoins.id = "totalCheepcheepCoins"
	totalCheepcheepCoins.textContent = cheepcheepSubTotal + "    "
	totalCheepcheepCoins.appendChild(invoiceCoin2)
	invoiceDiv.appendChild(totalCheepcheepCoins)

	const invoiceTotalCoins = goombaSubTotal + bobombaSubTotal + cheepcheepSubTotal

	const invoiceTotal = document.createElement("p")
	invoiceTotal.id = "invoiceTotal"
	invoiceTotal.textContent = invoiceTotalCoins + "    "
	invoiceTotal.appendChild(invoiceCoin4)
	invoiceDiv.appendChild(invoiceTotal)

	const printInvoiceHere = document.getElementById("printInvoiceHere")
	printInvoiceHere.prepend(invoiceDiv)

	const pendingInvoiceGoomba = document.getElementById("goombaTally")
	pendingInvoiceGoomba.textContent = ""

	const pendingInvoiceBobomb = document.getElementById("bobombTally")
	pendingInvoiceBobomb.textContent = ""

	const pendingInvoiceCheepcheep = document.getElementById("cheepcheepTally")
	pendingInvoiceCheepcheep.textContent = ""

	const pendingInvoiceSubTotalGoomba = document.getElementById("goombaSubTotal")
	pendingInvoiceSubTotalGoomba.textContent = ""

	const pendingInvoiceSubTotalBobomb = document.getElementById("bobombSubTotal")
	pendingInvoiceSubTotalBobomb.textContent = ""

	const pendingInvoiceSubTotalCheepcheep = document.getElementById("cheepcheepSubTotal")
	pendingInvoiceSubTotalCheepcheep.textContent = ""

	const goombaCoins = document.getElementById("goombaCoins")
	goombaCoins.textContent = ""

	const bobombCoins = document.getElementById("bobombCoins")
	bobombCoins.textContent = ""

	const cheepcheepCoins = document.getElementById("cheepcheepCoins")
	cheepcheepCoins.textContent = ""

	function clearTallies() {
		for (let i = 0; i < mobData.length; i++) {
			mobData[i].currentTally = 0
		}
	}
	clearTallies(0)
})
