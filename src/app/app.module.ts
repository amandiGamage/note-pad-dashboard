import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NoteCreateComponent } from './note-create/note-create.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
const appRoutes: Routes = [
  {
    path: 'notes-create',
    component: NoteCreateComponent,
    data: { title: 'Note Create' }
  },
  {
    path: 'notes-delete',
    component: DeleteNoteComponent,
    data: { title: 'Note Delete' }
  },
  {
    path: 'notes',
    component: AllNotesComponent,
    data: { title: 'Notes' }
  },
  {
    path: 'notes-edit',
    component: NoteEditComponent,
    data: { title: 'Note Edit' }
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { title: 'welcome to app' }
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NoteCreateComponent,
    NoteEditComponent,
    WelcomeComponent,
    AllNotesComponent,
    DeleteNoteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
