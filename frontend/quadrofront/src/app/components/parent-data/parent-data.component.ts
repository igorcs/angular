import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
 // standalone: true,
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';

  @Input() userData: any = { email: '', role: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
