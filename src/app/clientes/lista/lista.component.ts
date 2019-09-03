import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: any = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe(response => { this.lista = response; });
  }

}
