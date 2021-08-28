import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('form')
  form!: NgForm; 

  item!:Item;

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.isCreating = true;
  }

  onSubmit(){    
    if(this.form.invalid)
      return;
    this.item = {
      todoTitle:this.form.value.title,
      todoDescription: this.form.value.description
    };
    this.service.createItem(this.item);
    this.service.isCreating = false;
    this.router.navigate(['/']);
  }

}
