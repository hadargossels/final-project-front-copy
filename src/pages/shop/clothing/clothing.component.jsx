import React from "react";
import SHOP_DATA from "../shop.data";
import CollectionTopic from "../../../components/collection-topic/collection-topic.component";
// import CollectionItem from "../../../components/collection-item/collection-item.component";

class ClothingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-topic">
        {collections
          .filter((collection) => collection.id === 1)
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionTopic key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default ClothingPage;
