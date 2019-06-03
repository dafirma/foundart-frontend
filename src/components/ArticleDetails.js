import React from 'react';
import '../stylesheets/ArticleDetails.css'

 const ArticleDetails = (props) =>{
   const {article} = props.location.state;
   
   return(
     <div>
       <div>
       <img  className='img-article-details' src ={article.image} alt=''/>
       </div>
       <p>{article.price}</p>
       <p>{article.title}</p>
       <p>{article.description}</p>
    </div>
   )
 }
export default ArticleDetails