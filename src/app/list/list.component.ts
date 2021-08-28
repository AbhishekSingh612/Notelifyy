import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  isFetching!:boolean;
  isEmpty:boolean =  true;

  list:Item[] = [];

  constructor(public service: ServiceService) {  }

  ngOnInit(): void {
    this.isFetching = this.service.isFetching;

      this.service.list$.subscribe(data=>{
        this.isFetching = this.service.isFetching;
        this.list = data;
        //console.log(data);
        
      });

      this.service.isEmpty$.subscribe(data=>{
        this.isEmpty = data;
        console.log(this.isEmpty);
        
      });
    
  }

  onDelete(itemId : any){
    console.log(itemId);
    this.service.deleteItem(itemId);
  }

}
