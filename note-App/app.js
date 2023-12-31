const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
//yargs.version('')

// create add command
 yargs.command({
    command: 'add',
    describe: 'Add a new project',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'

        },
        body: {
           describe: 'body title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
         // console.log('title: '+  argv.title)
         // console.log('body: '+  argv.body)

         notes.addNotes(argv.title, argv.body)
    }
 })

// create remove  command

 yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {

      title: {
            describe: 'remove a note',
            demandOption: true,
            type: 'string'

        }

    },
    handler: function (argv) {
         // console.log('remove the stated  note')
         notes.removeNote(argv.title)
    }
 })

// create a read command
 yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
         console.log('read a note')
    }
 })

 // create a list command

  yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
         console.log('list a note')
    }
 })

 // add remove read list   commands
//console.log(yargs.argv)
yargs.parse()
