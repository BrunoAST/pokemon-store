import { EThemeContextOptions } from 'context/theme/enum/ThemeContextOptions';
import IPokemonCart from 'shared/interfaces/pokemon-cart.interface';

export function setPokemon(pokemon: IPokemonCart[], theme: EThemeContextOptions): void {
    localStorage.setItem(theme, JSON.stringify(pokemon));
}

export function getPokemon(theme: EThemeContextOptions): IPokemonCart[] {
    return JSON.parse(localStorage.getItem(theme) as string);
}
