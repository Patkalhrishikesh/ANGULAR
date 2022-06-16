import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //  template: `<app-server></app-server>
  //             `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers =false;
  serverCreatedStatus = 'No server Created';
  serverName ='Test Server';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServers = true;
    },4000)
  }

  onCreateServer(){
    return this.serverCreatedStatus = "server is created ..!"+this.serverName;

  }

  onUpdateServerName(event: any){
    console.log(event);
     this.serverName = event.target.value;
    

  }


  ngOnInit(): void {
  }

}
