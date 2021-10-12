import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PizzaService } from 'src/app/pizza.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzas?: Observable<Pizza[]>;

  constructor(private ps: PizzaService,
    private router: Router) { } 

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.pizzas = this.ps.getPizzaList();
  }


}
