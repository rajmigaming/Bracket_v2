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

//-----------------For Loop Start---------------------------------------------------
for (let i = 1; i < Selected_Number/2; i++){ //←


let MATCH_ID = i++;

let MATCH_ID_1 = MATCH_ID;
let MATCH_ID_2 = MATCH_ID+1;


//Box Surrounding Players for Flexbox

let Match_Flex = document.createElement('div');
Match_Flex.id = "Match_Flex";
Match_Flex.className = "Match_Flex";
Branch_1.append(Match_Flex);
//Box Surrounding Players for Grid
//------------------------------------------------------

//------------------------------------------------------
let Container_Match_Grid = document.createElement('div'); //←
Container_Match_Grid.id = "Container_Match_Grid"; //←
Container_Match_Grid.className = "Container_Match_Grid"; //←
Match_Flex.append(Container_Match_Grid); //←

let Match_Grid = document.createElement('div');
Match_Grid.id = "Match_Grid";
Match_Grid.className = "Match_Grid";
Container_Match_Grid.append(Match_Grid);

let Match_Grid2 = document.createElement('div');
Match_Grid2.id = "Match_Grid";
Match_Grid2.className = "Match_Grid";
Container_Match_Grid.append(Match_Grid2);

let Line_Grid = document.createElement('div'); //←
Line_Grid.className = "Line_Grid"; //←
Match_Flex.append(Line_Grid); //←

let Object1 = document.createElement('div'); //←
Object1.className = "Object1"; //←
Line_Grid.append(Object1); //←

let Object2 = document.createElement('div'); //←
Object2.className = "Object2"; //←
Line_Grid.append(Object2); //←


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

//Namn 1
let Div_Player_Names_Left = document.createElement('div');
Div_Player_Names_Left.id = ("Left_Div_B1_M" + MATCH_ID_1);
Match_Grid.append(Div_Player_Names_Left);
//Resultat 2
let Div_Result_Points_Right = document.createElement('div');
Div_Result_Points_Right.id = ("Right_Div_B1_M" + MATCH_ID_1);
Match_Grid.append(Div_Result_Points_Right);
//

//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name = document.createElement('div');
Div_First_Player_Name.id = ("Div_B1_M" + MATCH_ID_1 + "_P1");
Div_First_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_First_Player_Name);


//Second Player Name
let Div_Second_Player_Name = document.createElement('div');
Div_Second_Player_Name.id = ("Div_B1_M" + MATCH_ID_1 + "_P2");
Div_Second_Player_Name.className = "Name";
Div_Player_Names_Left.append(Div_Second_Player_Name);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name = document.createElement('input');
First_Player_Name.id = ("Input_B1_M" + MATCH_ID_1 + "_P1");
First_Player_Name.className = "IName";
Div_First_Player_Name.append(First_Player_Name);


//Second Player Name
let Second_Player_Name = document.createElement('input');
Second_Player_Name.id = ("Input_B1_M" + MATCH_ID_1 + "_P2");
Second_Player_Name.className = "IName";
Div_Second_Player_Name.append(Second_Player_Name);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 1");
Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 2");
//Player 1 Result
let Div_First_Player_Result = document.createElement('div');
Div_First_Player_Result.id = ("Div_B1_M" + MATCH_ID_1 + "_R1");
Div_First_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_First_Player_Result);

let First_Player_Result = document.createElement('input');
First_Player_Result.id = ("Input_B1_M" + MATCH_ID_1 + "_R1");
First_Player_Result.className = "IResult";
Div_First_Player_Result.append(First_Player_Result);


//Player 2 Result
let Div_Second_Player_Result = document.createElement('div');
Div_Second_Player_Result.id = ("Div_B1_M" + MATCH_ID_1 + "_R2");
Div_Second_Player_Result.className = "Result";
Div_Result_Points_Right.append(Div_Second_Player_Result);

let Second_Player_Result = document.createElement('input');
Second_Player_Result.id = ("Input_B1_M" + MATCH_ID_1 + "_R21");
Second_Player_Result.className = "IResult";
Div_Second_Player_Result.append(Second_Player_Result);

First_Player_Result.setAttribute('placeholder', "0");
Second_Player_Result.setAttribute('placeholder', "0");


//Namn 1
let Div_Player_Names_Left_2 = document.createElement('div');
Div_Player_Names_Left_2.id = ("Left_Div_B1_M" + MATCH_ID_2);
Match_Grid2.append(Div_Player_Names_Left_2);
//Resultat 2
let Div_Result_Points_Right_2 = document.createElement('div');
Div_Result_Points_Right_2.id = ("Right_Div_B1_M" + MATCH_ID_2);
Match_Grid2.append(Div_Result_Points_Right_2);
//

//-------------------------------NY START---------------------------------------------
//First Player Name 
let Div_First_Player_Name_2 = document.createElement('div');
Div_First_Player_Name_2.id = ("Div_B1_M" + MATCH_ID_2 + "_P1");
Div_First_Player_Name_2.className = "Name";
Div_Player_Names_Left_2.append(Div_First_Player_Name_2);


//Second Player Name
let Div_Second_Player_Name_2 = document.createElement('div');
Div_Second_Player_Name_2.id = ("Div_B1_M" + MATCH_ID_2 + "_P2");
Div_Second_Player_Name_2.className = "Name";
Div_Player_Names_Left_2.append(Div_Second_Player_Name_2);
//-----------------------------NY SLUT-----------------------------------------------
//First Player Name 
let First_Player_Name_2 = document.createElement('input');
First_Player_Name_2.id = ("Input_B1_M" + MATCH_ID_2 + "_P1");
First_Player_Name_2.className = "IName";
Div_First_Player_Name_2.append(First_Player_Name_2);


//Second Player Name
let Second_Player_Name_2 = document.createElement('input');
Second_Player_Name_2.id = ("Input_B1_M" + MATCH_ID_2 + "_P2");
Second_Player_Name_2.className = "IName";
Div_Second_Player_Name_2.append(Second_Player_Name_2);
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
First_Player_Name_2.setAttribute('placeholder', "Match " + MATCH_ID_2 + " Player 1");
Second_Player_Name_2.setAttribute('placeholder', "Match " + MATCH_ID_2 + " Player 2");
//Player 1 Result
let Div_First_Player_Result_2 = document.createElement('div');
Div_First_Player_Result_2.id = ("Div_B1_M" + MATCH_ID_2 + "_R1");
Div_First_Player_Result_2.className = "Result";
Div_Result_Points_Right_2.append(Div_First_Player_Result_2);

let First_Player_Result_2 = document.createElement('input');
First_Player_Result_2.id = ("Input_B1_M" + MATCH_ID_2 + "_R1");
First_Player_Result_2.className = "IResult";
Div_First_Player_Result_2.append(First_Player_Result_2);


//Player 2 Result
let Div_Second_Player_Result_2 = document.createElement('div');
Div_Second_Player_Result_2.id = ("Div_B1_M" + MATCH_ID_2 + "_R2");
Div_Second_Player_Result_2.className = "Result";
Div_Result_Points_Right_2.append(Div_Second_Player_Result_2);

