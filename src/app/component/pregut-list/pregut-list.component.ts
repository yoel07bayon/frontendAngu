import { Component, OnInit } from '@angular/core';
import { PregutService } from 'src/app/service/pregut.service';
import { Router } from '@angular/router';
import { Pregut } from 'src/app/model/pregut';


@Component({
  selector: 'app-pregut-list',
  templateUrl: './pregut-list.component.html',
  styleUrls: ['./pregut-list.component.css']
})
export class PregutListComponent implements OnInit {


listaPreguntas:any;
  constructor(private pregutService:PregutService,private router: Router) { }

  ngOnInit(): void {
    this.onList();
  }

  onList(){
    this.pregutService.getPreguts().subscribe((clientes:any)=>{
      //console.log(clientes);
      this.listaPreguntas=clientes;
    })
  }

  onAdd(){
    this.pregutService.selectPregut=new Pregut();
    this.router.navigate(["/add-pregunta"]);
  }



  onDelete(id:number){
    console.log(id);
    if(confirm("Estas seguro que vas a eliminar este producto?")){
      this.pregutService.deletePregut(id).subscribe((response) => {
        //console.log(response);
        //this.router.navigate(["/"]);
        this.onList();
      });
    }
  }
}
