interface Product {
  title: string;
  short_description: string;
  description: string;
  code: string;
  images: [];
  regular_price: number;
  discount_price: number;
  variants: any[];
  qantity: number;
  status: "active" | "deactive";
  categoryID: ObjectId;
  is_delete: boolean;
}

export default Product;
