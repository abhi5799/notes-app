const yargs=require('yargs')
const chalk=require('chalk')
const notes=require('./notes.js')

//add,remove,list,read
yargs.command({
    command:'add',
    describe: 'Add new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'Remove new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe: 'List new note',
    handler(){
        console.log(chalk.blue.inverse('Your notes!'))
        notes.listNote()
    }
})

yargs.command({
    command:'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)