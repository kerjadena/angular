import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Creditur } from '../../../model/creditur.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class TableComponent {
  @Input() childrenData: Creditur[] = [];
  @Output() deleteRow = new EventEmitter<number>();

  onDelete(idx: number) {
    this.deleteRow.emit(idx);
  }
}