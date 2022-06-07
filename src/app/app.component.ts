import { Component, OnInit } from '@angular/core';
import HelperService from 'src/utils/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularTu';
  users: Array<String> = [];

  public constructor(
    public helperService: HelperService
  ){};

  public async ngOnInit(): Promise<void> {
      this.users = await this.getUserList();
      console.log("users : ", this.users);
  }

  public hello(name: string): string{
    return `Hello ${name}`;
  }

  public async getUserList(): Promise<Array<String>> {
    return this.helperService.getUserList();
  }

  public deleteUser(){
    
  }
}
