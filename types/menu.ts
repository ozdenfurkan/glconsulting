export interface MenuType {
    title: string;
    path: string;
    dropdown?: boolean | MenuType[];
    text?:string; 
    showbutton?: boolean; 
    altText?: string; 
    imageUrl?: string; 
    imageUrlMobile?: string;
    icon?: any;
    megamenutwocolumn?: {
        title?: string;
        path?: string;
        dropdown: {
            imageUrl: string | null;
            imageUrlMobile: string | null;
            title: string;
            text: string;
            path: string;
        }[];
    }[];
}
