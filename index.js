/* IN PRODUCTS.html:
   btnAdd# refers to add t cart buttons for every product
   pPrice# is the price
   pLink# is the datasheet link
   pName# is the name 
   pDescr# is the description of the product
*/
//Products Page 
var pName1= document.getElementById("pName1");
var pName2= document.getElementById("pName2");
var pName3= document.getElementById("pName3");
var pName4= document.getElementById("pName4");
var pName5= document.getElementById("pName5");
var pName6= document.getElementById("pName6");
var pName7= document.getElementById("pName7");
var pName8= document.getElementById("pName8");
var pName9= document.getElementById("pName9");
var pName10= document.getElementById("pName10");
var pName11= document.getElementById("pName11");
var pName12= document.getElementById("pName12");

var pDescr1= document.getElementById("pDescr1");
var pDescr2= document.getElementById("pDescr1");
var pDescr3= document.getElementById("pDescr1");
var pDescr4= document.getElementById("pDescr1");
var pDescr5= document.getElementById("pDescr1");
var pDescr6= document.getElementById("pDescr1");
var pDescr7= document.getElementById("pDescr1");
var pDescr8= document.getElementById("pDescr1");
var pDescr9= document.getElementById("pDescr1");
var pDescr10= document.getElementById("pDescr1");
var pDescr11= document.getElementById("pDescr1");
var pDescr12= document.getElementById("pDescr1");

var pLink1= document.getElementById("pLink1");
var pLink2= document.getElementById("pLink2");
var pLink3= document.getElementById("pLink3");
var pLink4= document.getElementById("pLink4");
var pLink5= document.getElementById("pLink5");
var pLink6= document.getElementById("pLink6");
var pLink7= document.getElementById("pLink7");
var pLink8= document.getElementById("pLink8");
var pLink9= document.getElementById("pLink9");
var pLink10= document.getElementById("pLink10");
var pLink11= document.getElementById("pLink11");
var pLink12= document.getElementById("pLink12");

var pPrice1= document.getElementById("pPrice1");
var pPrice2= document.getElementById("pPrice2");
var pPrice3= document.getElementById("pPrice3");
var pPrice4= document.getElementById("pPrice4");
var pPrice5= document.getElementById("pPrice5");
var pPrice6= document.getElementById("pPrice6");
var pPrice7= document.getElementById("pPrice7");
var pPrice8= document.getElementById("pPrice8");
var pPrice9= document.getElementById("pPrice9");
var pPrice10= document.getElementById("pPrice10");
var pPrice11= document.getElementById("pPrice11");
var pPrice12= document.getElementById("pPrice12");

var btnAdd1= document.getElementById("btnAdd1");
var btnAdd2= document.getElementById("btnAdd2");
var btnAdd3= document.getElementById("btnAdd3");
var btnAdd4= document.getElementById("btnAdd4");
var btnAdd5= document.getElementById("btnAdd5");
var btnAdd6= document.getElementById("btnAdd6");
var btnAdd7= document.getElementById("btnAdd7");
var btnAdd8= document.getElementById("btnAdd8");
var btnAdd9= document.getElementById("btnAdd9");
var btnAdd10= document.getElementById("btnAdd10");
var btnAdd11= document.getElementById("btnAdd11");
var btnAdd12= document.getElementById("btnAdd12");


var menuList= document.getElementById("menulist");//MEnu drop down on mobile
//Account.html
var email=document.getElementById("email");//Email input box
var password=document.getElementById("password");//Password input box
var logBtn=document.getElementById("loginbtn");//Login button
var regBtn=document.getElementById("regbtn");//Register button
var userPass;//User password 
var userEmail;//UserEmail




menuList.style.maxHeight="0px";
function togglemenu(){
    if(menuList.style.maxHeight=="0px")
    {
        menuList.style.maxHeight="350px";

    }else{
        menuList.style.maxHeight="0px";
    }
}
//Not working as yet
function userLogin(){
    userPass=password.va;
    userEmail=email.textContent;

    console.log(userPass);
    console.log(userEmail);
}
//Not working as yet
function userReg(){
    userPass=email.textContent;
}