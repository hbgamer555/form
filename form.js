class Form{
    constructor(){
        this. input=createInput("name")
        this.button=createButton('play')
        this.greeting = createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement('h2')
        title.html("car race")
        title.position(130,0)
       
    input.position(130,160)
   
    button.position(250,200)
    button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
       
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
    }
}