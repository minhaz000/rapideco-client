interface Product {
  _id: string;
  title: string;
  short_description: string;
  description: string;
  code: string;
  product_image: any;
  gallery_images: any;
  regular_price: number;
  discount_price: number;
  variants: [] | any;
  quantity: number;
  status: "active" | "deactive";
  category_info: { _id: string; name: string } | any;
  brand_info: { _id: string; name: string } | any;
  is_delete: boolean;
}

export default Product;
