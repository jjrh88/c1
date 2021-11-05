import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  public msg: string
  public id: any
  public name: string = '';
  public status: Boolean

   
  public messages = [
    { id:1, name: "A"},
    { id:2, name: "B"},
    { id:3, name: "C"},
    { id:4, name: "D"},
    { id:5, name: "E"},
    { id:6, name: "F"}
  ]

  constructor(){
    
  }

  ngOnInit(){
    
  }

  setStatus(){
   this.status =! this.status
  }

  delete(id: any){
    for(let i = 0; i < this.messages.length; i++) {
      if(this.messages[i].id == id)
      {
        this.messages.splice(i,1)
        console.log("se elimino...")
      }
    }
  }

  add(){
    this.messages.push({ id:this.id, name: this.name})
  }

  edit(item: any){
    console.log(  item )
    this.id = item.id
    this.name = item.name
  }

  update(){
    for(let i = 0; i < this.messages.length; i++) {
      if(this.messages[i].id == this.id)
      {
        this.messages[i].name = this.name
      }
    }
  }

}
