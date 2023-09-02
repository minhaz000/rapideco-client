export default interface IPayment {
  method_name: string;
  method_code: string;
  method_img: { img_url: string; path: string } | any;
  method_descrption: string;
  payment_number: sting;
}
