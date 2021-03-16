
import { WhaleSightingType } from './../lib/types'

interface Props {
    turnDetailOff: () => void
    s: WhaleSightingType | null //sighting
}

export const Detail: React.FC <Props>= ({turnDetailOff, s}) => {
    if (s == null) return null

    return (
        <div className='space-y-3'>
            <div className='text-xl'>Detail View</div>
            <button
                className='bg-green-400 text-center font-semibold text-white py-2 px-4 rounded hover:bg-green-500 hover:cursor-pointer'
                onClick={() => turnDetailOff()}>Go Back</button>
            <div>
                <div className='capitalize'>
                    <strong>Species: </strong>{s.species}
                </div>
                <div>
                    <strong>Qty: </strong>{s.quantity}
                </div>
                <div>
                    <strong>Descriptiom: </strong>{s.description}
                </div>
                <div>
                    <strong>URL: </strong>{s.url}
                </div>
                <div>
                    <strong>Latitude: </strong>{s.latitude}
                </div>
                <div>
                    <strong>Longitude: </strong>{s.longitude}
                </div>
                <div>
                    <strong>Location: </strong>{s.location || 'not specified'}
                </div>
                {s.orca_type ? (
                    <div>
                        <strong>Orca Type: </strong>{s.orca_type}
                    </div>
                ) : null}
                { s.orca_type ? (
                    <div>
                        <strong>Orca Pod: </strong>{s.orca_pod}
                    </div>
                ) : null}
            </div>
        </div>
    )
}