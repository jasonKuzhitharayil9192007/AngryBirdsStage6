class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // defining the pig object visibility
    this.visibility = 255;
  }

  display(){
    // understand the speed of pig body when it is hit by bird
    console.log(this.body.speed);

    // if the speed is < 2.5 display the pig
    if(this.body.speed < 2.5){
      super.display();
    }
    //else start vanishing the pig
    else{
      // removing the pig body from world
      World.remove(world,this.body);

      // starting a setting
      push();

      // decraesing the visibilty slowly to give it a vanishing effect
      this.visibility = this.visibility - 5; // 245 - 5 = 240

      // tint makes the object transparent, it calculates the transparency using 2 given nos'
      // e.g . tint(255,10) => 10/255 = how much % => % of transparnecy
      tint(255, this.visibility);//(255,250);// 240/255 = %

      // giving the image to which we want to give tint property
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);

      // stopping the setting
      pop();
    }
    
  }

};