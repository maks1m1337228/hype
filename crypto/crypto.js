const password = 'password'
let codedPassword

function crypto() {
	const arr = password.split('')
	const arr1 = arr.slice(0, 4)
	const arr2 = arr.slice(4)
	arr1.reverse()
	arr2.reverse()
	const arr3 = arr1.concat(arr2)
	codedPassword = arr3.join('')
	console.log(codedPassword)
}

function check() {
	const arr = codedPassword.split('')
	const arr1 = arr.slice(0, 4)
	const arr2 = arr.slice(4)
	arr1.reverse()
	arr2.reverse()
	const arr3 = arr1.concat(arr2)
	codedPassword = arr3.join('')
	return codedPassword === password
}
crypto()
const compare = check()
console.log(compare);


