import { Component, OnInit } from '@angular/core';
import {ChangeService} from '../change.service'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
 employee=[];
errorMsg:string;

  constructor(private serv:ChangeService) { }
  ngOnInit(){
    this.serv.getDetails().subscribe( data => this.employee=data,
                      error =>this.errorMsg= error);
    console.log("Working in parent");
  }
  

}