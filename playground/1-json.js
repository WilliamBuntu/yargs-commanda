
const fs = require('fs')
// const book = {
//     title:'the enemy called average',
//     authour: 'Buntu william P.B.D'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

////////////////////////////////////////////////////////////////////////
// console.log(bookJSON )
// console.log( book.title )
// console.log( book.authour)


// reading a file

const readBuffer = fs.readFileSync('1-json.json')
const dataJSON = readBuffer.toString()
const realDate = JSON.parse( dataJSON)
 console.log(readBuffer)
 console.log(dataJSON)
 console.log(realDate)


