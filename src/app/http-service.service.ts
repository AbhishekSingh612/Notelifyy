import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseURL: string = "https://crud-example.clabhi8.workers.dev/api/items";

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseURL);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseURL, item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.baseURL + '/' + item.id, item);
  }

  getItem(itemId: string): Observable<Item> {
    return this.http.get<Item>(this.baseURL + '/' + itemId);
  }

  deleteItem(item: Item): Observable<boolean> {
    return this.http.delete<boolean>(this.baseURL + '/' + item.id);
  }
}
