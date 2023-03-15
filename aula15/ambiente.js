let num = [5, 8, 2, 9, 3]
num[3] = 6 // Adiciona o número 6 na posição 3 do array
num.push(1) // Adiciona o número 1 ao final
num.length // Conta o tamanho do array
num.sort() // Organiza na ordem crescente

console.log(num)
console.log(`O vetor tem  ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('o valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
