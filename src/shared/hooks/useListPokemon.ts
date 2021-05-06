import { useEffect, useState } from 'react';

import IPokemonBase from 'shared/interfaces/pokemon-base.interface';
import ListHttpService from 'shared/services/ListHttpService';

const useListPokemon = (baseApiUrl: any) => {
    const [pokemonBase, setPokemonBase] = useState<IPokemonBase[]>();

    useEffect(() => {
        async function listPokemon() {
            await ListHttpService.listPokemonByType(baseApiUrl)
                .then(res => setPokemonBase(res.data.pokemon));
        }

        listPokemon();

        return () => { }
    }, [baseApiUrl]);

    return { pokemonBase }
}

export default useListPokemon;
