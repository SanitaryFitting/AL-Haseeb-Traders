//*******************/1- Elbow Rates  ***********************
const ELBOW2Inch = 30
const ELBOW3Inch = 65
const ELBOW4Inch = 75
const ELBOW3by4Inch = "--"
const ELBOW2by3Inch = "--"
const ELBOW2by4Inch = "--"

//*******************/2- Tee Rates  ***********************
const TEE2Inch = 50
const TEE3Inch = 75
const TEE4Inch = 110
//*******************/3- Socket Rates  ***********************
const Socket2Inch = 25
const Socket3Inch = 50
const Socket4Inch = 60
const Socket2BY3Inch = "--"
const Socket2BY4Inch = "--"
const Socket3BY4Inch = "--"
//*******************/4- Yee Rates  ***********************
const YEE3inch = 150
const YEE4inch = 170
//*******************/5- Elbow 45 Degree Rates  ***********************
const ELBOW3Inch45Degree = 65
const ELBOW4Inch45Degree = 75
//*******************/6- Elbow 45 Degree Rates  ***********************
const ENDCAP2Inch = "--"
const ENDCAP3Inch = "--"
const ENDCAP4Inch = 60
//*******************/7- Bend Rates  ******************************
const  Bend3Inch = "--"
const  Bend4Inch = 165
//*******************/8- Cowl Rates  ******************************
const COWL2Inch = "--"
const COWL3Inch = "--"
const COWL4Inch = "--"
//*******************/9- Plug Elbow Rates  ******************************
const PlugELBOW3Inch = "--"
const PlugELBOW4Inch = "--"
//*******************/10- Plug Socket Rates  ******************************
const PlugSOCKET3Inch = "--"
const PlugSOCKET4Inch = "--"
//*******************/11- Plug Tee Rates  ******************************
const PlugTEE3Inch = "--"
const PlugTEE4Inch = "--"







//**************** */ Elbow Rates Function ************************
function updateElbowPrices() {
  let elbow2 = document.getElementById("elbow2inch90degree");
  const elbow3 = document.getElementById("elbow3inch90degree");
  const elbow4 = document.getElementById("elbow4inch90degree");
  const elbow2x3 = document.getElementById("elbow2inchby3inch90degree");
  const elbow2x4 = document.getElementById("elbow2inchby4inch90degree");
  const elbow3x4 = document.getElementById("elbow3inchby4inch90degree");

  if (elbow2) elbow2.innerText = ELBOW2Inch;
  if (elbow3) elbow3.innerText = ELBOW3Inch;
  if (elbow4) elbow4.innerText = ELBOW4Inch;
  if (elbow2x3) elbow2x3.innerText = ELBOW2by3Inch;
  if (elbow2x4) elbow2x4.innerText = ELBOW2by4Inch;
  if (elbow3x4) elbow3x4.innerText = ELBOW3by4Inch;
  


  }
  
// ************************* Tee Rates Function ********************
function updateTeePrices() {
  const tee2 = document.getElementById("tee2inch");
  const tee3 = document.getElementById("tee3inch");
  const tee4 = document.getElementById("tee4inch");

  if (tee2) tee2.innerText = TEE2Inch;
  if (tee3) tee3.innerText = TEE3Inch;
  if (tee4) tee4.innerText = TEE4Inch;

  
}
//****************/ Socket Rates Function  **********************

function updateSocketPrice(){
const socket2 = document.getElementById("socket2inch");
const socket3 = document.getElementById("socket3inch");
const socket4 = document.getElementById("socket4inch");
const socket2by3 = document.getElementById("socket2inchby3inch");
const socket2by4 = document.getElementById("socket2inchby4inch");
const socket3by4 = document.getElementById("socket3inchby4inch");


if(socket2) socket2.innerText = Socket2Inch;
if(socket3) socket3.innerText = Socket3Inch;
if(socket4) socket4.innerText = Socket4Inch;
if(socket2by3) socket2by3.innerText = Socket2BY3Inch;
if(socket2by4) socket2by4.innerText = Socket2BY4Inch;
if(socket3by4) socket3by4.innerText = Socket3BY4Inch;

}

//*******************/ Yee Rates Function  **************************

