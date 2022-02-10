
// ----------------------- Local Storage Code -----------------------
/*
EVERY FUNCTION NAMES

(Inside PopUp.js Script)
1. MyMatchBoxRound2   
2. SubmitPlayersButton
3. SubmitResultsButton
4. SubmitResultsButton2

(Inside Bracket_Creator.js Script)
1. MyMatchBoxRound1 
2. MyMatchBoxRound2
3. MyMatchBoxRound3
4. MyMatchBoxRound4
5. MyMatchBoxRound5
6. MyMatchBoxRound6 
*/




document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('DropDownNumber');
  if (localStorage['DropDownNumber']) {
      input.value = localStorage['DropDownNumber'];
  }
  input.onchange = function () {
       localStorage['DropDownNumber'] = this.value;
   }
});

document.getElementById("Clean_Settings").addEventListener('click',Clean_Settings);

function Clean_Settings(){
localStorage.clear();
}


// ----------------------- Settings -----------------------
document.querySelector('.Settings').addEventListener('click',
function(){
  document.querySelector('.PopUp').style.display = 'flex'
});

document.querySelector('.Close').addEventListener('click',
function(){
  document.querySelector('.PopUp').style.display = 'none'
});
// ----------------------- Settings end -----------------------

document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound2);

//------------------------Container for names-------------------------------

let Enter_Names_Container = document.getElementById("Enter_Names_Container");

let Enter_Name_Branch = document.createElement('div');
Enter_Name_Branch.id = "Enter_Name_Branch";
Enter_Name_Branch.className = "Enter_Name_Branch";
Enter_Names_Container.append(Enter_Name_Branch);

//------------------------Container for Result-------------------------------

const Results = {}
const Branch = {}
for (let i = 1; i < 7; i++) {
  Results["B" + i + "_Enter_Result_Container"] = document.getElementById("B" + i + "_Enter_Result_Container");
  Branch["B" + i + "_Enter_Result_Branch"] = document.createElement("div");

  Branch["B" + i + "_Enter_Result_Branch"].id = "B" + i + "_Enter_Result_Branch";
  Branch["B" + i + "_Enter_Result_Branch"].classList.add("branch");
  Results["B" + i + "_Enter_Result_Container"].append(Branch["B" + i + "_Enter_Result_Branch"]);
}




//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound2(){



Enter_Name_Branch.innerHTML = "";
B1_Enter_Result_Branch.innerHTML = "";
B2_Enter_Result_Branch.innerHTML = "";
B3_Enter_Result_Branch.innerHTML = "";
B4_Enter_Result_Branch.innerHTML = "";
B5_Enter_Result_Branch.innerHTML = "";
B6_Enter_Result_Branch.innerHTML = "";


let Real_Selected_Number = parseInt(document.getElementById('DropDownNumber').value);
let Selected_Number = parseInt(document.getElementById('DropDownNumber').value) + 1;



