class Player {
constructor(){

}

getCount(){
    var pcref = database.ref("playercount")
    pcref.on("value",function(data){
        playercount = data.val()
    })
}

 updateCount(count){
database.ref("/").update({
    playercount : count
})
}

update(name){
    var playerIndex = "Player" + playercount;
    database.ref(playerIndex).set({
        name : name
    })
}

}