export interface Product {
   id: string;
   image: string;
   name: string;
   description: string;
   price: number;
   size: string;
   quantity: number;
   color?: string;
 }
 
 export interface ShippingAddress {
   country: string;
   state: string;
   postcode: string;
 }