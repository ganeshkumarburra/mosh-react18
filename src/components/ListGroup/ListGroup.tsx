import { useState } from "react";
import styles from  './ListGroup.module.css'

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem : (item: string) => void;
}

function ListGroup({ items, heading , onSelectItem}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <h2>Elements not found</h2>}
      <ul className={[styles['list-group'] , styles.fontSize ].join(' ')}>
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* {items.length == 0 ? (
        <h2>Elements not found</h2>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
}

export default ListGroup;
