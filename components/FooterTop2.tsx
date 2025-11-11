import { 
    Services1,
    Services2,
    Information
} from "../data/footerMenuList";

import FooterNewsletter from "./FooterNewsletter";
import FooterMenu from "./FooterMenu";

interface FooterTopProps {
    container: string;
}

const FooterTop2 = ({
    container,
}: FooterTopProps) => {
    return (
        <div className="footer-top">
          <div className={container}>
            <div className="grid max-lg:grid-cols-12 md:max-lg:gap-x-3 footer-custom-row">
              <div className="max-md:col-span-12 max-lg:col-span-4">
                <FooterMenu 
                    heading="Services"
                    menus={Services1}
                />
              </div>
              <div className="max-md:col-span-12 max-lg:col-span-4">
                <div
                  className="footer-widget footer-widget-menu"
                  data-aos="fade-up"
                  data-aos-anchor=".footer-top"
                >
                    <FooterMenu 
                        heading="Services"
                        menus={Services2}
                    />
                </div>
              </div>
              <div className="max-md:col-span-12 max-lg:col-span-4">
                <div
                  className="footer-widget footer-widget-menu"
                  data-aos="fade-up"
                  data-aos-anchor=".footer-top"
                >
                    <FooterMenu 
                        heading="Information"
                        menus={Information}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FooterTop2;