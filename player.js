class Player{
    constructor(){


    }
    getCount(){
       var playerCountRef=database.ref('playerCount') 
       playerCountRef.on("value",function(data){
           playerCount=data.val();
       })

    }
    updateCount(Count){
        database.ref('/').update({
            playerCount:Count

    })
}
update(name){
    var playerindex="player"+playerCount
    database.ref(playerindex).set({
        name:name
    })
}
}
