import { Component, OnInit } from '@angular/core';
import {ChangeService} from './../change.service'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private serv:ChangeService) { }
 emp=[];
errorMsg:string;
  ngOnInit() {
    this.serv.getDetails().subscribe(data => this.emp =data,
            error =>this.errorMsg= error);
    console.log("child working");
  }

}