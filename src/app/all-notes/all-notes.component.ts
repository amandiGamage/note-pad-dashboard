import { Component, OnInit } from '@angular/core';
import {Note} from '../models/Note';
import {NoteService} from '../Services/note.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  notes: any = [];
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
}
