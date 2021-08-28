import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseURL: string = "https://mytodolist-angular-app.herokuapp.com/";

  constructor(private http: HttpClient) {
  }

  getList():Observable<Item[]>{
    return this.http.get<Item[]>(this.baseURL+'showList');
  }

  createItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.baseURL+'create',item);
  }

  updateItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.baseURL+'update',item);
  }

  getItem(itemId: number): Observable<Item>{
    return this.http.get<Item>(this.baseURL+'/showItem/'+itemId);
  }

  deleteItem(itemId: number): Observable<boolean>{
    return this.http.get<boolean>(this.baseURL+'/delete/'+itemId);
  }
}
