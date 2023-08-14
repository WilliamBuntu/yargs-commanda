const fs = require('fs')
const getNotes = function (){
return 'your notes '
}

const addNotes = function (title, body) {
      const notes = loadNotes()
     const duplicateNotes = notes.filter(function (note) {
               return note.title === title
     })

     if (duplicateNotes.length === 0) {

        notes.push({
        title: title,
        body: body
      })

      saveNotes(notes)
      console.log('New notes added')

     }else {
        console.log('your note title is taken')
     }


}

const removeNote = function (title) {

    //console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter(note =>{
        return note.title !== title
    }
        )
        saveNotes(notesToKeep)
}

const saveNotes = function (notes) {

   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function () {

    try {

        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    const notes = JSON.parse(dataJSON)

    return notes

    } catch (e) {
           return []
    }


}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote:removeNote
}
