import { Component, OnInit } from '@angular/core';
import {NoteService} from '../Services/note.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {
  notes: any;
  constructor(public noteService: NoteService) { }

  ngOnInit() {
    this.getAllNotes();
  }
  getAllNotes() {
    this.notes = [];
    this.noteService.getNotes().subscribe((data: {}) => {
      console.log(data);
      this.notes = data;
    });
  }
    deleteN(id) {
      this.noteService.deleteNote(id).subscribe(res => {
        }, (err) => {
          console.log(err);
        }
      );
    }
}
