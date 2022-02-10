document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound1);
//-------------------------------------------------------
let container = document.getElementById("Container");

let Branch_1 = document.createElement('div');
Branch_1.id = "Branch_1";
Branch_1.className = "Branch_1";
container.append(Branch_1);



//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound1(){
Branch_1.innerHTML = "";
//Match_Flex.innerHTML="";
let Selected_Number = parseInt(document.getElementById('DropDownNumber').value) + 1;


for (let i = 1; i < Selected_Number; i++){

let MATCH_ID = (i++/2)+0.5;

//Box Surrounding Players for Flexbox
let Match_Flex = document.createElement('div');
Match_Flex.id = "Match_Flex";
Match_Flex.className = "Match_Flex";
document.body.append(Match_Flex);
//Box Surrounding Players for Grid
let Match_Grid = document.createElement('div');
Match_Grid.id = "Match_Grid";
Match_Grid.className = "Match_Grid";
Match_Flex.append(Match_Grid);

//----------------------------------------------------------------------------
//First Player Box
let Div_Player_Names_Left = document.createElement('div');
Div_Player_Names_Left.id = ("Left_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Player_Names_Left);

let Div_Result_Points_Right = document.createElement('div');
Div_Result_Points_Right.id = ("Right_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Result_Points_Right);
//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name = document.createElement('div');
Div_First_Player_Name.id = ("Div_B1_M" + MATCH_ID + "_P1");
Div_First_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_First_Player_Name);


//Second Player Name
let Div_Second_Player_Name = document.createElement('div');
Div_Second_Player_Name.id = ("Div_B1_M" + MATCH_ID + "_P2");
Div_Second_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_Second_Player_Name);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name = document.createElement('input');
First_Player_Name.id = ("Input_B1_M" + MATCH_ID + "_P1");
First_Player_Name.className = "IName";
Div_First_Player_Name.append(First_Player_Name);


//Second Player Name
let Second_Player_Name = document.createElement('input');
Second_Player_Name.id = ("Input_B1_M" + MATCH_ID + "_P2");
Second_Player_Name.className = "IName";
Div_Second_Player_Name.append(Second_Player_Name);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 1");
Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 2");
//Player 1 Result
let Div_First_Player_Result = document.createElement('div');
Div_First_Player_Result.id = ("Div_B1_M" + MATCH_ID + "_R1");
Div_First_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_First_Player_Result);

let First_Player_Result = document.createElement('input');
First_Player_Result.id = ("Input_B1_M" + MATCH_ID + "_R1");
First_Player_Result.className = "IResult";
Div_First_Player_Result.append(First_Player_Result);


//Player 2 Result
let Div_Second_Player_Result = document.createElement('div');
Div_Second_Player_Result.id = ("Div_B1_M" + MATCH_ID + "_R2");
Div_Second_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_Second_Player_Result);

let Second_Player_Result = document.createElement('input');
Second_Player_Result.id = ("Input_B1_M" + MATCH_ID + "_R21");
Second_Player_Result.className = "IResult";
Div_Second_Player_Result.append(Second_Player_Result);

First_Player_Result.setAttribute('placeholder', "0");
Second_Player_Result.setAttribute('placeholder', "0");

//-----------------------------------------------------------------------------

Branch_1.append(Match_Flex); // Append the fields to the Players element

//----------------Slut Inom Container--------------
}


}
document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound2);
//-------------------------------------------------------

let Branch_2 = document.createElement('div');
Branch_2.id = "Branch_2";
Branch_2.className = "Branch_2";
container.append(Branch_2);

//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound2(){

    
Branch_2.innerHTML = "";

