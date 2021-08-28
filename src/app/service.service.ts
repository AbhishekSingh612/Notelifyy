import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { HttpServiceService } from "./http-service.service";
import { Item } from "./item.model";

@Injectable({providedIn:"root"})
export class ServiceService{
    list: Item[] = [];
    list$ = new BehaviorSubject<Item[]>([]);

    isFetching = true;
    isCreating = false;
    isEmpty = true;
    isEmpty$ = new BehaviorSubject<boolean>(true);

    constructor(private http: HttpServiceService) {
      this.loadList();
    }

    loadList(){
      //loading the list of todo from the server 
      this.http.getList().subscribe(
        (data)=>{
          this.isFetching = false;
          if(data.length>0) 
            {
              this.isEmpty = false;
              this.isEmpty$.next(this.isEmpty);
            }
          this.list = data;
          this.list$.next(this.list);
        }
      );
    }

    createItem(item: Item){
      this.http.createItem(item).subscribe(data=>{
        this.list.push(data);
        this.list$.next(this.list);
        if(this.list.length>0) 
        {
          this.isEmpty = false;
          this.isEmpty$.next(this.isEmpty);
        }
      });
    }

    updateItem(item: Item){
      this.http.updateItem(item).subscribe(data=>{
        var index = this.list.map(obj => obj.itemId).indexOf(data.itemId);
        this.list.splice(index,1,data);
        this.list$.next(this.list);
      });
    }

    deleteItem(itemid: number){
      this.http.deleteItem(itemid).subscribe(data=>{
        var index = this.list.map(obj => obj.itemId).indexOf(itemid);
        this.list.splice(index,1);
        if(this.list.length==0) 
            {
              this.isEmpty = true;
              this.isEmpty$.next(this.isEmpty);
            }
        this.list$.next(this.list);
      });
    }

    getItem(itemId: number){
      return this.http.getItem(itemId);
    }

}