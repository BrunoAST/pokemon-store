interface Icons {
    searchIco: string
}

interface Images {
    logoIcon: string;
    logoFull: string;
    icons: Icons;
}

interface Colors {
    primary: string;
}

export interface ThemeProviderModel {
    colors: any;
    images: Images;
    searchInputText: string;
}
