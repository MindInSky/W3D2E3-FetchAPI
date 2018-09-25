document.getElementById("getText").addEventListener("click", getText);

//Event Handler for Get TExt

function getText(e) {
  fetch("textData.txt")
    .then(response => response.text())

    .then(text => {
      document.getElementById(
        "output"
      ).innerHTML = `<b>Fetch Text:</b> ${text}`;
    })
    .catch(error => {
      console.log(new Error("Something went Wrong " + error));
    });
}

// fetch JSon file
document.getElementById("getJson").addEventListener("click", getJson);
//JSon Event Handler
function getJson(e) {
  fetch("jsondata.json")
    .then(response => response.json())
    .then(data => {
      let output = "";
      data.forEach(function(person) {
        output += `<li>${person.name} work for ${person.company}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => {
      console.log("something went really sideways " + error);
    });
}

//fetch api
document.getElementById("getAPI").addEventListener("click", getAPI);
//API Event Handler
function getAPI(e) {
  fetch("https://api.coinmarketcap.com/v2/ticker/1/") // 1 is for bitcoin on this api
    .then(
      response => response.json() //stream json
    )
    .then(coin => {
      btc = coin.data;
      output = `<li><b>${btc.symbol}</b> ${btc.name} value ${
        btc.quotes.USD.price
      }</li> 
      <li> Value Change in 1hr: ${btc.quotes.USD.percent_change_1h} %</li>`;
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => {
      console.log("something went really sideways   " + error);
    });
}

//fetch Currency
document.getElementById("getCurrency").addEventListener("click", getCurrency);
let id;
//API Event Handler
function getCurrency(e) {
  const symbolETC = document.getElementById("currency").value.toUpperCase();
  e.preventDefault();

  fetch("https://api.coinmarketcap.com/v2/listings/") // 1 is for bitcoin on this api
    .then(
      response => response.json() //stream json
    )
    .then(coin => {
      btc = coin.data;
      btc.forEach(function(element) {
        if (element.symbol == symbolETC) {
          id = element.id;
        }
      });
      getAPI2(e);
    })
    .catch(error => {
      console.log("something went really sideways   " + error);
    });
}

function getAPI2(e) {
  fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/`) // 1 is for bitcoin on this api
    .then(
      response => response.json() //stream json
    )
    .then(coin => {
      btc = coin.data;
      output = `<li><b>${btc.symbol}</b> ${btc.name} value ${
        btc.quotes.USD.price
      }</li> 
        <li> Value Change in 1hr: ${btc.quotes.USD.percent_change_1h} %</li>`;
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => {
      console.log("something went really sideways   " + error);
    });
}
