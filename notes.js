const fs = require('fs')
const chalk=require('chalk')



const addNote= (title,body)=>
{
    const notes= loadNote()
    const duplicate=notes.find((note)=>note.title===title)
    if(!duplicate){
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.green('New note added!'))
    }
    else{
        console.log(chalk.red('Note title already taken!')) 
    }
    
}
const saveNote=(notes)=>
{
    const data=JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}
const loadNote= ()=>
{
    try
    {
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
}
const removeNote = (title)=>
{
    const notes = loadNote()
    const tokeep=notes.filter((note)=>note.title!==title)
    if(tokeep.length===notes.length)
    {
        console.log(chalk.red.inverse('No Note found!'))
    }
    else
    {
        console.log(chalk.green.inverse('Note removed! '))
        saveNote(tokeep)
    }
}
const listNote = ()=>
{
    const notes=loadNote()
    notes.forEach((note) =>{
        console.log(note.title)
    })
}
const readNote= (title)=>
{
    const notes=loadNote()
    const note=notes.find((note)=>note.title===title)
    if(note)
    {
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.green.inverse(note.body))
    }
    else 
    {
        console.log(chalk.red.inverse('No such Note found'))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}