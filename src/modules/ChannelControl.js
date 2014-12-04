var React = require("react/lib/reactWithAddons");
import Channel from "./Channel";


var testChannels = [
  {
    channel: 'A',
    name: 'Living Room'
  },
  {
    channel: 'B',
    name: 'Bedroom'
  }
]

var testInputs = [
{
  name: 'Cameras',
  id: 1
},
{
  name: 'Xbox',
  id: 2
},
{
  name: 'PS3',
  id: 3
},
{
  name: 'Pi',
  id: 4
}
]

export default  React.createFactory(React.createClass({
  componentDidMount: function() {
    $("#channel-control button").click(function (e){
      var $target = $(e.target),
          channel = $target.data("channel"),
          // $btn = $target.button('loading'),
          input = $target.data("input");

      this.props.store.update('channel', {'url': '/channel/'+ channel + '/', 'channel': {input: input}}).done(function() {
        $btn.button('reset');
      });
    }.bind(this))
  },

  componentWillUnmount: function() {
  },


  render: function() {
    var channels = testChannels.map(function (chan) {
      return (<Channel channel={chan} inputs={testInputs}  />)
    }.bind(this));

    return (
      <div id="channel-control">
        {channels}
      </div>
    );
  }
}));
