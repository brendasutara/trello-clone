import { Component, Inject } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock, faEye, faPlus, faPaperclip, faWindowMaximize, faFolder, faArrowRight, faCopy, faBox, faBoxArchive, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { ToDo } from '../../../../models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  //iconos
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faEye = faEye;
  faPlus = faPlus;
  faPaperclip = faPaperclip;
  faWindowMaximize = faWindowMaximize;
  faFolder = faFolder;
  faArrowRight = faArrowRight;
  faCopy = faCopy;
  faBox = faBox;
  faBoxArchive = faBoxArchive;
  faShareNodes = faShareNodes;

  todo: ToDo;

  constructor (
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
  ) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close()
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta })
  }
}

