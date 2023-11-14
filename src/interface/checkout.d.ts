interface ICheckout {
  user_info: {
    name: string;
    address: string;
    phone: string;
    email: string;
    delivery_area: string;
  };
  payment_info: {
    status: "paid" | "unpaid";
    method_name: string;
    method_img_url: string;
    number?: string;
    trx_id?: string;
    amount: number;
  };
  order_info: {
    total: number;
    date: any;
    item_count: number;
  };
  ordered_items: [{}];
  status: "on hold" | "processing" | "complete" | "canceled";
}

export default ICheckout;
