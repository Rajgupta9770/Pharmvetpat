import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'chem-japan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './japan.component.html',
  styleUrl: './japan.component.css'
})
export class JapanComponent {

  isDropdownVisible: boolean = false;

  isDropdownVisible2: boolean =false;

  toggleDropdown()
   {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  toggleDropdown2()
  {
    this.isDropdownVisible2= !this.isDropdownVisible2;
  }
}
