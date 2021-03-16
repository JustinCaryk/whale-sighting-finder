
export type WhaleSightingType = {
    id: string
    species: string
    quantity: number | null
    description: string
    url: string
    latitude: number
    longitude: number
    location: string
    sighted_at: string
    created_at: string
    updated_at: string
    orca_type: string
    orca_pod?: string
}