interface Icons {
    searchIco: string;
    cartIcon: string;
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
    button: {
        buttonContainer: string;
    },
    card: {
        cardContainer: string;
        titleContainer: string;
        priceContainer: string;
    },
    cart: {
        titleContainer: string;
    }
}

export interface ThemeProviderModel {
    colors: Colors;
    styles: Styles;
    images: Images;
    searchInputText: string;
    baseApiUrl: string;
}
