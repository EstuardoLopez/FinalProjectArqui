import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from "../../services/notes.service";
import { Chart } from "chart.js";

/**
 * Generated class for the TemperaturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temperatura',
  templateUrl: 'temperatura.html',
})
export class TemperaturaPage {

  @ViewChild('divTemperatura') divTemperatura;
  lineChar: any;
  Mediciones = {producto1:null,producto2:null,temperatura:null};

  constructor(public navCtrl: NavController,public navParams: NavParams,
    conexion: NotesService ) {

      conexion.getFirstElement().valueChanges().subscribe(medida => {
        console.log(medida);
        /*
        for (var i in medida[0]) {
          switch (i) {
            case "p1":
              this.Mediciones.producto1 = medida[0][i];
              break;
            case "p2":
              this.Mediciones.producto2 = medida[0][i];
              break;
            case "temperatura":
              this.Mediciones.temperatura = medida[0][i];
              break;
            default:
              break;
          }
        }
        */
        console.log("medidas: ", this.Mediciones);
      });

     conexion.createNote({id:124,name:"my name",otro:"otro"});
  }

  public doRefresh(refresher){
    refresher.complete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemperaturaPage');

    this.lineChar = new Chart(
      this.divTemperatura.nativeElement,
      {
        type: 'bar',
        data: {
          labels: ["TEmperatura"],
          yAxisID: "Grados Celcius",
          datasets: [{
            label: "Temperatura",
            data: [27],
            backgroundColor: [
              'rgba(99, 132, 255, 0.7)',
            ],
            borderColor: [
              'rgba(99,132,255,1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    );

    
  }

}
