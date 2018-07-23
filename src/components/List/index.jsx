import React, { Component } from "react";
import Item from "./item.jsx";

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* 앞서 props로 내보낸 posts를 map으로 열거 */}
          {this.props.posts.map((post, index) => (
            <Item {...post} key={index} id={post.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
