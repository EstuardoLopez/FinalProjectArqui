import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from "chart.js";

/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {

  @ViewChild('stockProductos') stockProductos;
  lineChar: any;
  datos: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datos = navParams.get('datos');  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');

    this.lineChar = new Chart(
      this.stockProductos.nativeElement,
      {
        type: 'bar',
        data: {
          labels: ["Producto #1", "Producto #2"],
          datasets: [{
            label: 'Stock de productos Actuales',
            data: [12, 19],
            backgroundColor: [
              'rgba(99, 132, 255, 0.7)',
              'rgba(54, 162, 235, 0.7)'
            ],
            borderColor: [
              'rgba(99,132,255,1)',
              'rgba(54, 162, 235, 1)'
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
