import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';

let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class FileManagerService {

  constructor(private http: Http) {
    localStorage.getItem('token')
   }

  get(){
    return this.http.get("/api/Uploads", options).map(res => res.json());
  }

  delete(fileName: string){
    return this.http.delete(`/api/FileUpload/delete?fileName=${fileName}`, options).map(res => res.json());
  }

  post(files: FormData){
    return this.http.post(`/api/FileUpload/upload`, files, options).map(res => res.json());
  }

}