for (let i = 1; i < Selected_Number; i++){

let MATCH_ID = (i++/2)+0.5;
let One = (1);
let Two = (2);

//Box Surrounding Players for Flexbox
let Enter_Name_Match_Flex = document.createElement('div');
Enter_Name_Match_Flex.id = "Enter_Name_Match_Flex";
Enter_Name_Match_Flex.className = "Enter_Name_Match_Flex";
document.body.append(Enter_Name_Match_Flex);

//-------------------------------Name Selector------------------------------------------------------------
//First Player Box
let Enter_Name_Div_Player_Names_Left = document.createElement('div');
Enter_Name_Div_Player_Names_Left.id = ("Div_Select_M" + MATCH_ID + "_P1");

let Enter_Name_Div_Result_Points_Right = document.createElement('div');
Enter_Name_Div_Result_Points_Right.id = ("Div_Select_M" + MATCH_ID + "_P2");
//First Player Name
let Match_Label = document.createElement('div');
Match_Label.id = ("Match_" + MATCH_ID);
Match_Label.className = ("Match_Class");
Match_Label.innerHTML = ("Match " + MATCH_ID);
Enter_Name_Match_Flex.append(Match_Label);

Enter_Name_Match_Flex.append(Enter_Name_Div_Player_Names_Left);

let Enter_Name_First_Player_Name = document.createElement('select');
Enter_Name_First_Player_Name.id = ("Select_M" + MATCH_ID + "_P1");
Enter_Name_First_Player_Name.className = "Enter_Name";
Enter_Name_Div_Player_Names_Left.append(Enter_Name_First_Player_Name);

//Second Player Name
let Enter_Name_Second_Player_Name = document.createElement('select');
Enter_Name_Second_Player_Name.id = ("Select_M" + MATCH_ID + "_P2");
Enter_Name_Second_Player_Name.className = "Enter_Name";
Enter_Name_Div_Player_Names_Left.append(Enter_Name_Second_Player_Name);

//--------------Name From Sheets------------------------
{
  let url = 'https://docs.google.com/spreadsheets/d/1cDV0v7y7j991Z7Ube9k3fXBI2m5nAIfICOAWkieDQNg/gviz/tq?';
  const query = encodeURIComponent('Select A');
  url = url + '&tq=' + query;
  
  fetch(url)
  .then(res => res.text())
  .then(rep =>{
  
  const data = JSON.parse(rep.substr(47).slice(0,-2));
  
  const row01 = document.createElement('tr');
  Enter_Name_First_Player_Name.id = ("Select_M" + MATCH_ID + "_P1"); //------new---------
  Enter_Name_First_Player_Name.append(row01);
  //--↑---
  
  
  data.table.cols.forEach((heading)=>{
  const cell = document.createElement('option');
  cell.textContent = heading.label;
  
  row01.append(cell);
  })
  
  data.table.rows.forEach((main)=>{
  
  const container1 = document.createElement('option');
  Enter_Name_First_Player_Name.append(container1);
  //--↑---
  
  
  main.c.forEach((element)=> {
  
      const cell1 =  document.createElement('option');
      cell1.textContent = element.v;
  
      container1.append(cell1);
  })
  })
  })
  }
  
  {
    let url = 'https://docs.google.com/spreadsheets/d/1cDV0v7y7j991Z7Ube9k3fXBI2m5nAIfICOAWkieDQNg/gviz/tq?';
    const query = encodeURIComponent('Select B');
    url = url + '&tq=' + query;
    
    fetch(url)
    .then(res => res.text())
    .then(rep =>{
    
    const data = JSON.parse(rep.substr(47).slice(0,-2));
  
    const row01 = document.createElement('tr');
    Enter_Name_Second_Player_Name.id = ("Select_M" + MATCH_ID + "_P2"); //------new---------
    Enter_Name_Second_Player_Name.append(row01);
    //--↑---
  
    data.table.cols.forEach((heading)=>{
    const cell = document.createElement('br');
    cell.textContent = heading.label;
    
    row01.append(cell);
    })
    
    data.table.rows.forEach((main)=>{
    
    const container1 = document.createElement('option');
    Enter_Name_Second_Player_Name.append(container1);
    //--↑---
    
    
    main.c.forEach((element)=> {
    
        const cell1 =  document.createElement('none');
        cell1.textContent = element.v;
    
        container1.append(cell1);
    })
    })
    })
  }
  //---------------Name From Sheets Slut -----------------------

{//---------------------------------Result & Names config Branch 1----------------------------------------------------------


//Box Surrounding Result for Flexbox
let Enter_Result_Match_Flex = document.createElement('div');
Enter_Result_Match_Flex.id = "Enter_Result_Match_Flex";
Enter_Result_Match_Flex.className = "Enter_Result_Match_Flex";
B1_Enter_Result_Branch.append(Enter_Result_Match_Flex);
//↑

//Create "Match 1" text
let Match_Label_2 = document.createElement('div');
Match_Label_2.id = ("Match_" + MATCH_ID);
Match_Label_2.className = ("Match_Class");
Match_Label_2.innerHTML = ("Match " + MATCH_ID);
Enter_Result_Match_Flex.append(Match_Label_2);

let Left = document.createElement('div');
let Middle_Left = document.createElement('div');
let Middle_Right = document.createElement('div');
let Right = document.createElement('div');



//-------------------Result & Names Code-----------------------------
Left.id = ("Pop_Div_B1_M" + MATCH_ID + "_P1");
Middle_Left.id = ("Pop_Div_B1_M" + MATCH_ID + "_R1");
Middle_Right.id = ("Pop_Div_B1_M" + MATCH_ID + "_R2");
Right.id = ("Pop_Div_B1_M" + MATCH_ID + "_P2");

Left.className = ("Pop_Name");
Middle_Left.className = ("Pop_Res");
Middle_Right.className = ("Pop_Res");
Right.className = ("Pop_Name");

let Container_For_name_Result = document.createElement('div');
Container_For_name_Result.id = ("Container_For_name_Result");
Container_For_name_Result.className = ("Container_For_name_Result");
Enter_Result_Match_Flex.append(Container_For_name_Result);

Container_For_name_Result.append(Left);
Container_For_name_Result.append(Middle_Left);
Container_For_name_Result.append(Middle_Right);
Container_For_name_Result.append(Right);

let Name_Div_Left = document.createElement('input');
Name_Div_Left.id = ("Pop_Input_B1_M" + MATCH_ID + "_P1");
Name_Div_Left.className = ("Player_Name");
Left.append(Name_Div_Left);

let Result_Div_Middle_Left = document.createElement('select');
Result_Div_Middle_Left.id = ("Pop_Input_B1_M" + MATCH_ID + "_R1");
Result_Div_Middle_Left.className = ("Player_Result");
Middle_Left.append(Result_Div_Middle_Left);

let Result_Div_Middle_Right = document.createElement('select');
Result_Div_Middle_Right.id = ("Pop_Input_B1_M" + MATCH_ID + "_R2");
Result_Div_Middle_Right.className = ("Player_Result");
Middle_Right.append(Result_Div_Middle_Right);

let Name_Div_Right = document.createElement('input');
Name_Div_Right.id = ("Pop_Input_B1_M" + MATCH_ID + "_P2");
Name_Div_Right.className = ("Player_Name");
Right.append(Name_Div_Right);

//-------------------------------------------

var First_Select_Result_2 = document.getElementById(Result_Div_Middle_Left);
let First_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < First_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(First_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Left.insertBefore(option,Result_Div_Middle_Left.lastChild);
}

var Second_Select_Result_2 = document.getElementById(Result_Div_Middle_Right);
let Second_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < Second_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(Second_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Right.insertBefore(option,Result_Div_Middle_Right.lastChild);
}
} //Name Config Slut

Enter_Name_Branch.append(Enter_Name_Match_Flex); // Append the fields to the Players element
} //For Loop Slut


