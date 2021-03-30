class Contestent {
    constructor(){}
    
  
     async start(){
      if(gameState === 0){
        contesent = new Contestent();
        var playerCountRef = await database.ref('playerCount').once('value');
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
  
        }
      }
        questions = new Questions()
        questions.display();
      }
    
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120,100);
      Player.getPlayerInfo();
      if(allPlayers !== undefined){
      var displayPosition = 130;
      for(var plr in allPlayers){
         if(plr=== "player"+player.index){
          fill("red");
         }
         else{
          fill("black");
         }
      displayPosition += 20;
      textSize(15);
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPosition);
      }
  
      }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance+=50
        player.update();
      }
    }
  }
    
  
    