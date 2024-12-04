import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, data

  courseName: string = "Angular 18";

  stateName: string = "Telangana";

  inputType="radio";

  myClassName: string = "bg-primary"; 

  rollNo: number = 123;

  isIndian: boolean = true;

  currentDate: Date = new Date();

  firstName = signal("Sree J");

  constructor(){

  }

  changeCourseName(){
    this.courseName="React Js";
    this.firstName.set("Raghava");
  }

  showAlert(message: string){
    alert(message)
  }
}
