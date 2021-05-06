import { useEffect, useState } from 'react';

import IPokemonInformations from 'shared/interfaces/pokemon-informations.interface';
import ListHttpService from 'shared/services/ListHttpService';

const useGetPokemonByUrl = (url: any) => {
    const [pokemonInformations, setPokemonInformations] = useState<IPokemonInformations>();

    useEffect(() => {
        async function getPokemonByUrl() {
            await ListHttpService.getPokemonByUrl(url)
                .then(res => setPokemonInformations(res.data));
        }

        getPokemonByUrl();

        return () => { }
    }, [url]);

    return { pokemonInformations }
}

export default useGetPokemonByUrl;