{//---------------------------------Result & Names config Branch 2----------------------------------------------------------
  const countAll = document.querySelectorAll('#Match_Flex').length;
  let doc = document.getElementById("B2_Enter_Result_Container");
  if(countAll === 1){ 
                  //↑
    B2_Enter_Result_Branch.innerHTML = "";
    doc.style.display = 'none';

  } else { 
    doc.style.display = 'block';
    B2_Enter_Result_Branch.innerHTML = "";
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/2;
    for (let d = 1; d < Selected_Number; d++){                                          //↑

      let MATCH_ID = (d++/2)+0.5; 

//Box Surrounding Result for Flexbox
let Enter_Result_Match_Flex = document.createElement('div');
Enter_Result_Match_Flex.id = "Enter_Result_Match_Flex";
Enter_Result_Match_Flex.className = "Enter_Result_Match_Flex";
B2_Enter_Result_Branch.append(Enter_Result_Match_Flex);
//↑

//Create "Match 1" text
let Match_Label_2 = document.createElement('div');
Match_Label_2.id = ("Match_" + MATCH_ID);
Match_Label_2.className = ("Match_Class");
Match_Label_2.innerHTML = ("Match " + MATCH_ID);
Enter_Result_Match_Flex.append(Match_Label_2);

let Left = document.createElement('div');
let Middle_Left = document.createElement('div');
let Middle_Right = document.createElement('div');
let Right = document.createElement('div');



//-------------------Result & Names Code-----------------------------
Left.id = ("Pop_Div_B2_M" + MATCH_ID + "_P1");
Middle_Left.id = ("Pop_Div_B2_M" + MATCH_ID + "_R1");
Middle_Right.id = ("Pop_Div_B2_M" + MATCH_ID + "_R2");
Right.id = ("Pop_Div_B2_M" + MATCH_ID + "_P2");

Left.className = ("Pop_Name");
Middle_Left.className = ("Pop_Res");
Middle_Right.className = ("Pop_Res");
Right.className = ("Pop_Name");

let Container_For_name_Result = document.createElement('div');
Container_For_name_Result.id = ("Container_For_name_Result");
Container_For_name_Result.className = ("Container_For_name_Result");
Enter_Result_Match_Flex.append(Container_For_name_Result);

Container_For_name_Result.append(Left);
Container_For_name_Result.append(Middle_Left);
Container_For_name_Result.append(Middle_Right);
Container_For_name_Result.append(Right);

let Name_Div_Left = document.createElement('input');
Name_Div_Left.id = ("Pop_Input_B2_M" + MATCH_ID + "_P1");
Name_Div_Left.className = ("Player_Name");
Left.append(Name_Div_Left);

let Result_Div_Middle_Left = document.createElement('select');
Result_Div_Middle_Left.id = ("Pop_Input_B2_M" + MATCH_ID + "_R1");
Result_Div_Middle_Left.className = ("Player_Result");
Middle_Left.append(Result_Div_Middle_Left);

let Result_Div_Middle_Right = document.createElement('select');
Result_Div_Middle_Right.id = ("Pop_Input_B2_M" + MATCH_ID + "_R2");
Result_Div_Middle_Right.className = ("Player_Result");
Middle_Right.append(Result_Div_Middle_Right);

let Name_Div_Right = document.createElement('input');
Name_Div_Right.id = ("Pop_Input_B2_M" + MATCH_ID + "_P2");
Name_Div_Right.className = ("Player_Name");
Right.append(Name_Div_Right);

//-------------------------------------------

var First_Select_Result_2 = document.getElementById(Result_Div_Middle_Left);
let First_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < First_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(First_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Left.insertBefore(option,Result_Div_Middle_Left.lastChild);
}

var Second_Select_Result_2 = document.getElementById(Result_Div_Middle_Right);
let Second_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < Second_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(Second_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Right.insertBefore(option,Result_Div_Middle_Right.lastChild);
}
}
}
} //Name Config Slut


{//---------------------------------Result & Names config Branch 3----------------------------------------------------------
  const countAll = document.querySelectorAll('#Match_Flex').length;
  let doc = document.getElementById("B3_Enter_Result_Container");
  if(countAll < 4){ 
              //↑
    B3_Enter_Result_Branch.innerHTML = "";
    doc.style.display = 'none';

  } else { 
    doc.style.display = 'block';
    B3_Enter_Result_Branch.innerHTML = "";
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/4;
    for (let d = 1; d < Selected_Number; d++){                                          //↑

      let MATCH_ID = (d++/2)+0.5; 

//Box Surrounding Result for Flexbox
let Enter_Result_Match_Flex = document.createElement('div');
Enter_Result_Match_Flex.id = "Enter_Result_Match_Flex";
Enter_Result_Match_Flex.className = "Enter_Result_Match_Flex";
B3_Enter_Result_Branch.append(Enter_Result_Match_Flex);
//↑

//Create "Match 1" text
let Match_Label_2 = document.createElement('div');
Match_Label_2.id = ("Match_" + MATCH_ID);
Match_Label_2.className = ("Match_Class");
Match_Label_2.innerHTML = ("Match " + MATCH_ID);
Enter_Result_Match_Flex.append(Match_Label_2);

let Left = document.createElement('div');
let Middle_Left = document.createElement('div');
let Middle_Right = document.createElement('div');
let Right = document.createElement('div');



//-------------------Result & Names Code-----------------------------
Left.id = ("Pop_Div_B3_M" + MATCH_ID + "_P1");
Middle_Left.id = ("Pop_Div_B3_M" + MATCH_ID + "_R1");
Middle_Right.id = ("Pop_Div_B3_M" + MATCH_ID + "_R2");
Right.id = ("Pop_Div_B3_M" + MATCH_ID + "_P2");

Left.className = ("Pop_Name");
Middle_Left.className = ("Pop_Res");
Middle_Right.className = ("Pop_Res");
Right.className = ("Pop_Name");

let Container_For_name_Result = document.createElement('div');
Container_For_name_Result.id = ("Container_For_name_Result");
Container_For_name_Result.className = ("Container_For_name_Result");
Enter_Result_Match_Flex.append(Container_For_name_Result);

Container_For_name_Result.append(Left);
Container_For_name_Result.append(Middle_Left);
Container_For_name_Result.append(Middle_Right);
Container_For_name_Result.append(Right);

let Name_Div_Left = document.createElement('input');
Name_Div_Left.id = ("Pop_Input_B3_M" + MATCH_ID + "_P1");
Name_Div_Left.className = ("Player_Name");
Left.append(Name_Div_Left);

let Result_Div_Middle_Left = document.createElement('select');
Result_Div_Middle_Left.id = ("Pop_Input_B3_M" + MATCH_ID + "_R1");
Result_Div_Middle_Left.className = ("Player_Result");
Middle_Left.append(Result_Div_Middle_Left);

let Result_Div_Middle_Right = document.createElement('select');
Result_Div_Middle_Right.id = ("Pop_Input_B3_M" + MATCH_ID + "_R2");
Result_Div_Middle_Right.className = ("Player_Result");
Middle_Right.append(Result_Div_Middle_Right);

let Name_Div_Right = document.createElement('input');
Name_Div_Right.id = ("Pop_Input_B3_M" + MATCH_ID + "_P2");
Name_Div_Right.className = ("Player_Name");
Right.append(Name_Div_Right);

//-------------------------------------------

var First_Select_Result_2 = document.getElementById(Result_Div_Middle_Left);
let First_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < First_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(First_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Left.insertBefore(option,Result_Div_Middle_Left.lastChild);
}

var Second_Select_Result_2 = document.getElementById(Result_Div_Middle_Right);
let Second_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < Second_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(Second_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Right.insertBefore(option,Result_Div_Middle_Right.lastChild);
}
}
}
} //Name Config Slut

