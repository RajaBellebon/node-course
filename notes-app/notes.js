const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return `My notes...`
}

const addNotes = (title, body) => {
  const notes = loadNotes();
  
  const duplicateNotes = notes.filter(note => note.title === title)

  if(duplicateNotes.length === 0 ){
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log("New notes added");
  } else {
    console.log("Note title taken!");
  }
  
}

const removeNotes = (title) => {
  const notes = loadNotes();

  const noteToKeep = notes.filter(note => note.title !== title);
  
  if(notes.length > noteToKeep.length) {
    console.log(chalk.green.inverse(`Note with title: ${title} has been removed`));
    saveNotes(noteToKeep);
  }
  else {
    console.log(chalk.red.inverse("No Note found!"))
  }
}

const loadNotes = () => {
  try {
    return JSON.parse((fs.readFileSync('./notes.json')).toString());
  } catch(e){
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('./notes.json', JSON.stringify(notes))
}

const listNotes = () => {
  console.log(chalk.green.inverse('Your notes!'))
  const notes = loadNotes();
  return notes.length > 0 ? notes.map(note => console.log(chalk.greenBright(`${note.title} is found in notes.json`))): console.log(chalk.redBright('No notes found!'));
}

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = [notes.filter(note => note.title === title)]
  return notes.length > 0 ? console.log(chalk.bgBlue(`${noteToRead.body}`)): console.log(chalk.redBright(`No note with ${title} found in notes.json!`));
}

module.exports = {
  addNotes,
  getNotes,
  removeNotes,
  listNotes,
}