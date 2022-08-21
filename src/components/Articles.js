import React from "react";


const Articles = ({articles}, {web}) => {


    const listArticles = articles.map((article, index) => {

        return (

        <a href={"https://www.reddit.com" + article.data.permalink} target="_blank">
            <p>{article.data.title}
            <img src={article.data.thumbnail}></img></p>
            <p>Upvotes: {article.data.ups} Comments: {article.data.num_comments}</p>
       </a>)
            
    })

return (listArticles)

}

export default Articles;
