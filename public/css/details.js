var rating=document.querySelectorAll("#newRating");
var designation=document.querySelectorAll("#designation");
var details_h1=document.querySelector("#details_h1");
var max_score_position=document.querySelector("#max_ratings");
var max_designation=document.querySelector("#max_designation");

var max=0;

for(var i=0;i<rating.length;i++){
    var ratings=rating[i].textContent;
    var colorAndSur=designationAndColor(ratings);
    rating[i].style.color=colorAndSur[0];
    designation[i].style.color=colorAndSur[0];
    designation[i].textContent=colorAndSur[1];
    
    if(max<=ratings){
        max=Number(ratings);
    }
}

max_score_position.textContent=max;
//max_degignation();
var maxColorSur=designationAndColor(max);
max_designation.textContent=maxColorSur[1];
max_designation.style.color=maxColorSur[0];
max_score_position.style.color=maxColorSur[0];

var recentRating=rating[0].textContent;
var recentstatusArr=designationAndColor(recentRating);
details_h1.style.color=recentstatusArr[0];



var contestnamelink1=document.querySelectorAll("#contestnamelink1");
var contestnamelink2=document.querySelectorAll("#contestnamelink2");
var contestId=document.querySelectorAll("#contestId");

contestlink(contestnamelink1);
contestlink(contestnamelink2);


function contestlink(contestnamelink){
    for (var i=0;i< contestId.length ; i++){
        var contestNameUrl="https://codeforces.com/contest/"+contestId[i].textContent;
        contestnamelink[i].setAttribute("href",contestNameUrl);
        
    }
}



function designationAndColor(ratings){
    var colorAndsurnameArr=[];
    if(ratings>=2400){
            colorAndsurnameArr.push("red");
        if(ratings>=2900){
            colorAndsurnameArr.push("Legendary Grandmaster");
        }
        else if(ratings>=2600){
            colorAndsurnameArr.push("International Grandmaster");
        }
        else{
            colorAndsurnameArr.push("Grandmaster");
        }
    }
    else if(ratings>=2200){
        colorAndsurnameArr.push("orange");
        if(ratings>=2300){
            colorAndsurnameArr.push("International Master");
        }
        else{
            colorAndsurnameArr.push("Master");
        }
    }
    else if(ratings>=1900){ 
        colorAndsurnameArr.push("violet");
        colorAndsurnameArr.push("Candidate Master");
    }
    else if(ratings>=1600){
        colorAndsurnameArr.push("blue");
        colorAndsurnameArr.push("Expert");
    }
    else if(ratings>=1400){
        colorAndsurnameArr.push("cyan");
        colorAndsurnameArr.push("Specialist");
    }
    else if(ratings>=1200){
        colorAndsurnameArr.push("green");
        colorAndsurnameArr.push("Pupil");
    }
    else{
        colorAndsurnameArr.push("gray");
        colorAndsurnameArr.push("Newbie");
    }
  return colorAndsurnameArr;
}


