var NotesManager = (function ModuleFactory() {
    function addNote() {
        console.log('Add Note');
    }
    API = {
        addNote: addNote
    }
    return API;
})();
NotesManager.addNote();//module pattern using IIFE