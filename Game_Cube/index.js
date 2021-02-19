//1.DOM statement
const character = document.getElementById("character");
const block = document.getElementById("block");
//2.Function Jump
function jump(){
    if(character.classList != "animate"){
 character.classList.add("animate");
    }
    //3.Set interval of jumping
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500)
}

//4.Set a check of Death

const checkDead = setInterval( function(){
    //4.1.Set character property of death
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //4.2.Get block to the top
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //5.If statement
    if(blockLeft <20 && blockLeft > 0 && characterTop >=130){
        block.style.animation = "none";
        block.style.display = "none";
        document.location.reload()
        alert("You lose.");
    }
},10)