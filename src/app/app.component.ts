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
  isLeft: boolean =  false;
  isShowPopup: boolean = false;

  public constructor(
    public helperService: HelperService
  ){};

  public async ngOnInit(): Promise<void> {
      // this.users = await this.getUserList();
      // console.log("users : ", this.users);

      const resulatWsA = await this.helperService.getA(this.isLeft);
      let resultWsB;
      console.log("dsjfkqsjfksqjkfhqdsfhjkf sdfjksqdgfjkq");
      if(resulatWsA == "A1"){
        resultWsB = await this.helperService.getB(true);
      }else if(resulatWsA == "A2"){
        resultWsB = await this.helperService.getC(false);
      }

      let resultWsC;
      if(resultWsB == "B1"){
        resultWsC = await this.helperService.getC(true);
      }else if(resultWsB == "C2"){
        resultWsC = await this.helperService.getD(false);
      }

      console.log(
        "resulatWsA : ", resulatWsA,
        "resultWsB : ", resultWsB,
        "resultWsC : ", resultWsC
      );
  }

  public hello(name: string): string{
    return `Hello ${name}`;
  }

  public async getUserList(): Promise<Array<String>> {
    return this.helperService.getUserList();
  }

  public deleteUser(){
    
  }

  public clickToShowPopup(){
    console.log("this.isShowPopup");
    this.isShowPopup = !this.isShowPopup;
  }
}
