import { Mongo } from 'meteor/mongo';

export const Notes=new Mongo.Collection( 'notes' );//creates a  new mongo collection and exports it
/********************************
                    For search
********************************/

// import { Index, MinimongoEngine } from 'meteor/easy:search'
// // On Client and Server
// const NotesIndex = new Index({
//   collection: Notes,
//   fields: text,
//   engine: new MinimongoEngine(),
// });
