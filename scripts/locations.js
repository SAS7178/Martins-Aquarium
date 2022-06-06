import { getLocations } from './database.js'

export const locationsList = () => {

    const locations = getLocations()

    let HTMLString = `<article class= "locations">`
    
    for (const location of locations) {
    
        HTMLString += `<section class= "location_Card">
        <div class= "location_quote">${location.qoute}</div>
        <div><img  class="location__image image--card" src="${location.locationImage}" /></div>
        <div class= "location_name">${location.location}</div>        `
    }
    HTMLString += `</article>`

return HTMLString
}