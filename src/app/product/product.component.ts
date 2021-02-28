import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title:string = "Product List"

  products:any[] = [
    {
      "id": 2,
      "productname": "Garden Cart",
      "productcode": "GDN-0023",
      "releaseDate": "December 9,2017",
      "description": "15 Gallon Capacity",
      "price": 50,
      "starRating": 4.2,
      "imageUrl": ""


    },
    {
      "id": 5,
      "productname": "Hammer",
      "productcode": "DNI-547",
      "releaseDate": "March 17, 2014",
      "description": "Made in China",
      "price": 47,
      "starRating": 3.2,
      "imageUrl": ""


    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
