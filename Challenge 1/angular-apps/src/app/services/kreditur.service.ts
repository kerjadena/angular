import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Creditur } from '../../model/creditur.interface';

@Injectable({
  providedIn: 'root'
})
export class KrediturService {
  private apiUrl = 'https://686202e696f0cc4e34b8055a.mockapi.io/krediturpink/kreditur';

  constructor(private http: HttpClient) {}

  /** GET all kreditur */
  getAll(): Observable<Creditur[]> {
    return this.http.get<Creditur[]>(this.apiUrl);
  }

  /** POST new kreditur */
  create(data: Omit<Creditur,'id'>): Observable<Creditur> {
    return this.http.post<Creditur>(this.apiUrl, data);
  }

  /** DELETE by id */
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}