{//---------------------------------Result & Names config Branch 4----------------------------------------------------------
  const countAll = document.querySelectorAll('#Match_Flex').length;
  let doc = document.getElementById("B4_Enter_Result_Container");
  if(countAll < 8){ 
              //↑
    B4_Enter_Result_Branch.innerHTML = "";
    doc.style.display = 'none';

  } else { 
    doc.style.display = 'block';
    B4_Enter_Result_Branch.innerHTML = "";
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/8;
    for (let d = 1; d < Selected_Number; d++){                                          //↑

      let MATCH_ID = (d++/2)+0.5; 

//Box Surrounding Result for Flexbox
let Enter_Result_Match_Flex = document.createElement('div');
Enter_Result_Match_Flex.id = "Enter_Result_Match_Flex";
Enter_Result_Match_Flex.className = "Enter_Result_Match_Flex";
B4_Enter_Result_Branch.append(Enter_Result_Match_Flex);
//↑

//Create "Match 1" text
let Match_Label_2 = document.createElement('div');
Match_Label_2.id = ("Match_" + MATCH_ID);
Match_Label_2.className = ("Match_Class");
Match_Label_2.innerHTML = ("Match " + MATCH_ID);
Enter_Result_Match_Flex.append(Match_Label_2);

let Left = document.createElement('div');
let Middle_Left = document.createElement('div');
let Middle_Right = document.createElement('div');
let Right = document.createElement('div');



//-------------------Result & Names Code-----------------------------
Left.id = ("Pop_Div_B4_M" + MATCH_ID + "_P1");
Middle_Left.id = ("Pop_Div_B4_M" + MATCH_ID + "_R1");
Middle_Right.id = ("Pop_Div_B4_M" + MATCH_ID + "_R2");
Right.id = ("Pop_Div_B4_M" + MATCH_ID + "_P2");

Left.className = ("Pop_Name");
Middle_Left.className = ("Pop_Res");
Middle_Right.className = ("Pop_Res");
Right.className = ("Pop_Name");

let Container_For_name_Result = document.createElement('div');
Container_For_name_Result.id = ("Container_For_name_Result");
Container_For_name_Result.className = ("Container_For_name_Result");
Enter_Result_Match_Flex.append(Container_For_name_Result);

Container_For_name_Result.append(Left);
Container_For_name_Result.append(Middle_Left);
Container_For_name_Result.append(Middle_Right);
Container_For_name_Result.append(Right);

let Name_Div_Left = document.createElement('input');
Name_Div_Left.id = ("Pop_Input_B4_M" + MATCH_ID + "_P1");
Name_Div_Left.className = ("Player_Name");
Left.append(Name_Div_Left);

let Result_Div_Middle_Left = document.createElement('select');
Result_Div_Middle_Left.id = ("Pop_Input_B4_M" + MATCH_ID + "_R1");
Result_Div_Middle_Left.className = ("Player_Result");
Middle_Left.append(Result_Div_Middle_Left);

let Result_Div_Middle_Right = document.createElement('select');
Result_Div_Middle_Right.id = ("Pop_Input_B4_M" + MATCH_ID + "_R2");
Result_Div_Middle_Right.className = ("Player_Result");
Middle_Right.append(Result_Div_Middle_Right);

let Name_Div_Right = document.createElement('input');
Name_Div_Right.id = ("Pop_Input_B4_M" + MATCH_ID + "_P2");
Name_Div_Right.className = ("Player_Name");
Right.append(Name_Div_Right);

//-------------------------------------------

var First_Select_Result_2 = document.getElementById(Result_Div_Middle_Left);
let First_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < First_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(First_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Left.insertBefore(option,Result_Div_Middle_Left.lastChild);
}

var Second_Select_Result_2 = document.getElementById(Result_Div_Middle_Right);
let Second_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < Second_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(Second_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Right.insertBefore(option,Result_Div_Middle_Right.lastChild);
}
}
}
} //Name Config Slut

