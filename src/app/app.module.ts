import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NoteCreateComponent } from './note-create/note-create.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
const appRoutes: Routes = [
  {
    path: 'notes-create',
    component: NoteCreateComponent,
    data: { title: 'Note Create' }
  },
  {
    path: 'notes-edit/:id',
    component: NoteEditComponent,
    data: { title: 'Note Edit' }
  },
  /*{ path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }*/
];
@NgModule({
  declarations: [
    AppComponent,
    NoteCreateComponent,
    NoteEditComponent
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
