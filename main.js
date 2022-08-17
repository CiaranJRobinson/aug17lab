const { response } = require("express");

let button = document.querySelector("button");

function buttonClicker (event){
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
        .then(response => {
            for (let i =0; i<response.data.residents.length;i++){
                axios.get(response.data.residents[i])
                .then(response => {
                    const h =document.createElement("h2");
                    h.appendChild(reponse.data.name);
                }
                    )
            }
        }

        )
    console.log("Button clicked!");
}

button.addEventListener('click', buttonClicker);