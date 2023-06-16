import { Component } from '@angular/core';
import {Producto} from 'src/app/componet.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carrito de Compras';
  nombre = "Rommel";
  edad = 2;
  img = "https://cdn-icons-png.flaticon.com/512/6325/6325028.png";
  img2 = "https://w7.pngwing.com/pngs/412/804/png-transparent-computer-icons-font-awesome-icon-design-minus-symbol-logo-area-user-interface.png"
  img3 = "https://pbs.twimg.com/media/EQmptdJWkAEtx1m.jpg"
  habilitado = false;
  ejemplo = "";

  products: Producto[]= [
    {
      name: "Aceite T1",
      price: 40,
      image: "./assets/imagen/producto1.png",
      comentario: "Producto en Descuento hasta fin de mes"
      
    },
  
  ]



  

  newName = "";
  newName1 = "";
  newName2 = "";
  newName3 = "";
  chocolates :string[] = [
    ""
  ]

  person = {
    name : "Esteban",
    calle: "la magdalena",
    cedula: 1726725631,
    telefono: 984672376,
    age : 1,
    avatar : 'https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg?w=2000'
  }

  //Funciones
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }

  increaseAge(){
    this.person.age += 1
  }

  onScroll(event : Event){
    const element = event.target as HTMLInputElement;
    console.log(element.scrollTop)
  }

  agregarChololate(){
    this.chocolates.push(this.newName);
    
    this.chocolates.push(this.newName1);
    
    this.chocolates.push(this.newName2);
    
    this.chocolates.push(this.newName3);
 

  }

  
  borrarChocolate(index:number){
    this.chocolates.splice(index, 1);
  }
}
