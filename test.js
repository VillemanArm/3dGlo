

const getData = async () => {
    const response = await fetch('db.json')
    const data = await response.json()

    console.log(data);

}

getData()