import React from 'react'
//import Image from 'react-bootstrap/Image'
import '../Components_styles/History.css'
import '../custom.scss'


class History extends React.Component {
  render() {
    return (
      <div className="Main_div" class="container">
        <div className="Section_type_text">
          <h1 className="Section_title"> Section title </h1>
          <p className="Section_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div class="media" className="Section_type_picture">
          <img src="img_girl.jpg" width="50px" height="50px" class="mr-3"/>
          <div class="media-body">
            <h5> Media heading </h5>
            <p className="Section_text">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default History;
