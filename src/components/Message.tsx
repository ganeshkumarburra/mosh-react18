let count =0;
function Message(){
  count++;
  console.log("Message", count)
  return <h1>Hello Ganesh {count}</h1>
}

export default Message;