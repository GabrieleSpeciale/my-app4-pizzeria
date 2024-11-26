import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})



export class PizzaComponent {

  // riceviamo in Input dal padre (pizzeria) la pizza cliccata all'interno del fratello (lista-pizze)
  @Input() pizzaScelta!: string;
}
