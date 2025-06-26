import { Component } from '@angular/core';
import { Creditur } from '../model/creditur.interface';
import { TableComponent } from './share/table/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './share/form/form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TableComponent, FormComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  parentData: Creditur[] = [
    {
      name: "Dr. Levi Russel",
      age: 96,
      job: "Direct Data Producer",
    },
    {
      name: "Jimmy Gusikowski",
      age: 59,
      job: "Chief Quality Supervisor",
    },
    {
      name: "Johen",
      age: 49,
      job: "-"
    }
  ];
  inputNama: string = '';
  inputUmur: number|null = null;
  inputJob: string = '';

  addData() {
    if (this.inputNama && this.inputUmur !== null && this.inputJob) {
      this.parentData.push({ name: this.inputNama, age: this.inputUmur, job: this.inputJob });
      this.inputNama = '';
      this.inputUmur = null;
      this.inputJob = '';
    }
  }

  deleteData(idx: number) {
    this.parentData.splice(idx, 1);
  }

  addCreditur(creditur: Creditur) {
    this.parentData.push(creditur);
  }
}