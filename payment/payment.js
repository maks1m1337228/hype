const perHour = 80
const freeTime = 11
const orderTime = 40
const availableHours = (freeTime - 2) * 5
console.log(availableHours > orderTime ? 'Успею' : 'Не успею')
console.log("Стоимость проекта: " + orderTime * perHour + "$")
