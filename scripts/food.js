// GET THE DATA
let allFoods = []

fetch("http://localhost:8088/foods")
    // THEN PARSE AS JSON
    .then(response => response.json())
    // THEN DISPLAY IT
    .then(foodFromResponse => {
        allFoods = foodFromResponse
    })

// WHY IS `allFoods` EMPTY?????
for (const food of allFoods) {
    console.log(food)
}


// GET THE DATA
fetch("http://localhost:8088/foods/1")
    // THEN PARSE AS JSON
    .then(response => response.json())
    // THEN DISPLAY IT
    .then(food => {
        /*
            THIS IS THE *ONLY* PLACE WHERE YOU
            _KNOW_ YOU HAVE THE DATA
        */
        // console.log(food)
    })


// GET THE DATA
fetch("http://localhost:8088/foods?category=curry")
    // THEN PARSE AS JSON
    .then(response => response.json())
    // THEN DISPLAY IT
    .then(allFoods => {
        /*
            THIS IS THE *ONLY* PLACE WHERE YOU
            _KNOW_ YOU HAVE THE DATA
        */
        for (const food of allFoods) {
            // console.log(food)
        }
    })











