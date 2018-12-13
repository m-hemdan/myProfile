function enterMyPage()
{
    $email=document.getElementById("email").value;
    $message=anEmail($email);
    $password=document.getElementById("password").value;
    
    if ($email ==""  || $password=="")
    {
        alert("enter all data");
    }
    if ($message == "accept email" && $password=="123")
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

function anEmail(email)
    {
        var flag=false;
        var count=0;
        var a;
        var point;
        for(i=0;i<email.length;i++) 
        {
             if (email.charAt(i)=="@")
             count ++;
        }
        if (count==1)
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
    }