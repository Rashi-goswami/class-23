class Ground{
   constructor(x,y,width,height){

    var options ={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(myworld,this.body);

   }

   display(){
      var pos=this.body.position
    rectMode(CENTER);
    rect(pos.x,pos.y,400,20);
   }


}