import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FileManagerService {

  constructor(private http: Http) { }

  get(){
    return this.http.get("/api/Uploads").map(res => res.json());
  }

  delete(fileName: string){
    return this.http.delete(`/api/FileUpload?fileName=${fileName}`).map(res => res.json());
  }

  post(files: FormData){
    return this.http.post(`/api/FileUpload/upload`, files).map(res => res.json());
  }

}
