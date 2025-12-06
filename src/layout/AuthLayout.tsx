import { Link, Outlet } from "react-router-dom";
import { authImg, giftBox, logo } from "../assets/images";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT SIDE IMAGE */}
      <div className="w-full h-full hidden lg:flex items-center justify-center relative">
        <img 
          src={authImg} 
          alt="auth" 
          className="w-full h-full object-cover"
        />
        <Link 
          to="/" 
          className="absolute top-4 left-12 z-50"
        >
          <img src={logo} alt="" />
        </Link>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full h-full relative">
        <Outlet />
        <div className="absolute bottom-16 right-4 hidden lg:block"><img src={giftBox} alt=""  /></div>
      </div>

    </div>
  );
};

export default AuthLayout;
