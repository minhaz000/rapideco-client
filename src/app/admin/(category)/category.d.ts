interface ICategory {
  name: string;
  description: string;
  slug: string;
  icon: string;
  imgURL: string;
  products: [];
  parentID: ObjectId;
  sub_cate: any;
  is_delete: boolean;
}

export default ICategory;
