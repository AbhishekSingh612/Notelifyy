import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @ViewChild('form')
  form!: NgForm; 
  
  item:Item= {todoTitle:'',todoDescription:''};

  isFetching!:boolean;

  constructor(private service:ServiceService, private router:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.isFetching = true;
    var id = this.router.snapshot.params['id'];
    this.service.getItem(id).subscribe(data=>{
      this.isFetching = false;
      console.log(data);
      
      this.item = data;
    });
  }

  onSubmit(){
    if(this.form.invalid)
      return;
    this.item = { ...this.item,
      todoTitle: this.form.value.title,
      todoDescription: this.form.value.description
    }
    console.log(this.item);
    this.service.updateItem(this.item);
    this.route.navigate(['/']);
  }

}
