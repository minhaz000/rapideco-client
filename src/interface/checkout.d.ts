interface ICheckout {
  user_info: {
    name: string;
    address: string;
    phone: string;
    email: string;
    delivery_area: string;
  };
  paymet_info: {
    number: string;
    trx_id: string;
  };
  ordered_items: [{}];
}

export default ICheckout;
