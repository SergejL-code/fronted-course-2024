async function getWetter() {
    const res = await fetch("");
    const data = await res.json();
console.log(data);

}


getWetter();