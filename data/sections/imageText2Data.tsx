import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";
import Image1 from '@/public/img/image-text/img2.png';
import Image2 from '@/public/img/image-text/img-small.png';

export const ImageText2Data: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "Our Company",
    heading: "Redesigning business for solutions",
    text: "Our mission is to empowers businesses off all size to thrive in an our businesses ever changing marketplace.",
    textList: [
        {
            icon: <Icons.Ambition />,
            title: "Our ambition",
            text: "To be the premier, all-in-one partner for businesses navigating financial and legal complexities, from formation to litigation."
        },
        {
            icon: <Icons.Purpose />,
            title: "Our purpose",
            text: "To provide seamless solutions for accounting, work permits, and legal challenges, allowing our clients to operate with confidence."
        }
    ],
    imageList: [
        {
            src: Image1.src,
            width: 992,
            height: 863,
            alt: 'Image',
            loading: 'lazy'
        },
        {
            src: Image2.src,
            width: 195,
            height: 202,
            alt: 'Image',
            loading: 'lazy'
        }
    ]
}
