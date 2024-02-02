const addressLat = 10
const addressLong = 20
const positionLat = 30
const positionLong = 15
let distance = Math.sqrt(Math.pow((positionLat - addressLat), 2) + Math.pow((addressLong - positionLong), 2))
console.log(distance)
