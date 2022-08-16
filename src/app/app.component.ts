import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /*- Propriedades do componente -*/
  lista: Usuario[] = []
  listaCompleta: Usuario[] = []
  termo: any = ''

  ngOnInit() {
    const getdata = async () => {
      let response = await fetch('../assets/json/dados_teste.json')
      let registros = await response.json()
      this.lista = registros.data;
      this.listaCompleta = registros.data;
    }
    getdata()
  }

  sendData(event: any) {
    this.termo = (event.target.value);
    console.log(this.termo);
    this.lista = this.listaCompleta.filter((info) => {
      //"Queria estar assistindo tv".toLowerCase().indexOf("x")
      if (info.id && ("" + info.id).toLowerCase().indexOf(this.termo.toLowerCase()) != -1) {
        return true
      }
      if (info.abbreviation && info.abbreviation.toLowerCase().indexOf(this.termo.toLowerCase()) != -1) {
        return true
      }
      if (info.city && info.city.toLowerCase().indexOf(this.termo.toLowerCase()) != -1) {
        return true
      }
      if (info.conference && info.conference.toLowerCase().indexOf(this.termo.toLowerCase()) != -1) {
        return true
      }
      if (info.division && info.division.toLowerCase().indexOf(this.termo.toLowerCase()) != -1) {
        return true
      }
      if (info.full_name && info.full_name.toLowerCase().indexOf(this.termo.toLowerCase()) != -1) {
        return true
      }
      if (info.name && info.name.toLowerCase().indexOf(this.termo.toLowerCase()) != -1) {
        return true
      }
      return false
    })
  }

}


//interface para definir as propriedades de um usuário
interface Usuario {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}
