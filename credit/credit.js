const ageAnswer = prompt('Сколько вам лет?', '')
const job = prompt('Вы работаете?', '')
const moneyAnswer = prompt('Сколько у вас денег', '')
const price = 2000
const age = Number(ageAnswer)
const money = Number(moneyAnswer)

function userCheck(age, job, money) {
	if (age > 24 && job == 'Да') {
		money += 500
	} else if (age > 24) {
		money += 100
	}
	return money >= price
}

console.log(userCheck(age, job, money))
