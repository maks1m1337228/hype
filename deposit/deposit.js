let deposit = 12000
const percent = 0.07
const target = 13500
const finalSum = deposit * (1 + percent / 12) ** 24
console.log(finalSum >= target ? 'Денег хватит' : 'Денег не хватит')
console.log('Остаток после покупки: ' + (finalSum - target) + '$')
