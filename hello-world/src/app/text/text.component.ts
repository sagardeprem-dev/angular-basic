import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-text',
  template:`

  <h2 [class]="successClass">
   Welcome {{name}}
   </h2>
   {{2*2}}
   {{name.length}}
   {{greetUser()}}
   <input [id]="myId" type="text" value="duh">
   <input [disabled]="isDisabled" type="text" value="duh">
   <input bind-disabled="isDisabled" type="text" value="duh">
   <h2 [class.text-danger]="hasError">Error!</h2>
   <h2 [ngClass]="messageClasses">Blah</h2>
   <h2 [style.color]=" hasError ? 'orange':'blue'  ">Style binding</h2>
   <h2 [style.color]="highlightColor">Style binding</h2>
   <h2 [ngClass]="titleStyles">Style binding</h2>
   {{greeting}}
   <button (click)="onClick()">Greet </button>
   <button (click)="onClick1($event)">Greet1 </button>
   {{greeting}}
   <input #myInput type="text">
   <button (click)="logMessage(myInput.value)"> Log</button>
   <input [(ngModel)]="name" type="text">
   {{name}}

   <h2 *ngIf = "true; then thenBlock else elseBlock" >ngIf</h2>
   <ng-template #thenBlock>
    <h2>Then</h2>
   </ng-template>
   <ng-template #elseBlock>
    <h2>Hidden</h2>
   </ng-template>

   <div [ngSwitch]="color">
   <div *ngSwitchCase="'red'">Red color</div>
   <div *ngSwitchCase="'blue'">Blue color</div>
   <div *ngSwitchCase="'green'">Green color</div>
   <div *ngSwitchDefault>Pick again</div>
   </div>
  
   <div *ngFor="let color of colors; index as i">
      <h2>{{color}} indexed {{i}}</h2>
   </div>

   <h2>Parent data received {{someParentData}}</h2>

   <button (click)="fireEvent()">Fire event</button>
   
   <h2>{{name | uppercase}}</h2>
   <h2>{{message| titlecase}}</h2>
   <h2>{{name| slice:1:2}}</h2>
   <h2>{{person | json}}</h2>

   <h2>{{2.44| number:'2.1-2'}}</h2>
   <h2>{{2.44| percent}}</h2>
   <h2>{{2.44| currency}}</h2>
   <h2>{{2.44| currency:'INR'}}</h2>
   <h2>{{2.44| currency:'INR':'code'}}</h2>
   <h2>{{date}}</h2>
   <h2>{{date| date:'short'}}</h2>
   <h2>{{date| date:'shortDate'}}</h2>
   <h2>{{date| date:'mediumDate'}}</h2>
   <h2>{{date| date:'longDate'}}</h2>
   <h2>{{date| date:'shortTime'}}</h2>
   `
   ,
  styles:[`
    .text-success{
      color: green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TextComponent implements OnInit {

  // @Input() public parentData;
  @Input('parentData') public someParentData;
  public name = "Prem";
  public myid = "testId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public color = "";
  public highlightColor = 'yellow';
  public colors = ["red", "yellow", "green", "blue"];
  public message = "Welcome to my app";
  public person = {
    "name": "Karl",
    "age":29
  };
  public date = new Date();

  @Output() public childEvent = new EventEmitter()

  fireEvent(){
    this.childEvent.emit("Yo")
  };
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-special" : this.isSpecial,
    "text-danger" : this.hasError
  };
  
  public titleStyles = {
    color: 'orangered',
    fontStyle: 'italic'
  }
  public greeting = "";
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hey" + this.name
  }
  onClick(){
    console.log("Well, well, well")
    this.greeting = "Welcome"
  }
  onClick1(event){
    console.log(event)
    this.greeting = "Welcome"
  }
  logMessage(msg){
    console.log(msg)
  }

}
