interface ICategory {
  name: string;
  description: string;
  slug: string;
  icon?: string;
  imgURL?: string;
  products?: [];
  parentID?: ObjectId;
  sub_cate?: any;
  is_delete?: boolean;
  meta_title: string;
  meta_description: string;
}

export default ICategory;
