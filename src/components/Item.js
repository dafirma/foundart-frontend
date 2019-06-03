import React, { Component } from 'react';
import '../stylesheets/Item.css';
import { Link } from 'react-router-dom';


class Item extends Component {
 
  render(){
    const article = this.props;
    return(
      <div className='container-item-item'>
        <li>
          <Link to={{pathname:`/article/${article._id}`, state:{article}}} >
            <div>
              <img className="image-item" src={article.image} alt=''/>
            </div>
          </Link>
          <p>{article.price}</p>
          <p>{article.title}</p>
          <p>{article.description}</p>
        </li>
      </div>
    )
  }
}
export default Item;