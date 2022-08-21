import React, {useEffect, useState} from "react";
import Articles from "../components/Articles";
import TitleBar from "../components/TitleBar";

const ArticleContainer = ({subreddits}) => {

  const[articles, setArticles] = useState([]);
  const[web_address_code, setWeb_Address_Code] = useState([]);

  useEffect(() => {
    loadSubReddit(subreddits[2].url)
    }, [subreddits])

    const loadSubReddit = url => {
        fetch(url)
        .then(res => res.json())
        .then(articles => setArticles(articles.data.children))
        .catch(err => console.error);
    }

    const handleSelectChange = event => {
        loadSubReddit(event.target.value);
    }

  return (
    <div>
      <header className="App-header">
        <TitleBar
        handleSelectChange={handleSelectChange}
        subreddits={subreddits}
        />
      </header>
      <li>
      <Articles articles={articles} web_address_code={web_address_code}/>
      </li>
      
    </div>
  );
}

export default ArticleContainer;