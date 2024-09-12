
function addResult(result){
    let div = document.getElementById("results");
    let element = document.createElement("div");
    element.id=result.id;
    element.classList.add("recs");
    let image = document.createElement("img");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    if (result["cities"]) {
        image.src=result.cities[0].imageUrl;
        h3.innerHTML=result.cities[0].name;
        p.innerHTML=result.cities[0].description;
    }
    else {
        image.src=result.imageUrl;
        h3.innerHTML=result.name;
        p.innerHTML=result.description;
    }
    element.appendChild(image);
    element.appendChild(h3);
    element.appendChild(p);
    div.appendChild(element);


}


function search() {
    clearRes();
    let field = document.getElementById("search");
    let text = field.value.toLowerCase();
    fetch("travel_recommendation_api.json")
        .then(response=>response.json())
        .then(data =>{
            if (text.includes("country")||text.includes("countries")) {
                data.countries.forEach(country => {
                    addResult(country);
                });
            }
            if (text.includes("temple")||text.includes("temples")){
                data.temples.forEach(temple => {
                    addResult(temple);
                });
            }
            if (text.includes("beach")||text.includes("beaches")){
                data.beaches.forEach(beach => {
                    addResult(beach);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("results").innerHTML = 'An error occurred while fetching data.'; 
        });
}

function clearRes() {
    document.getElementById("results").innerHTML="";
    console.log("ok");
}