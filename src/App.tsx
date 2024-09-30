import { useState } from "react";
import {BsCalendar} from 'react-icons/bs'
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css';
import ButtonCustom from "./components/ButtonCustom";
import Like from "./components/Like";

function App() {
  const items = ["Banglore", "Tokyo", "Hyderabad", "California"];
  const [showAlert, setShowAlert] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  const onLike = () =>{
    setIsLiked(prevState => !prevState);
  }
  return (
    <div>
      <ListGroup items={items} heading="cities" onSelectItem={onSelectItem} />
      <Alert onClose={() => setShowAlert(false)} showAlert={showAlert}>
          <p>ContentNav 24.9.0.0 release done successfully</p>
      </Alert>
      <Button
        type="primary"
        onClick={() => {
          setShowAlert(true);
        }}
      >
        Submit
      </Button>
      <BsCalendar color="red"/>
      <br />
      <ButtonCustom onClick={()=> {
        console.log("clicked")
      }} >
        Submit V2
      </ButtonCustom>

      <br />
      <Like isLiked={isLiked} onLike={onLike}/>
    </div>
  );
}

export default App;
