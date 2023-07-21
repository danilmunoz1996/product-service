const ProductService = require('../../application/productService');
const Product = require('../../domain/Product');

/**
 * use DynamoDB as database
 */
const DbAdapter = require('../../infrastructure/db/dynamoDbAdapter');

const dbAdapter = new DbAdapter();
const productService = new ProductService(dbAdapter);

/**
 * 
 * @param {*} event 
 * @returns 
 */
module.exports.create = async (event) => {
    const productData = JSON.parse(event.body);
    const product = new Product(productData);
    await productService.create(product);
    return {
        statusCode: 201,
        body: JSON.stringify(product),
    };
};

/**
 * 
 * @param {*} event 
 * @returns 
 */
module.exports.read = async (event) => {
    const id = event.pathParameters.id;
    const product = await productService.read(id);
    return {
        statusCode: 200,
        body: JSON.stringify(product),
    };
};

/**
 * 
 * @param {*} event
 * @returns
 */
module.exports.update = async (event) => {
    const id = event.pathParameters.id;
    const productData = JSON.parse(event.body);
    await productService.update(id, productData);
    return {
        statusCode: 200,
        body: JSON.stringify(productData),
    };
};

/**
 * 
 * @param {*} event 
 * @returns
 */
module.exports.delete = async (event) => {
    const id = event.pathParameters.id;
    await productService.delete(id);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Object deleted successfully' }),
    };
};
