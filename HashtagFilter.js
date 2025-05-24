import React from 'react';
import { useHistory } from 'react-router-dom';

const HashtagFilter = ({ hashtag }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/hashtag/${hashtag}`);
  };

  return (
    <span className="hashtag" onClick={handleClick}>
      #{hashtag}
    </span>
  );
};

export default HashtagFilter;