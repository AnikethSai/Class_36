class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(200,50);

        var input = createInput("Name");
        input.position(200,100)

        var button = createButton("Play!")
        button.position(200,200);

        var greet = createElement("h3")
        
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name  = input.value();
            playercount +=1 ;
            player.update(name)
            player.updateCount(playercount)
            greet.html("Hello " + name)
            greet.position(200,100);
        })

        
    }

}
