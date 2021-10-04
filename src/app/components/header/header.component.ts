import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { 
      console.log("Componente Header creandose!")
  }

  ngOnInit(){
    console.log("Componente Header creado!")
  }

  nombre = "Alan"
  contador = 0
  arr=[1,2,3,4,5,6,7,8,9,10]

  cambiarNombre(){
    this.nombre = "Joel"
  }

  add(){    
    this.arr.push(Math.random())
    }

  suma(){
    //this.contador += 1 
    this.contador++
  }
}
