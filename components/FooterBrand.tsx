import Logo from "./Logo";
import LogoImage from "@/public/img/logo-white.png";
import Social from "./Social";
import Icons from "../components/Icons";

const FooterBrand = () => {
    return (
        <div
            className="footer-widget footer-widget-brand"
            data-aos="fade-up"
            data-aos-anchor=".footer-top"
        >
            <Logo 
                src={LogoImage.src}
                width={189}
                height={32}
                url="/"
                cls="footer-logo"
                alt="Consulo logo"
                ariaLabel="Consulo logo" 
                loading="lazy"
            />
            <p className="text text-16">
                Providing integrated solutions in law, accounting, and business structuring. We handle the complexities so you can focus on your growth.
            </p>
            <p className="text text-17">
                Dajwór 14/11, 31-052 Kraków
            </p>
            <Social 
                wrapperCls="social-icons"
                aos="fade-up"
                aosAnchor=".footer-top"
            />
        </div>
    )
}

export default FooterBrand;