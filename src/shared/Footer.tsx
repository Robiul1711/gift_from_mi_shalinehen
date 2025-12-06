import { logo } from "../assets/images";
import { LocationIcon, MailIcon, PhoneIcon } from "../components/SVG/FooterIcon/FooterIcon";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t ">
      <div className="section-padding-x py-12">

        {/* TOP FOUR COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <div className="max-w-[300px] flex flex-col gap-2">
              <img
                src={logo}
                alt="product"
                  className="w-12 sm:w-14 h-auto md:w-18 object-contain"
              />
              <p className="text-sm text-Tertiary font-medium">
                Where Caring meets beautiful Gifting and delivered for you.
              </p>
            </div>
          </div>

          {/* QUICK LINK */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-Tertiary font-medium">
              <li>Home</li>
              <li>How Its Work</li>
              <li>Shop Gifts</li>
              <li>For Professionals</li>
              <li>Bulk & Automation</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-Tertiary font-medium">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-Tertiary font-semibold">
              <li className="flex items-center gap-2">
                <MailIcon/> demomail@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon/> +880 123456789
              </li>
              <li className="flex items-center gap-2">
                <LocationIcon/> 123 Green Energy TX 78701
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER LINE */}
        <div className="w-full h-[1px] bg-gray-200 my-10"></div>

        {/* BOTTOM LINKS */}
        <div className="flex items-center justify-center gap-10 font-medium text-gray-600 ">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
