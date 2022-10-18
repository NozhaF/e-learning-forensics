function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68fJ5q3Ixc5":
        Script1();
        break;
      case "6Szrn5eNUJi":
        Script2();
        break;
      case "6AxzRLwX3wF":
        Script3();
        break;
  }
}

function Script1()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
}
}

function Script2()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
}
}

function Script3()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
}
}

