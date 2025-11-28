export interface NavItem {
    label: string;
    href: string;
}

export interface StatItem {
    value: string;
    label: string;
    numericValue?: number;
    suffix?: string;
}

export interface ServiceItem {
    icon: string;
    title: string;
    description: string;
}

export interface PortfolioItem {
    category: string;
    title: string;
    description: string;
    stats: {
        value: string;
        label: string;
    }[];
}

export interface SocialLink {
    icon: string;
    href: string;
}