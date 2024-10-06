import { ChangeEvent, useState } from "react";

import './App.css';
import Message from "./components/Message";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText";

function App() {

  const [cart,setCart] = useState({
    id: 1,
    items: [
    {id:1,name:"Product 1", "quantity":1},
    {id:2,name:"Product 2", "quantity":1}
  ]
  })
  const handleOrder = () => {
    const id =1;
    setCart(prevState => {
       return {
        ...prevState,
        items : prevState.items.map(item=>{
          return item.id === id ? {...item,quantity: item.quantity+1 } : item
        })
       }
    })  
  }

  const [game,setGame] = useState({
    id: 1,
    player: {
      name : 'Mohan K'
    }
  })
  const handlerCick = () => {
    setGame({...game, player: {...game.player , name: "Sasi"}})
  }

  const [bugs,setBugs] = useState([
    {id:1, title: 'Bug1', fixed: false},
    {id:2, title: 'Bug1', fixed: false},
    {id:3, title: 'Bug2', fixed: true}
  ])
  
  const [bugId,setBugId] = useState(0); 

  const handleBugIdChange = ( event : ChangeEvent<HTMLInputElement>) => {
    setBugId(parseInt(event.target.value));
  }

  const handleReosolveBug = () =>{
    // setBugs(prevState => {
    //   return prevState.map(item=> 
    //     item.id === bugId ? {...item, fixed: true} : item)
    // })

    setBugs(produce(draft=>{
      const bug = draft.find(item=> item.id === bugId && item);
      bug!.fixed = true;
    }))
  }
  
  return (
    <div>
      <p>Player Name: {game.player.name}</p>
      <button onClick={handlerCick}>Change</button>

      <p>Cart: {JSON.stringify(cart)}</p>
      <button onClick={handleOrder}>Order</button>

      <Message />

      <input type="text" onChange={handleBugIdChange} />
      <p>Bugs {JSON.stringify(bugs)}</p>
      <button onClick={handleReosolveBug}>Resolve Bug</button>
      {/* <Message /> */}
      {/* <Message /> */}

      <br />
      <br />

      <ExpandableText maxChars={20} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam fugit nisi, enim rerum dolor soluta porro voluptate quaerat cum blanditiis ut beatae quo ipsa nam nesciunt delectus iusto? Reiciendis, ad repudiandae perferendis totam fugit praesentium, sit, fuga ex natus eos quae placeat earum? Reprehenderit debitis labore, explicabo nulla at cumque eius tempore libero maiores, earum animi odit delectus beatae dolorum, nihil ducimus obcaecati neque. Eaque molestiae odit quisquam dolor? Consequatur soluta impedit sapiente illo. Totam ut distinctio autem qui eos cumque, soluta nisi iure architecto dolorem exercitationem facilis iste, maxime assumenda consequatur. Expedita iure fugit voluptatibus commodi possimus eaque.  
      </ExpandableText>
    </div>
  );
}

export default App;
