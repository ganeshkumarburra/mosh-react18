import { useState } from "react";
import styled from "styled-components";
import  './ListGroup.css'


const List = styled.ul`
list-style: none;
`

interface ListItemProps {
  active : boolean
}

const ListItem = styled.li<ListItemProps>`
padding: 5;
background : ${(props => props.active ? 'blue' : 'node')}
}
`

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
      <List>
        {items.map((item, index) => (
          <ListItem
            // className={`list-group-item ${
            //   selectedIndex === index ? "active" : ""
            // }`}
            active = {selectedIndex === index ? true : false}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>

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
