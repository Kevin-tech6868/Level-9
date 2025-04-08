import React from 'react'
import Image1 from '../assets/Jetta.webp'
import Image2 from '../assets/Tiguan.jpg'
import Image3 from '../assets/Atlas.jpg'
import Image4 from '../assets/Electric-volks.jpg'   
import Image5 from '../assets/Vento.jpg'
import Image6 from '../assets/polo.jpg'

const Cars = () => {
    const Models = [
        {
            id: 1,
            name: "Jetta",
            brand: "Volkswagen",
            year: 2020,
            description: "A compact sedan with a sporty design and advanced technology.",
            image: Image1,
        },
        {
            id:2,
            name: "Tiguan",
            brand: "Volkswagen",
            year: 2021,
            description: "A versatile SUV with spacious interior and modern features.",
            image: Image2,
        },
        {
            id:3,
            name: "Atlas",
            brand: "Volkswagen",
            year: 2021,
            description: "A family-friendly SUV with three rows of seating and ample cargo space.",
            image: Image3,
        },
        {
            id:4,
            name: "Vento",
            brand: "Volkswagen",
            year: 2021,
            description: "A compact sedan with a stylish design and efficient performance.",
            image: Image5,
        },
        {
            id:5,
            name: "Volkswagen ID.4",
            brand: "Volkswagen",
            year: 2021,
            description: "An all-electric SUV with a spacious interior and advanced technology.",
            image: Image4,
        },
        {
            id:6,
            name: "Volkswagen Polo",
            brand: "Volkswagen",
            year: 2021,
            description: "An all-electric SUV with a spacious interior and advanced technology.",
            image: Image6,
        },

    ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-blue-700 py-32" id="#cars">
        {Models.map((model) => (
            <div key={model.id} className="car-card bg-blue-600 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                <img src={model.image} alt={model.name} className="car-image w-full h-80 object-cover rounded-md mb-4"/>
                <h2 className="text-xl font-bold mb-2 text-gray-800">{model.name}</h2>
                <p className="text-white">Brand: {model.brand}</p>
                <p className="text-white">Year: {model.year}</p>
                <p className="text-white">Description: {model.description}</p>
            </div>
        ))}
      
    </div>
  )
}

export default Cars
