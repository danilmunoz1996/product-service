class ProductService {
    constructor(dbAdapter) {
        this.dbAdapter = dbAdapter;
    }

    async create(product) {
        // Add any business logic here before creating the model
        return await this.dbAdapter.create(product);
    }

    async read(id) {
        // Add any business logic here before reading the model
        return await this.dbAdapter.read(id);
    }

    async update(id, product) {
        // Add any business logic here before updating the model
        return await this.dbAdapter.update(id, product);
    }

    async delete(id) {
        // Add any business logic here before deleting the model
        return await this.dbAdapter.delete(id);
    }
}

module.exports = ProductService;
