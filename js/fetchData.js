//alert("file conneted");
const api_url = "https://jsonplaceholder.typicode.com/users";

//const api_url = "https://www.mygov.in/corona-data/covid19-statewise-status/";

function getApiData(url) {
    // var x = fetch(url).then((res) => { return res.json() }).then((data) => console.log(data));;
    // console.log(x);
    // this is for console

    setTimeout(() => {
        var x = fetch(url).then((res) => { return res.json() }).then((data) => display(data))
            .catch((error) => console.log(error.message));

    }, 3000);

}

function display(APIData) {

    console.log(APIData);

    for (let user of APIData) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        td1.innerText = `${user.id}`;
        td2.innerText = `${user.name}`;
        td3.innerText = `${user.email}`;
        td4.innerText = `${user.phone}`;
        td5.innerText = `${user.address.city}`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        document.getElementById("mytable").appendChild(tr);
    }

}







getApiData(api_url);