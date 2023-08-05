interface Product {
  title: string;
  short_description: string;
  description: string;
  code: string;
  product_image: string;
  gallery_images: [];
  regular_price: number;
  discount_price: number;
  variants: [];
  qantity: number;
  status: "active" | "deactive";
  category_info: { _id: string; name: string };
  brand_info: { _id: string; name: string };
  is_delete: boolean;
}

export default Product;
