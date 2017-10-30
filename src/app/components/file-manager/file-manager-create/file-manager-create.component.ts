import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileManagerService } from '../../../services/file-manager.service';
import { UploadFile } from '../../../models/UploadFile';

@Component({
  selector: 'app-file-manager-create',
  templateUrl: './file-manager-create.component.html',
  styleUrls: ['./file-manager-create.component.css']
})
export class FileManagerCreateComponent implements OnInit {

  uploadFile: UploadFile;
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput;
  
  constructor(private fb: FormBuilder, private api: FileManagerService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      files: null
    });
  }


  onSubmit(value) {
        
    this.loading = true;

    const formData: FormData = new FormData();

    const file: File = this.fileInput.nativeElement.files[0];

    formData.append('files', file, file.name);
     this.api.post(formData).subscribe(res => {
       this.uploadFile = res;
     });

    setTimeout(() => {
      //console.log(value);
      //alert('done!');
      this.form.get('files').setValue(null);
      this.fileInput.nativeElement.value = '';
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('files').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
