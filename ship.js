function Ship(){
    this.x = width/2;
    this.show = function(){
        fill(255);
        rect(this.x,height-20,40,60)
    }
    this.move = function(dir){
        this.x += dir;
    }
}