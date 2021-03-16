
import { List } from './List'

interface Props {
    toggleIsInFavorite: (x: boolean) => void
}
export const Favorites: React.FC<Props>= ({toggleIsInFavorite}) => {
    const getFavoritesBlock = () => {
        const favsString = localStorage.getItem('favorites')
        const favs = favsString?.length ? JSON.parse(favsString) : []
         
        if (!favs.length) {
            return <div>No favorites saved.</div>
        }
        return <List sightings={favs} filterByQty={0} tellIndexIsInDetailView={ ()=> {}}/>
    }

    return (
        <div className='space-y-4'>
            <div>
                <button
                    className='bg-green-400 text-center font-semibold text-white py-2 px-4 rounded hover:bg-green-500 hover:cursor-pointer'
                    onClick={() => toggleIsInFavorite(false)}
                >
                    Back
                </button>
            </div>
            {getFavoritesBlock()}
        </div>
    )
}