const countAll = document.querySelectorAll('#Match_Flex').length;
if(countAll === 1){
    
Branch_2.innerHTML = "";
} else {

let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/2;


for (let d = 1; d < Selected_Number; d++){

    let MATCH_ID = (d++/2)+0.5;

//Box Surrounding Players for Flexbox
let Match_Flex_2 = document.createElement('div');
Match_Flex_2.id = "Match_Flex_2";
Match_Flex_2.className = "Match_Flex";
Branch_2.append(Match_Flex_2);

//Box Surrounding Players for Grid
let Match_Grid = document.createElement('div');
Match_Grid.id = "Match_Grid";
Match_Grid.className = "Match_Grid";
Match_Flex_2.append(Match_Grid);


//----------------------------------------------------------------------------
//First Player Box
let Div_Player_Names_Left = document.createElement('div');
Div_Player_Names_Left.id = ("Left_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Player_Names_Left);

let Div_Result_Points_Right = document.createElement('div');
Div_Result_Points_Right.id = ("Right_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Result_Points_Right);
//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name = document.createElement('div');
Div_First_Player_Name.id = ("Div_B2_M" + MATCH_ID + "_P1");
Div_First_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_First_Player_Name);


//Second Player Name
let Div_Second_Player_Name = document.createElement('div');
Div_Second_Player_Name.id = ("Div_B2_M" + MATCH_ID + "_P2");
Div_Second_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_Second_Player_Name);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name = document.createElement('input');
First_Player_Name.id = ("Input_B2_M" + MATCH_ID + "_P1");
First_Player_Name.className = "IName";
Div_First_Player_Name.append(First_Player_Name);


//Second Player Name
let Second_Player_Name = document.createElement('input');
Second_Player_Name.id = ("Input_B2_M" + MATCH_ID + "_P2");
Second_Player_Name.className = "IName";
Div_Second_Player_Name.append(Second_Player_Name);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 1");
Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 2");
//Player 1 Result
let Div_First_Player_Result = document.createElement('div');
Div_First_Player_Result.id = ("Div_B2_M" + MATCH_ID + "_R1");
Div_First_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_First_Player_Result);

let First_Player_Result = document.createElement('input');
First_Player_Result.id = ("Input_B2_M" + MATCH_ID + "_R1");
First_Player_Result.className = "IResult";
Div_First_Player_Result.append(First_Player_Result);


//Player 2 Result
let Div_Second_Player_Result = document.createElement('div');
Div_Second_Player_Result.id = ("Div_B2_M" + MATCH_ID + "_R2");
Div_Second_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_Second_Player_Result);

let Second_Player_Result = document.createElement('input');
Second_Player_Result.id = ("Input_B2_M" + MATCH_ID + "_R21");
Second_Player_Result.className = "IResult";
Div_Second_Player_Result.append(Second_Player_Result);

First_Player_Result.setAttribute('placeholder', "0");
Second_Player_Result.setAttribute('placeholder', "0");

//-----------------------------------------------------------------------------



Branch_2.append(Match_Flex_2); // Append the fields to the Players element

//----------------Slut Inom Container--------------
}
}
}
document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound3);
//-------------------------------------------------------

let Branch_3 = document.createElement('div');
Branch_3.id = "Branch_3";
Branch_3.className = "Branch_3";
container.append(Branch_3);

//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound3(){

    
Branch_3.innerHTML = "";

