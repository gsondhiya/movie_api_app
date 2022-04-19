var values= JSON.parse(localStorage.getItem("arr"))||[]
console.log(values)
values.map(function(elem){
   var div = document.createElement("div")
   var title= document.createElement("h3")
   title.innerText= elem.Title
   var image= document.createElement("img")
   image.setAttribute("src",elem.Poster)
   image.setAttribute("class","images")
 var year= document.createElement("h4")
 year.innerText= elem.Year
div.append(image,title,year)
   document.querySelector("#output").append(div)
})