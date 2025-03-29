
var count=0;
function convert(event)
{

    event.preventDefault();
    count++;
    const inch=document.getElementById('inch').value;
    if(inch==0)
    {
        alert("0 can't convert");
        rest();
    }
    if(count<=1)
    {
    
    let cm=inch*2.54;
    document.getElementById('inch').value=cm;

    }
    else
    {
        alert("You are trying to convert a converted value");
        alert("Please reset and try!!")

        
    }
    

}

function rest()
{
    
    document.getElementById('inch').value=null;
    console.log("calling rest funtion");
    count=0;
    console.log(count);
    
    
    

}

