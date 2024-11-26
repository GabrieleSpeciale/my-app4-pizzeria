import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { PizzaComponent } from "./pizzeria/pizza/pizza.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PizzeriaComponent, PizzaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'my-app4-pizzeria';
}
