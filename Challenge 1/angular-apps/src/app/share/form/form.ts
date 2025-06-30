import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Creditur } from '../../../model/creditur.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class FormComponent {
  @Output() addCreditur = new EventEmitter<Omit<Creditur,'id'>>();
  nama = '';
  umur: number | null = null;
  job = '';

  submit(form?: any) {
    if (
      this.nama.length >= 3 &&
      this.umur !== null && this.umur > 0 &&
      this.job.length >= 2
    ) {
      this.addCreditur.emit({ name: this.nama, age: this.umur, job: this.job });
      this.nama = '';
      this.umur = null;
      this.job = '';
      if (form) form.resetForm();
    }
  }
}