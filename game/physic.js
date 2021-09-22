function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(-rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);
    if (player2.position.x <= - WIDTH / 2)
        player2.turnRight(Math.PI);
    if (player2.position.x >= WIDTH / 2)
        player2.turnRight(Math.PI);
   // if (ennemy_acceleration == 1)
   // {
   //     player2.accelerate(moveDistance);
   //     if(player2.position.x >= 500){
   //         ennemy_acceleration = -ennemy_acceleration
   //         console.log("T NUL WLH " + ennemy_acceleration)
   //     }
   // }
   // else
   // {
   //     player2.decelerate(moveDistance);
   //     if(player2.position.x <= 0)
   //         ennemy_acceleration = -ennemy_acceleration
   // }

    player1.move();
    player2.accelerate(moveDistance)
    player2.move();
    console.log(player2.position.x)
    controls.update();
}