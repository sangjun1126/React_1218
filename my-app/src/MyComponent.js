import { Component } from "react";
import Proptypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: Proptypes.string,
    favoriteNumber: Proptypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다 <br />
        children 값은 {children}
        입니다
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: Proptypes.string,
  favoriteNumber: Proptypes.number.isRequired,
};

export default MyComponent;
