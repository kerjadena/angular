import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { KrediturService } from './services/kreditur.service';
import { FormComponent }   from './share/form/form';
import { TableComponent }  from './share/table/table';
import { Creditur } from '../model/creditur.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormComponent,
    TableComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  parentData: Creditur[] = [];
  inputNama = '';
  inputUmur: number | null = null;
  inputJob = '';

  constructor(private krediturService: KrediturService) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.krediturService.getAll()
      .subscribe(data => this.parentData = data);
  }

  addCreditur(payload: Omit<Creditur,'id'>) {
    this.krediturService.create(payload)
      .subscribe(newItem => this.parentData.push(newItem));
  }

  deleteData(idx: number) {
    const item = this.parentData[idx];
    if (item.id) {
      this.krediturService.delete(item.id)
        .subscribe(() => this.parentData.splice(idx, 1));
    }
  }
}