var React = require("react/lib/reactWithAddons");

export default  React.createFactory(React.createClass({
  render: function() {
    return (
      <button type="button"
        data-channel={this.props.channel}
        data-input={this.props.input}
        data-loading-text="Loading..."
        className="btn btn-primary btn-lg"
        autocomplete="off">{this.props.name}</button>
    );
  }
}));
