import { EThemeContextOptions } from 'context/theme/enum/ThemeContextOptions';
import { useTheme } from '../../context/theme/ThemeContext';
import { ApiUrl } from 'environment/api';

import { ThemeProviderModel } from 'shared/models/theme-provider.model';

import waterTypeLogo from 'assets/water/logo/LogoType.svg';
import waterTypeLogoFull from 'assets/water/logo/LogoFull.svg';
import waterTypeColors from 'theme/water/color.module.css';
import waterTypeCard from 'theme/water/card.module.css';
import waterTypeButton from 'theme/water/button.module.css';
import waterTypeCart from 'theme/water/cart.module.css';
import waterTypeSearchIcon from 'assets/water/icons/Search.svg';
import waterTypeCartIcon from 'assets/water/icons/Bag.svg';
import waterTypePlusIcon from 'assets/water/icons/Plus.svg';
import waterTypeMinusIcon from 'assets/water/icons/Minus.svg';
import Buttons from 'theme/water/button-add-remove-cart';

import fireTypeLogo from 'assets/fire/logo/LogoType.svg';
import fireTypeLogoFull from 'assets/fire/logo/LogoFull.svg';
import fireTypeColors from 'theme/fire/color.module.css';
import fireTypeCard from 'theme/fire/card.module.css';
import fireTypeButton from 'theme/fire/button.module.css';
import fireTypeCart from 'theme/fire/cart.module.css';
import fireTypeSearchIcon from 'assets/fire/icons/Search.svg';
import fireTypeCartIcon from 'assets/fire/icons/Cart.svg';

import dragonTypeLogo from 'assets/dragon/logo/LogoType.svg';
import dragonTypeLogoFull from 'assets/dragon/logo/LogoFull.svg';
import dragonTypeColors from 'theme/dragon/color.module.css';
import dragonTypeCard from 'theme/dragon/card.module.css';
import dragonTypeButton from 'theme/dragon/button.module.css';
import dragonTypeCart from 'theme/dragon/cart.module.css';
import dragonTypeSearchIcon from 'assets/dragon/icons/Search.svg';
import dragonTypeCartIcon from 'assets/dragon/icons/Cart.svg';

export default function ProvideTheme() {
    const { theme } = useTheme();

    if (theme === EThemeContextOptions.WATER) {
        return {
            baseApiUrl: `${ApiUrl}/type/11`,
            colors: {
                primaryBg: waterTypeColors.primaryBg
            },
            styles: {
                card: {
                    cardContainer: waterTypeCard.cardContainer,
                    priceContainer: waterTypeCard.priceContainer,
                    titleContainer: waterTypeCard.titleContainer,
                },
                button: {
                    buttonContainer: waterTypeButton.buttonContainer,
                },
                cart: {
                    titleContainer: waterTypeCart.cartTilteContainer,
                    buttons: Buttons
                }
            },
            images: {
                logoIcon: waterTypeLogo,
                logoFull: waterTypeLogoFull,
                icons: {
                    searchIco: waterTypeSearchIcon,
                    cartIcon: waterTypeCartIcon,
                    minus: waterTypeMinusIcon,
                    plus: waterTypePlusIcon
                }
            },
            searchInputText: 'Qual pokémon está procurando?'
        } as ThemeProviderModel;
    }

    if (theme === EThemeContextOptions.FIRE) {
        return {
            baseApiUrl: `${ApiUrl}/type/10`,
            colors: {
                primaryBg: fireTypeColors.primaryBg
            },
            styles: {
                card: {
                    cardContainer: fireTypeCard.cardContainer,
                    priceContainer: fireTypeCard.priceContainer,
                    titleContainer: fireTypeCard.titleContainer,
                },
                button: {
                    buttonContainer: fireTypeButton.buttonContainer,
                },
                cart: {
                    titleContainer: fireTypeCart.cartTilteContainer
                }
            },
            images: {
                logoIcon: fireTypeLogo,
                logoFull: fireTypeLogoFull,
                icons: {
                    searchIco: fireTypeSearchIcon,
                    cartIcon: fireTypeCartIcon
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
                    priceContainer: dragonTypeCard.priceContainer,
                    titleContainer: dragonTypeCard.titleContainer,
                },
                button: {
                    buttonContainer: dragonTypeButton.buttonContainer,
                },
                cart: {
                    titleContainer: dragonTypeCart.cartTilteContainer
                }
            },
            images: {
                logoIcon: dragonTypeLogo,
                logoFull: dragonTypeLogoFull,
                icons: {
                    searchIco: dragonTypeSearchIcon,
                    cartIcon: dragonTypeCartIcon
                }
            },
            searchInputText: 'O que você precisa hoje?'
        } as ThemeProviderModel;
    }
}
