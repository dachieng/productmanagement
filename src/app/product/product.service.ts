import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {Observable, throwError } from 'rxjs'
import {tap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  private url = "api/products/products.json"

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.errorFunction)
    );


  }

  private errorFunction(err:HttpErrorResponse){

    let errorMessage = ""

    if (err.error instanceof ErrorEvent){
      errorMessage = `The server returned error message ${err.error.message}`
    }
    else{
      errorMessage = `The server returned code ${err.status} and message is ${err.message}`
    }

    console.log(errorMessage)
    return throwError(errorMessage)

  }

}


  /*getProducts():IProduct[]{

    return [
      {
        "id": 1,
        "productname": "Leaf Rake",
        "productcode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "id": 2,
        "productname": "Garden Cart",
        "productcode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "id": 5,
        "productname": "Hammer",
        "productcode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
      {
        "id": 8,
        "productname": "Saw",
        "productcode": "TBX-0022",
        "releaseDate": "May 15, 2019",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "id": 10,
        "productname": "Video Game Controller",
        "productcode": "GMG-0042",
        "releaseDate": "October 15, 2018",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }
    ]

  }

}
*/