{//---------------------------------Result & Names config Branch 5----------------------------------------------------------
  const countAll = document.querySelectorAll('#Match_Flex').length;
  let doc = document.getElementById("B5_Enter_Result_Container");
  if(countAll < 16){ 
              //↑
    B5_Enter_Result_Branch.innerHTML = "";
    doc.style.display = 'none';

  } else { 
    doc.style.display = 'block';
    B5_Enter_Result_Branch.innerHTML = "";
    doc.style.display = 'block';
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/16;
    for (let d = 1; d < Selected_Number; d++){                                          //↑

      let MATCH_ID = (d++/2)+0.5; 

//Box Surrounding Result for Flexbox
let Enter_Result_Match_Flex = document.createElement('div');
Enter_Result_Match_Flex.id = "Enter_Result_Match_Flex";
Enter_Result_Match_Flex.className = "Enter_Result_Match_Flex";
B5_Enter_Result_Branch.append(Enter_Result_Match_Flex);
//↑

//Create "Match 1" text
let Match_Label_2 = document.createElement('div');
Match_Label_2.id = ("Match_" + MATCH_ID);
Match_Label_2.className = ("Match_Class");
Match_Label_2.innerHTML = ("Match " + MATCH_ID);
Enter_Result_Match_Flex.append(Match_Label_2);

let Left = document.createElement('div');
let Middle_Left = document.createElement('div');
let Middle_Right = document.createElement('div');
let Right = document.createElement('div');



//-------------------Result & Names Code-----------------------------
Left.id = ("Pop_Div_B5_M" + MATCH_ID + "_P1");
Middle_Left.id = ("Pop_Div_B5_M" + MATCH_ID + "_R1");
Middle_Right.id = ("Pop_Div_B5_M" + MATCH_ID + "_R2");
Right.id = ("Pop_Div_B5_M" + MATCH_ID + "_P2");

Left.className = ("Pop_Name");
Middle_Left.className = ("Pop_Res");
Middle_Right.className = ("Pop_Res");
Right.className = ("Pop_Name");

let Container_For_name_Result = document.createElement('div');
Container_For_name_Result.id = ("Container_For_name_Result");
Container_For_name_Result.className = ("Container_For_name_Result");
Enter_Result_Match_Flex.append(Container_For_name_Result);

Container_For_name_Result.append(Left);
Container_For_name_Result.append(Middle_Left);
Container_For_name_Result.append(Middle_Right);
Container_For_name_Result.append(Right);

let Name_Div_Left = document.createElement('input');
Name_Div_Left.id = ("Pop_Input_B5_M" + MATCH_ID + "_P1");
Name_Div_Left.className = ("Player_Name");
Left.append(Name_Div_Left);

let Result_Div_Middle_Left = document.createElement('select');
Result_Div_Middle_Left.id = ("Pop_Input_B5_M" + MATCH_ID + "_R1");
Result_Div_Middle_Left.className = ("Player_Result");
Middle_Left.append(Result_Div_Middle_Left);

let Result_Div_Middle_Right = document.createElement('select');
Result_Div_Middle_Right.id = ("Pop_Input_B5_M" + MATCH_ID + "_R2");
Result_Div_Middle_Right.className = ("Player_Result");
Middle_Right.append(Result_Div_Middle_Right);

let Name_Div_Right = document.createElement('input');
Name_Div_Right.id = ("Pop_Input_B5_M" + MATCH_ID + "_P2");
Name_Div_Right.className = ("Player_Name");
Right.append(Name_Div_Right);

//-------------------------------------------

var First_Select_Result_2 = document.getElementById(Result_Div_Middle_Left);
let First_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < First_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(First_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Left.insertBefore(option,Result_Div_Middle_Left.lastChild);
}

var Second_Select_Result_2 = document.getElementById(Result_Div_Middle_Right);
let Second_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < Second_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(Second_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Right.insertBefore(option,Result_Div_Middle_Right.lastChild);
}
}
}
} //Name Config Slut

{//---------------------------------Result & Names config Branch 6----------------------------------------------------------
  const countAll = document.querySelectorAll('#Match_Flex').length;
  let doc = document.getElementById("B6_Enter_Result_Container");
  if(countAll < 32){ 
              //↑
    B6_Enter_Result_Branch.innerHTML = "";
    doc.style.display = 'none';

  } else { 
    doc.style.display = 'block';
    B6_Enter_Result_Branch.innerHTML = "";
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/32;
    for (let d = 1; d < Selected_Number; d++){                                          //↑

      let MATCH_ID = (d++/2)+0.5; 

//Box Surrounding Result for Flexbox
let Enter_Result_Match_Flex = document.createElement('div');
Enter_Result_Match_Flex.id = "Enter_Result_Match_Flex";
Enter_Result_Match_Flex.className = "Enter_Result_Match_Flex";
B6_Enter_Result_Branch.append(Enter_Result_Match_Flex);
//↑

//Create "Match 1" text
let Match_Label_2 = document.createElement('div');
Match_Label_2.id = ("Match_" + MATCH_ID);
Match_Label_2.className = ("Match_Class");
Match_Label_2.innerHTML = ("Match " + MATCH_ID);
Enter_Result_Match_Flex.append(Match_Label_2);

let Left = document.createElement('div');
let Middle_Left = document.createElement('div');
let Middle_Right = document.createElement('div');
let Right = document.createElement('div');



//-------------------Result & Names Code-----------------------------
Left.id = ("Pop_Div_B6_M" + MATCH_ID + "_P1");
Middle_Left.id = ("Pop_Div_B6_M" + MATCH_ID + "_R1");
Middle_Right.id = ("Pop_Div_B6_M" + MATCH_ID + "_R2");
Right.id = ("Pop_Div_B6_M" + MATCH_ID + "_P2");

Left.className = ("Pop_Name");
Middle_Left.className = ("Pop_Res");
Middle_Right.className = ("Pop_Res");
Right.className = ("Pop_Name");

let Container_For_name_Result = document.createElement('div');
Container_For_name_Result.id = ("Container_For_name_Result");
Container_For_name_Result.className = ("Container_For_name_Result");
Enter_Result_Match_Flex.append(Container_For_name_Result);

Container_For_name_Result.append(Left);
Container_For_name_Result.append(Middle_Left);
Container_For_name_Result.append(Middle_Right);
Container_For_name_Result.append(Right);

let Name_Div_Left = document.createElement('input');
Name_Div_Left.id = ("Pop_Input_B6_M" + MATCH_ID + "_P1");
Name_Div_Left.className = ("Player_Name");
Left.append(Name_Div_Left);

let Result_Div_Middle_Left = document.createElement('select');
Result_Div_Middle_Left.id = ("Pop_Input_B6_M" + MATCH_ID + "_R1");
Result_Div_Middle_Left.className = ("Player_Result");
Middle_Left.append(Result_Div_Middle_Left);

let Result_Div_Middle_Right = document.createElement('select');
Result_Div_Middle_Right.id = ("Pop_Input_B6_M" + MATCH_ID + "_R2");
Result_Div_Middle_Right.className = ("Player_Result");
Middle_Right.append(Result_Div_Middle_Right);

let Name_Div_Right = document.createElement('input');
Name_Div_Right.id = ("Pop_Input_B6_M" + MATCH_ID + "_P2");
Name_Div_Right.className = ("Player_Name");
Right.append(Name_Div_Right);

//-------------------------------------------

var First_Select_Result_2 = document.getElementById(Result_Div_Middle_Left);
let First_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < First_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(First_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Left.insertBefore(option,Result_Div_Middle_Left.lastChild);
}

var Second_Select_Result_2 = document.getElementById(Result_Div_Middle_Right);
let Second_Select_Result_List_2 = [0,1,2,3,4,5];

for(var h=0; h < Second_Select_Result_List_2.length ;h++){
  var option = document.createElement("option");
  option.value = h;
  let txt = document.createTextNode(Second_Select_Result_List_2[h]);
  option.appendChild(txt);
  Result_Div_Middle_Right.insertBefore(option,Result_Div_Middle_Right.lastChild);
}
}
}
} //Name Config Slut


