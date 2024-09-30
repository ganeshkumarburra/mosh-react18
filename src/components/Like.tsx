import { AiFillHeart , AiOutlineHeart } from "react-icons/ai"

interface LikeProps {
  isLiked : boolean,
  onLike : () => void
}

const Like = ({isLiked , onLike}:LikeProps) => {

  if(isLiked){
    return (
      <AiFillHeart color="red" onClick={onLike} />
    )
  }
  return <AiOutlineHeart onClick={onLike} />
}


export default Like