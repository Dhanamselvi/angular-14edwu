import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :any[]; 
                     
  constructor() {
    this.employees = [
                      {code : "emp01",name:'John',gender:"Male",annualSalary:5000000,dateOfBirth:"23/03/2000"},
                      {code : "emp02",name:'Peter',gender:"Male",annualSalary:6000000,dateOfBirth:"23/04/2001"},
                      {code : "emp03",name:'Rosi',gender:"Female",annualSalary:7000000,dateOfBirth:"23/06/2002"},
                      {code : "emp04",name:'Princy',gender:"Female",annualSalary:8000000,dateOfBirth:"23/05/2003"},
                     ];
   }

   getNewEmployees(){
     this.employees = [
                      {code : "emp01",name:'John',gender:"Male",annualSalary:5000000,dateOfBirth:"23/03/2000"},
                      {code : "emp02",name:'Peter',gender:"Male",annualSalary:6000000,dateOfBirth:"23/04/2001"},
                      {code : "emp03",name:'Rosi',gender:"Female",annualSalary:7000000,dateOfBirth:"23/06/2002"},
                      {code : "emp04",name:'Princy',gender:"Female",annualSalary:8000000,dateOfBirth:"23/05/2003"},
                      {code : "emp05",name:'Nance',gender:"Female",annualSalary:9000000,dateOfBirth:"23/07/2003"},
                     ];
   };
   tracked(index:number,employee:any):string{
     return employee.code;
   }

  ngOnInit() {
  }

}