'use client';

import LinkList from "./LinkList";
import { MenuPolicies } from "@/data/footerMenuList";

interface FooterBottomProps {
    container: string;
}

const FooterBottom = ({
    container
}: FooterBottomProps) => {
    return(
        <div className="footer-bottom">
            <div className={container}>
                <div className="grid grid-cols-2 md:gap-1 footer-bottom-row">
                    <div className="col-span-2 md:col-span-1">
                        <div className="footer-copyright text text-16">
                            Copyright ©2026 G&L Consulting. All rights reserved. Designed by{' '}
                              <a href="https://furkanozden.com" target="_blank" rel="noopener noreferrer">
                                Furkan Ozden
                              </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <LinkList 
                            wrapperCls="footer-menu footer-policies"
                            menus={MenuPolicies}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;