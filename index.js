var axios = require("axios").default;
const express = require('express');

const app = express();

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));


var api = '?apiKey=02e384ea9c514588994203bfd4b03f06'

//Variables for calling api


callApi = (url) => {
    return new Promise((resolve, reject) => {
        axios.request(url + api)
        .then(function (response){           
            return resolve(response);
        })
        .catch(function (error){
            return reject(error);
        })
    });
};



callApi('https://api.spoonacular.com/recipes/random')
.then((res) =>{
    console.log(res.data);
})

app.listen(8080, () => console.log(`server running on PORT ${8080}`));
