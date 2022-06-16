import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warninig-alert',
  templateUrl: './warninig-alert.component.html',
 // styleUrls: ['./warninig-alert.component.css']
 styles : [`
 p{
   padding: 20px;
   background-color: mistyrose;
   border: 1px solid red;


 }
 `]
})
export class WarninigAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