const countAll = document.querySelectorAll('#Match_Flex').length;
if(countAll < 4){
    
Branch_3.innerHTML = "";
} else {
let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/4;


for (let d = 1; d < Selected_Number; d++){

    let MATCH_ID = (d++/2)+0.5;

//Box Surrounding Players for Flexbox
let Match_Flex_3 = document.createElement('div');
Match_Flex_3.id = "Match_Flex_3";
Match_Flex_3.className = "Match_Flex";
Branch_3.append(Match_Flex_3);

//Box Surrounding Players for Grid
let Match_Grid = document.createElement('div');
Match_Grid.id = "Match_Grid";
Match_Grid.className = "Match_Grid";
Match_Flex_3.append(Match_Grid);


//----------------------------------------------------------------------------
//First Player Box
let Div_Player_Names_Left = document.createElement('div');
Div_Player_Names_Left.id = ("Left_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Player_Names_Left);

let Div_Result_Points_Right = document.createElement('div');
Div_Result_Points_Right.id = ("Right_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Result_Points_Right);
//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name = document.createElement('div');
Div_First_Player_Name.id = ("Div_B3_M" + MATCH_ID + "_P1");
Div_First_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_First_Player_Name);


//Second Player Name
let Div_Second_Player_Name = document.createElement('div');
Div_Second_Player_Name.id = ("Div_B3_M" + MATCH_ID + "_P2");
Div_Second_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_Second_Player_Name);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name = document.createElement('input');
First_Player_Name.id = ("Input_B3_M" + MATCH_ID + "_P1");
First_Player_Name.className = "IName";
Div_First_Player_Name.append(First_Player_Name);


//Second Player Name
let Second_Player_Name = document.createElement('input');
Second_Player_Name.id = ("Input_B3_M" + MATCH_ID + "_P2");
Second_Player_Name.className = "IName";
Div_Second_Player_Name.append(Second_Player_Name);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 1");
Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 2");
//Player 1 Result
let Div_First_Player_Result = document.createElement('div');
Div_First_Player_Result.id = ("Div_B3_M" + MATCH_ID + "_R1");
Div_First_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_First_Player_Result);

let First_Player_Result = document.createElement('input');
First_Player_Result.id = ("Input_B3_M" + MATCH_ID + "_R1");
First_Player_Result.className = "IResult";
Div_First_Player_Result.append(First_Player_Result);


//Player 2 Result
let Div_Second_Player_Result = document.createElement('div');
Div_Second_Player_Result.id = ("Div_B3_M" + MATCH_ID + "_R2");
Div_Second_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_Second_Player_Result);

let Second_Player_Result = document.createElement('input');
Second_Player_Result.id = ("Input_B3_M" + MATCH_ID + "_R21");
Second_Player_Result.className = "IResult";
Div_Second_Player_Result.append(Second_Player_Result);

First_Player_Result.setAttribute('placeholder', "0");
Second_Player_Result.setAttribute('placeholder', "0");

//-----------------------------------------------------------------------------



Branch_3.append(Match_Flex_3); // Append the fields to the Players element

//----------------Slut Inom Container--------------
}
}
}
document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound4);
//-------------------------------------------------------                         //↑ 

let Branch_4 = document.createElement('div');
Branch_4.id = "Branch_4";
Branch_4.className = "Branch_4";
container.append(Branch_4);

//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound4(){
                      //↑
    
Branch_4.innerHTML = "";

const countAll = document.querySelectorAll('#Match_Flex').length;
if(countAll < 8){
            //↑    
Branch_4.innerHTML = "";
} else {
let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/8;
                                                                                    //↑

for (let d = 1; d < Selected_Number; d++){

    let MATCH_ID = (d++/2)+0.5;

//Box Surrounding Players for Flexbox
let Match_Flex_4 = document.createElement('div');
Match_Flex_4.id = "Match_Flex_4";
Match_Flex_4.className = "Match_Flex";
Branch_4.append(Match_Flex_4);

//Box Surrounding Players for Grid
let Match_Grid = document.createElement('div');
Match_Grid.id = "Match_Grid";
Match_Grid.className = "Match_Grid";
Match_Flex_4.append(Match_Grid);


//----------------------------------------------------------------------------
//First Player Box
let Div_Player_Names_Left = document.createElement('div');
Div_Player_Names_Left.id = ("Left_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Player_Names_Left);

let Div_Result_Points_Right = document.createElement('div');
Div_Result_Points_Right.id = ("Right_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Result_Points_Right);
//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name = document.createElement('div');
Div_First_Player_Name.id = ("Div_B4_M" + MATCH_ID + "_P1");
Div_First_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_First_Player_Name);


//Second Player Name
let Div_Second_Player_Name = document.createElement('div');
Div_Second_Player_Name.id = ("Div_B4_M" + MATCH_ID + "_P2");
Div_Second_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_Second_Player_Name);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name = document.createElement('input');
First_Player_Name.id = ("Input_B4_M" + MATCH_ID + "_P1");
First_Player_Name.className = "IName";
Div_First_Player_Name.append(First_Player_Name);


//Second Player Name
let Second_Player_Name = document.createElement('input');
Second_Player_Name.id = ("Input_B4_M" + MATCH_ID + "_P2");
Second_Player_Name.className = "IName";
Div_Second_Player_Name.append(Second_Player_Name);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 1");
Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 2");
//Player 1 Result
let Div_First_Player_Result = document.createElement('div');
Div_First_Player_Result.id = ("Div_B4_M" + MATCH_ID + "_R1");
Div_First_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_First_Player_Result);

let First_Player_Result = document.createElement('input');
First_Player_Result.id = ("Input_B4_M" + MATCH_ID + "_R1");
First_Player_Result.className = "IResult";
Div_First_Player_Result.append(First_Player_Result);


//Player 2 Result
let Div_Second_Player_Result = document.createElement('div');
Div_Second_Player_Result.id = ("Div_B4_M" + MATCH_ID + "_R2");
Div_Second_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_Second_Player_Result);

