import React from 'react';

const TitleBar = ({handleSelectChange, subreddits}) =>{
  return (
    <div>
      <h1>Choose your kitties!</h1>
      <select onChange={handleSelectChange}>
        {subreddits.map(subreddit => {
          return <option key={subreddit.name} value={subreddit.url}>{subreddit.name}</option>
        })}
      </select>
    </div>
  );
};

export default TitleBar;