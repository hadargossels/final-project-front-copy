import images from '../images'

const storeItems = [
    {   id: 1, 
        name: "Saten sheets",
        url: "Saten_Sheets",
        description: "Satin bedding is made of 100% combed cotton with a smooth, glossy and pleasant to the touch finish.",
        images: [images.image1_1, images.image1_2, images.image1_3],
        price: 150,
        discount: 0.25,
        stars: 4,
        category: "bedroom",
        subcategory: "bedding",
        inStock: true,
        deliver: true,
        favorite: false 
    },
    {   id: 2, 
        name: "Wool blanket",
        url: "Wool_Blanket",
        description: "A thick and luxurious wool blanket.",
        images: [images.image2_1, images.image2_2, images.image2_3],
        price: 250,
        discount: 0,
        stars: 3,
        category: "bedroom",
        subcategory: "blankets",
        inStock: true,
        deliver: true,
        favorite: false
    },
    {   id: 3, 
        name: "Bath towel",
        url: "Bath_Towel",
        description: "A thick and luxurious bath towel.",
        images: [images.image3_1, images.image3_2, images.image3_3],
        price: 200,
        discount: 0.25,
        stars: 4,
        category: "bathroom",
        subcategory: "towels",
        inStock: true,
        deliver: true,
        favorite: false
    }, 
    {   id: 4, 
        name: "Storage for tea, coffee and sugar",
        url: "Storage_TeaCoffee",
        description: "Storage for tea, coffee and sugar made of ceramic with a hermetic wooden lid",
        images: [images.image4_1, images.image4_2, images.image4_3],
        price: 225,
        discount: 0.30,
        stars: 4,
        category: "kitchen",
        subcategory: "storage",
        inStock: true,
        deliver: true,
        favorite: false
    }           
]

export default storeItems;