function updateYeePrice(){
const yee3 = document.getElementById("yee3inch")
const yee4 = document.getElementById("yee4inch")
 
if(yee3) yee3.innerText = YEE3inch;
if(yee4) yee4.innerText = YEE4inch;


}
//***********/ Elbow 45degree Rates Function  *******************

function updateElbow45degreePrice(){
 const elbow3inch45 = document.getElementById("elbow3inch45degree")
 const elbow4inch45 = document.getElementById("elbow4inch45degree")


 if(elbow3inch45) elbow3inch45.innerText = ELBOW3Inch45Degree;
 if(elbow4inch45) elbow4inch45.innerText = ELBOW4Inch45Degree
}
//***************/ EndCap Rates Function *******************

function updateEndCapPrice(){
const endcap2inch = document.getElementById("endcap2inch")
const endcap3inch = document.getElementById("endcap3inch")
const endcap4inch = document.getElementById("endcap4inch")

if(endcap2inch) endcap2inch.innerText = ENDCAP2Inch;
if(endcap3inch) endcap3inch.innerText = ENDCAP3Inch;
if(endcap4inch) endcap4inch.innerText = ENDCAP4Inch;

}

//*****************/ Bend Rates Function  **********************

function updateBentRates(){
const bend3Inch = document.getElementById("bend3inch")
const bend4Inch = document.getElementById("bend4inch")

if(bend3Inch) bend3Inch.innerText = Bend3Inch;
if(bend4Inch) bend4Inch.innerText = Bend4Inch;


}

//*******************/ Cowl Rates Function *************************

function updateCowlPrice(){
const cowl2inch = document.getElementById("cowl2inch")
const cowl3inch = document.getElementById("cowl3inch")
const cowl4inch = document.getElementById("cowl4inch")

if(cowl2inch) cowl2inch.innerText = COWL2Inch;
if(cowl3inch) cowl3inch.innerText = COWL3Inch;
if(cowl4inch) cowl4inch.innerText = COWL4Inch;

}

//************/ Plug Elbow Rates Function *******************
function updatePlugElbowRates(){
  const plugEblow3 = document.getElementById("plugelbow3inch")
  const plugEblow4 = document.getElementById("plugelbow4inch")

  if(plugEblow3) plugEblow3.innerText = PlugELBOW3Inch;
  if(plugEblow4) plugEblow4.innerText = PlugELBOW4Inch;
}
//************/ Plug Socket Rates Function *******************
function updatePlugSocketPrice(){
const plugsocket3 = document.getElementById("plugsocket3")
const plugsocket4 = document.getElementById("plugsocket4")

if(plugsocket3) plugsocket3.innerText = PlugSOCKET3Inch;
if(plugsocket4) plugsocket4.innerText = PlugSOCKET4Inch;

}

