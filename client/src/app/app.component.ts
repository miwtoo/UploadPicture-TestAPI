import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  imgData = {
    id: '',
    link:''
  };
  img:String;
  images;

  ngOnInit() {
     const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer 7a063b03eb94053bc8c2e87ca8a6257756f0399c'
      })
    }

    this.http.get("https://api.imgur.com/3/account/miwtoo/images",httpOptions).subscribe(
      getData => {
        console.log("GET Request is successful ", getData);
        this.images = getData["data"]
        //console.log(this.imgUrl);
        
      },
      error => {
        console.log("Error", error);
      }
    ); 
  }

  onSubmit(data) {

    this.img = this.img.substring(22,this.img.length);
    //console.log(this.imgUrl);
     const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer 7a063b03eb94053bc8c2e87ca8a6257756f0399c'
      })
    }

    this.http.post("https://api.imgur.com/3/image",this.img, httpOptions).subscribe(
      getData => {
        console.log("GET Request is successful ", getData);
        this.imgData = getData['data'];
      },
      error => {
        console.log("Error", error);
      }
    ); 
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.img = event.target["result"];
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
