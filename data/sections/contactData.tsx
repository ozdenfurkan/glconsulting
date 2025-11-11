import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const ContactData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    subheading: "Contact Us",
    heading: "Let's Start a Conversation",
    text: "Your business challenges are unique, and so are our solutions. We specialize in transforming complexities into opportunities for growth. Whether you are looking to optimize operations, navigate regulatory landscapes, or drive innovation, our team is ready to help you achieve your goals. Let's discuss how we can tailor our expertise to your specific needs.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "Proven Track Record",
            text: "We have a history of delivering impactful results for a diverse portfolio of clients.",
        },
        {
            icon: <Icons.Support />,
            title: "Client-Centric Approach",
            text: "We believe in building long-term partnerships and working collaboratively with our clients.",
        },
    ],
    block: {
        heading: "Schedule a Consultation",
        text: "We're here to help you achieve your business goals. Reach out to us for a consultation.",
    },
}