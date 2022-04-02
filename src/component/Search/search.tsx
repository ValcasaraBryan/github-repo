import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'
import { notification } from '../Notification/Notification'
import { get } from '../../services/fetch'
import './search.css'

async function searchUser(value: string): Promise<any | null | undefined> {
    try {
        const res = await get('https://api.github.com/users/' + value)
        if (!res.id) {
            return null
        }
        return res
    } catch (e) {
        notification.error("Une erreur est survenue lors de la récupération des données");
    }
}

async function searchRepos(value: string): Promise<any[] | undefined> {
    try {
        const res = await get('https://api.github.com/users/' + value + '/repos')
        if (!Array.isArray(res)) {
            return [];
        }
        return res
    } catch (e) {
        notification.error("Une erreur est survenue lors de la récupération des données");
    }
}

interface SearchProps {
    onSearch: (listOfRepo: any[], user: any | null) => any
}

export default function Search(props: SearchProps) {
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <div className='search-container'>
            <div className='search-field'>
                <TextField id="outlined-basic" label="" variant="outlined" onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
            <Button variant="contained" disabled={searchValue.length === 0} onClick={async () => {
                const user = await searchUser(searchValue)
                if (user !== null && user !== undefined) {
                    const listOfRepo = await searchRepos(searchValue)
                    if (listOfRepo) {
                        props.onSearch(listOfRepo, user)
                    }
                } else {
                    props.onSearch([], null)
                }
            }}>Rechercher</Button>
        </div>
    )
}