import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import './main.html';

Template.body.helpers({ //use a template
  /*notes:[
          {text:"First"},
          {text:"Second"},
          {text:"Last"}
  ]*/
  notes(){//function called notes
          return Notes.find({});
  }
});
//
// Tracker.autorun(function () {
//   let cursor = NotesIndex.search('Walden') // search all docs that contain "Marie" in the name or score field
//
//   console.log(cursor.fetch()) // log found documents with default search limit
//   console.log(cursor.count()) // log count of all found documents
// })

Template.add.events({
  'submit .add-form':function(){
    event.preventDefault();
    // console.log("prevented");

    const target=event.target;
    const text=target.text.value; //get the text from the field
    console.log(text);

    Notes.insert({ //insert the text into a node
      text:text,
      createdAt: new Date()
    });
    target.text.value=''; //clear the field to get ready for closing

    $('#modal1').modal('close'); //close the modal

    return false;
  }
});

Template.search.events({
  'submit .add-form':function(){
    event.preventDefault();
    // console.log("prevented");
    const target=event.target;
    const some=target.text.value; //get the text from the field
    console.log(some);
    target.text.value=''; //clear the field to get ready for closing

    $('#modal1').modal('close'); //close the modal

    return false;
  }
});
// Template.search.helpers({
//   notesIndex: () => NotesIndex, // instanceof EasySearch.Index
// })
