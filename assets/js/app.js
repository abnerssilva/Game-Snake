window.onload = function() {
    let altura = (window.innerHeight * 0.9)
    let largura = (window.innerWidth * 0.9)
    let palco  = document.getElementById('palco-jogo')
    let ctx = palco.getContext('2d')
    let teclaEsquerda = document.getElementById('esq')

    document.addEventListener('keydown', keyPress)
    

    setInterval(jogo, 100)

    const speed  = 1
    let speedX = speedY = 0
    let partidaX = partidaY = 1 // De 0 a 19
    let tamanhoPeca = 20
    let quatidadePeca = 20
    let tomatoX = tomatoY = 18 // De 0 a 19  
    
    let rastro = []
    rabo = 5

    function jogo() {
        partidaX += speedX
        partidaY += speedY

        if(partidaX < 0) {
            partidaX = quatidadePeca - 1
        }

        if(partidaX > quatidadePeca - 1){
            partidaX = 0
        }
        
        if(partidaY < 0) {
            partidaY = quatidadePeca - 1
        }

        if(partidaY > quatidadePeca - 1){
            partidaY = 0
        }


        ctx.fillStyle = 'black'    
        ctx.fillRect(0, 0, largura, altura)

        ctx.fillStyle = 'red'
        ctx.fillRect(tomatoX * tamanhoPeca, tomatoY * tamanhoPeca, tamanhoPeca, tamanhoPeca)

        ctx.fillStyle = 'green'
        for (let i = 0; i < rastro.length; i++) {
            const element = rastro[i];
            ctx.fillRect(rastro[i].x*tamanhoPeca, rastro[i].y*tamanhoPeca, tamanhoPeca, tamanhoPeca)
            if (rastro[i].x == partidaX && rastro[i].y == partidaY) {
                speedX = speedY = 0 
                partidaX = partidaY = 1
                rabo = 5
            }
        }

        rastro.push({x:partidaX, y:partidaY})

        while(rastro.length > rabo) {
            rastro.shift()
        }

        if(tomatoX == partidaX && tomatoY == partidaY) {
            rabo++
            tomatoX = Math.floor(Math.random() * quatidadePeca)
            tomatoY = Math.floor(Math.random() * quatidadePeca)
        }

    }

    function keyPress(e) {
        switch(e.keyCode) {
            case 27:
                speedX = speedY = 0 
                partidaX = partidaY = 1
                rabo = 5
                break

            case 37: // esquerda
                speedX = -speed
                speedY = 0
                break

            case 38: // cima
                speedX = 0
                speedY = -speed
                break

            case 39: // direita
                speedX = speed
                speedY = 0
                break

            case 40: // baixo
                speedX = 0
                speedY = speed
                break
        }

    }


}
    
//     function __triggerKeyboardEvent(el, keyCode) {
//         var eventObj = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
    
//         if(eventObj.initEvent){
//             eventObj.initEvent("keydown", true, true);
//         }
    
//         eventObj.keyCode = keyCode;
//         eventObj.which = keyCode;
        
//         el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj); 
    
//     } 

//     function traceEvent(e){
//         $("#palco-jogo").prepend($("<li>").html(
//           "Key = " + e.keyCode
//         ).fadeIn());
        
//         console.log(e);
//     }
    

//     $(document).ready(function(){
        
//         document.addEventListener("keydown", function(e){
//             traceEvent(e);
//           });

//         $(".conteiner1").find("button").click(function(){
//           __triggerKeyboardEvent(document.body, parseInt($(this).attr("data-key")));
//         });
//     })
// }
    // Definição do Palco do Jogo
    //
   /* 
    



   function __triggerKeyboardEvent(el, keyCode)
{
    var eventObj = document.createEventObject ?
        document.createEventObject() : document.createEvent("Events");
  
    if(eventObj.initEvent){
      eventObj.initEvent("keydown", true, true);
    }
  
    eventObj.keyCode = keyCode;
    eventObj.which = keyCode;
    
    el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj); 
  
} 

function traceEvent(e){
    $(".logs").prepend(jQuery("<li>").html(
      "Key = " + e.keyCode
    ).fadeIn());
    
    console.log(e);
}

function triggerKeyboardEvent(el, keyCode){
    var keyboardEvent = document.createEvent("KeyboardEvent");
    
    var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
  
  
    keyboardEvent[initMethod](
                       "keydown",
                        true,      // bubbles oOooOOo0
                        true,      // cancelable   
                        window,    // view
                        false,     // ctrlKeyArg
                        false,     // altKeyArg
                        false,     // shiftKeyArg
                        false,     // metaKeyArg
                        keyCode,  
                        0          // charCode   
    );
  
    el.dispatchEvent(keyboardEvent); 
}

$(document).ready(function(){
  
  document.addEventListener("keydown", function(e){
    traceEvent(e);
  });
  
  $("#buttons-generic").find("button").click(function(){
    __triggerKeyboardEvent(document.body, parseInt($(this).attr("data-key")));
  });

  $("#buttons-keyboard").find("button").click(function(){
    triggerKeyboardEvent(document.body, parseInt($(this).attr("data-key")));
  });
  
  /*
  setInterval(function(){
    __triggerKeyboardEvent(document.body, 13);
  }, 5000);
}); 













    let speedY = 0
    
    let tamanhoPeca = Math.floor(largura / 20)
    let quatidadePeca = (tamanhoPeca / 2)
    let decrementoPeca = quatidadePeca - 1
    let tomatoX = 15
    let tomatoY = 15

    let rastro = []
    rabo = 5

    document.addEventListener('keydown', keyPress)

    

    function jogo() {
        partidaX += speedX
        partidaY += speedY

        if(partidaX < 0) {
            partidaX = decrementoPeca
        }

        if(partidaX > decrementoPeca){
            partidaX = 0
        }
        
        if(partidaY < 0) {
            partidaX = decrementoPeca
        }

        if(partidaY > decrementoPeca){
            partidaX = 0
        }

        
        
        ctx.fillStyle = 'red'
        ctx.fillRect(tomatoX * tamanhoPeca, tomatoY * tamanhoPeca, tamanhoPeca, tamanhoPeca)

        ctx.fillStyle = 'green'
        for (let i = 0; i < rastro.length; i++) {
            const element = rastro[i];
            ctx.fillRect(rastro[i].X*tamanhoPeca, rastro[i].Y*tamanhoPeca, tamanhoPeca, tamanhoPeca)
            if (rastro[i].X == partidaX && rastro[i].Y == partidaY) {
                speedX = speedY = 0 
                rabo = 5
            }
        }

        rastro.push({X:partidaX, Y:partidaY})

        while(rastro.length > rabo) {
            rastro.shift()
        }

        if(tomatoX == partidaX && tomatoY == partidaY) {
            rabo++
            tomatoX = Math.floor(Math.random() * quatidadePeca)
            tomatoY = Math.floor(Math.random() * quatidadePeca)
        }
    }

    function keyPress(e) {
        switch(e.keyCode) {
            case 37:
                speedX = -speed
                speedY = 0

            case 38:
                speedX = 0
                speedY = -speed

            case 39:
                speedX = speed
                speedY = 0

            case 40:
                speedX = 0
                speedY = speed
        }
    }*/

