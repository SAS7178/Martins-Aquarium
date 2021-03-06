/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            image: "guppy.webp",
            name: "Bart Simpson",
            food: "crustaceans",
            species: "Guppy",
            location: 'Barbados',
            length: 3
        },
        {
            id: 2,
            image: "siamese-fighting-fish-blue-mixed-260nw-1514100308 copy.webp",
            name: 'Sushi',
            food: 'Goldfish',
            species: 'siamese fighting',
            location: 'freshwater pond',
            length: 10
        },
        {
            id: 3,
            image: "catfish.jpeg",
            name: 'Carrol Baskin',
            food: 'worms',
            species: 'Catfish',
            location: 'Lake Placid',

            length: 33
        },
        {
            id: 4,
            image: "zebrafish.jpeg",
            name: 'Peter Griffin',
            food: 'burgers',
            species: 'Zebrafish',
            location: 'Private pond',
            length: 7
        },
        {
            id: 5,
            image: "oscarfish.jpeg",
            name: 'Morty',
            food: 'ominvirous(pellet)',
            species: 'Oscar',
            location: 'South America',
            length: 12
        },
        {
            id: 6,
            image: "Great-Barracuda500.jpeg",
            name: 'James Bond',
            food: 'carnivore',
            species: 'Baracuda',
            location: 'Thialand',
            length: 43
        },
        {
            id: 7,
            image: "Popeye.jpeg",
            name: 'Popeye',
            food: 'herbivore(Spinach)',
            species: 'humanoid',
            location: 'Cartoon Network',
            length: 70
        },
        {
            id: 8,
            image: "biden_ice_cream.jpeg",
            name: 'Biden',
            food: 'ice cream',
            species: 'Politician',
            location: 'unknown',
            length: 62
        },
        {
            id: 9,
            image: "chuck_norris_image.jpeg",
            name: 'Chuck Norris',
            food: 'heavy metals',
            species: 'Most of them',
            location: 'The Big Bang',
            length: 72
        }

    ]

}
const harvest_Locations = { 
       locations: [
        {
            id: 1,
            locationImage: "https://media.gettyimages.com/photos/ruhrsee-picture-id563272133?s=2048x2048",
            location: "Lake Placid",
            qoute:"Beware for Crocs!!"
        },
        {
            id: 2,
            locationImage: "https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3571&q=80",
            location: "Amazon River",
            qoute:"Beware of Anacondas!"
        },
        {
            id: 3,
            locationImage: "https://media.gettyimages.com/photos/coast-of-cefalu-picture-id142116239?s=2048x2048",
            location: "Meditteranian Sea",
            qoute:"Enjoy the Seafood!"
        }
    ]}



export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}
export const getLocations = () => {
    return harvest_Locations.locations.map(locations => ({ ...locations }))
}