
import { Component,Input,OnInit } from "@angular/core";

@Component({
  selector:"app-students",
  templateUrl:"students.component.html"
})
export class StudentsComponent implements OnInit{


  title : string = "Hello from students"
  @Input() 
  bgClass:any;
  @Input() 
  textClass:any;

  ngOnInit(){
    console.log("Students init hook")
  }

}
