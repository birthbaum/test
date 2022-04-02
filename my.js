 function testGS(){
 
 const url = "https://script.googleusercontent.com/macros/echo?user_content_key=sfGESt-hkZt0iCOsR2hF3UijrkkEUTjXqYOxfbDn_EofXoZLrotHusGtZWNzsOlHaMeHOq8Iqf2ciG9J3rQhoVftjyWZAQfWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEBNX8UK0M7wk3JuCWV9iij8Mq3dyNLK2CGM6wPTSj0f7Ztfdm7c12z9tphHG-Jrw9p4ItwK-TwZyQ1VvSIM_T9Gp3uZWLYbANz9Jw9Md8uu&lib=MidLq2kEFqQ3BSnYFuEuNbwxC__QRcjdY";

 fetch(url)
    .then(d => d.json()).then()
    .then(d => {

        document.getElementById("app").textContent = d[0].status;

    });
}

document.getElementById("btn").addEventListener("click", testGS);