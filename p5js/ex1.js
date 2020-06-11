//Variáveis tipo let nomeDaVar;





let numDiv


function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
  background(50);


   posX = mouseX
   posY = mouseY

   numDiv = 7;
   for ( i=0; i < numDiv-1; i ++){
     for (j=0; j < numDiv-1; j++){
       avatar ((i+1)*width/numDiv, (j+1)*height/numDiv,40); } }

 }
   function avatar (posX,posY,diam) {
     fill (255)
       ellipse (posX-diam/5, posY-diam/1.6,diam/0.9);

       fill (100)
       ellipse (posX-diam/2,posY-diam/1.1, diam/2);
       ellipse (posX-diam/4,posY-diam/1, diam/2.5);
       ellipse (posX-diam/4,posY-diam/1.3, diam/2);
       ellipse (posX-diam/1,posY-diam/1, diam/4);
       ellipse (posX-diam/1,posY-diam/0.4, diam/6);
       ellipse (posX-diam/1,posY-diam/0.3,diam/6);
       ellipse (posX-diam/1.5,posY-diam/0.3,diam/6);


       fill(100)
       ellipse(posX,posY,diam);

       fill (255)
       ellipse (posX-diam/4,posY-diam/10, diam/4);

       fill (255)
       ellipse (posX+diam/4, posY-diam/10,diam/4);
   }
