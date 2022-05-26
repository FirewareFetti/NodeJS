// const sum = function(number1, number2){
//     total = number1 + number2
//     console.log(`o número 1 é ${number1}`)
//     console.log(`o número 2 é ${number2}`)
//     console.log(`o total é ${total}`)
//     return total
// }

// sum(2,3)

// console.log(`a some é ${total}`)

// function sayMyName(name) {
//     console.log('antes de executar a funcao callback')
//     name()
//     console.log('depois de executar a callback')
// }

// sayMyName (
//     () => {
//         console.log('estou em uma callback')
//     }
// )

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())

let name2 = new String("Gabriel")

console.log(name2)

console.log(Number('9') + 5)