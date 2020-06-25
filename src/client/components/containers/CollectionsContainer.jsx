import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Collection from "../display/Collection.jsx";
import collectionsController from "../../controllers/collectionsController";

const mapStateToProps = (store) => ({
  collections: store.business.collections,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFromCollection: (collection) => {
    dispatch(actions.deleteFromCollection(collection));
  },
  collectionToReqRes: (reqResArray) => {
    dispatch(actions.collectionToReqRes(reqResArray));
  },
});

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let collectionComponents = this.props.collections.map((collection, idx) => {
      return (
        <Collection
          content={collection}
          key={idx}
          deleteFromCollection={this.props.deleteFromCollection}
          collectionToReqRes={this.props.collectionToReqRes}
        />
      );
    });

    return (
      <div className={"collections-container"}>
        <h1>Collections</h1>
        <div className="collection-import-container">
          <button
            className="import-collections"
            onClick={collectionsController.importCollection}
          >
            Import Collection
          </button>
        </div>
        {collectionComponents}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsContainer);
