import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../pizza/pizza.model';


@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})



//* questo component riceve in @Input dal genitore (PIZZERIA) i dati delle pizze

// ATT: quando uso il @input() importo dall'angular core
// stabilisco che proprietà marcata con @input() venga ricevuta dal component tramite il parent!
// il ! è importante anche qui, in questo caso il valore delle proprietà arriverà dall'esterno (ma non è obbligatorio!)
// è required! è obbligatorio devo passarlo per forza nel component senno da errore!
export class ListaPizzeComponent {

  // ricevo in in Input l'array delle pizze dal GENITORE `pizzeria`, utile per looppare l'array con le pizze
  @Input() listaPizze!: Pizza[];


  // *** Proprietà per emettere eventi al padre ***
  // `@Output` viene utilizzato per definire un evento personalizzato.
  // L'istanza di `EventEmitter` permette al figlio (LISTA-PIZZE) di inviare dati al padre (PIZZERIA).
  @Output() selectPizza = new EventEmitter();


  // *** Metodo per emettere un evento ***
  // Questo metodo viene eseguito quando si clicca sul pulsante associato al componente.
  // `selectStud.emit()` invia un messaggio personalizzato al componente padre (STUDENTI).
  onSelectedPizza(pizza: Pizza) {
    this.selectPizza.emit(pizza);
  }

}