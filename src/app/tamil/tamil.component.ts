import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tamil",
  templateUrl: "./tamil.component.html",
  styleUrls: ["./tamil.component.css"],
})
export class TamilComponent implements OnInit {
  // Enter object and array 1st call object 2nd call array
  userObj = {
    userName: "",
    userAge: null,
    userAddress: "",
  };
  userArr = [];
  constructor() {}

  ngOnInit() {}
  // Enter in object then showing a arrayinside object pusing method
  clickForm() {
    console.log(this.userObj);
    this.userArr.push(this.userObj);
    console.log(this.userArr);
    // function inga call panita
    this.clearObj();
  }
  // buttonla oru icon set pani data clear pnura function
  clearRow(i, useIndex) {
    console.log("hi tamil");
    console.log(i);
    this.userArr.splice(useIndex);
  }
// now iam create data value clear function using
  clearObj() {
    this.userObj = {
      userName: "",
      userAge: null,
      userAddress: "",
    };
  }
}
