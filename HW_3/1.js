"use strict";

class Employee {
    constructor(name) {
      this.name = name;
    }
    
    displayInfo() {
      console.log("Name: " + this.name);
    }
  }
  
  // Класс Manager, наследует Employee
  class Manager extends Employee {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
    
    displayInfo() {
      console.log("Name: " + this.name);
      console.log("Department: " + this.department);
    }
  }
  
  // Пример использования классов
  const employee = new Employee("John Smith");
  employee.displayInfo();
  
  const manager = new Manager("Jane Doe", "Sales");
  manager.displayInfo();
  