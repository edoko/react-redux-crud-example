import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // edit 했을 때를 감지하기 위한 state 설정
      isEdit: false,
      // update 했을 시 비어있는 state로 인해 props를 여기에 넣음
      title: this.props.title,
      content: this.props.content
    };
  }

  // handleChange* 는 input에 text를 입력했을 때 각 state에 집어넣음
  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  handleChangeContent = event => {
    this.setState({ content: event.target.value });
  };

  // Post를 지우는 기능
  removePost = () => {
    this.props.removePost(this.props.id);
  };

  // Post를 수정할 때,
  updatePost = () => {
    this.setState({ isEdit: true });
  };

  // 완료 버튼을 누르면 props.updatePost를 실행, 그리고 isEdit는 false로 변경
  donePost = () => {
    this.props.updatePost(this.props.id, this.state.title, this.state.content);
    this.setState({ isEdit: false });
  };

  // 삼항연산자를 쓰기 위해 input 태그를 따로 생성.
  renderTitleInput = () => {
    return (
      <input
        onChange={this.handleChangeTitle}
        defaultValue={this.props.title}
        type="text"
        required
      />
    );
  };

  renderContentInput = () => {
    return (
      <input
        onChange={this.handleChangeContent}
        defaultValue={this.props.content}
        type="text"
        required
      />
    );
  };

  // 마찬가지로 삼항연산자를 사용하기 위해 따로 생성.
  renderUpdateButton = () => {
    return <button onClick={this.updatePost}>EDIT</button>;
  };

  renderDoneButton = () => {
    return <button onClick={this.donePost}>DONE</button>;
  };

  render() {
    console.log(this.props);
    return (
      <li>
        {/* isEdit이 true일 경우, renderTitleInput이, 아닐 경우 this.props.title을 출력 (아래도 동일) */}
        {this.state.isEdit ? this.renderTitleInput() : this.props.title}
        {this.state.isEdit ? this.renderContentInput() : this.props.content}
        <br />
        {this.state.isEdit
          ? this.renderDoneButton()
          : this.renderUpdateButton()}
        <button onClick={this.removePost}>REMOVE</button>
      </li>
    );
  }
}

// redux에 만들어 둔 dispatch 함수를 props로 가져옴
const mapDispatchToProps = dispatch => {
  return {
    removePost: id => {
      dispatch(actions.removePost(id));
    },
    updatePost: (id, title, content) => {
      dispatch(actions.updatePost(id, title, content));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
