import { useState } from "react"

interface ExpandableTextProps {
  children : string,
  maxChars : number
}

const ExpandableText = ({children,maxChars}: ExpandableTextProps) => {
  const [showMore, setShowMore] = useState(false); 
  const text = showMore ? children : children.substring(0, maxChars) + '...';
  if(children.length <= maxChars) {
    return <span>{children}</span>
  }
  return (
    <span>{text}<button onClick={()=>setShowMore(!showMore)}>{showMore ? 'less' : 'more'}</button></span>
  )
}

export default ExpandableText