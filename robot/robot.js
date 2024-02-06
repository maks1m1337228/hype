const answer = prompt('Сколько будет 7 + 15', '')
if (Number(answer) === 22 || answer ==='Я не робот') {
  console.log('Успех')
} else {
  console.log('Вы робот!')
}