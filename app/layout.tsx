import type { Metadata } from "next";
import { fonts } from "@/libs/fonts";
import "@/styles/global.css";
import "@/styles/footer.css";
import "@/styles/modal.css";
import AosInitializer from "@/libs/aos";

import HeaderStyle2 from "@/components/HeaderStyle2";
import Footer from "@/components/sections/Footer";
import ScrollTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    // This will appear as "About Us | G&L Consulting", etc.
    template: 'G&L Consulting | %s',
    // This is the title for the homepage
    default: 'G&L Consulting - Law, Accounting, and Corporate Services',
  },
  description: "G&L Consulting offers professional services in company formation, work permits, accounting solutions, and legal advisory.",
  openGraph: {
    // Title shown when shared on social media
    title: 'G&L Consulting - Law, Accounting, and Corporate Services',
    // Description shown when shared on social media
    description: 'Expert solutions for company formation, work permits, and accounting.',
    // Your final domain
    url: 'https://glconsulting.live',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        <HeaderStyle2 />
        <main>{children}</main>
        <Footer />
        
        {/* Modal and Drawer Overlay */}
        <drawer-opener id="drawer-overlay"></drawer-opener>

        {/* AOS Init */}
        <AosInitializer />
        
        {/* Scroll to Top Button */}
        <ScrollTop />
      </body>
    </html>
  );
}
