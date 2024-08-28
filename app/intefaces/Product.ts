export default interface IProduct {
    id: number;
    name: string;
    description: string;
    photo: string;
    review: string;
    offer: string;
    cost: number;
    price: number;
    tax: number;
    stock: number;
    stock_limit_min: number;
    stock_limit_max: number;
    product_brand: string;

}