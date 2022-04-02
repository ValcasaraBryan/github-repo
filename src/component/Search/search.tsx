import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'
import { notification } from '../Notification/Notification'
import { get } from '../../services/fetch'
import './search.css'

async function search(value: string) {
    try {
        return await get('https://api.github.com/users/' + value + '/repos')
    } catch (e) {
        notification.error("Une erreur est survenue lors de la récupération des données");
    }
}

interface SearchProps {
    onSearch: (listOfRepos: any[]) => any
}

export default function Search(props: SearchProps) {
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <div className='search-container'>
            <div className='search-field'>
                <TextField id="outlined-basic" label="" variant="outlined" onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
            <Button variant="contained" onClick={async () => {
                const listOfRepos = await search(searchValue)
                if (listOfRepos) {
                    props.onSearch(listOfRepos)
                }
            }}>Rechercher</Button>
        </div>
    )
}