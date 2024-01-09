import { Link, useLocation } from "react-router-dom";

//icons
import analytics from "../assets/link-icons/analytics.svg";
import appearance from "../assets/link-icons/appearance.svg";
import audience from "../assets/link-icons/audience.svg";
import delivery from "../assets/link-icons/delivery.svg";
import discounts from "../assets/link-icons/discounts.svg";
import home from "../assets/link-icons/home.svg";
import marketing from "../assets/link-icons/marketing.svg";
import orders from "../assets/link-icons/orders.svg";
import payments from "../assets/link-icons/payments.svg";
import plugins from "../assets/link-icons/plugins.svg";
import products from "../assets/link-icons/products.svg";
import tools from "../assets/link-icons/tools.svg";

function Pages() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-start gap-1 flex-1 ">
      <Li url="/home" text="Home" Icon={home} location={location} />
      <Li url="/orders" text="Orders" Icon={orders} location={location} />
      <Li url="/products" text="Products" Icon={products} location={location} />
      <Li url="/delivery" text="Delivery" Icon={delivery} location={location} />
      <Li
        url="/marketing"
        text="Marketing"
        Icon={marketing}
        location={location}
      />
      <Li
        url="/analytics"
        text="Analytics"
        Icon={analytics}
        location={location}
      />
      <Li url="/payments" text="Payments" Icon={payments} location={location} />
      <Li url="/tools" text="Tools" Icon={tools} location={location} />
      <Li
        url="/discounts"
        text="Discounts"
        Icon={discounts}
        location={location}
      />
      <Li url="/audience" text="Audience" Icon={audience} location={location} />
      <Li
        url="/appearance"
        text="Appearance"
        Icon={appearance}
        location={location}
      />
      <Li url="/plugins" text="Plugins" Icon={plugins} location={location} />
    </div>
  );
}

const Li = ({ url, text, location, Icon }) => (
  <li
    style={{
      textDecoration: "none",
    }}
    className=" list-none
   "
  >
    <Link
      to={url}
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(255, 255, 255, 0.10)"
          : "",
        color: location.pathname.includes(url)
          ? "rgba(255, 255, 255, 0.10)"
          : "black",
        textDecoration: "none",
      }}
      className="flex items-start w-[208px] px-4 py-2 gap-3 rounded-[4px] "
    >
      <img
        src={Icon}
        alt="/icon"
        className="w-5 h-5 flex-shrink-0 opacity-80  "
      />
      <p className="text-[#FFF] font-Inter text-[14px] font-medium leading-5 opacity-80 ">
        {text}
      </p>
    </Link>
  </li>
);

export default Pages;
