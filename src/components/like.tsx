import { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

interface props {
  onLike: () => void;
}

function like({ onLike }: props) {
  const [isLike, setLike] = useState(true);

  if (isLike)
    return (
      <AiFillLike
        cursor='pointer'
        size='100'
        color='blue'
        onClick={() => {
          setLike(false);
          onLike();
        }}
      />
    );
  else
    return (
      <AiOutlineLike
        cursor='pointer'
        size='100'
        onClick={() => {
          setLike(true);
        }}
      />
    );
}

export default like;
