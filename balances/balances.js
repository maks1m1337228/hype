const operations = [1000, -7000, 300, -500, 10000];

function totalBalance(startBalance) {
    let finalBalance = startBalance;
    for (let operation of operations) {
        finalBalance += operation;
        if (finalBalance < 0) {
            return false;
        }
    }
    console.log(`Итоговый баланс: ${finalBalance}$`);
    return true;
}

function avgCome() {
    let quantity = 0;
    let avgProfit = 0;
    let avgExpense = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] > 0) {
            avgProfit += operations[i];
            quantity++;
        }
        if (operations[i] < 0) {
            avgExpense -= operations[i];
            quantity++;
        }
    }
    console.log(`средний доход: ${avgProfit / quantity}$`);
    console.log(`средние расходы: ${avgExpense / quantity}$`);
}

const result = totalBalance(100);
console.log(result);
avgCome();

