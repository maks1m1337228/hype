const operations = [1000, -700, 300, -500, 10000];

function totalBalance(startBalance) {
    let finalBalance = startBalance;
    for (let operation of operations) {
        finalBalance += operation;
    }
    console.log(`Итоговый баланс: ${finalBalance}$`);
    return finalBalance > 0
    
}

function avgCome() {
    let quantity = 0;
    let avgProfit = 0;
    let avgExpense = 0;
    let negativeQuantity = 0
    for (let operation of operations) {
        if (operation > 0) {
            avgProfit += operation;
            quantity++;
        }
        if (operation < 0) {
            avgExpense -= operation;
            negativeQuantity++;
        }
    }
    return [avgProfit/quantity, avgExpense/negativeQuantity]
}

const result = totalBalance(100);
console.log(result);
const zxc = avgCome();
console.log(zxc);
