interface Icons {
    searchIco: string
}

interface Images {
    logoIcon: string;
    icons: Icons;
}

interface Colors {
    primary: string;
}

export interface ThemeProviderModel {
    colors: any;
    images: Images;
    logo: string;
    searchInputText: string;
}
