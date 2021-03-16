import React, { useState } from 'react'
import { List } from './components/List'
import { Favorites } from './components/Favorites'
import { getWhaleSightings } from './api/whale-handler'
import { WhaleSightingType } from './lib/types'
import { onInputChange } from './lib/utils'

function App() {

  const [isLoading, toggleLoading] = useState<boolean>(false)
  const [filterByQty, setFilterByQty] = useState<number>(0)
  const [isInDetailMode, toggleIsInDetail] = useState<boolean>(false)
  const [isInFavoriteMode, toggleIsInFavorite] = useState<boolean>(false)
  const [latencySim, setLatencySim] = useState<number>(0)
  const [sightings, setSightings] = useState<WhaleSightingType[]>([])

  const onLatencySimChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value, setLatencySim)
  }

  const onFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value, setFilterByQty)
  }

  const fetchData = () => {
    // turn on loading
    toggleLoading(true)
    // clear data for demo purposes
    setSightings([])

    setTimeout(() => {
      getWhaleSightings()
        .then(res => {
          // set the sightings
          setSightings(res)
          // turn off loading
          toggleLoading(false)
        })
    }, latencySim)

  }


  if (isInFavoriteMode) {
    return (
      <div className="App container sm mx-auto space-y-4 mt-4 mb-4">
        <Favorites toggleIsInFavorite={toggleIsInFavorite} />
      </div>
    )
  }

  return (
    <div className="App container sm mx-auto space-y-4 mt-4 mb-4">
      {isInDetailMode === false ? (
        <div className='space-y-2.5'>
          <div>
            <div>Latency Timing Simulator (eg. 1000 milliseconds = 1 second)</div>
            <input
              className='block sm:max-w-xs w-full px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
              placeholder='Enter MILLISECONDS to delay'
              onChange={e => onLatencySimChange(e)}
            />
          </div>
          <div>
            <div>Filter By Quantity</div>
            <input
              className='block sm:max-w-xs w-full px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
              placeholder='Enter numbers only'
              onChange={e => onFilterInputChange(e)}
            />
          </div>
          <div>
            <button
              className='bg-green-400 text-center font-semibold text-white py-2 px-4 rounded hover:bg-green-500 hover:cursor-pointer'
              onClick={fetchData}
            >Click to fetch data</button>
          </div>
          <div className='float-right capitalize text-blue-500 underline cursor-pointer'>
            <div onClick={() => toggleIsInFavorite(true)}>View Favorites</div>
          </div>
        </div>
      ) : null}

      { (isLoading ? (
        <div className="App container sm mx-auto space-y-4 mt-4">
          <div className="loading"><div></div><div></div><div></div><div></div></div>
        </div>
      ) : null)}


      {sightings.length ? (
        <List
          sightings={sightings}
          filterByQty={filterByQty}
          tellIndexIsInDetailView={(x: boolean) => toggleIsInDetail(x)} />
      ) : null}

    </div>
  );
}

export default App;