let element = document.getElementsByClassName('Player_Name');
let element2 = document.getElementsByClassName('Name');
let element3 = document.getElementsByClassName('Result');

for(let i=0 ; i < element.length;i++){
element[i].readOnly = true;
}

for(let i=0 ; i < element2.length;i++){
  element2[i].disabled = true;
  element3[i].disabled = true;
}

} //Function Slut
//----------------Slut Inom Container--------------
//---------------------------Submit Button Players------------------------------------------
document.getElementById('Submit_Players').addEventListener('click',SubmitPlayersButton);

function SubmitPlayersButton(){
  let Selected_Number = parseInt(document.getElementById('DropDownNumber').value) + 1;
  for (let i = 1; i < Selected_Number; i++){

    let MATCH_ID = (i++/2)+0.5;

    //Pick up Name From Dropdown
  let cell = document.getElementById("Select_M" + MATCH_ID + "_P1");
  let SelectedValue = cell.options[cell.selectedIndex].value;

  let cell2 = document.getElementById("Select_M" + MATCH_ID + "_P2");
  let SelectedValue2 = cell2.options[cell2.selectedIndex].value;

    //Pick up name from div to result Board
    let Pop_Div = document.getElementById("Pop_Div_B1_M" + MATCH_ID + "_P1");
    let Pop_Div2 = document.getElementById("Pop_Div_B1_M" + MATCH_ID + "_P2");

    Pop_Div.innerHTML = SelectedValue;
    Pop_Div2.innerHTML = SelectedValue2;

    //Pick up Bracket Branch Cell 
    let Bracket = document.getElementById("Div_B1_M" + MATCH_ID + "_P1");
    let Bracket2 = document.getElementById("Div_B1_M" + MATCH_ID + "_P2");

    Bracket.innerHTML = SelectedValue;
    Bracket2.innerHTML= SelectedValue2;

  }
}
//---------------------------------------------------------------------

//---------------------------Submit Button Results------------------------------------------
document.getElementById('Submit_Results').addEventListener('click',SubmitResultsButton);

function SubmitResultsButton(){
  let Selected_Number = parseInt(document.getElementById('DropDownNumber').value) + 1;
  for (let i = 1; i < Selected_Number; i++){

    let MATCH_ID = (i++/2)+0.5;

    //Pick up Name From Dropdown
  let cell = document.getElementById("Pop_Input_B1_M"+ MATCH_ID +"_R1");
  let SelectedValue = cell.options[cell.selectedIndex].value;

  let cell2 = document.getElementById("Pop_Input_B1_M"+ MATCH_ID +"_R2");
  let SelectedValue2 = cell2.options[cell2.selectedIndex].value;

  //Pick up name from div to result Board
  let Bracket_Div = document.getElementById("Div_B1_M" + MATCH_ID + "_R1");
  let Bracket_Div2 = document.getElementById("Div_B1_M" + MATCH_ID + "_R2");

  Bracket_Div.innerHTML = SelectedValue;
  Bracket_Div2.innerHTML = SelectedValue2;

  }
}
//---------------------------------------------------------------------


//----------------Draggable Div--------------

const wrapper = document.querySelector(".PopUp"),
header = wrapper.querySelector(".Move");

