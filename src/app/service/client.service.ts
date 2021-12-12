import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectClient: Client=new Client();

  constructor(private http:HttpClient) { }

  getClients(){
    return this.http.get("http://127.0.0.1:8000/api/clientes/");
  }

  createClient(cliente: Client){
    return this.http.post('http://127.0.0.1:8000/api/clientes/',cliente);
  }

  updateClient(id:number,cliente:Client){
    return this.http.put('http://localhost:8000/api/clientes/'+id+'/',cliente);
  }

  deleteClient(id:number){
    return this.http.delete('http://localhost:8000/api/clientes/'+id+'/');
  }

}

