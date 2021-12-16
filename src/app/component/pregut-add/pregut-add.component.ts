import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PregutService } from 'src/app/service/pregut.service';
import { NgForm } from '@angular/forms';
import { Pregut } from 'src/app/model/pregut';

@Component({
  selector: 'app-pregut-add',
  templateUrl: './pregut-add.component.html',
  styleUrls: ['./pregut-add.component.css']
})
export class PregutAddComponent implements OnInit {

  constructor(public pregutService:PregutService, private router:Router) { }

  ngOnInit(): void {
  }

onSubmit(pregutForm: NgForm){

  //console.log(clientForm.value);
  if(pregutForm.value.id==null){
    this.pregutService.createPregut(pregutForm.value).subscribe((response) => {
      this.router.navigate(["/"]);
    });
  }else{
    this.pregutService.updatePregut(pregutForm.value.id,pregutForm.value).subscribe((response) => {
      this.router.navigate(["/"]);
    });
  }
  this.resetForm(pregutForm);

  //this.router.navigate(['']);
}

resetForm(productosForm: NgForm){
  if(productosForm != null){
    productosForm.reset();
    this.pregutService.selectPregut=new Pregut();
  }
}

}