let Second_Player_Result_2 = document.createElement('input');
Second_Player_Result_2.id = ("Input_B1_M" + MATCH_ID_2 + "_R21");
Second_Player_Result_2.className = "IResult";
Div_Second_Player_Result_2.append(Second_Player_Result_2);

First_Player_Result_2.setAttribute('placeholder', "0");
Second_Player_Result_2.setAttribute('placeholder', "0");


Branch_1.append(Match_Flex); // Append the fields to the Players element

//----------------Slut Inom Container--------------
}
//-----------------For Loop End---------------------------------------------------
if((Selected_Number-1) === 2){ 
    let obj = document.getElementsByClassName('Match_Grid')[1];
    obj.innerHTML = "";
    obj.style.border = '0';
    obj.style.backgroundColor = 'transparent';
    let lines = document.getElementsByClassName('Object1')[0];
      lines.style.border = '0';

    let lines2 = document.getElementsByClassName('Object2')[0];
      lines2.style.border = '0';
  }
}//Function 1 Slut
//--------------------------Branch 1 Done-------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//---------------------------Branch 2 Start-----------------------------------
document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound2);
//-------------------------------------------------------

let Branch_2 = document.createElement('div');
Branch_2.id = "Branch_2";
Branch_2.className = "Branch_2";
container.append(Branch_2);

//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound2(){

    
Branch_2.innerHTML = "";

const countAll = document.querySelectorAll('#Match_Flex').length*2;
if(countAll === 1){
    
Branch_2.innerHTML = "";
} else {

let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/2;


//-----------------For Loop Start---------------------------------------------------
for (let i = 1; i < Selected_Number/2; i++){ //←


    let MATCH_ID = i++;
    
    let MATCH_ID_1 = MATCH_ID;
    let MATCH_ID_2 = MATCH_ID+1;

    //Box Surrounding Players for Flexbox
    
    let Match_Flex = document.createElement('div');
    Match_Flex.id = "Match_Flex_2";
    Match_Flex.className = "Match_Flex_2";
    Branch_2.append(Match_Flex);
    //Box Surrounding Players for Grid
    //------------------------------------------------------
    
    //------------------------------------------------------
    let Container_Match_Grid = document.createElement('div'); //←
    Container_Match_Grid.id = "Container_Match_Grid_2"; //←
    Container_Match_Grid.className = "Container_Match_Grid_2"; //←
    Match_Flex.append(Container_Match_Grid); //←
    
    let Match_Grid = document.createElement('div');
    Match_Grid.id = "Match_Grid_2";
    Match_Grid.className = "Match_Grid_2";
    Container_Match_Grid.append(Match_Grid);
    
    let Match_Grid2 = document.createElement('div');
    Match_Grid2.id = "Match_Grid_2";
    Match_Grid2.className = "Match_Grid_2";
    Container_Match_Grid.append(Match_Grid2);
    
    let Line_Grid = document.createElement('div'); //←
    Line_Grid.className = "Line_Grid_2"; //←
    Match_Flex.append(Line_Grid); //←
    
    let Object1 = document.createElement('div'); //←
    Object1.className = "Object1_2"; //←
    Line_Grid.append(Object1); //←
    
    let Object2 = document.createElement('div'); //←
    Object2.className = "Object2_2"; //←
    Line_Grid.append(Object2); //←
    
    //Namn 1
    let Div_Player_Names_Left = document.createElement('div');
    Div_Player_Names_Left.id = ("Left_Div_B2_M" + MATCH_ID_1);
    Match_Grid.append(Div_Player_Names_Left);
    //Resultat 2
    let Div_Result_Points_Right = document.createElement('div');
    Div_Result_Points_Right.id = ("Right_Div_B2_M" + MATCH_ID_1);
    Match_Grid.append(Div_Result_Points_Right);
    //
    
    //-------------------------------NY START---------------------------------------------
    //First Player Name 
    let Div_First_Player_Name = document.createElement('div');
    Div_First_Player_Name.id = ("Div_B2_M" + MATCH_ID_1 + "_P1");
    Div_First_Player_Name.className = "Name";
    Div_Player_Names_Left.append(Div_First_Player_Name);
    
    
    //Second Player Name
    let Div_Second_Player_Name = document.createElement('div');
    Div_Second_Player_Name.id = ("Div_B2_M" + MATCH_ID_1 + "_P2");
    Div_Second_Player_Name.className = "Name";
    Div_Player_Names_Left.append(Div_Second_Player_Name);
    //-----------------------------NY SLUT-----------------------------------------------
    //First Player Name 
    let First_Player_Name = document.createElement('input');
    First_Player_Name.id = ("Input_B2_M" + MATCH_ID_1 + "_P1");
    First_Player_Name.className = "IName";
    Div_First_Player_Name.append(First_Player_Name);
    
    
    //Second Player Name
    let Second_Player_Name = document.createElement('input');
    Second_Player_Name.id = ("Input_B2_M" + MATCH_ID_1 + "_P2");
    Second_Player_Name.className = "IName";
    Div_Second_Player_Name.append(Second_Player_Name);
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 1");
    Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 2");
    //Player 1 Result
    let Div_First_Player_Result = document.createElement('div');
    Div_First_Player_Result.id = ("Div_B2_M" + MATCH_ID_1 + "_R1");
    Div_First_Player_Result.className = "Result";
    Div_Result_Points_Right.append(Div_First_Player_Result);
    
    let First_Player_Result = document.createElement('input');
    First_Player_Result.id = ("Input_B2_M" + MATCH_ID_1 + "_R1");
    First_Player_Result.className = "IResult";
    Div_First_Player_Result.append(First_Player_Result);
    
    
    //Player 2 Result
    let Div_Second_Player_Result = document.createElement('div');
    Div_Second_Player_Result.id = ("Div_B2_M" + MATCH_ID_1 + "_R2");
    Div_Second_Player_Result.className = "Result";
    Div_Result_Points_Right.append(Div_Second_Player_Result);
    
    let Second_Player_Result = document.createElement('input');
    Second_Player_Result.id = ("Input_B2_M" + MATCH_ID_1 + "_R21");
    Second_Player_Result.className = "IResult";
    Div_Second_Player_Result.append(Second_Player_Result);
    
    First_Player_Result.setAttribute('placeholder', "0");
    Second_Player_Result.setAttribute('placeholder', "0");
    
    let Div_Player_Names_Left_2 = document.createElement('div');
    Div_Player_Names_Left_2.id = ("Left_Div_B2_M" + MATCH_ID_2);
    Match_Grid2.append(Div_Player_Names_Left_2);
    //Resultat 2
    let Div_Result_Points_Right_2 = document.createElement('div');
    Div_Result_Points_Right_2.id = ("Right_Div_B2_M" + MATCH_ID_2);
    Match_Grid2.append(Div_Result_Points_Right_2);
    //
    
    //-------------------------------NY START---------------------------------------------
    //First Player Name 
    let Div_First_Player_Name_2 = document.createElement('div');
    Div_First_Player_Name_2.id = ("Div_B2_M" + MATCH_ID_2 + "_P1");
    Div_First_Player_Name_2.className = "Name";
    Div_Player_Names_Left_2.append(Div_First_Player_Name_2);
    
    
    //Second Player Name
    let Div_Second_Player_Name_2 = document.createElement('div');
    Div_Second_Player_Name_2.id = ("Div_B2_M" + MATCH_ID_2 + "_P2");
    Div_Second_Player_Name_2.className = "Name";
    Div_Player_Names_Left_2.append(Div_Second_Player_Name_2);
    //-----------------------------NY SLUT-----------------------------------------------
    //First Player Name 
    let First_Player_Name_2 = document.createElement('input');
    First_Player_Name_2.id = ("Input_B2_M" + MATCH_ID_2 + "_P1");
    First_Player_Name_2.className = "IName";
    Div_First_Player_Name_2.append(First_Player_Name_2);
    
    
    //Second Player Name
    let Second_Player_Name_2 = document.createElement('input');
    Second_Player_Name_2.id = ("Input_B2_M" + MATCH_ID_2 + "_P2");
    Second_Player_Name_2.className = "IName";
    Div_Second_Player_Name_2.append(Second_Player_Name_2);
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    First_Player_Name_2.setAttribute('placeholder', "Match " + MATCH_ID_2 + " Player 1");
    Second_Player_Name_2.setAttribute('placeholder', "Match " + MATCH_ID_2 + " Player 2");
    //Player 1 Result
    let Div_First_Player_Result_2 = document.createElement('div');
    Div_First_Player_Result_2.id = ("Div_B2_M" + MATCH_ID_2 + "_R1");
    Div_First_Player_Result_2.className = "Result";
    Div_Result_Points_Right_2.append(Div_First_Player_Result_2);
    
    let First_Player_Result_2 = document.createElement('input');
    First_Player_Result_2.id = ("Input_B2_M" + MATCH_ID_2 + "_R1");
    First_Player_Result_2.className = "IResult";
    Div_First_Player_Result_2.append(First_Player_Result_2);
    
    
    //Player 2 Result
    let Div_Second_Player_Result_2 = document.createElement('div');
    Div_Second_Player_Result_2.id = ("Div_B2_M" + MATCH_ID_2 + "_R2");
    Div_Second_Player_Result_2.className = "Result";
    Div_Result_Points_Right_2.append(Div_Second_Player_Result_2);
    
    let Second_Player_Result_2 = document.createElement('input');
    Second_Player_Result_2.id = ("Input_B2_M" + MATCH_ID_2 + "_R21");
    Second_Player_Result_2.className = "IResult";
    Div_Second_Player_Result_2.append(Second_Player_Result_2);
    
    First_Player_Result_2.setAttribute('placeholder', "0");
    Second_Player_Result_2.setAttribute('placeholder', "0");

    }    //-----------------For Loop End---------------------------------------------------
    if(countAll === 2){ 
        let obj = document.getElementsByClassName('Match_Grid_2')[1];
        obj.innerHTML = "";
        obj.style.border = '0';
        obj.style.backgroundColor = 'transparent';
        let lines = document.getElementsByClassName('Object1_2')[0];
          lines.style.border = '0';

        let lines2 = document.getElementsByClassName('Object2_2')[0];
          lines2.style.border = '0';
      }
}
}
//--------------------------Branch 2 Done-------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//---------------------------Branch 3 Start-----------------------------------
document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound3); //←----
//-------------------------------------------------------

