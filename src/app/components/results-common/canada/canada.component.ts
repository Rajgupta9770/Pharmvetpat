import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'chem-canada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canada.component.html',
  styleUrl: './canada.component.css'
})
export class CanadaComponent {
  isDropdownVisible: boolean = false;

  toggleDropdown()
   {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  isDropdownVisible2: boolean = false;
  toggleDropdown2()
   {
    this.isDropdownVisible2 = !this.isDropdownVisible2;
  }

 
}
