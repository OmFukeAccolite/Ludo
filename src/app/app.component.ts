import { Component, OnInit } from '@angular/core';
import Player  from './util/Player';
import Node from './util/LinkedList';
import path from './util/Path';
import { turn } from './util/Path';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})

export class AppComponent implements OnInit {

  p1 = new Player(6,1,[7,0]);
  p2 = new Player(1,8,[0,7]);
  p3 = new Player(8,13,[7,14]);
  p4 = new Player(13,6,[14,7]);
  
  head = path;
  turn = turn;
  player = turn.val;
  number:any;
  
  
 

  ludoBoard=[[{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:"p2"},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:"p1"},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:"p3"},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:"p4"},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  [{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null},{player:null}],
  ]

  sleep(ms:any) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

generateNumber(){
  return Math.floor(Math.random() * 6) + 1;
}


  async play(){
    
    
    let chance = this.turn;

    let random = this.generateNumber();
    this.number = random;

     
      if(chance.val == "p1") {
        
         if(this.p1.count+this.number <= 51){
          this.p1.count+=this.number;
          for (let index = 0; index < random; index++) {

            await this.sleep(100);
            this.ludoBoard[this.p1.x][this.p1.y].player = null;
         
            this.p1.head = this.p1.head.next;
            this.p1.x = this.p1.head.val[0];
            this.p1.y = this.p1.head.val[1];
            
            this.ludoBoard[this.p1.x][this.p1.y].player = 'p1';
         this.ludoBoard[this.p2.x][this.p2.y].player = 'p2';
       this.ludoBoard[this.p3.x][this.p3.y].player = 'p3';
       this.ludoBoard[this.p4.x][this.p4.y].player = 'p4';
            
          }

          
         

         }
       if(this.p1.count == 51){
            alert("PLAYER 1 WON !!!!")
          }
          
          
         

        
      

      }
      else if(chance.val == "p2") {

        if(this.p2.count+this.number<=51){
          this.p2.count+= this.number;

          for (let index = 0; index < random; index++) {
            await this.sleep(100);
            this.ludoBoard[this.p2.x][this.p2.y].player = null;
            this.p2.head = this.p2.head.next;
            this.p2.x = this.p2.head.val[0];
            this.p2.y = this.p2.head.val[1];
            this.ludoBoard[this.p1.x][this.p1.y].player = 'p1';
      this.ludoBoard[this.p2.x][this.p2.y].player = 'p2';
      this.ludoBoard[this.p3.x][this.p3.y].player = 'p3';
      this.ludoBoard[this.p4.x][this.p4.y].player = 'p4';
            
          }

         
       
        }

        if(this.p2.count == 51){
          alert("PLAYER 2 WON !!!!")
        }
      

          
        

      }
      else if(chance.val == "p3"){
        
        if(this.p3.count+this.number<=51){
          this.p3.count+=this.number
          for (let index = 0; index < random; index++) {
            await this.sleep(100);
            this.ludoBoard[this.p3.x][this.p3.y].player = null;
            this.p3.head = this.p3.head.next;
            this.p3.x = this.p3.head.val[0];
            this.p3.y = this.p3.head.val[1];
            this.ludoBoard[this.p1.x][this.p1.y].player = 'p1';
        this.ludoBoard[this.p2.x][this.p2.y].player = 'p2';
        this.ludoBoard[this.p3.x][this.p3.y].player = 'p3';
      this.ludoBoard[this.p4.x][this.p4.y].player = 'p4';
            
          }
          
        }
        if(this.p3.count == 51){
          alert("PLAYER 3 WON !!!!")
        }
        
       
          
       

      }
      else if(chance.val == "p4") {
          if(this.p4.count+this.number<=51){
            this.p4.count+=this.number;

            for (let index = 0; index < random; index++) {
              await this.sleep(100);
              
              this.ludoBoard[this.p4.x][this.p4.y].player = null;
              this.p4.head = this.p4.head.next;
              this.p4.x = this.p4.head.val[0];
              this.p4.y = this.p4.head.val[1];
              
              this.ludoBoard[this.p1.x][this.p1.y].player = 'p1';
              this.ludoBoard[this.p2.x][this.p2.y].player = 'p2';
              this.ludoBoard[this.p3.x][this.p3.y].player = 'p3';
              this.ludoBoard[this.p4.x][this.p4.y].player = 'p4';
             
            }
           
          }
          if(this.p4.count == 51){
            alert("PLAYER 4 WON !!!!")
          }
    
          
      
        

      }

      
     
     

      
        this.turn = this.turn.next;
      await this.sleep(100);
      this.player = this.turn.val;
        
      

      

    

  }

  ngOnInit(): void {
    
  }

  constructor(){
    let temp:any = this.head;
    let count = 0;

    while(count<52){
      if(temp.val[0] == this.p1.x && temp.val[1] == this.p1.y){
        this.p1.head = temp;
      }
      else if(temp.val[0] == this.p2.x && temp.val[1] == this.p2.y){
        this.p2.head = temp;
      }
      else if(temp.val[0] == this.p3.x && temp.val[1] == this.p3.y){
        this.p3.head = temp;
      }
      else if(temp.val[0] == this.p4.x && temp.val[1] == this.p4.y){
        this.p4.head = temp;
      }
     count+=1;
     temp = temp.next;
     
    }


    
    
    
  }

  

}