let Branch_3 = document.createElement('div');
Branch_3.id = "Branch_3";
Branch_3.className = "Branch_3";
container.append(Branch_3);

//----------------------Start Inom Container---------------------------------
function MyMatchBoxRound3(){ //←----

    
Branch_3.innerHTML = "";

const countAll = document.querySelectorAll('#Match_Flex').length*2;
if(countAll === 2){ //←----
    
Branch_3.innerHTML = "";
} else {

let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/2;


//-----------------For Loop Start---------------------------------------------------
for (let i = 1; i < Selected_Number/4; i++){ //←


    let MATCH_ID = i++;
    
    let MATCH_ID_1 = MATCH_ID;
    let MATCH_ID_3 = MATCH_ID+1;

    //Box Surrounding Players for Flexbox
    
    let Match_Flex = document.createElement('div');
    Match_Flex.id = "Match_Flex_3"; //←---- 
    Match_Flex.className = "Match_Flex_3"; //←----
    Branch_3.append(Match_Flex);
    //Box Surrounding Players for Grid
    //------------------------------------------------------
    
    //------------------------------------------------------
    let Container_Match_Grid = document.createElement('div'); //←
    Container_Match_Grid.id = "Container_Match_Grid_3"; //←
    Container_Match_Grid.className = "Container_Match_Grid_3"; //←
    Match_Flex.append(Container_Match_Grid); //←
    
    let Match_Grid = document.createElement('div');
    Match_Grid.id = "Match_Grid_3";
    Match_Grid.className = "Match_Grid_3";
    Container_Match_Grid.append(Match_Grid);
    
    let Match_Grid2 = document.createElement('div');
    Match_Grid2.id = "Match_Grid_3";
    Match_Grid2.className = "Match_Grid_3";
    Container_Match_Grid.append(Match_Grid2);
    
    let Line_Grid = document.createElement('div'); //←
    Line_Grid.className = "Line_Grid_3"; //←
    Match_Flex.append(Line_Grid); //←
    
    let Object1 = document.createElement('div'); //←
    Object1.className = "Object1_3"; //←
    Line_Grid.append(Object1); //←
    
    let Object2 = document.createElement('div'); //←
    Object2.className = "Object2_3"; //←
    Line_Grid.append(Object2); //←

    //Namn 1
    let Div_Player_Names_Left = document.createElement('div');
    Div_Player_Names_Left.id = ("Left_Div_B3_M" + MATCH_ID_1);
    Match_Grid.append(Div_Player_Names_Left);
    //Resultat 2
    let Div_Result_Points_Right = document.createElement('div');
    Div_Result_Points_Right.id = ("Right_Div_B3_M" + MATCH_ID_1);
    Match_Grid.append(Div_Result_Points_Right);
    //
    
    //-------------------------------NY START---------------------------------------------
    //First Player Name 
    let Div_First_Player_Name = document.createElement('div');
    Div_First_Player_Name.id = ("Div_B3_M" + MATCH_ID_1 + "_P1");
    Div_First_Player_Name.className = "Name";
    Div_Player_Names_Left.append(Div_First_Player_Name);
    
    
    //Second Player Name
    let Div_Second_Player_Name = document.createElement('div');
    Div_Second_Player_Name.id = ("Div_B3_M" + MATCH_ID_1 + "_P2");
    Div_Second_Player_Name.className = "Name";
    Div_Player_Names_Left.append(Div_Second_Player_Name);
    //-----------------------------NY SLUT-----------------------------------------------
    //First Player Name 
    let First_Player_Name = document.createElement('input');
    First_Player_Name.id = ("Input_B3_M" + MATCH_ID_1 + "_P1");
    First_Player_Name.className = "IName";
    Div_First_Player_Name.append(First_Player_Name);
    
    
    //Second Player Name
    let Second_Player_Name = document.createElement('input');
    Second_Player_Name.id = ("Input_B3_M" + MATCH_ID_1 + "_P2");
    Second_Player_Name.className = "IName";
    Div_Second_Player_Name.append(Second_Player_Name);
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 1");
    Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 2");
    //Player 1 Result
    let Div_First_Player_Result = document.createElement('div');
    Div_First_Player_Result.id = ("Div_B3_M" + MATCH_ID_1 + "_R1");
    Div_First_Player_Result.className = "Result";
    Div_Result_Points_Right.append(Div_First_Player_Result);
    
    let First_Player_Result = document.createElement('input');
    First_Player_Result.id = ("Input_B3_M" + MATCH_ID_1 + "_R1");
    First_Player_Result.className = "IResult";
    Div_First_Player_Result.append(First_Player_Result);
    
    
    //Player 2 Result
    let Div_Second_Player_Result = document.createElement('div');
    Div_Second_Player_Result.id = ("Div_B3_M" + MATCH_ID_1 + "_R2");
    Div_Second_Player_Result.className = "Result";
    Div_Result_Points_Right.append(Div_Second_Player_Result);
    
    let Second_Player_Result = document.createElement('input');
    Second_Player_Result.id = ("Input_B3_M" + MATCH_ID_1 + "_R21");
    Second_Player_Result.className = "IResult";
    Div_Second_Player_Result.append(Second_Player_Result);
    
    First_Player_Result.setAttribute('placeholder', "0");
    Second_Player_Result.setAttribute('placeholder', "0");
    

    //Namn 1
    let Div_Player_Names_Left_3 = document.createElement('div');
    Div_Player_Names_Left_3.id = ("Left_Div_B3_M" + MATCH_ID_3);
    Match_Grid2.append(Div_Player_Names_Left_3);
    //Resultat 2
    let Div_Result_Points_Right_3 = document.createElement('div');
    Div_Result_Points_Right_3.id = ("Right_Div_B3_M" + MATCH_ID_3);
    Match_Grid2.append(Div_Result_Points_Right_3);
    //
    
    //-------------------------------NY START---------------------------------------------
    //First Player Name 
    let Div_First_Player_Name_3 = document.createElement('div');
    Div_First_Player_Name_3.id = ("Div_B3_M" + MATCH_ID_3 + "_P1");
    Div_First_Player_Name_3.className = "Name";
    Div_Player_Names_Left_3.append(Div_First_Player_Name_3);
    
    
    //Second Player Name
    let Div_Second_Player_Name_3 = document.createElement('div');
    Div_Second_Player_Name_3.id = ("Div_B3_M" + MATCH_ID_3 + "_P2");
    Div_Second_Player_Name_3.className = "Name";
    Div_Player_Names_Left_3.append(Div_Second_Player_Name_3);
    //-----------------------------NY SLUT-----------------------------------------------
    //First Player Name 
    let First_Player_Name_3 = document.createElement('input');
    First_Player_Name_3.id = ("Input_B3_M" + MATCH_ID_3 + "_P1");
    First_Player_Name_3.className = "IName";
    Div_First_Player_Name_3.append(First_Player_Name_3);
    
    
    //Second Player Name
    let Second_Player_Name_3 = document.createElement('input');
    Second_Player_Name_3.id = ("Input_B3_M" + MATCH_ID_3 + "_P2");
    Second_Player_Name_3.className = "IName";
    Div_Second_Player_Name_3.append(Second_Player_Name_3);
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    First_Player_Name_3.setAttribute('placeholder', "Match " + MATCH_ID_3 + " Player 1");
    Second_Player_Name_3.setAttribute('placeholder', "Match " + MATCH_ID_3 + " Player 2");
    //Player 1 Result
    let Div_First_Player_Result_3 = document.createElement('div');
    Div_First_Player_Result_3.id = ("Div_B3_M" + MATCH_ID_3 + "_R1");
    Div_First_Player_Result_3.className = "Result";
    Div_Result_Points_Right_3.append(Div_First_Player_Result_3);
    
    let First_Player_Result_3 = document.createElement('input');
    First_Player_Result_3.id = ("Input_B3_M" + MATCH_ID_3 + "_R1");
    First_Player_Result_3.className = "IResult";
    Div_First_Player_Result_3.append(First_Player_Result_3);
    
    
    //Player 2 Result
    let Div_Second_Player_Result_3 = document.createElement('div');
    Div_Second_Player_Result_3.id = ("Div_B3_M" + MATCH_ID_3 + "_R2");
    Div_Second_Player_Result_3.className = "Result";
    Div_Result_Points_Right_3.append(Div_Second_Player_Result_3);
    
    let Second_Player_Result_3 = document.createElement('input');
    Second_Player_Result_3.id = ("Input_B3_M" + MATCH_ID_3 + "_R21");
    Second_Player_Result_3.className = "IResult";
    Div_Second_Player_Result_3.append(Second_Player_Result_3);
    
    First_Player_Result_3.setAttribute('placeholder', "0");
    Second_Player_Result_3.setAttribute('placeholder', "0");

    //----------------Slut Inom Container--------------
    }
    //-----------------For Loop End---------------------------------------------------
    if(countAll === 4){ 
        let obj = document.getElementsByClassName('Match_Grid_3')[1];
        obj.innerHTML = "";
        obj.style.border = '0';
        obj.style.backgroundColor = 'transparent';
        let lines = document.getElementsByClassName('Object1_3')[0];
          lines.style.border = '0';

        let lines2 = document.getElementsByClassName('Object2_3')[0];
          lines2.style.border = '0';
      }
}
}
    //-------------------------Branch 3 end---------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //--------------------------Branch 4 Start------------------------------------
    document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound4);
    //-------------------------------------------------------
    
    let Branch_4 = document.createElement('div');
    Branch_4.id = "Branch_4";
    Branch_4.className = "Branch_4";
    container.append(Branch_4);
    
    //----------------------Start Inom Container---------------------------------
    function MyMatchBoxRound4(){
    
        
    Branch_4.innerHTML = "";
    
    const countAll = document.querySelectorAll('#Match_Flex').length*2;
    if(countAll === 4){
        
    Branch_4.innerHTML = "";
    } else {
    
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/2;
    
    
    //-----------------For Loop Start---------------------------------------------------
    for (let i = 1; i < Selected_Number/8; i++){ //←-----------------------
    
    
        let MATCH_ID = i++;
        
        let MATCH_ID_1 = MATCH_ID;
        let MATCH_ID_4 = MATCH_ID+1;
    
        //Box Surrounding Players for Flexbox
        
        let Match_Flex = document.createElement('div');
        Match_Flex.id = "Match_Flex_4";
        Match_Flex.className = "Match_Flex_4";
        Branch_4.append(Match_Flex);
        //Box Surrounding Players for Grid
        //------------------------------------------------------
        
        //------------------------------------------------------
        let Container_Match_Grid = document.createElement('div'); //←
        Container_Match_Grid.id = "Container_Match_Grid_4"; //←
        Container_Match_Grid.className = "Container_Match_Grid_4"; //←
        Match_Flex.append(Container_Match_Grid); //←
        
        let Match_Grid = document.createElement('div');
        Match_Grid.id = "Match_Grid_4";
        Match_Grid.className = "Match_Grid_4";
        Container_Match_Grid.append(Match_Grid);
        
        let Match_Grid2 = document.createElement('div');
        Match_Grid2.id = "Match_Grid_4";
        Match_Grid2.className = "Match_Grid_4";
        Container_Match_Grid.append(Match_Grid2);
        
        let Line_Grid = document.createElement('div'); //←
        Line_Grid.className = "Line_Grid_4"; //←
        Match_Flex.append(Line_Grid); //←
        
        let Object1 = document.createElement('div'); //←
        Object1.className = "Object1_4"; //←
        Line_Grid.append(Object1); //←
        
        let Object2 = document.createElement('div'); //←
        Object2.className = "Object2_4"; //←
        Line_Grid.append(Object2); //←
        
        //Namn 1
        let Div_Player_Names_Left = document.createElement('div');
        Div_Player_Names_Left.id = ("Left_Div_B4_M" + MATCH_ID_1);
        Match_Grid.append(Div_Player_Names_Left);
        //Resultat 2
        let Div_Result_Points_Right = document.createElement('div');
        Div_Result_Points_Right.id = ("Right_Div_B4_M" + MATCH_ID_1);
        Match_Grid.append(Div_Result_Points_Right);
        //
        
        //-------------------------------NY START---------------------------------------------
        //First Player Name 
        let Div_First_Player_Name = document.createElement('div');
        Div_First_Player_Name.id = ("Div_B4_M" + MATCH_ID_1 + "_P1");
        Div_First_Player_Name.className = "Name";
        Div_Player_Names_Left.append(Div_First_Player_Name);
        
        
        //Second Player Name
        let Div_Second_Player_Name = document.createElement('div');
        Div_Second_Player_Name.id = ("Div_B4_M" + MATCH_ID_1 + "_P2");
        Div_Second_Player_Name.className = "Name";
        Div_Player_Names_Left.append(Div_Second_Player_Name);
        //-----------------------------NY SLUT-----------------------------------------------
        //First Player Name 
        let First_Player_Name = document.createElement('input');
        First_Player_Name.id = ("Input_B4_M" + MATCH_ID_1 + "_P1");
        First_Player_Name.className = "IName";
        Div_First_Player_Name.append(First_Player_Name);
        
        
        //Second Player Name
        let Second_Player_Name = document.createElement('input');
        Second_Player_Name.id = ("Input_B4_M" + MATCH_ID_1 + "_P2");
        Second_Player_Name.className = "IName";
        Div_Second_Player_Name.append(Second_Player_Name);
        //----------------------------------------------------------------------------
        //----------------------------------------------------------------------------
        First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 1");
        Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 2");
        //Player 1 Result
        let Div_First_Player_Result = document.createElement('div');
        Div_First_Player_Result.id = ("Div_B4_M" + MATCH_ID_1 + "_R1");
        Div_First_Player_Result.className = "Result";
        Div_Result_Points_Right.append(Div_First_Player_Result);
        
        let First_Player_Result = document.createElement('input');
        First_Player_Result.id = ("Input_B4_M" + MATCH_ID_1 + "_R1");
        First_Player_Result.className = "IResult";
        Div_First_Player_Result.append(First_Player_Result);
        
        
        //Player 2 Result
        let Div_Second_Player_Result = document.createElement('div');
        Div_Second_Player_Result.id = ("Div_B4_M" + MATCH_ID_1 + "_R2");
        Div_Second_Player_Result.className = "Result";
        Div_Result_Points_Right.append(Div_Second_Player_Result);
        
        let Second_Player_Result = document.createElement('input');
        Second_Player_Result.id = ("Input_B4_M" + MATCH_ID_1 + "_R21");
        Second_Player_Result.className = "IResult";
        Div_Second_Player_Result.append(Second_Player_Result);
        
        First_Player_Result.setAttribute('placeholder', "0");
        Second_Player_Result.setAttribute('placeholder', "0");
        
        let Div_Player_Names_Left_4 = document.createElement('div');
        Div_Player_Names_Left_4.id = ("Left_Div_B4_M" + MATCH_ID_4);
        Match_Grid2.append(Div_Player_Names_Left_4);
        //Resultat 2
        let Div_Result_Points_Right_4 = document.createElement('div');
        Div_Result_Points_Right_4.id = ("Right_Div_B4_M" + MATCH_ID_4);
        Match_Grid2.append(Div_Result_Points_Right_4);
        //
        
        //-------------------------------NY START---------------------------------------------
        //First Player Name 
        let Div_First_Player_Name_4 = document.createElement('div');
        Div_First_Player_Name_4.id = ("Div_B4_M" + MATCH_ID_4 + "_P1");
        Div_First_Player_Name_4.className = "Name";
        Div_Player_Names_Left_4.append(Div_First_Player_Name_4);
        
        
        //Second Player Name
        let Div_Second_Player_Name_4 = document.createElement('div');
        Div_Second_Player_Name_4.id = ("Div_B4_M" + MATCH_ID_4 + "_P2");
        Div_Second_Player_Name_4.className = "Name";
        Div_Player_Names_Left_4.append(Div_Second_Player_Name_4);
        //-----------------------------NY SLUT-----------------------------------------------
        //First Player Name 
        let First_Player_Name_4 = document.createElement('input');
        First_Player_Name_4.id = ("Input_B4_M" + MATCH_ID_4 + "_P1");
        First_Player_Name_4.className = "IName";
        Div_First_Player_Name_4.append(First_Player_Name_4);
        
        
        //Second Player Name
        let Second_Player_Name_4 = document.createElement('input');
        Second_Player_Name_4.id = ("Input_B4_M" + MATCH_ID_4 + "_P2");
        Second_Player_Name_4.className = "IName";
        Div_Second_Player_Name_4.append(Second_Player_Name_4);
        //----------------------------------------------------------------------------
        //----------------------------------------------------------------------------
        First_Player_Name_4.setAttribute('placeholder', "Match " + MATCH_ID_4 + " Player 1");
        Second_Player_Name_4.setAttribute('placeholder', "Match " + MATCH_ID_4 + " Player 2");
        //Player 1 Result
        let Div_First_Player_Result_4 = document.createElement('div');
        Div_First_Player_Result_4.id = ("Div_B4_M" + MATCH_ID_4 + "_R1");
        Div_First_Player_Result_4.className = "Result";
        Div_Result_Points_Right_4.append(Div_First_Player_Result_4);
        
        let First_Player_Result_4 = document.createElement('input');
        First_Player_Result_4.id = ("Input_B4_M" + MATCH_ID_4 + "_R1");
        First_Player_Result_4.className = "IResult";
        Div_First_Player_Result_4.append(First_Player_Result_4);
        
        
        //Player 2 Result
        let Div_Second_Player_Result_4 = document.createElement('div');
        Div_Second_Player_Result_4.id = ("Div_B4_M" + MATCH_ID_4 + "_R2");
        Div_Second_Player_Result_4.className = "Result";
        Div_Result_Points_Right_4.append(Div_Second_Player_Result_4);
        
        let Second_Player_Result_4 = document.createElement('input');
        Second_Player_Result_4.id = ("Input_B4_M" + MATCH_ID_4 + "_R21");
        Second_Player_Result_4.className = "IResult";
        Div_Second_Player_Result_4.append(Second_Player_Result_4);
        
        First_Player_Result_4.setAttribute('placeholder', "0");
        Second_Player_Result_4.setAttribute('placeholder', "0");
    
        }    //-----------------For Loop End---------------------------------------------------
        if(countAll === 8){ 
            let obj = document.getElementsByClassName('Match_Grid_4')[1];
            obj.innerHTML = "";
            obj.style.border = '0';
            obj.style.backgroundColor = 'transparent';
            let lines = document.getElementsByClassName('Object1_4')[0];
              lines.style.border = '0';
    
            let lines2 = document.getElementsByClassName('Object2_4')[0];
              lines2.style.border = '0';
          }
    }
    } // Func end

    //-------------------------Branch 4 end---------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //--------------------------Branch 5 Start------------------------------------
    document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound5);
    //-------------------------------------------------------
    
    let Branch_5 = document.createElement('div');
    Branch_5.id = "Branch_5";
    Branch_5.className = "Branch_5";
    container.append(Branch_5);
    
    //----------------------Start Inom Container---------------------------------
    function MyMatchBoxRound5(){
    
        
    Branch_5.innerHTML = "";
    
    const countAll = document.querySelectorAll('#Match_Flex').length*2;
    if(countAll === 8){
        
    Branch_5.innerHTML = "";
    } else {
    
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/2;
    
    
    //-----------------For Loop Start---------------------------------------------------
    for (let i = 1; i < Selected_Number/16; i++){ //←
    
    
        let MATCH_ID = i++;
        
        let MATCH_ID_1 = MATCH_ID;
        let MATCH_ID_5 = MATCH_ID+1;
    
        //Box Surrounding Players for Flexbox
        
        let Match_Flex = document.createElement('div');
        Match_Flex.id = "Match_Flex_5";
        Match_Flex.className = "Match_Flex_5";
        Branch_5.append(Match_Flex);
        //Box Surrounding Players for Grid
        //------------------------------------------------------
        
        //------------------------------------------------------
        let Container_Match_Grid = document.createElement('div'); //←
        Container_Match_Grid.id = "Container_Match_Grid_5"; //←
        Container_Match_Grid.className = "Container_Match_Grid_5"; //←
        Match_Flex.append(Container_Match_Grid); //←
        
        let Match_Grid = document.createElement('div');
        Match_Grid.id = "Match_Grid_5";
        Match_Grid.className = "Match_Grid_5";
        Container_Match_Grid.append(Match_Grid);
        
        let Match_Grid2 = document.createElement('div');
        Match_Grid2.id = "Match_Grid_5";
        Match_Grid2.className = "Match_Grid_5";
        Container_Match_Grid.append(Match_Grid2);
        
        let Line_Grid = document.createElement('div'); //←
        Line_Grid.className = "Line_Grid_5"; //←
        Match_Flex.append(Line_Grid); //←
        
        let Object1 = document.createElement('div'); //←
        Object1.className = "Object1_5"; //←
        Line_Grid.append(Object1); //←
        
        let Object2 = document.createElement('div'); //←
        Object2.className = "Object2_5"; //←
        Line_Grid.append(Object2); //←
        
        //Namn 1
        let Div_Player_Names_Left = document.createElement('div');
        Div_Player_Names_Left.id = ("Left_Div_B5_M" + MATCH_ID_1);
        Match_Grid.append(Div_Player_Names_Left);
        //Resultat 2
        let Div_Result_Points_Right = document.createElement('div');
        Div_Result_Points_Right.id = ("Right_Div_B5_M" + MATCH_ID_1);
        Match_Grid.append(Div_Result_Points_Right);
        //
        
        //-------------------------------NY START---------------------------------------------
        //First Player Name 
        let Div_First_Player_Name = document.createElement('div');
        Div_First_Player_Name.id = ("Div_B5_M" + MATCH_ID_1 + "_P1");
        Div_First_Player_Name.className = "Name";
        Div_Player_Names_Left.append(Div_First_Player_Name);
        
        
        //Second Player Name
        let Div_Second_Player_Name = document.createElement('div');
        Div_Second_Player_Name.id = ("Div_B5_M" + MATCH_ID_1 + "_P2");
        Div_Second_Player_Name.className = "Name";
        Div_Player_Names_Left.append(Div_Second_Player_Name);
        //-----------------------------NY SLUT-----------------------------------------------
        //First Player Name 
        let First_Player_Name = document.createElement('input');
        First_Player_Name.id = ("Input_B5_M" + MATCH_ID_1 + "_P1");
        First_Player_Name.className = "IName";
        Div_First_Player_Name.append(First_Player_Name);
        
        
        //Second Player Name
        let Second_Player_Name = document.createElement('input');
        Second_Player_Name.id = ("Input_B5_M" + MATCH_ID_1 + "_P2");
        Second_Player_Name.className = "IName";
        Div_Second_Player_Name.append(Second_Player_Name);
        //----------------------------------------------------------------------------
        //----------------------------------------------------------------------------
        First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 1");
        Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 2");
        //Player 1 Result
        let Div_First_Player_Result = document.createElement('div');
        Div_First_Player_Result.id = ("Div_B5_M" + MATCH_ID_1 + "_R1");
        Div_First_Player_Result.className = "Result";
        Div_Result_Points_Right.append(Div_First_Player_Result);
        
        let First_Player_Result = document.createElement('input');
        First_Player_Result.id = ("Input_B5_M" + MATCH_ID_1 + "_R1");
        First_Player_Result.className = "IResult";
        Div_First_Player_Result.append(First_Player_Result);
        
        
        //Player 2 Result
        let Div_Second_Player_Result = document.createElement('div');
        Div_Second_Player_Result.id = ("Div_B5_M" + MATCH_ID_1 + "_R2");
        Div_Second_Player_Result.className = "Result";
        Div_Result_Points_Right.append(Div_Second_Player_Result);
        
        let Second_Player_Result = document.createElement('input');
        Second_Player_Result.id = ("Input_B5_M" + MATCH_ID_1 + "_R21");
        Second_Player_Result.className = "IResult";
        Div_Second_Player_Result.append(Second_Player_Result);
        
        First_Player_Result.setAttribute('placeholder', "0");
        Second_Player_Result.setAttribute('placeholder', "0");
        
        let Div_Player_Names_Left_5 = document.createElement('div');
        Div_Player_Names_Left_5.id = ("Left_Div_B5_M" + MATCH_ID_5);
        Match_Grid2.append(Div_Player_Names_Left_5);
        //Resultat 2
        let Div_Result_Points_Right_5 = document.createElement('div');
        Div_Result_Points_Right_5.id = ("Right_Div_B5_M" + MATCH_ID_5);
        Match_Grid2.append(Div_Result_Points_Right_5);
        //
        
        //-------------------------------NY START---------------------------------------------
        //First Player Name 
        let Div_First_Player_Name_5 = document.createElement('div');
        Div_First_Player_Name_5.id = ("Div_B5_M" + MATCH_ID_5 + "_P1");
        Div_First_Player_Name_5.className = "Name";
        Div_Player_Names_Left_5.append(Div_First_Player_Name_5);
        
        
        //Second Player Name
        let Div_Second_Player_Name_5 = document.createElement('div');
        Div_Second_Player_Name_5.id = ("Div_B5_M" + MATCH_ID_5 + "_P2");
        Div_Second_Player_Name_5.className = "Name";
        Div_Player_Names_Left_5.append(Div_Second_Player_Name_5);
        //-----------------------------NY SLUT-----------------------------------------------
        //First Player Name 
        let First_Player_Name_5 = document.createElement('input');
        First_Player_Name_5.id = ("Input_B5_M" + MATCH_ID_5 + "_P1");
        First_Player_Name_5.className = "IName";
        Div_First_Player_Name_5.append(First_Player_Name_5);
        
        
        //Second Player Name
        let Second_Player_Name_5 = document.createElement('input');
        Second_Player_Name_5.id = ("Input_B5_M" + MATCH_ID_5 + "_P2");
        Second_Player_Name_5.className = "IName";
        Div_Second_Player_Name_5.append(Second_Player_Name_5);
        //----------------------------------------------------------------------------
        //----------------------------------------------------------------------------
        First_Player_Name_5.setAttribute('placeholder', "Match " + MATCH_ID_5 + " Player 1");
        Second_Player_Name_5.setAttribute('placeholder', "Match " + MATCH_ID_5 + " Player 2");
        //Player 1 Result
        let Div_First_Player_Result_5 = document.createElement('div');
        Div_First_Player_Result_5.id = ("Div_B5_M" + MATCH_ID_5 + "_R1");
        Div_First_Player_Result_5.className = "Result";
        Div_Result_Points_Right_5.append(Div_First_Player_Result_5);
        
        let First_Player_Result_5 = document.createElement('input');
        First_Player_Result_5.id = ("Input_B5_M" + MATCH_ID_5 + "_R1");
        First_Player_Result_5.className = "IResult";
        Div_First_Player_Result_5.append(First_Player_Result_5);
        
        
        //Player 2 Result
        let Div_Second_Player_Result_5 = document.createElement('div');
        Div_Second_Player_Result_5.id = ("Div_B5_M" + MATCH_ID_5 + "_R2");
        Div_Second_Player_Result_5.className = "Result";
        Div_Result_Points_Right_5.append(Div_Second_Player_Result_5);
        
        let Second_Player_Result_5 = document.createElement('input');
        Second_Player_Result_5.id = ("Input_B5_M" + MATCH_ID_5 + "_R21");
        Second_Player_Result_5.className = "IResult";
        Div_Second_Player_Result_5.append(Second_Player_Result_5);
        
        First_Player_Result_5.setAttribute('placeholder', "0");
        Second_Player_Result_5.setAttribute('placeholder', "0");
    
        }    //-----------------For Loop End---------------------------------------------------
        if(countAll === 16){ 
            let obj = document.getElementsByClassName('Match_Grid_5')[1];
            obj.innerHTML = "";
            obj.style.border = '0';
            obj.style.backgroundColor = 'transparent';
            let lines = document.getElementsByClassName('Object1_5')[0];
              lines.style.border = '0';
    
            let lines2 = document.getElementsByClassName('Object2_5')[0];
              lines2.style.border = '0';
          }
    }
    } // Func end
    //-------------------------Branch 5 end---------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //--------------------------Branch 6 Start------------------------------------
    document.getElementById('DropDownNumber').addEventListener("change", MyMatchBoxRound6);
    //-------------------------------------------------------
    
    let Branch_6 = document.createElement('div');
    Branch_6.id = "Branch_6";
    Branch_6.className = "Branch_6";
    container.append(Branch_6);
    
    //----------------------Start Inom Container---------------------------------
    function MyMatchBoxRound6(){
    
        
    Branch_6.innerHTML = "";
    
    const countAll = document.querySelectorAll('#Match_Flex').length*2;
    if(countAll === 16){
        
    Branch_6.innerHTML = "";
    } else {
    
    let Selected_Number = (parseInt(document.getElementById('DropDownNumber').value) + 1)/2;
    
    
    //-----------------For Loop Start---------------------------------------------------
    for (let i = 1; i < Selected_Number/32; i++){ //←
    
    
        let MATCH_ID = i++;
        
        let MATCH_ID_1 = MATCH_ID;
        let MATCH_ID_6 = MATCH_ID+1;
    
        //Box Surrounding Players for Flexbox
        
        let Match_Flex = document.createElement('div');
        Match_Flex.id = "Match_Flex_6";
        Match_Flex.className = "Match_Flex_6";
        Branch_6.append(Match_Flex);
        //Box Surrounding Players for Grid
        //------------------------------------------------------
        
        //------------------------------------------------------
        let Container_Match_Grid = document.createElement('div'); //←
        Container_Match_Grid.id = "Container_Match_Grid_6"; //←
        Container_Match_Grid.className = "Container_Match_Grid_6"; //←
        Match_Flex.append(Container_Match_Grid); //←
        
        let Match_Grid = document.createElement('div');
        Match_Grid.id = "Match_Grid_6";
        Match_Grid.className = "Match_Grid_6";
        Container_Match_Grid.append(Match_Grid);
        
        let Match_Grid2 = document.createElement('div');
        Match_Grid2.id = "Match_Grid_6";
        Match_Grid2.className = "Match_Grid_6";
        Container_Match_Grid.append(Match_Grid2);
        
        let Line_Grid = document.createElement('div'); //←
        Line_Grid.className = "Line_Grid_6"; //←
        Match_Flex.append(Line_Grid); //←
        
        let Object1 = document.createElement('div'); //←
        Object1.className = "Object1_6"; //←
        Line_Grid.append(Object1); //←
        
        let Object2 = document.createElement('div'); //←
        Object2.className = "Object2_6"; //←
        Line_Grid.append(Object2); //←
        
        //Namn 1
        let Div_Player_Names_Left = document.createElement('div');
        Div_Player_Names_Left.id = ("Left_Div_B6_M" + MATCH_ID_1);
        Match_Grid.append(Div_Player_Names_Left);
        //Resultat 2
        let Div_Result_Points_Right = document.createElement('div');
        Div_Result_Points_Right.id = ("Right_Div_B6_M" + MATCH_ID_1);
        Match_Grid.append(Div_Result_Points_Right);
        //
        
        //-------------------------------NY START---------------------------------------------
        //First Player Name 
        let Div_First_Player_Name = document.createElement('div');
        Div_First_Player_Name.id = ("Div_B6_M" + MATCH_ID_1 + "_P1");
        Div_First_Player_Name.className = "Name";
        Div_Player_Names_Left.append(Div_First_Player_Name);
        
        
        //Second Player Name
        let Div_Second_Player_Name = document.createElement('div');
        Div_Second_Player_Name.id = ("Div_B6_M" + MATCH_ID_1 + "_P2");
        Div_Second_Player_Name.className = "Name";
        Div_Player_Names_Left.append(Div_Second_Player_Name);
        //-----------------------------NY SLUT-----------------------------------------------
        //First Player Name 
        let First_Player_Name = document.createElement('input');
        First_Player_Name.id = ("Input_B6_M" + MATCH_ID_1 + "_P1");
        First_Player_Name.className = "IName";
        Div_First_Player_Name.append(First_Player_Name);
        
        
        //Second Player Name
        let Second_Player_Name = document.createElement('input');
        Second_Player_Name.id = ("Input_B6_M" + MATCH_ID_1 + "_P2");
        Second_Player_Name.className = "IName";
        Div_Second_Player_Name.append(Second_Player_Name);
        //----------------------------------------------------------------------------
        //----------------------------------------------------------------------------
        First_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 1");
        Second_Player_Name.setAttribute('placeholder', "Match " + MATCH_ID_1 + " Player 2");
        //Player 1 Result
        let Div_First_Player_Result = document.createElement('div');
        Div_First_Player_Result.id = ("Div_B6_M" + MATCH_ID_1 + "_R1");
        Div_First_Player_Result.className = "Result";
        Div_Result_Points_Right.append(Div_First_Player_Result);
        
        let First_Player_Result = document.createElement('input');
        First_Player_Result.id = ("Input_B6_M" + MATCH_ID_1 + "_R1");
        First_Player_Result.className = "IResult";
        Div_First_Player_Result.append(First_Player_Result);
        
        
        //Player 2 Result
        let Div_Second_Player_Result = document.createElement('div');
        Div_Second_Player_Result.id = ("Div_B6_M" + MATCH_ID_1 + "_R2");
        Div_Second_Player_Result.className = "Result";
        Div_Result_Points_Right.append(Div_Second_Player_Result);
        
        let Second_Player_Result = document.createElement('input');
        Second_Player_Result.id = ("Input_B6_M" + MATCH_ID_1 + "_R21");
        Second_Player_Result.className = "IResult";
        Div_Second_Player_Result.append(Second_Player_Result);
        
        First_Player_Result.setAttribute('placeholder', "0");
        Second_Player_Result.setAttribute('placeholder', "0");
        
        let Div_Player_Names_Left_6 = document.createElement('div');
        Div_Player_Names_Left_6.id = ("Left_Div_B6_M" + MATCH_ID_6);
        Match_Grid2.append(Div_Player_Names_Left_6);
        //Resultat 2
        let Div_Result_Points_Right_6 = document.createElement('div');
        Div_Result_Points_Right_6.id = ("Right_Div_B6_M" + MATCH_ID_6);
        Match_Grid2.append(Div_Result_Points_Right_6);
        //
        
        //-------------------------------NY START---------------------------------------------
        //First Player Name 
        let Div_First_Player_Name_6 = document.createElement('div');
        Div_First_Player_Name_6.id = ("Div_B6_M" + MATCH_ID_6 + "_P1");
        Div_First_Player_Name_6.className = "Name";
        Div_Player_Names_Left_6.append(Div_First_Player_Name_6);
        
        
        //Second Player Name
        let Div_Second_Player_Name_6 = document.createElement('div');
        Div_Second_Player_Name_6.id = ("Div_B6_M" + MATCH_ID_6 + "_P2");
        Div_Second_Player_Name_6.className = "Name";
        Div_Player_Names_Left_6.append(Div_Second_Player_Name_6);
        //-----------------------------NY SLUT-----------------------------------------------
        //First Player Name 
        let First_Player_Name_6 = document.createElement('input');
        First_Player_Name_6.id = ("Input_B6_M" + MATCH_ID_6 + "_P1");
        First_Player_Name_6.className = "IName";
        Div_First_Player_Name_6.append(First_Player_Name_6);
        
        
        //Second Player Name
        let Second_Player_Name_6 = document.createElement('input');
        Second_Player_Name_6.id = ("Input_B6_M" + MATCH_ID_6 + "_P2");
        Second_Player_Name_6.className = "IName";
        Div_Second_Player_Name_6.append(Second_Player_Name_6);
        //----------------------------------------------------------------------------
        //----------------------------------------------------------------------------
        First_Player_Name_6.setAttribute('placeholder', "Match " + MATCH_ID_6 + " Player 1");
        Second_Player_Name_6.setAttribute('placeholder', "Match " + MATCH_ID_6 + " Player 2");
        //Player 1 Result
        let Div_First_Player_Result_6 = document.createElement('div');
        Div_First_Player_Result_6.id = ("Div_B6_M" + MATCH_ID_6 + "_R1");
        Div_First_Player_Result_6.className = "Result";
        Div_Result_Points_Right_6.append(Div_First_Player_Result_6);
        
        let First_Player_Result_6 = document.createElement('input');
        First_Player_Result_6.id = ("Input_B6_M" + MATCH_ID_6 + "_R1");
        First_Player_Result_6.className = "IResult";
        Div_First_Player_Result_6.append(First_Player_Result_6);
        
        
        //Player 2 Result
        let Div_Second_Player_Result_6 = document.createElement('div');
        Div_Second_Player_Result_6.id = ("Div_B6_M" + MATCH_ID_6 + "_R2");
        Div_Second_Player_Result_6.className = "Result";
        Div_Result_Points_Right_6.append(Div_Second_Player_Result_6);
        
        let Second_Player_Result_6 = document.createElement('input');
        Second_Player_Result_6.id = ("Input_B6_M" + MATCH_ID_6 + "_R21");
        Second_Player_Result_6.className = "IResult";
        Div_Second_Player_Result_6.append(Second_Player_Result_6);
        
        First_Player_Result_6.setAttribute('placeholder', "0");
        Second_Player_Result_6.setAttribute('placeholder', "0");
    
        }    //-----------------For Loop End---------------------------------------------------
        if(countAll === 32){ 
            let obj = document.getElementsByClassName('Match_Grid_6')[1];
            obj.innerHTML = "";
            obj.style.border = '0';
            obj.style.backgroundColor = 'transparent';
    
            let lines = document.getElementsByClassName('Object1_6')[0];
              lines.style.border = '0';
    
            let lines2 = document.getElementsByClassName('Object2_6')[0];
              lines2.style.border = '0';
          }
    }
    } // Func end