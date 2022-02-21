const express = require('express');
const app = express();
const {
    products
} = require('./data')
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products/">products</a>');
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {
            id,
            name,
            image
        } = product;
        return {
            id,
            name,
            image
        };
    })
    res.json(newProducts);
});
app.get('/api/products/:productId', (req, res) => {
    console.log(req.params);
    const {
        productId
    } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send('product not found');
    }
    return res.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('Hello world');
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const {
        search,
        limit
    } = req.query;
    let sortedProducts = [...products];
    res.send('Hello world');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})