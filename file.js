class Form{
    constructor(){

    }

    display(){
        var title=createElement("h2");
        title.html("Multi-Player Car Game");
        title.position(130,0);
        var input=createInput("NAME");
        var button=createButton("PLAY");
        var greetings=createElement("h3");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var NAME=input.value();
            PlayerCount+=1;
            player.update(NAME);
            player.updateCount(PlayerCount);
            greetings.html("HELLO" + NAME);
            greetings.position(130,160);
        })
    }
}