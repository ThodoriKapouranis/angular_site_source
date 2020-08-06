import { Component, OnInit, Input } from '@angular/core';
import {WorkService} from   '../work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() key;
  @Input() color;
  colorKey=[];
  title:string;
  img:string; 
  context:string;
  url:string;
  description:string;
  big_description:string;
  github_url:boolean;
  show_description:boolean;
  right=[];
  left=[];
  //Add demo link. Dont display link if empty.

  splitArray(techs){
    for(let i=0; i<techs.length;i++){
      if(i%2==0) this.left.push(techs[i]);
      else this.right.push(techs[i]);
    }
    return 0;
  }

  show(){
    if (this.show_description==null) { this.show_description=true}
    else{this.show_description=!this.show_description}
  }

  constructor(
    private info: WorkService,
  ) { }

  ngOnInit(): void {
    //here make a service that will be our database, and get from it using key
    var JSONobj = JSON.parse(this.info.information[this.key])
    this.title=JSONobj.title;
    this.context=JSONobj.context;
    this.img=JSONobj.image;
    this.url=JSONobj.url;
    this.github_url=JSONobj.github_url;
    this.description=JSONobj.description
    this.big_description=JSONobj.big_description;

    if (JSONobj.big_description==""){
      this.big_description="There is no description available currently"
    }

    this.splitArray(JSONobj.tech);
    //blue    

    /*
    colorKey=[ outer, inner, context, tab, URL-button,]
    */
    if (this.color==0) this.colorKey=["#3441ef","#4752f3","#ffffff","#1c3869"]; 
    //white
    if (this.color==1) this.colorKey=["#1c3869","#3c62a3","#ffffff","#3441ef"]; 

  }

}
