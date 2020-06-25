import React, { Component } from "react";
import Header from "./Header.jsx";
import dropDownArrow from "../../../../assets/icons/arrow_drop_down_white_192x192.png";

class CookieEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.onChangeUpdateCookie = this.onChangeUpdateCookie.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    const cookiesDeepCopy = JSON.parse(
      JSON.stringify(this.props.newRequestCookies.cookiesArr)
    );
    if (
      cookiesDeepCopy[cookiesDeepCopy.length - 1] &&
      cookiesDeepCopy[cookiesDeepCopy.length - 1].key !== ""
    )
      this.addCookie(cookiesDeepCopy);
  }

  componentDidUpdate() {
    const cookiesDeepCopy = JSON.parse(
      JSON.stringify(this.props.newRequestCookies.cookiesArr)
    );
    if (this.props.newRequestCookies.cookiesArr.length == 0) {
      this.addCookie([]);
    } else if (
      cookiesDeepCopy[cookiesDeepCopy.length - 1] &&
      cookiesDeepCopy[cookiesDeepCopy.length - 1].key !== ""
    ) {
      this.addCookie(cookiesDeepCopy);
    }
  }

  addCookie(cookiesDeepCopy) {
    cookiesDeepCopy.push({
      id: this.props.newRequestCookies.count,
      active: false,
      key: "",
      value: "",
    });

    this.props.setNewRequestCookies({
      cookiesArr: cookiesDeepCopy,
      override: false,
      count: cookiesDeepCopy.length,
    });
  }

  onChangeUpdateCookie(id, field, value) {
    let cookiesDeepCopy = JSON.parse(
      JSON.stringify(this.props.newRequestCookies.cookiesArr)
    );

    //find cookie to update
    let indexToBeUpdated = undefined;
    for (let i = 0; i < cookiesDeepCopy.length; i++) {
      if (cookiesDeepCopy[i].id === id) {
        indexToBeUpdated = i;
        break;
      }
    }
    //update
    cookiesDeepCopy[indexToBeUpdated][field] = value;

    //also switch checkbox if they are typing
    if (field === "key" || field === "value") {
      cookiesDeepCopy[indexToBeUpdated].active = true;
    }

    //determine if new cookie needs to be added
    let emptyCookiesCount = cookiesDeepCopy
      .map((cookie) => {
        return !cookie.key && !cookie.value ? 1 : 0;
      })
      .reduce((acc, cur) => {
        return acc + cur;
      });

    //depending on if cookies is empty, update store, or first add a new cookie
    if (emptyCookiesCount === 0) {
      this.addCookie(cookiesDeepCopy);
    } else {
      this.props.setNewRequestCookies({
        cookiesArr: cookiesDeepCopy,
        count: cookiesDeepCopy.length,
      });
    }
  }

  toggleShow() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    let cookiesArr = this.props.newRequestCookies.cookiesArr.map(
      (cookie, index) => {
        return (
          <Header
            content={cookie}
            changeHandler={this.onChangeUpdateCookie}
            key={index}
            Key={cookie.key}
            value={cookie.value}
          ></Header>
        );
      }
    );

    const arrowClass = this.state.show
      ? "composer_subtitle_arrow-open"
      : "composer_subtitle_arrow-closed";
    const cookiesContainerClass = this.state.show
      ? "composer_headers_container-open"
      : "composer_headers_container-closed";

    return (
      <div>
        <div
          className="composer_subtitle"
          onClick={this.toggleShow}
          style={this.props.stylesObj}
        >
          <img
            className={arrowClass}
            style={{ marginTop: "-6px" }}
            src={dropDownArrow}
          ></img>
          Cookies
        </div>
        <div className={cookiesContainerClass}>{cookiesArr}</div>
      </div>
    );
  }
}

export default CookieEntryForm;
