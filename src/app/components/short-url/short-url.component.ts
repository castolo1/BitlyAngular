import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShortUrlService } from '../../services/short-url.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-short-url',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    SpinnerComponent],
  templateUrl: './short-url.component.html',
  styleUrl: './short-url.component.css'
})
export class ShortUrlComponent {
  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;
  mostrarError: boolean;
  textError: string;

  constructor(private _shortUrlService: ShortUrlService){
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError = false;
    this.textError = '';
  }

  procesarUrl(){

    if(this.nombreUrl === ''){
      this.error('Por favor ingrese una url');
      
      return
    }

    this.urlProcesada = false;
    this.loading = true;

    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {
      this.urlShort = data.link;
      this.urlProcesada = true;
      this.loading = false; 
    }, error => {
      this.loading = false;
      this.nombreUrl = '';
      if(error.error.description === 'The value provided is invalid.'){
        console.log(error);
        this.error('La url ingresada es invalida');
      }
    })
  }

  error(valor: string){
    this.mostrarError = true;
    this.textError = valor;
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
  }
}
