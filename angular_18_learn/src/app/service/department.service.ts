import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  public onRoleChange$ : Subject<string> = new Subject<string>;
  
  public role$ : BehaviorSubject<string> = new BehaviorSubject<string>("");
  

  addTwoNo(num1: number, num2: number) {
    debugger; 
    return num1 +  num2;
  }
}