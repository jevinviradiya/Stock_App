//http://localhost:1211/stocks
//https://priceapi.moneycontrol.com/pricefeed/bse/equitycash


function getStocks() {

    let url = "http://localhost:1211/stocks";
    let url2 = "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.map((api1) => {
                fetch(`${url2}/${api1.name}`)
                    .then((res) => res.json())
                    .then((api2) => {
                        console.log(api2)
                        // console.log(`Calling Done for ${api1.name}`);
                        var element = `
                        <div class="card" style="width:25%;height:450px;float:left;margi-left:2%;margin-top:2%">
                            <img src='${api1.logo}' class="card_img" style="height:250px;"/>
                            <div class="card_body">
                            <h5 class="card_title">${api2.data.company}</h5>
                            <p>Price Current: ${api2.data.pricecurrent}</p>
                            <p>Price Change: ${api2.data.pricechange}</p>
                            <p>Price Percent Change: ${api2.data.pricepercentchange}%</p>
                            </div>
                        </div>`

                        $('#display').append(element);
                        // $(`#display`).append("element");
                        // document.getElementById("display").innerHTML = (element);
                        // document.getElementById("display").appendChild(element);
                    })
            })

        }
        )
}
