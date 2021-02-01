function validate()
{
    var fname=document.forms["myform"] ["fname"].value;
    var lname=document.forms["myform"] ["lname"].value;
    var email=document.forms["myform"] ["email"].value;
    var phone=document.forms["myform"] ["phnum"].value;
    var address=document.forms["myform"] ["address"].value;
    var course=document.forms["myform"] ["course"].value;
    var sub=document.getElementsByName('Subject');
    var time=document.forms["myform"] ["time"].value;
    var date=document.forms["myform"] ["date"].value;
    let reg_form = document.getElementById('myform');
    let formData = new FormData(reg_form);
    var values=true;
    /* firstname validation */
    if(fname==""){
        document.getElementById('fnameerr').style.display="block";
        document.getElementById('fnameerr').innerHTML="First name is required";
        values=false;
    }
    else if (!(fname.match(/^[a-zA-Z ]*$/))){
        document.getElementById('fnameerr').style.display="block";
        document.getElementById('fnameerr').innerHTML="Only alphabets allowed";
        values=false;
    }else if(fname.length < 4 || fname.length > 10){
        document.getElementById('fnameerr').style.display="block";
        document.getElementById('fnameerr').innerHTML="The length should be in between 3 to 10";
        values=false;
    }else{
        document.getElementById('fnameerr').style.display="none";
    }
    /* lastname validation */
    if(lname==""){
        document.getElementById('lnameerr').style.display="block";
        document.getElementById('lnameerr').innerHTML="Last name is required";
        values=false;
    }else if (!(lname.match(/^[a-zA-Z ]*$/))){
        document.getElementById('lnameerr').style.display="block";
        document.getElementById('lnameerr').innerHTML="Only alphabets allowed";
        values=false;
    }else if(lname.length < 4 || lname.length > 10){
        document.getElementById('lnameerr').style.display="block";
        document.getElementById('lnameerr').innerHTML="The length should be in between 3 to 10";
        values=false;
    }else{
        document.getElementById('lnameerr').style.display="none";
    }
    /* email validation */
    if(email==""){
        document.getElementById('emailerr').style.display="block";
        document.getElementById('emailerr').innerHTML="Email is required";
        values=false;
    }else if (!(email.match(/^[\w\W]*@([\w\W]{3,15}).([\w\W]{2,4})$/))){
        document.getElementById('emailerr').style.display="block";
        document.getElementById('emailerr').innerHTML="Enter a valid email";
        values=false;
    }else if(email.length < 7 || email.length > 120){
        document.getElementById('emailerr').style.display="block";
        document.getElementById('emailerr').innerHTML="The length should be in between 6 to 120";
        values=false;
    }else{
        document.getElementById('emailerr').style.display="none";
    }
    /* phone number validation */
    if(phone==""){
        document.getElementById('phoneerr').style.display="block";
        document.getElementById('phoneerr').innerHTML="Phone number is required";
        values=false;
    }else if(!(phone.match(/[+91]-[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{1}/))){
        document.getElementById('phoneerr').style.display="block";
        document.getElementById('phoneerr').innerHTML="Only numbers are allowed and follow this formet (+91-xxx-xxx-xxx-x)";
        values=false;
    }else{
        document.getElementById('phoneerr').style.display="none";
    }
    /* Address Validation */
    if (!(address.match(/^[a-zA-Z#, ]*$/))){
        document.getElementById('addresserr').style.display="block";
        document.getElementById('addresserr').innerHTML="Only alphabet and special symbol are allowed";
        values=false;
    }else if(address.length < 5 || address.length > 120){
        document.getElementById('addresserr').style.display="block";
        document.getElementById('addresserr').innerHTML="The length should be in between 5 to 500";
        values=false;
    }else{
        document.getElementById('addresserr').style.display="none";
    }
    /* course validation */
    if (course==""){
        document.getElementById('courseerr').style.display="block";
        document.getElementById('courseerr').innerHTML="Course is required";
        values=false;
    }else{
        document.getElementById('courseerr').style.display="none";
    }
    /* subject validation */
        if(formData.getAll("Subject").length < 2){
            document.getElementById('subjecterr').style.display="block";
            document.getElementById('subjecterr').innerHTML="Atleast two subjects are required";
            values=false;
        }else{
            document.getElementById('subjecterr').style.display="none";
        }
    /* time validation */
    if (time==""){
        document.getElementById('timeerr').style.display="block";
        document.getElementById('timeerr').innerHTML="Time period is required";
        values=false;
    }else{
        document.getElementById('timeerr').style.display="none";
    }
    /* date validation */
    if (date==""){
        document.getElementById('dateerr').style.display="block";
        document.getElementById('dateerr').innerHTML="Date is required";
        values=false;
    }
    if(!(date.match(/^([0-3][0-9])-([0-1][1-9])-([1-9][0-9][0-9][0-9])$/))){
        document.getElementById('dateerr').style.display="block";
        document.getElementById('dateerr').innerHTML="Enter a valid date";
        values=false;
    }else{
        document.getElementById('dateerr').style.display="none";
    }
    /* create Cookies */
    if(values==true){
        var sel_cbox=[];
        var comma=0;
        for(var j=0;j<sub.length;j++){
            if(sub[j].checked==true){
                sel_cbox[comma]=sub[j].value;
                comma++;
            }
        }
        sel_cbox.join(",");
        for(var pair of formData.entries()) {
            if(pair[0]=="Subject"){
                setCookie("Subject",sel_cbox);
            }else{
                setCookie(pair[0],pair[1]);
            }
        }
        function setCookie(name, value) {
            var cookie = name + "=" + encodeURIComponent(value);
            document.cookie = cookie;
        }
        redirect();
    }
    function redirect()
    {
        window.location="result.html";
    }
    return false;
}
