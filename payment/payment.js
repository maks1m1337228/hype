const perHour = 80
const goTime = 11
let orderTime = 40
let manage = orderTime / 5 + 2
let price = manage * perHour
let isTrue = true
let isFalse = false
if (manage >= goTime) {
	console.log(isFalse)
} else {
	console.log(isTrue)
}
console.log(price)
