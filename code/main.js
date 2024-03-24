import kaboom from "kaboom"
kaboom()

// load assets
loadSprite("purple girl", "sprites/purple girl.gif")
loadSprite("scary", "sprites/scary.jpg");
// loadSprite("duegon2", "sprites/duegon2.png");
// loadSprite("max", "sprites/max.jpg");
loadSprite("yellowbunny", "sprites/yellowbunny.gif");
// add a character to screen
loadSprite("JessesCustomundergroundBlockSprites", "sprites/JessesCustomundergroundBlockSprites.png");
loadSprite("zombie1", "sprites/zombie1.gif");
loadSprite("bluezombie1", "sprites/bluezombie1.gif");
loadSprite("coin", "sprites/coin.gif");
loadSprite("baby-blue", "sprites/baby-blue.png");

  const player = add([
     sprite("yellowbunny"),
     pos(0,0),  
     area(),
     scale(3,3)
   ]);
        
    const SPEED = 320;
      onKeyDown("right", () => {
          player.move(SPEED, 0)
    })
    
      onKeyDown("left", () => {
          player.move(-SPEED, 0)
    })
    
      onKeyDown("down", () => {
          player.move(0, SPEED)
    
    })
    
      onKeyDown("up", () => {
          player.move(0, -SPEED)
    
    })



