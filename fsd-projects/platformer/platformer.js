$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 600, 70, 50, "hotpink");
    createPlatform(1350, 400, 50, 50, "green");
    createPlatform(300,500,69,50,"yellow")
    createPlatform(500,500,80,60,"turquoise")
    createPlatform(400,400,90,50, "orange")
    createPlatform(700,500,90,100, "red")
    createPlatform(900,400,90,100, "purple")
    createPlatform(1200,400,70,40, "red")

    // TODO 3 - Create Collectables
createCollectable
createCollectable("kennedi", 300 ,400)
createCollectable("diamond", 800 ,400)
createCollectable("max", 1300 ,400)
createCollectable("database", 550 ,400)


    // TODO 4 - Create Cannons
    createCannon("top", 1200 ,100)
    createCannon("right", 300 , 400)
    createCannon("bottom", 600 ,700)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
