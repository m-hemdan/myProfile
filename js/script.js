function enterMyPage()
{
    $name=document.getElementById("name").value;
    $password=document.getElementById("password").value;
    
    if ($name ==""  || $password=="")
    {
        alert("enter all data");
    }
    if ($name == "marwa" && $password=="123")
    {
        alert("succsess");
        // window.location.replace("mypage.html");
         window.location.href = "mypage.html"; 
        // window.location.assign("mypage.html");
       
    }
    else
    {
        document.getElementById("wrongForm").innerHTML="there are something wrong";
    }
    return false;
   
}
/*
function anEmail(email)
    {
    var flag=false;
    var count=0;
    var a;
    var point;
    for(i=0;i<email.length;i++) / check if email has more than @ /
    {
    if (email.charAt(i)=="@")
    count ++;
    }
    if (count==1) / if there are one @ /
    {
    a=email.indexOf('@'); 
    point=email.lastIndexOf('.');
    if ( (email.length-point-1) >= 2 && (point-a) >= 2 && a >= 2)
    {
    flag=true;
    
           }
           else
           {
               flag=false;
           }
    }
   
    return ((flag==true)?"accept email":"not accept email");
    }*/