import React from "react";

import { Item } from "./item/Item.js";


export class ListItem extends React.Component {

  render() {
  let listItem;
  let items =  this.props.json;
    if (items.length !== 0) {
        const list = items.map((item, i) => {
        return (
            <Item
              key = {i}
              id = {item.id}
              src={item.src}
              title= {item.title}
              address = {item.address}
              time = {item.time}
              location = {item.location}
            />
          )
      })
      listItem = list;
    }
     return (
      <div className="list-item">
          {listItem}
      </div>
    );
  }
}





