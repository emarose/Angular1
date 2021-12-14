import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any="Ema";
  number:any="";
  guess:any="";
  modificado:any=false;
  constructor() { 
  }

  adivinarNumero(){
     if ( this.number == 5){
      this.modificado=true;
      this.guess = "Ganaste!";
    }else{
      this.guess = "Intenta de nuevo";
    } 
  }

  ngOnInit(): void {
    
  }

}
