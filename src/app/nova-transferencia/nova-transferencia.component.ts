import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia-model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor(private service: TransferenciaService, private router: Router) {}
  @Output() aoTransferir = new EventEmitter<any>();
  ngOnInit(): void {}
  valor: number;
  destino: string | number;
  transferir(): void {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('extrato');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
