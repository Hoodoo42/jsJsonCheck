// creating an object for the information on an item selected
let selection = {
    title: `Flower`,
    price: 23.00,
    imageUrl: `https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80`,
    description: `A flower for any occasion`
};
// creating a varianle to store the data to be turned into json readable (serialization) This will let me stora all the data as a sting in a cookie
//Cookies.set set is taking the origianl object and setting the value given from json.stringify
let selectionJson = JSON.stringify(selection);
Cookies.set(`selection`, selectionJson);

