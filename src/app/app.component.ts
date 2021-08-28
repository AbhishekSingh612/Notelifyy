import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item.model';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TodoListApp2';

  constructor(public router: Router) { 
  }

  ngOnInit(){
  }


}
