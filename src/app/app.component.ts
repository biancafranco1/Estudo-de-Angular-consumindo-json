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
  termo:string=''
  /*------------------------------*/

  /**
   * Função executada na inicialização do componente
   */
  ngOnInit() {
      const getdata = async () => {
      let response = await fetch('../assets/json/dados_teste.json')
      let registros = await response.json()
      this.lista = registros.data;
    }
    getdata()
  }

  search(){
console.log(this.termo);

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
