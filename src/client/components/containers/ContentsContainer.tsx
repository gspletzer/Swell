import * as React from "react";

// import GraphContainer from "./GraphContainer.jsx";
import ReqResContainer from "./ReqResContainer.jsx";
import NavBarContainer from "./NavBarContainer.jsx";

export class ContentsContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="contents">
        {/* <GraphContainer /> */}
        <NavBarContainer />
        <ReqResContainer />
      </div>
    );
  }
}

// export default Contents;