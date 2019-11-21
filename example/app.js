import respond from "../js-mediaquery.js";

respond({ 
    breakpoint: "320px",

    run: () => {
        document.getElementById('output').innerText = "matched"
    },

    back: () => {
        document.getElementById('output').innerText = "no matched"
    } 
});