let Second_Player_Result = document.createElement('input');
Second_Player_Result.id = ("Input_B4_M" + MATCH_ID + "_R21");
Second_Player_Result.className = "IResult";
Div_Second_Player_Result.append(Second_Player_Result);

First_Player_Result.setAttribute('placeholder', "0");
Second_Player_Result.setAttribute('placeholder', "0");

//-----------------------------------------------------------------------------



Branch_4.append(Match_Flex_4); // Append the fields to the Players element

//----------------Slut Inom Container--------------
}
}
}
document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound5);
//-------------------------------------------------------                         //↑

let Branch_5 = document.createElement('div');
Branch_5.id = "Branch_5";
Branch_5.className = "Branch_5";
container.append(Branch_5);

//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound5(){
                      //↑
    
Branch_5.innerHTML = "";

const countAll = document.querySelectorAll('#Match_Flex').length;
if(countAll < 16) {
             //↑
Branch_5.innerHTML = "";
} else {
let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/16;
                                                                                    //↑

for (let d = 1; d < Selected_Number; d++){

    let MATCH_ID = (d++/2)+0.5;

//Box Surrounding Players for Flexbox
let Match_Flex_5 = document.createElement('div');
Match_Flex_5.id = "Match_Flex_5";
Match_Flex_5.className = "Match_Flex";
Branch_5.append(Match_Flex_5);

//Box Surrounding Players for Grid
let Match_Grid = document.createElement('div');
Match_Grid.id = "Match_Grid";
Match_Grid.className = "Match_Grid";
Match_Flex_5.append(Match_Grid);


//----------------------------------------------------------------------------
//First Player Box
let Div_Player_Names_Left = document.createElement('div');
Div_Player_Names_Left.id = ("Left_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Player_Names_Left);

let Div_Result_Points_Right = document.createElement('div');
Div_Result_Points_Right.id = ("Right_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Result_Points_Right);
//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name = document.createElement('div');
Div_First_Player_Name.id = ("Div_B5_M" + MATCH_ID + "_P1");
Div_First_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_First_Player_Name);


//Second Player Name
let Div_Second_Player_Name = document.createElement('div');
Div_Second_Player_Name.id = ("Div_B5_M" + MATCH_ID + "_P2");
Div_Second_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_Second_Player_Name);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name = document.createElement('input');
First_Player_Name.id = ("Input_B5_M" + MATCH_ID + "_P1");
First_Player_Name.className = "IName";
Div_First_Player_Name.append(First_Player_Name);


//Second Player Name
let Second_Player_Name = document.createElement('input');
Second_Player_Name.id = ("Input_B5_M" + MATCH_ID + "_P2");
Second_Player_Name.className = "IName";
Div_Second_Player_Name.append(Second_Player_Name);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 1");
Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 2");
//Player 1 Result
let Div_First_Player_Result = document.createElement('div');
Div_First_Player_Result.id = ("Div_B5_M" + MATCH_ID + "_R1");
Div_First_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_First_Player_Result);

let First_Player_Result = document.createElement('input');
First_Player_Result.id = ("Input_B5_M" + MATCH_ID + "_R1");
First_Player_Result.className = "IResult";
Div_First_Player_Result.append(First_Player_Result);


//Player 2 Result
let Div_Second_Player_Result = document.createElement('div');
Div_Second_Player_Result.id = ("Div_B5_M" + MATCH_ID + "_R2");
Div_Second_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_Second_Player_Result);