//************/ Plug Tee Rates Function  *******************
function updatePlugTeePrice(){
const plugTee3 = document.getElementById("plugTee3")
const plugTee4 = document.getElementById("plugTee4")

if(plugTee3) plugTee3.innerText = PlugTEE3Inch;
if(plugTee4) plugTee4.innerText = PlugTEE4Inch;

}
//************/ Rate List page Table  Functions  ****************
function updateRateListTable(){
  let elbow2 = document.getElementById("elbow2inch90degree");
  const elbow3 = document.getElementById("elbow3inch90degree");
  const elbow4 = document.getElementById("elbow4inch90degree");
  const elbow2x3 = document.getElementById("elbow2inchby3inch90degree");
  const elbow2x4 = document.getElementById("elbow2inchby4inch90degree");
  const elbow3x4 = document.getElementById("elbow3inchby4inch90degree");

  if (elbow2) elbow2.innerText = ELBOW2Inch;
  if (elbow3) elbow3.innerText = ELBOW3Inch;
  if (elbow4) elbow4.innerText = ELBOW4Inch;
  if (elbow2x3) elbow2x3.innerText = ELBOW2by3Inch;
  if (elbow2x4) elbow2x4.innerText = ELBOW2by4Inch;
  if (elbow3x4) elbow3x4.innerText = ELBOW3by4Inch;

  const tee2 = document.getElementById("tee2inch");
  const tee3 = document.getElementById("tee3inch");
  const tee4 = document.getElementById("tee4inch");

  if (tee2) tee2.innerText = TEE2Inch;
  if (tee3) tee3.innerText = TEE3Inch;
  if (tee4) tee4.innerText = TEE4Inch;


  const socket2 = document.getElementById("socket2inch");
const socket3 = document.getElementById("socket3inch");
const socket4 = document.getElementById("socket4inch");
const socket2by3 = document.getElementById("socket2inchby3inch");
const socket2by4 = document.getElementById("socket2inchby4inch");
const socket3by4 = document.getElementById("socket3inchby4inch");


if(socket2) socket2.innerText = Socket2Inch;
if(socket3) socket3.innerText = Socket3Inch;
if(socket4) socket4.innerText = Socket4Inch;
if(socket2by3) socket2by3.innerText = Socket2BY3Inch;
if(socket2by4) socket2by4.innerText = Socket2BY4Inch;
if(socket3by4) socket3by4.innerText = Socket3BY4Inch;


const yee3 = document.getElementById("yee3inch")
const yee4 = document.getElementById("yee4inch")
 
if(yee3) yee3.innerText = YEE3inch;
if(yee4) yee4.innerText = YEE4inch;


const elbow3inch45 = document.getElementById("elbow3inch45degree")
 const elbow4inch45 = document.getElementById("elbow4inch45degree")


 if(elbow3inch45) elbow3inch45.innerText = ELBOW3Inch45Degree;
 if(elbow4inch45) elbow4inch45.innerText = ELBOW4Inch45Degree


 const endcap2inch = document.getElementById("endcap2inch")
const endcap3inch = document.getElementById("endcap3inch")
const endcap4inch = document.getElementById("endcap4inch")

if(endcap2inch) endcap2inch.innerText = ENDCAP2Inch;
if(endcap3inch) endcap3inch.innerText = ENDCAP3Inch;
if(endcap4inch) endcap4inch.innerText = ENDCAP4Inch;


const bend3Inch = document.getElementById("bend3inch")
const bend4Inch = document.getElementById("bend4inch")

if(bend3Inch) bend3Inch.innerText = Bend3Inch;
if(bend4Inch) bend4Inch.innerText = Bend4Inch;


const cowl2inch = document.getElementById("cowl2inch")
const cowl3inch = document.getElementById("cowl3inch")
const cowl4inch = document.getElementById("cowl4inch")

if(cowl2inch) cowl2inch.innerText = COWL2Inch;
if(cowl3inch) cowl3inch.innerText = COWL3Inch;
if(cowl4inch) cowl4inch.innerText = COWL4Inch;


 const plugEblow3 = document.getElementById("plugelbow3inch")
  const plugEblow4 = document.getElementById("plugelbow4inch")

  if(plugEblow3) plugEblow3.innerText = PlugELBOW3Inch;
  if(plugEblow4) plugEblow4.innerText = PlugELBOW4Inch;


  const plugsocket3 = document.getElementById("plugsocket3")
const plugsocket4 = document.getElementById("plugsocket4")

if(plugsocket3) plugsocket3.innerText = PlugSOCKET3Inch;
if(plugsocket4) plugsocket4.innerText = PlugSOCKET4Inch;


const plugTee3 = document.getElementById("plugTee3")
const plugTee4 = document.getElementById("plugTee4")

if(plugTee3) plugTee3.innerText = PlugTEE3Inch;
if(plugTee4) plugTee4.innerText = PlugTEE4Inch;
















}









// Detect which page is currently open
const currentPage = window.location.pathname.split("/").pop(); // like 'elbow-90.html' or 'tee.html'

switch (currentPage) {
  case "elbow.html":
    updateElbowPrices();
    break;
  case "tee.html":
    updateTeePrices();
    break;
  case "socket.html":
    updateSocketPrice();
    break;
  case "yee.html":
    updateYeePrice();
    break;
  case "elbow45.html":
    updateElbow45degreePrice();
    break;
  case "endcap.html":
    updateEndCapPrice();
    break;
    case "bend.html":
    updateBentRates();
    break;
    case "cowl.html":
    updateCowlPrice();
    break;
    case "plugelbow.html":
    updatePlugElbowRates();
    break;
    case "plugsocket.html":
    updatePlugSocketPrice();
    break;
    case "plugtee.html":
    updatePlugTeePrice();
    break;
     case "RateList.html":
    updateRateListTable();
    break;
  default:
    console.log("No price update for this page.");
}
