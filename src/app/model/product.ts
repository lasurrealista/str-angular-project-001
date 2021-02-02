import { Category } from './category';

export class Product extends Category {
    id: number = 0;
    catId: string = '';
    name: string = '';
    description: string = '';
    image: string = '';
    price: number = 0;
    stock: number = 0;
    featured: boolean = false;
    active: boolean = true;

    constructor(properties?: Product) {
        super();
        if (properties) {
            this.id = properties.id || 0;
            this.catId = properties.catId || '';
            this.name = properties.name || '';
            this.description = properties.description || '';
            this.image = properties.image || '';
            this.price = properties.price || 0;
            this.stock = properties.stock || 0;
            this.featured = properties.featured || false;
            this.active = properties.active || true;
        }
    }
}
