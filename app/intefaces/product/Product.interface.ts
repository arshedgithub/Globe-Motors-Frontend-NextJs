import { IProductBrand } from "./Brand.product.inteface";
import { IProductCategory } from "./Category.product.interface";
import { IProductOrigin } from "./Origin.product.interface";
import { IProductSubcategory } from "./Subcategory.product.interface";
import { IProductUsestatus } from "./Usestatus.product.interface";
import { IProductVehicle } from "./Vehicle.product.interface";

export interface IProduct {
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
    product_brand: IProductBrand;
    product_category: IProductCategory;
    product_subcategory: IProductSubcategory;
    product_origin: IProductOrigin;
    product_vehicle: IProductVehicle;
    product_use_status: IProductUsestatus;

}