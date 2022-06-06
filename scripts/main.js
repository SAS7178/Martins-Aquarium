import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
// Import the FishList function from the correct module
import { fishList } from './FishList.js'
const fishHTMLElement = document.querySelector('#fishList')
fishHTMLElement.innerHTML = fishList()

// locations pull
import { getLocations } from './database.js'
const allLocations = getLocations()

for (const location of allLocations) {
    console.log(location)
}
// Import the LocationList function from the correct module
import { locationsList } from './locations.js'
const locationHTMLElement = document.querySelector('#locationsList')
locationHTMLElement.innerHTML = locationsList()

