import { EThemeContextOptions } from '../../context/enum/ThemeContextOptions';
import { useTheme } from '../../context/Theme';

import { ThemeProviderModel } from 'shared/models/theme-provider.model';

import waterTypeLogo from 'assets/water/icons/LogoIcon.svg';
import waterTypeColors from 'theme/water/color.module.css';
import waterTypeSearchIcon from 'assets/water/icons/Search.svg';

import fireTypeColors from 'theme/fire/color.module.css';
import fireTypeSearchIcon from 'assets/fire/icons/Search.svg';
import fireTypeLogo from 'assets/fire/icons/LogoIcon.svg';

export default function ProvideTheme() {
    const { theme } = useTheme();

    if (theme === EThemeContextOptions.WATER) {
        return {
            colors: waterTypeColors,
            images: {
                logoIcon: waterTypeLogo,
                icons: {
                    searchIco: waterTypeSearchIcon
                }
            },
            searchInputText: 'Qual pokémon está procurando?'
        } as ThemeProviderModel;
    }

    if (theme === EThemeContextOptions.FIRE) {
        return {
            colors: fireTypeColors,
            images: {
                logoIcon: fireTypeLogo,
                icons: {
                    searchIco: fireTypeSearchIcon
                }
            },
            searchInputText: 'O que você procura?'
        } as ThemeProviderModel;
    }
}
