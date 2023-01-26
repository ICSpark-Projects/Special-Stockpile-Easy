// objects
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

// boilerplate content below

// getting elements based on the ids in the HTML file
var visual = document.getElementById("visual");
var objName = document.getElementById("obj-name");
var type = document.getElementById("type");
var desc = document.getElementById("desc");

// button setup based on the ids set
var lButton = document.getElementById("leftbutton");
var rButton = document.getElementById("rightbutton");

// initalize counter of current index and max count, start at first index
var thingIndex = 0;
/* 
.length will return a value one larger than the value of 
the last index, subtract by 1 to know what the number of 
the last index is
*/
var maxIndex = things.length - 1;

// button functions for clicking of left and right buttons
lButton.onclick = function(){
  console.log("left button");
};

rButton.onclick = function(){
  console.log("right button");
};

/* 
general updateContent function, allows us to not have to type
each of the individual functions inside multiple times 
*/
function updateContent (thingIndex){
  visual.src = things[thingIndex].imgsrc;
  objName.innerHTML = things[thingIndex].name;
  type.innerHTML = things[thingIndex].type;
  desc.innerHTML = things[thingIndex].desc;
}

// setting the first image and set of text to display by using the function just made
updateContent(thingIndex);

// event listener for left button
lButton.addEventListener("click", function(){
    
  // if current index same as the leftmost index of array...
  if(thingIndex == 0){
    /* 
    set the index to the largest index so you can wrap
    around to the last entry of the array 
    */
    thingIndex = maxIndex;
  } else {
    // else just go back one entry
    thingIndex--;
  }
    // console.log(thingIndex);
  
    // change the image and text to what's at new index
    updateContent(thingIndex);
});

// event listener for right button
rButton.addEventListener("click", function(){
  
  // if current index same as greatest index number...
  if(thingIndex == maxIndex){
    /*
    set index back to the first index at 0 to wrap back
    around from the last entry to the first entry
    */
    thingIndex = 0;
  } else {
    // else just move to the next index
    thingIndex++;
  }
    // console.log(thingIndex);
  
    // change image and set text to ones at new index
    updateContent(thingIndex);
});
