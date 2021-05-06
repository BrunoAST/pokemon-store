import { useEffect, useState } from 'react';

import IPokemonInformations from 'shared/interfaces/pokemon-informations.interface';
import ListHttpService from 'shared/services/ListHttpService';

const useGetPokemonByUrl = (url: any) => {
    const [pokemonInformations, setPokemonInformations] = useState<IPokemonInformations>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getPokemonByUrl() {
            await ListHttpService.getPokemonByUrl(url)
                .then(res => setPokemonInformations(res.data))
                .finally(() => setIsLoading(false));
        }

        getPokemonByUrl();

        return () => { }
    }, [url]);

    return { pokemonInformations, isLoading }
}

export default useGetPokemonByUrl;