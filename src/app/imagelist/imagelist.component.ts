import { Component, OnInit } from '@angular/core';
import {ImageService} from '../services/image.service';
@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css']
})
export class ImagelistComponent implements OnInit {
images:any[];
imageFound:boolean=false;
searching:boolean=false;

handleSuccess(data){
  this.imageFound=true;
  this.images=data.hits;
  console.log(data.hits);
}
handleError(error){
  console.log(error);
}

  constructor(private imagesService: ImageService) { }

  ngOnInit() {
  }

  searchImages(query: string){
    this.searching=true;
    return this.imagesService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error =>this.handleError(error),
      ()=>this.searching=false
    )
  }

}
