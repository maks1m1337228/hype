const password = 'qwe123'

function getTwoPartsOfPassword(password) {
  const middle = Math.floor(password.length / 2)
  const leftPart = password.slice(0, middle)
  const rightPart = password.slice(middle)

  return [leftPart, rightPart]
}

function cryptPassword(password) {
  let [leftPart, rightPart] = getTwoPartsOfPassword(password);
	[leftPart, rightPart] = [rightPart, leftPart]
  leftPart = leftPart.split('').reverse().join('');
  rightPart = rightPart.split('').reverse().join('');
  return leftPart + rightPart;
}

const comparePassword = (cryptedPassword, password) =>
  cryptedPassword === cryptPassword(password)

const cryptedPassword = cryptPassword(password)

const res = comparePassword('321ewq', password)

console.log(res)