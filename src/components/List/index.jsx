import React, { Component } from "react";
import Item from "./item.jsx";
import Grid from "@material-ui/core/Grid";
import "./index.css";

class List extends Component {
  render() {
    return (
      <div>
        <Grid spacing={24} className="posts_container">
          {/* 앞서 props로 내보낸 posts를 map으로 열거 */}
          {this.props.posts.map((post, index) => (
            <Item {...post} key={index} id={post.id} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default List;
