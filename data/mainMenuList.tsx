import Icons from "../components/Icons";

const Menus = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About Us',
        path: '/about-us'
    },
    {
        title: 'Services',
        path: '/services',
        megamenutwocolumn: [

            {

                // 'WHY CONSULO' başlığı ve 'path' buradan kaldırıldı.

                dropdown: [

                    {

                        imageUrl: null, // <-- HİZALAMA İÇİN ÖNEMLİ

                        imageUrlMobile: null,

                        title: 'Legalization & Work Permit',

                        text: 'Navigate complex immigration laws and secure necessary work permits for your international team.',

                        path: '/services/legalization-work-permit'

                    },

                    {

                        imageUrl: null, // <-- HİZALAMA İÇİN ÖNEMLİ

                        imageUrlMobile: null,

                        title: 'Legal Services',

                        text: 'Access comprehensive legal support to protect your business and ensure full compliance.',

                        path: '/services/legal-services'

                    },

                    {

                        imageUrl: null, // <-- HİZALAMA İÇİN ÖNEMLİ

                        imageUrlMobile: null,

                        title: 'Business Structuring',

                        text: 'Optimize your company\'s organizational structure for better efficiency and scalability.',

                        path: '/services/business-structuring'

                    }

                ]

            },

            {

                // 'FEATURED CASE STUDY' başlığı ve 'path' buradan kaldırıldı.

                dropdown: [

                    {

                        imageUrl: null, // <-- HİZALAMA İÇİN ÖNEMLİ

                        imageUrlMobile: null,

                        title: 'Financial Solutions',

                        text: 'Explore tailored financial strategies, from funding to investment planning, to fuel your growth.',

                        path: '/services/financial-solutions'

                    },

                    {

                        imageUrl: null, // <-- HİZALAMA İÇİN ÖNEMLİ

                        imageUrlMobile: null,

                        title: 'Business Accounting',

                        text: 'Ensure accurate financial reporting and compliance with our professional accounting services.',

                        path: '/services/business-accounting'

                    },

                    {

                        imageUrl: null, // <-- HİZALAMA İÇİN ÖNEMLİ

                        imageUrlMobile: null,

                        title: 'Business Incubation',

                        text: 'Accelerate your startup\'s growth with expert mentorship and resources in our incubation program.',

                        path: '/services/business-incubation'

                    }

                ]

            }

        ],
        // Services altındaki bottommenu kaldırıldı
    },
    // "Pages" objesi buradan tamamen silindi (boş {} yok)
    {
        title: 'Blog',
        path: '/blogs'
        // Blog altındaki "dropdown" dizisi kaldırıldı.
    },
    {
        title: 'Contact',
        path: '/contact-us'
    }
]

export default Menus;