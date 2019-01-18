import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from '../Services/note.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  @Input() NoteData = { id: '', title: '', body: '', createdDate: '' };

  constructor(public noteService: NoteService) { }

  ngOnInit() {
  }
  postNote() {
    this.NoteData.createdDate = this.getTimeStamp();
   this.noteService.addNote(this.NoteData).subscribe((result) => {
      alert(result);
      this.NoteData = { id: '', title: '', body: '', createdDate: '' };
    }, (err) => {
      console.log(err);
      alert(err);
    });
  }
  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return date + ' ' + time;
  }
}
