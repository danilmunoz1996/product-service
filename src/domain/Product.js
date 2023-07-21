const { v4: uuidv4 } = require('uuid');

    class Product {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, productName, description, price }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.productName = productName || null;
       this.description = description || null;
       this.price = price || null;

            this.productId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                productId: this.productId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, productName: this.productName, description: this.description, price: this.price,
            };
        }

        pk() {
            return this.productId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                productId: pk,
                createdAt: Product.sortKey(pk)
            };
        }
            
    }

    module.exports = Product;
    