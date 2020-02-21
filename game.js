class Game{
    constructor(){

    }
    getstate(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value", function(data){
            gameState=data.val();
        
       
        })
}
update(State){
database.ref('/').update({
    gameState:State
})
}
async start(){
    if (gameState==0){
        player=new Player();
        var playerCountRef=await database.ref('playerCount').once("value")
        if(playerCountRef.exists()){
            playerCount=playerCountRef.val();
            player.getCount();


        }
        
        form=new Form();
        form.display();
    }
}
play(){
    form.hide();
    text("gamestart",120,180)
    Player.getPlayerInfo();
    if (allPlayer==defined){
        var display_position=130;
        for(var plr in  allPlayers){
            if(plr=="player"+player.index)

           fill("red")

        
        else 
        fill("black")
        display_position=display_position+20
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
    }

}
if(KeyIsDown ("UP_arrow")&& player.index==null){
    player.distance=player.distance+50
    player.update();
}
}
}