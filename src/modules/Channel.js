var React = require("react/lib/reactWithAddons");


import InputButton from "./InputButton";

export default  React.createFactory(React.createClass({
  render: function() {

    var rows = this.props.inputs.map(function (inp) {
      return (<InputButton channel={this.props.channel.channel} input={inp.id} name={inp.name}  />)
    }.bind(this));

    return (
      <div class="channel">
        <h2>{this.props.channel.name}</h2>
        {rows}
      </div>
    );
  }
}));
