import settingData from "../../../../public/assets/site.settings.json";
export const metadata = {
  title: `Login | ${settingData?.header?.meta_title}`,
};
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
