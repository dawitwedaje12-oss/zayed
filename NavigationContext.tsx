import React from 'react';

export type Page = 'home' | 'services' | 'videos';

export interface NavigationContextType {
    currentPage: Page;
    navigateTo: (page: Page, sectionId?: string) => void;
}

export const NavigationContext = React.createContext<NavigationContextType>({
    currentPage: 'home',
    navigateTo: () => {},
});