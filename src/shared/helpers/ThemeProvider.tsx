import { EThemeContextOptions } from '../../context/enum/ThemeContextOptions';
import { useTheme } from '../../context/Theme';
import { ApiUrl } from 'environment/api';

import { ThemeProviderModel } from 'shared/models/theme-provider.model';

import waterTypeLogo from 'assets/water/logo/LogoType.svg';
import waterTypeLogoFull from 'assets/water/logo/LogoFull.svg';
import waterTypeColors from 'theme/water/color.module.css';
import waterTypeSearchIcon from 'assets/water/icons/Search.svg';

import fireTypeLogo from 'assets/fire/logo/LogoType.svg';
import fireTypeLogoFull from 'assets/fire/logo/LogoFull.svg';
import fireTypeColors from 'theme/fire/color.module.css';
import fireTypeSearchIcon from 'assets/fire/icons/Search.svg';

import dragonTypeLogo from 'assets/dragon/logo/LogoType.svg';
import dragonTypeLogoFull from 'assets/dragon/logo/LogoFull.svg';
import dragonTypeColors from 'theme/dragon/color.module.css';
import dragonTypeCard from 'theme/dragon/card.module.css';
import dragonTypeSearchIcon from 'assets/dragon/icons/Search.svg';

export default function ProvideTheme() {
    const { theme } = useTheme();

    if (theme === EThemeContextOptions.WATER) {
        return {
            colors: {
                primaryBg: waterTypeColors.primaryBg
            },
            images: {
                logoIcon: waterTypeLogo,
                logoFull: waterTypeLogoFull,
                icons: {
                    searchIco: waterTypeSearchIcon
                }
            },
            searchInputText: 'Qual pokémon está procurando?'
        } as ThemeProviderModel;
    }

    if (theme === EThemeContextOptions.FIRE) {
        return {
            colors: {
                primaryBg: fireTypeColors.primaryBg
            },
            images: {
                logoIcon: fireTypeLogo,
                logoFull: fireTypeLogoFull,
                icons: {
                    searchIco: fireTypeSearchIcon
                }
            },
            searchInputText: 'O que você procura?'
        } as ThemeProviderModel;
    }

    if (theme === EThemeContextOptions.DRAGON) {
        return {
            baseApiUrl: `${ApiUrl}/type/16`,
            colors: {
                primaryBg: dragonTypeColors.primaryBg
            },
            styles: {
                card: {
                    cardContainer: dragonTypeCard.cardContainer,
                }
            },
            images: {
                logoIcon: dragonTypeLogo,
                logoFull: dragonTypeLogoFull,
                icons: {
                    searchIco: dragonTypeSearchIcon
                }
            },
            searchInputText: 'O que você precisa hoje?'
        } as ThemeProviderModel;
    }
}
