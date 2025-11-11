import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/img1.png';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "Our Company",
    heading: "Redesigning business for solutions",
    text: "Based in Krakow, G&L Consulting is your strategic partner for navigating Poland's complex business landscape. We provide integrated expert solutions across law, accounting, and corporate services. From company formation and work permits to legal challenges and financial compliance, our mission is to handle the complexities so you can focus on your growth.",
    button: {
        label: "More About Us",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Image',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Comprehensive Legal Services"
        },
        {
            text: "Full-Service Accounting & Tax"
        },
        {
            text: "Company Formation & Work Permits"
        }
    ]
}
