var React = require("react/lib/reactWithAddons");
import Channel from "./Channel";
export default  React.createFactory(React.createClass({
  componentDidMount: function() {
    $("#channel-control button").click(function (e){
      var $target = $(e.target),
          channel = $target.data("channel"),
          input = $target.data("input");

      this.props.store.update('channel', {'url': '/channel/'+ channel + '/', 'channel': {input: input}}).done(function() {
        $btn.button('reset');
      });
    }.bind(this))
  },

  componentWillUnmount: function() {
  },

  render: function() {
    var channels = this.props.channels.map(function (chan) {
      return (<Channel channel={chan} inputs={this.props.inputs} store={this.props.store}  />)
    }.bind(this));

    return (
      <div id="channel-control">
        {channels}
      </div>
    );
  }
}));
