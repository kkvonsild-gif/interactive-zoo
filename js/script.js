"use strict";

const animals = [
    {
        name: "Simba",
        species: "Løve",
        age: 5,
        food: "Kød"
    }, 
    {
        name: "Dumbo",
        species: "Elefant",
        age: 8,
        food: "Blade og frugt"
    }, 
    {
        name: "Gerald",
        species: "Giraf",
        age: 6,
        food: "Blade fra høje træer"
    }
    ];

const infobox = document.getElementById("infobox")


// Klik på første dyr

document.querySelector(".animal1").addEventListener("click", function() //Finder første dyr og kører funktionen ved klik
{
infobox.innerHTML = //animals[0] henter første objekt, altså nummer 0
"<strong>" + animals[0].name + "</strong><br>" +
"Art: " + animals[0].species + "<br>" +
"Alder: " + animals[0].age + " år<br>" +
"Føde: " + animals[0].food;
// VIS boksen
infobox.classList.add("show");
setTimeout(function(){ //skjuler boksen igen efter 2 sek
  infobox.innerHTML = ""; //Indsætter indhold i boksen
  infobox.classList.remove("show"); //Gør boksen synlig
}, 2000); });

// Klik på andet dyr
document.querySelector(".animal2").addEventListener("click", function()
{
infobox.innerHTML =
"<strong>" + animals[1].name + "</strong><br>" +
"Art: " + animals[1].species + "<br>" +
"Alder: " + animals[1].age + " år<br>" +
"Føde: " + animals[1].food;
// VIS boksen
infobox.classList.add("show");
setTimeout(function(){
  infobox.innerHTML = "";
  infobox.classList.remove("show");
}, 2000); });

// Klik på tredje dyr
document.querySelector(".animal3").addEventListener("click", function()
{
infobox.innerHTML =
"<strong>" + animals[2].name + "</strong><br>" +
"Art: " + animals[2].species + "<br>" +
"Alder: " + animals[2].age + " år<br>" +
"Føde: " + animals[2].food;
// VIS boksen
infobox.classList.add("show");
setTimeout(function(){
  infobox.innerHTML = "";
  infobox.classList.remove("show");
}, 2000); });

