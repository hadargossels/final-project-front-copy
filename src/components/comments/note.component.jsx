import React, { useState } from "react";

function Note(props) {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <div className="media note">
      <a className="pull-left" href="#">
        <img
          className="media-object"
          src={`https://robohash.org/${props.id + 1}?set=set2`}
          alt
        />
      </a>
      <div className="media-body">
        <h4 className="media-heading">{props.title}</h4>
        <p>{props.content}</p>
        <ul className="list-unstyled list-inline media-detail pull-left">
          <li>
            <i className="fa fa-calendar" />
            {props.date}
          </li>
          <li>
            <i onClick={handleLike} className="fa fa-thumbs-up" />
            {like}
          </li>
        </ul>
        <ul className="list-unstyled list-inline media-detail pull-right like-replay">
          <li onClick={handleLike} className>
            <a href>Like</a>
          </li>
          <li className>
            <a href>Reply</a>
          </li>
        </ul>
      </div>
    </div>
  );

  // {
  //   /* COMMENT 1 - START */
  // }
  // <div className="media">
  //   <a className="pull-left" href="#">
  //     <img
  //       className="media-object"
  //       src="https://robohash.org/2?set=set2"
  //       alt
  //     />
  //   </a>
  //   <div className="media-body">
  //     <h4 className="media-heading">John Doe</h4>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     </p>
  //     <ul className="list-unstyled list-inline media-detail pull-left">
  //       <li>
  //         <i className="fa fa-calendar" />
  //         27/02/2014
  //       </li>
  //       <li>
  //         <i className="fa fa-thumbs-up" />
  //         13
  //       </li>
  //     </ul>
  //     <ul className="list-unstyled list-inline media-detail pull-right">
  //       <li className>
  //         <a href>Like</a>
  //       </li>
  //       <li className>
  //         <a href>Reply</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>;
  // {
  //   /* COMMENT 1 - END */
  // }
  // {
  //   /* COMMENT 2 - START */
  // }
  // <div className="media">
  //   <a className="pull-left" href="#">
  //     <img
  //       className="media-object"
  //       src="https://robohash.org/3/set=set2"
  //       alt
  //     />
  //   </a>
  //   <div className="media-body">
  //     <h4 className="media-heading">John Doe</h4>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     </p>
  //     <ul className="list-unstyled list-inline media-detail pull-left">
  //       <li>
  //         <i className="fa fa-calendar" />
  //         27/02/2014
  //       </li>
  //       <li>
  //         <i className="fa fa-thumbs-up" />
  //         13
  //       </li>
  //     </ul>
  //     <ul className="list-unstyled list-inline media-detail pull-right">
  //       <li className>
  //         <a href>Like</a>
  //       </li>
  //       <li className>
  //         <a href>Reply</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>;
  // {
  //   /* COMMENT 2 - END */
  // }
  // {
  //   /* COMMENT 3 - START */
  // }
  // <div className="media">
  //   <a className="pull-left" href="#">
  //     <img
  //       className="media-object"
  //       src="https://robohash.org/4?set=set2"
  //       alt
  //     />
  //   </a>
  //   <div className="media-body">
  //     <h4 className="media-heading">John Doe</h4>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     </p>
  //     <ul className="list-unstyled list-inline media-detail pull-left">
  //       <li>
  //         <i className="fa fa-calendar" />
  //         27/02/2014
  //       </li>
  //       <li>
  //         <i className="fa fa-thumbs-up" />
  //         13
  //       </li>
  //     </ul>
  //     <ul className="list-unstyled list-inline media-detail pull-right">
  //       <li className>
  //         <a href>Like</a>
  //       </li>
  //       <li className>
  //         <a href>Reply</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>;
  // {
  //   /* COMMENT 3 - END */
  // }
  // {
  //   /* COMMENT 4 - START */
  // }
  // <div className="media">
  //   <a className="pull-left" href="#">
  //     <img
  //       className="media-object"
  //       src="https://robohash.org/5?set=set2"
  //       alt
  //     />
  //   </a>
  //   <div className="media-body">
  //     <h4 className="media-heading">John Doe</h4>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     </p>
  //     <ul className="list-unstyled list-inline media-detail pull-left">
  //       <li>
  //         <i className="fa fa-calendar" />
  //         27/02/2014
  //       </li>
  //       <li>
  //         <i className="fa fa-thumbs-up" />
  //         13
  //       </li>
  //     </ul>
  //     <ul className="list-unstyled list-inline media-detail pull-right">
  //       <li className>
  //         <a href>Like</a>
  //       </li>
  //       <li className>
  //         <a href>Reply</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>;
  // {
  //   /* COMMENT 4 - END */
  // }
}

export default Note;
