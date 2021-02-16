const INITIAL_STATE = {
  sections: [
    {
      title: "clothing",
      imageUrl:
        "https://ae01.alicdn.com/kf/Ha197d7b26eff4a2882f988f66c8677fcY/Pet-Dog-Clothes-for-Small-Medium-Big-Dog-Funny-Adjustable-Cotton-Puppy-Costumes-Cute-Clothing-Pet.jpg_220x220xz.jpg_.webp",
      id: 1,
      linkUrl: "clothing",
    },
    {
      title: "collars",
      imageUrl:
        "https://ae01.alicdn.com/kf/H8e3f98557a31499ab4803c18bb319b22R/Personalized-Collar-Pet-ID-Tag-Engraved-Pet-ID-Name-for-Cat-Puppy-Dog-Tag-Pendant-Keyring.jpg_220x220xz.jpg_.webp",
      id: 2,
      linkUrl: "collars",
    },
    {
      title: "grooming",
      imageUrl:
        "https://ae01.alicdn.com/kf/He72bd27b4ca543e783aab7dfde336319t/guante-para-gato-dog-Grooming-Glove-pet-products-mascotas-cat-Deshedding-Hair-Remove-Cleaning-Puppy-Massage.jpg_220x220xz.jpg_.webp",
      id: 3,
      linkUrl: "grooming",
    },
    {
      title: "training",
      imageUrl:
        "https://ae01.alicdn.com/kf/H0d8ad26c121649f5a896598e148ac4513/1pc-Pet-Trainer-Pet-Dog-Training-Dog-Clicker-Adjustable-Sound-Plastic-Key-Chain-And-Wrist-Strap.jpg_220x220xz.jpg_.webp",
      // size: "large",
      id: 4,
      linkUrl: "training",
    },

    {
      title: "houses & Furniture",
      imageUrl:
        "https://ae01.alicdn.com/kf/H763f2014f36d49659ff07f9df3c98c71F/Dog-Bed-House-Winter-Warm-Small-Dog-Teddy-Cat-Bed-All-Seasons-Universal-Removable-and-Washable.jpg_220x220xz.jpg_.webp",
      // size: "large",
      id: 5,
      linkUrl: "furniture",
    },
    {
      title: "carriers",
      imageUrl:
        "https://ae01.alicdn.com/kf/H67cf5fd183b24f4f93b9220017a5bccc1/Pet-Dog-Carrier-Single-Shoulder-Bag-Breathable-Outdoor-Travel-Handbag-Pouch-Mesh-Oxford-Sling-Comfort-TravelTote.jpg_220x220xz.jpg_.webp",
      // size: "large",
      id: 6,
      linkUrl: "carriers",
    },
    {
      title: "toys",
      imageUrl:
        "https://ae01.alicdn.com/kf/H33e8a780d2d84ee39dcc2afc26c1f62cA/Toys-for-Dogs-Rubber-Dog-Ball-For-Puppy-Funny-Dog-Toys-For-Pet-Puppies-Large-Dogs.jpg_220x220xz.jpg_.webp",
      // size: "large",
      id: 7,
      linkUrl: "toys",
    },
    {
      title: "outdoor",
      imageUrl:
        "https://ae01.alicdn.com/kf/Hbee31d8c2d8b4f2997633a370f9feb1b0/Portable-Dog-Poop-Waste-Bag-Dispenser-Pouch-Pet-Puppy-Cat-Pick-Up-Poop-Bag-holder-Outdoor.jpg_220x220xz.jpg_.webp",
      // size: "large",
      id: 8,
      linkUrl: "outdoor",
    },
    {
      title: "feeding",
      imageUrl:
        "https://ae01.alicdn.com/kf/H5e0709639e5b44df8b6d19579307da6aO/Pet-Dog-Intelligent-Timing-Feeder-Six-Grid-Dog-Cat-Automatic-Timing-Quantitative-Feeder-Pet-Feeder.jpg_220x220xz.jpg_.webp",
      // size: "large",
      id: 9,
      linkUrl: "feeding",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
