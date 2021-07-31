
axios.get('https://reqres.in/api/unknown').then(successLoad).catch(failedLoad)

let container = document.getElementById('content');
let colorData = [];

function successLoad(response){
    console.log(response);
    colorData = response.data;
    let colors = Object.keys(colorData);
    for (let i=0; i < colors.length; i++){
        let colorName = document.createElement('p');
        colorName.innerText = colorData.data[i].name;
        container.appendChild(colorName);

        let colorYear = document.createElement('p');
        colorYear.innerText = colorData.data[i].year;
        container.appendChild(colorYear);

        let colorHex = document.createElement('p');
        colorHex.innerHTML = colorData.data[i].color;
        container.appendChild(colorHex);
    }
}

function failedLoad(err){
    console.log(err);
}