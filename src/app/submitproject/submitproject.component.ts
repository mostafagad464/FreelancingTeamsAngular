import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitproject',
  templateUrl: './submitproject.component.html',
  styleUrls: ['./submitproject.component.css']
})
export class SubmitprojectComponent implements OnInit {

  constructor() { }
  IsNotCompleted:boolean=true;
  ngOnInit(): void {
  }
  ADD(){
this.IsNotCompleted=false;
  }
}
