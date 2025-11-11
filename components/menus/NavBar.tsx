import Logo from "../Logo";
import LogoImage from "@/public/img/logo.png";
import "@/styles/navigation.css";
import Menus from "../../data/mainMenuList";
import Icons from "../Icons";
import DrawerOpener from "../DrawerOpener";
import DrawerMenu from "../DrawerMenu";

import {
  LinkHeading, 
  ParentLink, 
  ChildLink, 
  LinkWithImg, 
  LinkWithDesc, 
  BottomMenuLink 
} from "./MenuLinks";

const NavBar = () => {
  return (
    <DrawerMenu>
      <nav className="header-nav drawer-menu">
        <div className="lg:hidden header-nav-headings">
          <Logo 
            src={LogoImage.src}
            width={189}
            height={32}
            url="/"
            cls="header-logo"
            alt="Consulo logo"
            ariaLabel="Consulo logo"
            loading="lazy"
          />
          <DrawerOpener
            cls="svg-wrapper menu-close"
            data-drawer=".drawer-menu"
          >
            <Icons.CloseCircle />
          </DrawerOpener>
        </div>
        <ul className="header-menu list-unstyled">
          {
            Menus?.map((link, index) => (
              // 'link.megamenu' ve 'link.dropdown' kontrolleri buradan kaldırıldı
              <li className={`nav-item${link.megamenutwocolumn ? ' nav-item-static': ''}`} key={`link-${index}`}>
                  <ParentLink 
                    title={link.title} 
                    path={link.path} 
                    // 'link.dropdown' kontrolü buradan kaldırıldı
                    dropdown={link.megamenutwocolumn ? true : false} 
                  />

                  {/* 'link.dropdown' ve 'link.megamenu' (Pages menüsü) blokları buradan silindi. */}

                  {link.megamenutwocolumn && 
                    <div className="header-submenu menu-absolute submenu-color header-megamenu">
                      <ul className="list-unstyled">                        
                        {link.megamenutwocolumn.map((childlink, index) =>(
                            <li className="nav-item" key={`megatwocol-${index}`}>
                              
                              {/* Hata veren 'LinkHeading' bloğu (WHY CONSULO başlığı) buradan silindi. */}

                              {childlink.dropdown && 
                                <ul className="reset-submenu list-unstyled submenu-color">
                                  {childlink.dropdown.map((grandchildlink, index) => (
                                      <li className="nav-item" key={`megadesc-${index}`}>
                                        {grandchildlink.imageUrl != null ? (
                                          <LinkWithImg 
                                            imageUrl={grandchildlink.imageUrl || undefined}
                                            imageUrlMobile={grandchildlink.imageUrlMobile || undefined}
                                            title={grandchildlink.title}
                                            text={grandchildlink.text}
                                            path={grandchildlink.path}
                                            altText="Menu image"
                                            showbutton={true}
                                          />
                                        ) : (
                                          <LinkWithDesc 
                                            title={grandchildlink.title}
                                            text={grandchildlink.text}
                                            path={grandchildlink.path}
                                          />
                                        )}
                                      </li>
                                    ))
                                  }
                                </ul>
                              }
                            </li>
                          ))
                        }
                        
                        {/* 'Services' altındaki 'bottommenu' bloğu buradan silindi. */}
                      </ul>
                    </div>
                  }
              </li>
            ))
          }
        </ul>
      </nav>
    </DrawerMenu>
  )
}

export default NavBar;