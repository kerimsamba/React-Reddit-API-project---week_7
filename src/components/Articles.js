import React from "react";
import './Articles.css';



const Articles = ({ articles }, { web }) => {


    const listArticles = articles.map((article, index) => {

        return (
            <div className="listItems">
                <ul>
                    <a href={"https://www.reddit.com" + article.data.permalink} target="_blank">
                        <p>
                            <div className="twoBox">
                                <div className="firstBox">
                                    <div className="leading">
                                    <img className="zoom" src={article.data.thumbnail} width="75px" height="75px"></img>
                                </div>
                                </div>
                                <div className="secondBox">
                                <div className="leading">
                                    <ul>
                                    <h3>{article.data.title}</h3>
                                    
                                    <p>Upvotes: {article.data.ups} Comments: {article.data.num_comments}</p>
                                    </ul>
                                    </div>
                                    </div>
                            </div>
                        </p>

                    </a>
                </ul>

            </div>)
    })

    return (listArticles)

}

export default Articles;
