import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Banglore", "Tokyo", "Hyderabad", "California"];
  const [showAlert, setShowAlert] = useState(false);

  const onSelectItem = (item: string) => {
    console.log(item);
  };
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
    </div>
  );
}

export default App;
