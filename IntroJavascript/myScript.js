function encendre(){
    document.getElementById('myImage').src='pic_bulbon.gif';
}
function apagar(){
    document.getElementById('myImage').src='pic_bulboff.gif';
}
function traduirCat(){
    document.getElementById('Titol1').innerHTML="Què pots fer amb Javascript?"
    u=5+apagar;
    document.getElementById('Titol2').innerHTML="Amb Javascript pots canviar els atributs HTML"
}

function calcular(){
    var x, y, z;
    x=document.getElementById('num1').value;
    y=document.getElementById('num2').value;
    z= parseInt(x)+parseInt(y);
    document.getElementById('resultat').innerHTML=z;
}

function restar(){
    var x, y, z;
    x=document.getElementById('num1').value;
    y=document.getElementById('num2').value;
    z= parseInt(x) - parseInt(y);
    document.getElementById('resultat').innerHTML=z;
}

function check(){
    var x, y
    x=document.getElementById('password1').value;
    y=document.getElementById('password2').value;
    x=Math.
    if (x==y){
        window.open("home.html","_self");
    }
    else{
        alert("Les contrasenyes no coincideixen")

    }
}






/*
    z=parseInt(x)+parseInt(y);
    if (secret==z){
        document.getElementById('resultat').innerHTML="Ok";
        alert("Molt bé");
    }else{
        document.getElementById('resultat').innerHTML=z;
    }
    z=parseInt(x)+parseInt(y);
    if (secret==z){
        document.getElementById('resultat').innerHTML="Ok";
        alert("Molt bé");
    }else{
        document.getElementById('resultat').innerHTML=z;
    }
*/