import { Component } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { INFORMAZIONI_PIZZE } from './INFORMAZIONI_PIZZE'; // importazione array di pizze[] del file esterno
import { Pizza } from './pizza/pizza.model'; // importiamo l'interfaccia dal MODEL contenente il TYPE della `Pizza`


@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent], // importiamo i FIGLI 
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})



export class PizzeriaComponent {

  // importazione dell'array di pizze da INFORMAZIONI_PIZZE, che poi passeremo in @Input al FIGLIO `lista-pizze`
  pizze: Pizza[] = INFORMAZIONI_PIZZE;



  // *** Proprietà per gestire la pizza cliccata ***
  //l'@Output da `lista-pizzeria` è andato a buon fine , assegnato il valore della pizza cliccata
  pizzaScelta!: string;

  // *** Metodo per gestire eventi dal figlio ***
  // Questo metodo viene chiamato quando il FIGLIO (lista-pizze) emette l'evento `selectPizza`.
  onSelectPizza(pizza: Pizza) {
    console.log(pizza.nome);
    this.pizzaScelta = "hai scelto la pizza: " + pizza.nome;
  }

}