let Second_Player_Result = document.createElement('input');
Second_Player_Result.id = ("Input_B5_M" + MATCH_ID + "_R21");
Second_Player_Result.className = "IResult";
Div_Second_Player_Result.append(Second_Player_Result);

First_Player_Result.setAttribute('placeholder', "0");
Second_Player_Result.setAttribute('placeholder', "0");

//-----------------------------------------------------------------------------



Branch_5.append(Match_Flex_5); // Append the fields to the Players element

//----------------Slut Inom Container--------------
}
}
}
document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound6);
//-------------------------------------------------------                         //↑

let Branch_6 = document.createElement('div');
Branch_6.id = "Branch_6";
Branch_6.className = "Branch_6";
container.append(Branch_6);

//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound6(){
                      //↑
    
Branch_6.innerHTML = "";

const countAll = document.querySelectorAll('#Match_Flex').length;
if(countAll < 32) {
             //↑
Branch_6.innerHTML = "";
} else {
let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/32;
                                                                                    //↑

for (let d = 1; d < Selected_Number; d++){

    let MATCH_ID = (d++/2)+0.5;

//Box Surrounding Players for Flexbox
let Match_Flex_6 = document.createElement('div');
Match_Flex_6.id = "Match_Flex_6";
Match_Flex_6.className = "Match_Flex";
Branch_6.append(Match_Flex_6);

//Box Surrounding Players for Grid
let Match_Grid = document.createElement('div');
Match_Grid.id = "Match_Grid";
Match_Grid.className = "Match_Grid";
Match_Flex_6.append(Match_Grid);


//----------------------------------------------------------------------------
//First Player Box
let Div_Player_Names_Left = document.createElement('div');
Div_Player_Names_Left.id = ("Left_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Player_Names_Left);

let Div_Result_Points_Right = document.createElement('div');
Div_Result_Points_Right.id = ("Right_Div_B" + MATCH_ID + "_M1");
Match_Grid.append(Div_Result_Points_Right);
//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name = document.createElement('div');
Div_First_Player_Name.id = ("Div_B6_M" + MATCH_ID + "_P1");
Div_First_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_First_Player_Name);


//Second Player Name
let Div_Second_Player_Name = document.createElement('div');
Div_Second_Player_Name.id = ("Div_B6_M" + MATCH_ID + "_P2");
Div_Second_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_Second_Player_Name);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name = document.createElement('input');
First_Player_Name.id = ("Input_B6_M" + MATCH_ID + "_P1");
First_Player_Name.className = "IName";
Div_First_Player_Name.append(First_Player_Name);


//Second Player Name
let Second_Player_Name = document.createElement('input');
Second_Player_Name.id = ("Input_B6_M" + MATCH_ID + "_P2");
Second_Player_Name.className = "IName";
Div_Second_Player_Name.append(Second_Player_Name);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 1");
Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID + " Player 2");
//Player 1 Result
let Div_First_Player_Result = document.createElement('div');
Div_First_Player_Result.id = ("Div_B6_M" + MATCH_ID + "_R1");
Div_First_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_First_Player_Result);

let First_Player_Result = document.createElement('input');
First_Player_Result.id = ("Input_B6_M" + MATCH_ID + "_R1");
First_Player_Result.className = "IResult";
Div_First_Player_Result.append(First_Player_Result);


//Player 2 Result
let Div_Second_Player_Result = document.createElement('div');
Div_Second_Player_Result.id = ("Div_B6_M" + MATCH_ID + "_R2");
Div_Second_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_Second_Player_Result);

let Second_Player_Result = document.createElement('input');
Second_Player_Result.id = ("Input_B6_M" + MATCH_ID + "_R21");
Second_Player_Result.className = "IResult";
Div_Second_Player_Result.append(Second_Player_Result);

First_Player_Result.setAttribute('placeholder', "0");
Second_Player_Result.setAttribute('placeholder', "0");

//-----------------------------------------------------------------------------



Branch_6.append(Match_Flex_6); // Append the fields to the Players element

//----------------Slut Inom Container--------------
}
}
}












