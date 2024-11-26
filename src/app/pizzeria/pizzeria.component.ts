import { Component } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { INFORMAZIONI_PIZZE } from './INFORMAZIONI_PIZZE'; // importazione array di pizze[]
import { Pizza } from './pizza/pizza.model'; // qua importiamo l'interfaccia dal MODEL


@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})



// contiene i dati sulle pizze che poi verranno passate al figlio LISTA-PIZZE
export class PizzeriaComponent {

  //  importazione dell'array di pizze da INFORMAZIONI_PIZZE ricevuto in @Input da `pizzeria`
  pizze: Pizza[] = INFORMAZIONI_PIZZE;



  // *** Proprietà per gestire la pizza cliccata ***
  //  TEST SE PER VEDERE l'@Output è andato a buon fine (INSERITO NEL PARENT!), assegnato il valore della pizza cliccata
  pizzaScelta!: string;

  // *** Metodo per gestire eventi dal figlio ***
  // Questo metodo viene chiamato quando il figlio (STUDENTE) emette l'evento `selectPizza`.
  // `info` è il messaggio passato dal figlio! ossia $event
  onSelectPizza(pizza: Pizza) {
    console.log(pizza.nome);
    this.pizzaScelta = "hai scelto la pizza: " + pizza.nome;
  }

}
