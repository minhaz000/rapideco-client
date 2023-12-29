interface ISettings {
  header: {
    logo: any;
    color: any;
    textColor: string;
    themeColor: string;
    meta_title: string;
    meta_description: string;
    nav_menu: any;
    phone_number: string;
    favicon: any;
  };
  body: {
    banner: any[];
    cat_menu: any;
  };
  footer: {
    logo: any;
    description: any;
    color: any;
    contact_info: {
      address: string;
      phone: string;
      email: string;
    };
    links: any;
    social_links: any;
    copyright: string;
  };
  shipping: any;
}
export default ISettings;
