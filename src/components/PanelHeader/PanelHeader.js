import React from "react";

class PanelHeader extends React.Component {
  render() {
    return (
      <div className="mt-6">
        <div
          className={
            "panel-header " +
            (this.props.size !== undefined
              ? "panel-header-" + this.props.size
              : "")
          }
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default PanelHeader;