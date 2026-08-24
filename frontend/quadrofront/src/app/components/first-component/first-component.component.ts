/*import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

}*/






import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
 // standalone: true,
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name = 'Igor';
  idade = 44;
  cargo = 'Desenvolvedor';

  constructor() { }

  ngOnInit(): void {
  }

}
