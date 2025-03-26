import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers: [DatePipe]
})
export class TransactionsComponent implements OnInit {
  horaActual: string;
  fechaActual: string;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.actualizarFechaHora();
    setInterval(() => this.actualizarFechaHora(), 1000);
  }

  actualizarFechaHora(): void {
    const ahora = new Date();
    this.horaActual = this.datePipe.transform(ahora, 'HH:mm:ss');
    this.fechaActual = this.datePipe.transform(ahora, 'dd/MM/yyyy');
  }
}
