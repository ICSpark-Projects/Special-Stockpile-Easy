var object1 = {
  imgsrc: "https://wiki.teamfortress.com/w/images/thumb/b/bc/GoldenFryingPan.png/250px-GoldenFryingPan.png",
  name: "Golden Frying Pan",
  type: "Pan",
  desc: "pan but golden"
}

var object2 = {
  imgsrc: "https://i.ebayimg.com/images/g/FqkAAOSwOyRgsMe8/s-l640.jpg",
  name: "Sakuya Izayoi fumo",
  type: "fumo",
  desc: "funni meido"
}

var object3 = {
  imgsrc: "https://static.tvtropes.org/pmwiki/pub/images/fotoacecombatzero_thebelkanwarjapons.jpg",
  name: "Ace Combat Zero: The Belkan War",
  type: "game",
  desc: "cool and epic video game"
}

const things = [object1, object2, object3];

//console.log(things);

// getting elements
var visual = document.getElementById("visual");
var objName = document.getElementById("obj-name");
var type = document.getElementById("type");
var desc = document.getElementById("desc");

// button shenanigans
var lButton = document.getElementById("leftbutton");
var rButton = document.getElementById("rightbutton");

// initalize counter of current index and max count
var thingIndex = 0;
var maxIndex = things.length - 1;

// button function
lButton.onclick = function(){
  console.log("left button");
};

rButton.onclick = function(){
  console.log("right button");
};

function updateContent (thingIndex){
  visual.src = things[thingIndex].imgsrc;
  objName.innerHTML = things[thingIndex].name;
  type.innerHTML = things[thingIndex].type;
  desc.innerHTML = things[thingIndex].desc;
}

updateContent(thingIndex);

  lButton.addEventListener("click", function(){
  if(thingIndex == 0){
    thingIndex = maxIndex;
  } else {
    thingIndex--;
  }
    console.log(thingIndex);
    updateContent(thingIndex);
});
  rButton.addEventListener("click", function(){
  if(thingIndex == maxIndex){
    thingIndex = 0;
  } else {
    thingIndex++;
  }
    console.log(thingIndex);
    updateContent(thingIndex);
});
