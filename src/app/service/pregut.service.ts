import { Injectable } from '@angular/core';
import { Pregut } from '../model/pregut';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PregutService {

  selectPregut: Pregut=new Pregut();


  constructor(private http:HttpClient) { }


    getPreguts(){
      return this.http.get("http://127.0.0.1:8000/api/preguntas/");
    }

    createPregut(pregunta: Pregut){
      return this.http.post('http://127.0.0.1:8000/api/preguntas/',pregunta);
    }

    updatePregut(id:number,pregunta:Pregut){
      return this.http.put('http://localhost:8000/api/preguntas/'+id+'/',pregunta);
    }

    deletePregut(id:number){
      return this.http.delete('http://localhost:8000/api/preguntas/'+id+'/');
    }
}
