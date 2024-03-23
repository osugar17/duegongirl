import kaboom from "kaboom"

// initialize context
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

    scene("game", () => {

      add([
        sprite("baby-blue", {width: 
          width(),height: height()})
      ]);

      // Create player
      const player = add([
        sprite("purple girl"),
        pos(48, 48),
        scale(6),
        area(),
        {
          speed: 500,
          coins: 0
        }
      ]);

      // Create coins
      const numCoins = 10;
      for (let i = 0; i < numCoins; i++) {
        const coin = add([
          sprite("coin"),
          pos(rand(width()), rand(height())),
          scale(3),
          area(),
          "coin"
        ]);

        // Collision detection with player
        player.collides("coin", (coin) => {
          // Increment player's coin count
          player.coins += 1;
          // Destroy the coin entity
          destroy(coin);
        });
      }

      // Define player movement
      keyDown("up", () => {
        player.move(0, -player.speed);
      });
      keyDown("down", () => {
        player.move(0, player.speed);
      });
      keyDown("left", () => {
        player.move(-player.speed, 0);
      });
      keyDown("right", () => {
        player.move(player.speed, 0);
      }); 

      // Display player's coin count
      const coinCountLabel = add([
        text(`Coins: ${player.coins}`, 24),
        pos(12, 12),
        layer("ui"),
        {
          value: player.coins
        }
      ]);

      // Update coin count label
      player.update(() => {
        if (player.coins !== coinCountLabel.value) {
          coinCountLabel.text = `Coins: ${player.coins}`;
          coinCountLabel.value = player.coins;
        }

        // Check if player collected 100 coins
        if (player.coins >= 100) {
          // Go to win scene
          go("win");
        }
      });
    });

    // Define win scene
    scene("win", () => {
      // Display win message
      add([
        text("You won! Thanks for Playing", 48),
        pos(width() / 2, height() / 2),
        origin("center"),
        layer("ui")
      ]);
    });

    // Start the game
    go("game");




// const player = add([
//     sprite("yellowbunny"),
//     pos(0,0),  
//     area(),
//     scale(3,3)
// ]);

// const SPEED = 320;
// onKeyDown("right", () => {
//     player.move(SPEED, 0)
// })

// onKeyDown("left", () => {
//     player.move(-SPEED, 0)
// })

// onKeyDown("down", () => {
//     player.move(0, SPEED)

// })

// onKeyDown("up", () => {
//     player.move(0, -SPEED)

// })

// add([
// 	// list of components
// 	sprite("purple girl"),
// 	pos(600, 600),
// 	area(30),
//   scale(3,3)
// ])


// // const map = [
// //   "xxxxxxxxxxxxxxxxxxxx",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "x                  x",
// //   "xxxxxxxxxxxxxxxxxxxx",
// // ];

// // const levelConf = {
// // 	width: 64,
// // 	height: 64,

// // 	"x": () => [
// // 		sprite("JessesCustomundergroundBlockSprites"),
// // 		area(),
// // 		solid(),
// // 		origin("bot"),
// // 	  ],
//  // }

// // Generate mobs
//       const mobSpawnInterval = 1; // in seconds
//       let mobSpawnTimer = 1;

//       function spawnMob() {
//         const mobX = rand(640 - 32);
//         const mobY = rand(480 - 32);
//         const mob = add([
//           sprite("zombie1"),
//           pos(mobX, mobY),
//           scale(3),
//           {
//             speed: 50
//           },
//           "zombie1"
//         ]);
//       }

//       // Define mob movement
//       action("zombie1", (mob) => {
//         mob.move(mob.speed, 0);
//       });

//       // Define mob collision with player
//       collides("yellowbunny", "zombie1", (player, mob) => {
//         go("lose");
//       });

//       // Define win condition
//       player.action(() => {
//         if (player.pos.x >= 640 - 32 && player.pos.y >= 480 - 32) {
//           go("win");
//         }
//       });

//       // Update game logic
//       action(() => {
//         mobSpawnTimer += dt();
//         if (mobSpawnTimer >= mobSpawnInterval) {
//           spawnMob();
//           mobSpawnTimer = 0;
//         }
//       });

//  scene("win", () => {
//       add([
//         text("You Win!", 32),
//         origin("center"),
//         pos(width() / 2, height() / 2)
//       ]);
//     });