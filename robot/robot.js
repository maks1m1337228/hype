const answer = prompt('Сколько будет 7 + 15', '')
answer = Number(answer)
if (answer === '22' || answer ==='Я не робот') {
	console.log('Успех')
} else {
	console.log('Вы робот!')
}
