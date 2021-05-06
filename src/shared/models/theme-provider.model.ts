interface Icons {
    searchIco: string
}

interface Images {
    logoIcon: string;
    logoFull: string;
    icons: Icons;
}

interface Colors {
    primaryBg: string;
}

interface Styles {
    card: {
        cardContainer: string;
        titleContainer: string;
        priceContainer: string;
    },
    button: {
        buttonContainer: string;
    }
}

export interface ThemeProviderModel {
    colors: Colors;
    styles: Styles;
    images: Images;
    searchInputText: string;
    baseApiUrl: string;
}
