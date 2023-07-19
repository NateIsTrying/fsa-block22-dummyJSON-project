const body = document.querySelector('body');

const logDummyJSON = async() => {
    const response = await fetch('https://dummyjson.com/products');
    const dummyData = response.json();
    // - See a list of all products  
    return dummyData;
} 

// - See further details about a single product in a special view 
const singleDummyProduct = async () => {
    const storedDummyData = await logDummyJSON();
    const productsDiv = document.createElement('div');
    body.appendChild(productsDiv);
    productsDiv.setAttribute('id','products-div');

    productsDiv.innerHTML = `
        <h3>${storedDummyData.products[0].title}</h3>
        <h5>${storedDummyData.products[0].description}</h5>
        <h5>Price: $${storedDummyData.products[0].price}</h5>
        <h5>Percent Off!: ${storedDummyData.products[0].discountPercentage}%</h5>
        <h5>Rating: ${storedDummyData.products[0].rating} Stars</h5>
        <h5>Stock: #${storedDummyData.products[0].stock}</h5>
        <img src='${storedDummyData.products[0].thumbnail}'/>
    `;
}

// create list of all products 
const allDummyProducts = async () => {
    const storedDummyData = await logDummyJSON();
    const dummyProductsArr = storedDummyData.products;
    // console.log(dummyProductsArr);
    const productsDiv = document.createElement('div');
    body.appendChild(productsDiv);
    productsDiv.setAttribute('id','products-div');

    for(let i = 0; i < dummyProductsArr.length; i++){
        const productSec = document.createElement('section');    
        productsDiv.appendChild(productSec);
        productSec.innerHTML = `
            <h3>${dummyProductsArr[i].title}</h3>
            <h5>${dummyProductsArr[i].description}</h5>
            <h5>Price: $${dummyProductsArr[i].price}</h5>
            <h5>Percent Off!: ${dummyProductsArr[i].discountPercentage}%</h5>
            <h5>Rating: ${dummyProductsArr[i].rating} Stars</h5>
            <h5>Stock: #${dummyProductsArr[i].stock}</h5>
            <img src='${dummyProductsArr[i].thumbnail}'/>
        `;
    }
}

// - "Create" a new product and see a message that it was successful  
const createDummyProduct = async() => {
    try {
        const response = await fetch(`https://dummyjson.com/products/add`, {
        method: 'POST',
        body: JSON.stringify({
            title: 'THE Shake Weight',
            description: `You'll look stupid trying to lose weight. Guaranteed.`,
            price: 'TOO MUCH',
            rating: 1.70,
            stock: 999,
        }),
        headers: {
            'Content-Type': 'application/json'
            },

        })
        const data = response.json();
        return data;
    } catch (error) {
        console.log(`Something screwed up in createDummyProject`, error);
    }
}

// - "Delete" any product and see that it was successful  
//     - Display info received back from API
 


const init = async() => {
    // console.log(await logDummyJSON());
    // singleDummyProduct();
    allDummyProducts();
    // - Display info received back from API
    const loggedCreateDummy = await createDummyProduct();
    console.log(loggedCreateDummy);
}
    
init()

  
  