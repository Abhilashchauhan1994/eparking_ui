import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  showMenu = false;
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  menuToggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    return this.isOpen;
 }

}