function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(wrapper);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);

  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${top + movementY}px`;

}

header.addEventListener("mousedown", ()=> {
header.addEventListener("mousemove",onDrag);
});

document.addEventListener("mouseup", ()=> {
  header.addEventListener("mousemove",onDrag);
  });



//-------------------------Qualify-----------------------------------------


//-------------------------------------------------------------------------

document.getElementById('Submit_Results').addEventListener('click',SubmitResultsButton2);
function SubmitResultsButton2(){

  let Selected_Number1 = parseInt(document.getElementById('DropDownNumber').value);

let Points_To_Win = parseInt(document.getElementById("DropDownNumber2").options[document.getElementById("DropDownNumber2").selectedIndex].value);

//Branch 1 to Branch 2

for (let i = 1; i < Selected_Number1/2; i+= 2){
{
Match_ID = i;  
Match_ID_2 = (i+1);

let Player1 = document.getElementById("Pop_Div_B1_M" + Match_ID + "_P1");
let Player2 = document.getElementById("Pop_Div_B1_M" + Match_ID + "_P2");

let Player3 = document.getElementById("Pop_Div_B1_M" + Match_ID_2 + "_P1");
let Player4 = document.getElementById("Pop_Div_B1_M" + Match_ID_2 + "_P2");



let Result1 = parseInt(document.getElementById("Pop_Input_B1_M" + Match_ID + "_R1").options[document.getElementById("Pop_Input_B1_M" + Match_ID + "_R1").selectedIndex].value);
let Result2 = parseInt(document.getElementById("Pop_Input_B1_M" + Match_ID + "_R2").options[document.getElementById("Pop_Input_B1_M" + Match_ID + "_R2").selectedIndex].value);

let Result3 = parseInt(document.getElementById("Pop_Input_B1_M" + Match_ID_2 + "_R1").options[document.getElementById("Pop_Input_B1_M" + Match_ID_2 + "_R1").selectedIndex].value);
let Result4 = parseInt(document.getElementById("Pop_Input_B1_M" + Match_ID_2 + "_R2").options[document.getElementById("Pop_Input_B1_M" + Match_ID_2 + "_R2").selectedIndex].value);

let QualName = document.getElementById("Pop_Div_B2_M" + (Match_ID_2/2) + "_P1");
let QualName2 = document.getElementById("Pop_Div_B2_M" + (Match_ID_2/2) + "_P2");

//IF 1
if(Result2 != Points_To_Win && Result1 != Points_To_Win ){
QualName.innerHTML = "";
} 

if(Result1 === Points_To_Win){
QualName.innerHTML = Player1.textContent;


} 

if(Result2 === Points_To_Win){
QualName.innerHTML = Player2.textContent;

} 

//IF 2
  if(Result3 != Points_To_Win && Result4 != Points_To_Win ){
    QualName2.innerHTML = "";
  } 

  if(Result3 === Points_To_Win){
    QualName2.innerHTML = Player3.textContent;   
  } 
  
  if(Result4 === Points_To_Win){
    QualName2.innerHTML = Player4.textContent;
  } 

} //Bracket Slut
} //Loop Slut

//-------------------------------------------------------------------------------------------------
//Branch 2 to Branch 3
for (let i = 1; i < Selected_Number1/4; i+= 2){
  {
  Match_ID = i;  
  Match_ID_2 = (i+1);
  
  let Player1 = document.getElementById("Pop_Div_B2_M" + Match_ID + "_P1");
  let Player2 = document.getElementById("Pop_Div_B2_M" + Match_ID + "_P2");

  let Player3 = document.getElementById("Pop_Div_B2_M" + Match_ID_2 + "_P1");
  let Player4 = document.getElementById("Pop_Div_B2_M" + Match_ID_2 + "_P2");

  let Result1 = parseInt(document.getElementById("Pop_Input_B2_M" + Match_ID + "_R1").options[document.getElementById("Pop_Input_B2_M" + Match_ID + "_R1").selectedIndex].value);
  let Result2 = parseInt(document.getElementById("Pop_Input_B2_M" + Match_ID + "_R2").options[document.getElementById("Pop_Input_B2_M" + Match_ID + "_R2").selectedIndex].value);
  
  let Result3 = parseInt(document.getElementById("Pop_Input_B2_M" + Match_ID_2 + "_R1").options[document.getElementById("Pop_Input_B2_M" + Match_ID_2 + "_R1").selectedIndex].value);
  let Result4 = parseInt(document.getElementById("Pop_Input_B2_M" + Match_ID_2 + "_R2").options[document.getElementById("Pop_Input_B2_M" + Match_ID_2 + "_R2").selectedIndex].value);
  
  let QualName = document.getElementById("Pop_Div_B3_M" + (Match_ID_2/2) + "_P1");
  let QualName2 = document.getElementById("Pop_Div_B3_M" + (Match_ID_2/2) + "_P2");
  //IF 1
  if(Result2 != Points_To_Win && Result1 != Points_To_Win ){
  QualName.innerHTML = "";
  } 
  
  if(Result1 === Points_To_Win){
  QualName.innerHTML = Player1.innerHTML;
  } 
  
  if(Result2 === Points_To_Win){
  QualName.innerHTML = Player2.innerHTML;
  } 
  
  //IF 2
    if(Result3 != Points_To_Win && Result4 != Points_To_Win ){
      QualName2.innerHTML = "";
    } 
  
    if(Result3 === Points_To_Win){
      QualName2.innerHTML = Player3.innerHTML;
    } 
    
    if(Result4 === Points_To_Win){
      QualName2.innerHTML = Player4.innerHTML;
    } 
  
  } //Bracket Slut
  } //Loop Slut
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//Branch 2 to Branch 3
for (let i = 1; i < Selected_Number1/8; i+= 2){
  {
  Match_ID = i;  
  Match_ID_2 = (i+1);
  
  let Player1 = document.getElementById("Pop_Div_B3_M" + Match_ID + "_P1");
  let Player2 = document.getElementById("Pop_Div_B3_M" + Match_ID + "_P2");

  let Player3 = document.getElementById("Pop_Div_B3_M" + Match_ID_2 + "_P1");
  let Player4 = document.getElementById("Pop_Div_B3_M" + Match_ID_2 + "_P2");

  let Result1 = parseInt(document.getElementById("Pop_Input_B3_M" + Match_ID + "_R1").options[document.getElementById("Pop_Input_B3_M" + Match_ID + "_R1").selectedIndex].value);
  let Result2 = parseInt(document.getElementById("Pop_Input_B3_M" + Match_ID + "_R2").options[document.getElementById("Pop_Input_B3_M" + Match_ID + "_R2").selectedIndex].value);
  
  let Result3 = parseInt(document.getElementById("Pop_Input_B3_M" + Match_ID_2 + "_R1").options[document.getElementById("Pop_Input_B3_M" + Match_ID_2 + "_R1").selectedIndex].value);
  let Result4 = parseInt(document.getElementById("Pop_Input_B3_M" + Match_ID_2 + "_R2").options[document.getElementById("Pop_Input_B3_M" + Match_ID_2 + "_R2").selectedIndex].value);
  
  let QualName = document.getElementById("Pop_Div_B4_M" + (Match_ID_2/2) + "_P1");
  let QualName2 = document.getElementById("Pop_Div_B4_M" + (Match_ID_2/2) + "_P2");
  //IF 1
  if(Result2 != Points_To_Win && Result1 != Points_To_Win ){
  QualName.innerHTML = "";
  } 
  
  if(Result1 === Points_To_Win){
  QualName.innerHTML = Player1.innerHTML;
  } 
  
  if(Result2 === Points_To_Win){
  QualName.innerHTML = Player2.innerHTML;
  } 
  
  //IF 2
    if(Result3 != Points_To_Win && Result4 != Points_To_Win ){
      QualName2.innerHTML = "";
    } 
  
    if(Result3 === Points_To_Win){
      QualName2.innerHTML = Player3.innerHTML;
    } 
    
    if(Result4 === Points_To_Win){
      QualName2.innerHTML = Player4.innerHTML;
    } 
  
  } //Bracket Slut
  } //Loop Slut
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//Branch 2 to Branch 3
for (let i = 1; i < Selected_Number1/16; i+= 2){
  {
  Match_ID = i;  
  Match_ID_2 = (i+1);
  
  let Player1 = document.getElementById("Pop_Div_B4_M" + Match_ID + "_P1");
  let Player2 = document.getElementById("Pop_Div_B4_M" + Match_ID + "_P2");

  let Player3 = document.getElementById("Pop_Div_B4_M" + Match_ID_2 + "_P1");
  let Player4 = document.getElementById("Pop_Div_B4_M" + Match_ID_2 + "_P2");

  let Result1 = parseInt(document.getElementById("Pop_Input_B4_M" + Match_ID + "_R1").options[document.getElementById("Pop_Input_B4_M" + Match_ID + "_R1").selectedIndex].value);
  let Result2 = parseInt(document.getElementById("Pop_Input_B4_M" + Match_ID + "_R2").options[document.getElementById("Pop_Input_B4_M" + Match_ID + "_R2").selectedIndex].value);
  
  let Result3 = parseInt(document.getElementById("Pop_Input_B4_M" + Match_ID_2 + "_R1").options[document.getElementById("Pop_Input_B4_M" + Match_ID_2 + "_R1").selectedIndex].value);
  let Result4 = parseInt(document.getElementById("Pop_Input_B4_M" + Match_ID_2 + "_R2").options[document.getElementById("Pop_Input_B4_M" + Match_ID_2 + "_R2").selectedIndex].value);
  
  let QualName = document.getElementById("Pop_Div_B5_M" + (Match_ID_2/2) + "_P1");
  let QualName2 = document.getElementById("Pop_Div_B5_M" + (Match_ID_2/2) + "_P2");
  //IF 1
  if(Result2 != Points_To_Win && Result1 != Points_To_Win ){
  QualName.innerHTML = "";
  } 
  
  if(Result1 === Points_To_Win){
  QualName.innerHTML = Player1.innerHTML;
  } 
  
  if(Result2 === Points_To_Win){
  QualName.innerHTML = Player2.innerHTML;
  } 
  
  //IF 2
    if(Result3 != Points_To_Win && Result4 != Points_To_Win ){
      QualName2.innerHTML = "";
    } 
  
    if(Result3 === Points_To_Win){
      QualName2.innerHTML = Player3.innerHTML;
    } 
    
    if(Result4 === Points_To_Win){
      QualName2.innerHTML = Player4.innerHTML;
    } 
  
  } //Bracket Slut
  } //Loop Slut
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//Branch 2 to Branch 3
for (let i = 1; i < Selected_Number1/32; i+= 2){
  {
  Match_ID = i;  
  Match_ID_2 = (i+1);
  
  let Player1 = document.getElementById("Pop_Div_B5_M" + Match_ID + "_P1");
  let Player2 = document.getElementById("Pop_Div_B5_M" + Match_ID + "_P2");

  let Player3 = document.getElementById("Pop_Div_B5_M" + Match_ID_2 + "_P1");
  let Player4 = document.getElementById("Pop_Div_B5_M" + Match_ID_2 + "_P2");

  let Result1 = parseInt(document.getElementById("Pop_Input_B5_M" + Match_ID + "_R1").options[document.getElementById("Pop_Input_B5_M" + Match_ID + "_R1").selectedIndex].value);
  let Result2 = parseInt(document.getElementById("Pop_Input_B5_M" + Match_ID + "_R2").options[document.getElementById("Pop_Input_B5_M" + Match_ID + "_R2").selectedIndex].value);
  
  let Result3 = parseInt(document.getElementById("Pop_Input_B5_M" + Match_ID_2 + "_R1").options[document.getElementById("Pop_Input_B5_M" + Match_ID_2 + "_R1").selectedIndex].value);
  let Result4 = parseInt(document.getElementById("Pop_Input_B5_M" + Match_ID_2 + "_R2").options[document.getElementById("Pop_Input_B5_M" + Match_ID_2 + "_R2").selectedIndex].value);
  
  let QualName = document.getElementById("Pop_Div_B6_M" + (Match_ID_2/2) + "_P1");
  let QualName2 = document.getElementById("Pop_Div_B6_M" + (Match_ID_2/2) + "_P2");
  //IF 1
  if(Result2 != Points_To_Win && Result1 != Points_To_Win ){
  QualName.innerHTML = "";
  } 
  
  if(Result1 === Points_To_Win){
  QualName.innerHTML = Player1.innerHTML;
  } 
  
  if(Result2 === Points_To_Win){
  QualName.innerHTML = Player2.innerHTML;
  } 
  
  //IF 2
    if(Result3 != Points_To_Win && Result4 != Points_To_Win ){
      QualName2.innerHTML = "";
    } 
  
    if(Result3 === Points_To_Win){
      QualName2.innerHTML = Player3.innerHTML;
    } 
    
    if(Result4 === Points_To_Win){
      QualName2.innerHTML = Player4.innerHTML;
    } 
  
  } //Bracket Slut
  } //Loop Slut
//-------------------------------------------------------------------------------------------------
//let elementx = document.getElementsByClassName('Enter_Name_Match_Flex');


let Brackt_elements  =  document.getElementsByClassName("Name");
let Pop_elements     =  document.getElementsByClassName("Pop_Name");

for(i = 0;i<Brackt_elements.length;i++){
Brackt_elements[i].innerHTML = Pop_elements[i].textContent;
}
//--------------------------------------------------------------------------------------------------
let Brackt_elements_Res  =  document.getElementsByClassName("Result");
let Pop_elements_Res     =  document.getElementsByClassName("Player_Result");

for(i = 0;i<Brackt_elements_Res.length;i++){
Brackt_elements_Res[i].innerHTML = Pop_elements_Res[i].value;

}



//BRACKET: Result
//Pop: Player_Result

}//Func Slut




