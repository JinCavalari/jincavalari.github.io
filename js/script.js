let age = document.getElementById('age')

let aniver_aprox = new Date("2001-03-02")
let now = new Date()
let data = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
now = new Date(data);

// console.log(now)
// console.log(aniver_aprox)

let diff = now - aniver_aprox

diff = diff / (1000 * 60 * 60 * 24 * 365.205)
diff = Number.parseInt(diff)

age.textContent = diff.toString()
