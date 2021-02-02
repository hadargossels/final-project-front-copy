import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Favorite extends React.Component {
  state = {
    clicked: false
  }

  toggleClass = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true })
    } else if (this.state.clicked) {
      this.setState({ clicked: false })
    }

  }
  render() {
    const heart = {
      color: "black",
      display: "inline",
      margin: "0 0 0 5px"
    }

    const selected = {
      color: "red",
      display: "inline",
      margin: "0 0 0 5px"
    }
    const currStyle = this.state.clicked ? selected : heart
    return (
      <div style = {{margin: '10px'}}>
        <span>Add to favorites </span>
        <div style={currStyle}>
          <FontAwesomeIcon onClick={this.toggleClass} size={"1x"} icon={faHeart} />
        </div>
      </div>
    )
  }
}

export default Favorite;