import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import IPokemonBase from 'shared/interfaces/pokemon-base.interface';

const useListFilter = (pokemonBase?: IPokemonBase[]) => {
    const { filter } = useParams();
    const [isFiltered, setIsFiltered] = useState<boolean>();
    const [filtered, setFiltered] = useState<IPokemonBase[] | undefined>();

    useEffect(() => {
        const filterList = () => {
            if (!filter || !filter?.trim()) {
                setIsFiltered(false);
                setFiltered([]);
                return;
            }

            const res = pokemonBase?.filter(item => item.pokemon.name.trim().toLowerCase().includes(filter.trim().toLowerCase()));
            setFiltered(res);
            setIsFiltered(true);
        }

        filterList();
    }, [filter, pokemonBase, setFiltered]);

    return { isFiltered, filtered }
}

export default useListFilter;
