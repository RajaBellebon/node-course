const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// yargs version
yargs.version("1.1.0");

// Create an add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// Create a remove command
yargs.command({
  command: "remove",
  describe: "Remove an existing note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  }
});

// Create a read command
yargs.command({
  command: "read",
  describe: "Read an existing note",
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// Create a list command
yargs.command({
  command: "list",
  describe: "List existing note(s)",
  handler() {
    notes.listNotes();
  }
});

// if(command === "add"){
//   console.log(chalk.green("Create a note!"))
// } else if(command === "remove") {
//   console.log(chalk.orange('Remove a note!'))
// }
// else{
//   console.log(chalk.redBright("I don't get the command!"))
// }

yargs.parse();
