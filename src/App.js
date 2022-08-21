import './App.css';
import React, {useEffect, useState} from "react";
import ArticleContainer from './container/ArticleContainer';

function App() {
  const subreddits= [
    {name: "Cats", url: "https://www.reddit.com/r/cats/.json"},
    {name: "Cats with jobs", url: "https://www.reddit.com/r/Catswithjobs/.json"},
    {name: "Chonkers", url: "https://www.reddit.com/r/Chonkers/.json"},
    {name: "Cats are assholes", url: "https://www.reddit.com/r/CatsAreAssholes/.json"}
  ]

  return (
    <div className="App">
        <ArticleContainer subreddits={subreddits} />
      
    </div>
  );
}

export default App;
