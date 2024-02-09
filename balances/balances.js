const operations = [1000, -700, 300, -500, 10000]
const startBalance = 100

function calculation() {
	let finalBalance = startBalance
  for (let i = 0; i < operations.length; i++ ) {
      finalBalance += operations[i]
      if (finalBalance < 0) {
        return false
      }
  }
	console.log('Итоговый баланс: ' + finalBalance + '$');

	let avgProfit = 0
  let quantity1 = 0
	for (let i = 0; i < operations.length; i++) {
		if (operations[i] > 0 ) {
			avgProfit += operations[i]
			quantity1++
		}
	}
	console.log('Средний доход: ' + avgProfit/quantity1 + '$');

	let avgExpense = 0
  let quantity2 = 0
	for (let i = 0; i < operations.length; i++) {
		if (operations[i] < 0 ) {
			avgExpense -= operations[i]
			quantity2++
		}
	}
	console.log('Средний расод: ' + avgExpense/quantity2 + '$');
	
  return true    
}

const result = calculation()
console.log(result);
