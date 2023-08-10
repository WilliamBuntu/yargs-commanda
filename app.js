const yargs = require('yargs')

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

        }
    },
    handler: function (argv) {
         console.log('title: '+  argv.title)
    }
 })

// create remove  command
 yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
         console.log('remove the stated  note')
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
