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
    let quantity1 = 0
    for (let operation of operations) {
        if (operation > 0) {
            avgProfit += operation;
            quantity++;
        }
        if (operation < 0) {
            avgExpense -= operation;
            quantity1++;
        }
    }
    return [avgProfit/quantity, avgExpense/quantity1]
}

const result = totalBalance(100);
console.log(result);
const zxc = avgCome();
console.log(zxc);
