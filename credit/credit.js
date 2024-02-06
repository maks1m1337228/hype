const age = 24
const hasJob = true 
const price = 3000
let curBalance = 1500

function creditCalc(age, hasJob) {
	switch (true) {
		case hasJob && age >= 24:
			curBalance += 500
		case !hasJob && age >= 24: 
		  curBalance += 100
		default: 
		return false
	}  
}	

function userCheck(age, price, hasJob, ) {
 const creditSum =	creditCalc(age, hasJob)
	return curBalance >= price
}

console.log(userCheck(age, price , hasJob))