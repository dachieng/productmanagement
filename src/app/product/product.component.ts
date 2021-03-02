import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title:string = "Product List"
  productWidth:number = 50
  productMargin:number = 2
  showImage:boolean = false

  filteredProducts!: IProduct[];

  _listFilter!: string;

  get listFilter():string{
    return this._listFilter
  }

  set listFilter(value:string){
    this._listFilter = value

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
  }


  products:IProduct[] = []

  constructor(private productService: ProductService) {
    //this.filteredProducts = this.products

   }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.filteredProducts = this.products
  }

  toggleImage():void{
    this.showImage = !this.showImage
  }

  performFilter(filterBy : string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product:IProduct)=> product.productname.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  onRatingClicked(message:string){
    this.title = message
  }

}
