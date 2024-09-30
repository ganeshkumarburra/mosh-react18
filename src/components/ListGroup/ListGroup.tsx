import { useState } from "react";
import styled from "styled-components";
import  './ListGroup.css'


const List = styled.ul`
list-style: none;
`

interface ListItemProps {
  $active : string
}

const ListItem = styled.li<ListItemProps>`
padding: 5px;
background-color: ${(props) => (props.$active === 'true' ? 'blue' : 'none')};
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
            $active = {(selectedIndex === index).toString() }
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
    </>
  );
}

export default ListGroup;
