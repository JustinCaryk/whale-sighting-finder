
import { WhaleSightingType } from '../lib/types'

export const getWhaleSightings = async () => {
  const url = 'https://hotline.whalemuseum.org/api.json'
  const res: WhaleSightingType[] = await fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })

  return res
}