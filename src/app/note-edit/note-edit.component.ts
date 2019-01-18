import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from '../Services/note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  @Input() searchId = '';
  @Input() NoteData = { id: '', title: '', body: '', createdDate: '' };
  constructor(public noteService: NoteService) { }

  ngOnInit() {
  }
  editNote() {
    this.NoteData.createdDate = this.getTimeStamp();
    this.noteService.updateNote(this.NoteData.id, this.NoteData).subscribe((result) => {
      alert(result.message);
      this.NoteData = { id: '', title: '', body: '', createdDate: '' };
    }, (err) => {
      console.log(err);
    });
  }
  searchNoteById() {
    this.noteService.getNote(this.searchId).subscribe((result) => {
      this.NoteData = { id: result.data.id, title: result.data.title, body: result.data.body, createdDate: result.data.createdDate };
    }, (err) => {
      console.log(err);
      alert (err);
    });
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return date + ' ' + time;
  }
}
