import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "cloths",
          imageUrl:
            "https://ae01.alicdn.com/kf/HTB1vPHMN3HqK1RjSZFkq6x.WFXax.jpg",
          id: 1,
          linkUrl: "cloths",
        },
        {
          title: "Toys",
          imageUrl:
            "https://ae01.alicdn.com/kf/H5c9f33d2c25147c18a4a83af93fb1744a/Squeaky-Dog-Toys-Animal-Shape-Pet-Chew-Toys-Cotton-Rope-Grind-Teeth-Doll-For-Dog-Chew.jpg",
          id: 2,
          linkUrl: "toys",
        },
        {
          title: "Games",
          imageUrl:
            "https://ae01.alicdn.com/kf/H49e9615cd33f4fb4abf2c5e3e33d4f491/Multifunction-Pet-Molar-Bite-Dog-Toys-Rubber-Chew-Ball-Cleaning-Teeth-Safe-Elasticity-TPR-Soft-Puppy.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "Food",
          imageUrl:
            "https://thestylink.com/wp-content/uploads/2018/11/dogs_toys_6_Tumbler-Leakage-Ball-Dog-Bite-Toy-Removable-Dogs-Leakage-Dispenser_3.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Gadgets",
          imageUrl:
            "https://ae01.alicdn.com/kf/He1208987b9634c35a83c60f07d093097z/Dog-Toy-Ball-Food-Funny-Toothbrush-Stick-Pet-Dog-Toys-For-Small-Large-Dogs-Tooth-Brush.jpg_960x960.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
