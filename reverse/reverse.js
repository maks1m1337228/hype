const arr = ['!', 'JS', 'люблю', 'Я']
const reverse = []

for (let i = arr.length - 1; i >= 0; i--) {
	reverse.push(arr[i]);
}
const str = reverse.join(' ');
console.log(str)


