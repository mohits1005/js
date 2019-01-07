function NotesManager() {
    this.notes = [];
}
NotesManager.prototype.addNote = function (note) {
    this.$notes.prepend(
        $("<a href='#'></a>")
            .addClass("note")
            .text(note)
    );
};
NotesManager.prototype.addCurrentNote = function (evt) {
    var current_note = this.$note_input.val();
    if (current_note) {
        this.notes.push(current_note);
        this.addNote(current_note);
        this.$note_input.val("");
    }
};
NotesManager.prototype.loadData = function (data) {
    this.notes = this.notes.concat(data);
};
NotesManager.prototype.handleAddNote = function () {
    // console.log($note_input.val());
    this.addCurrentNote();
};
NotesManager.prototype.init = function (opts) {
    this.$notes = $(opts.notes);
    this.$add_note = $(opts.add_note);
    this.$note_input = $(opts.note_input);
    // build the initial list from the existing `notes` data
    var html = "";
    for (i = 0; i < this.notes.length; i++) {
        html += "<a href='#' class='note'>" + this.notes[i] + "</a>";
    }
    this.$notes.html(html);
    // listen to "add" button
    this.$add_note.bind("click", this.handleAddNote.bind(this));
};
var notes = new NotesManager();
notes.loadData([
    "This is the first note I've taken!",
    "Now is the time for all good men to come to the aid of their country.",
    "The quick brown fox jumped over the moon."
]);
$(document).ready(
    function () {
        notes.init({
            notes: "#notes",
            add_note: "#add_note",
            note_input: '#note'
        })
    }
);