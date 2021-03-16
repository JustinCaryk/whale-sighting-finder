import React, { useState } from 'react'
import { WhaleSightingType } from './../lib/types'

import { Detail } from './Detail'

interface Props {
    sightings: WhaleSightingType[]
    filterByQty: number
    tellIndexIsInDetailView: (t: boolean) => void
}

export const List: React.FC <Props>= ({
    sightings = [], 
    filterByQty = 0, 
    tellIndexIsInDetailView
}) => {
    const getFavorites = () => {
        const favsString = localStorage.getItem('favorites')
        const favs: WhaleSightingType[] = favsString?.length ? JSON.parse(favsString) : []
        return favs.map(fav=> fav.id)
    }

    const [isInDetailView, toggleIsInDetailView ] = useState<boolean>(false)
    const [ sighting, setSighting ] = useState<WhaleSightingType | null>(null)
    const [ favorites, setFavorites ] = useState<string[]>(getFavorites())

    const setSightDetailView = (s: WhaleSightingType) => {
        setSighting(s)
        toggleIsInDetailView(true)
        tellIndexIsInDetailView(true)
    }

    const turnDetailOff = () => {
        toggleIsInDetailView(false)
        tellIndexIsInDetailView(false)
        setSighting(null)
    }

    const checkIsFavorite = (s: WhaleSightingType) => {
        if (favorites.indexOf(s.id) > -1) {
            return 'active'
        }
        return ''
    }

    const toggleFavorites = (s: WhaleSightingType) => {
        const indexInStateFavorites = favorites.indexOf(s.id)
        
        const favsString = localStorage.getItem('favorites')
        const favs: WhaleSightingType[] = favsString?.length ? JSON.parse(favsString) : []
        
        if (indexInStateFavorites > -1) {
            // remove it from favorites in state
            const newFavoritesIds: string[] = []
            favorites.forEach((fav, i) => i === indexInStateFavorites ? null : newFavoritesIds.push(fav))
            setFavorites(newFavoritesIds)
            // get index of item in local storage
            const indexInLocalStorage = favs.findIndex(fav => fav.id == s.id)
            // remove it
            favs.splice(indexInLocalStorage, 1)
            // update storage 
            localStorage.setItem('favorites', JSON.stringify(favs))
        }
        else {
            //add it to favorites in local storage
            favs.push(s)
            localStorage.setItem('favorites', JSON.stringify(favs))
            // update state list of favorite ids
            setFavorites([s.id, ...favorites])
        }
    }

    // detail view
    if (isInDetailView) {
        return (
            <Detail 
                turnDetailOff={turnDetailOff}
                s={sighting}
            />
        )
    }

    return (
        <div className='space-y-3'>
            <div className='text-xl'>List View</div>
            {
                sightings.map(s => {
                    if (filterByQty != null && Number(s.quantity) < filterByQty) {
                        return null    
                    } 
                    return (
                        <div className='border rounded-md border-gray-300 p-4'>
                            <div 
                                className={'color-green cursor-pointer float-right star ' + checkIsFavorite(s)}
                                onClick={()=> toggleFavorites(s)}
                            >&#9733;</div>
                            <div 
                                className='capitalize text-blue-500 underline' 
                                onClick={() => setSightDetailView(s)}>
                                <span className='cursor-pointer'>{s.species}</span>
                            </div>
                            <div>Qty: {s.quantity}</div>
                            <div>Description: {s.description}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}