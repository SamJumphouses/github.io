//Puts text box in immediate focus
$(function(){
  $("#usersinput").focus();
});

// Enter-press on submit text field is equal to pressing the button:
$("#usersinput").keyup(function(event){
    if(event.keyCode == 13){
        ResponseFunction()
    }
});

// Clearing out text box on mouse click and resetting image
function Clear()
{    
   document.getElementById("usersinput").value= "";
   Bomsimage = HTMLBomsimage.replace("%bomspic%","Bom.jpg") 
   $("#bomsimage").empty().append(Bomsimage)
//   Yourimage = HTMLYourimage.replace("%yourpic%","You.jpg") 
//   $("#yourimage").empty().append(Yourimage)
//   
   $("#response").empty().append("")
}

// Generate Boms response and show it
function ResponseFunction() {
    var x = "";
    x = document.getElementById("usersinput").value;
    var Bomsfullresponse = "";
    //console.log(x)
    
    Bomsfullresponse = x;
    
    Bomsresponse = HTMLBomsresponse.replace("%data%",Bomsfullresponse)
    $("#response").empty().append(Bomsresponse) 
    
    Bomsimage = HTMLBomsimage.replace("%bomspic%","Bom2.jpg")
    $("#bomsimage").empty().append(Bomsimage)  
    
    //Yourimage = HTMLYourimage.replace("%yourpic%","You2.jpg") 
    //$("#yourimage").empty().append(Yourimage)

}