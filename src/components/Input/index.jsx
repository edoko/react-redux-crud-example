import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  // handleChange* 는 input에 text를 입력했을 때 각 state에 집어넣음
  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  handleChangeContent = event => {
    this.setState({ content: event.target.value });
  };

  // submit 했을 시, props.addPost를 실행
  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.title, this.state.content);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChangeTitle}
          value={this.state.title}
          type="text"
          placeholder="Add title"
          required
        />
        <input
          onChange={this.handleChangeContent}
          value={this.state.content}
          type="text"
          placeholder="Add content"
          required
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

// redux에 만들어 둔 dispatch 함수를 props로 가져옴
const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, content) => {
      dispatch(actions.addPost(title, content));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Input);
