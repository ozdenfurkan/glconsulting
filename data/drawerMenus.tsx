import Icons from "../components/Icons";

export const MenuService = {
    title: "Our Services",
    menus: [
        {
            title: "Legalization & Work Permit",
            path: "/services/legalization-work-permit"
        },
        {
            title: "Legal Services",
            path: "/services/legal-services"
        },
        {
            title: "Business Structuring",
            path: "/services/business-structuring"
        },
        {
            title: "Financial Solutions",
            path: "/services/financial-solutions"
        },
        {
            title: "Business Accounting",
            path: "/services/business-accounting"
        },
        {
            title: "Business Incubation",
            path: "/services/business-incubation"
        }
    ]
}

export const MenuContact = {
    title: "Quick Contact",
    menus: [
        {
            title: "Dajwór 14/11, 31-052 Kraków",
            path: null,
            icon: <Icons.Location />
        },
        {
            title: "+48 (785) 322 172",
            path: "tel:+48785322172",
            icon: <Icons.Phone />
        },
        {
            title: "info@glconsulting.live",
            path: "mailto:info@glconsulting.live",
            icon: <Icons.Envelope />
        }
    ]
}
