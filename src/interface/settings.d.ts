export interface ISettings {
  header: {
    logo: any;
    color: any;
    meta_title: string;
    meta_description: string;
    nav_menu: any;
  };
  body: {
    banner: any[];
    cat_menu: any;
  };
  footer: {
    logo: any;
    description: any;
    contact_info: {
      address: string;
      phone: string;
      email: string;
    };
    links: any;
    copyright: string;
  };
}
export default ISettings;
