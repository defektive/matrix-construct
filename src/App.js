var React = require("react/lib/reactWithAddons");
var Dispatcher = require('flux').Dispatcher;
var Amygdala = require('Amygdala');
var Q = require('q');


import ChannelControl from "./modules/ChannelControl";

var AppStore = new Amygdala({
    'config': {
      // 'apiUrl': 'http://hdx-api.dev',
      'apiUrl': 'api',
      'idAttribute': 'url'
    },
    'schema': {
      'channel': {
        'url': '/channel/'
      },
      'input': {
        'url': '/input/'
      }
    }
  }
);

Q.all([
  AppStore.get("channel"),
  AppStore.get("input"),
]).done(makeArgFriendly(setup));
// setup()
function setup(channels, inputs) {
  channels = channels || [];
  inputs = inputs || [];

  var App = React.createFactory(React.createClass({
    render: function() {
      return (
        <div id="app-main">
        <div className="navbar navbar-default">
        <div className="navbar-header">
        <a className="navbar-brand" href="./">Matrix Construct</a>
        </div>
        </div>

        <div className="container-fluid">
        <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">

        </div>
        <div className="col-sm-9  col-md-10 main">
        <ChannelControl store={AppStore} channels={channels} inputs={inputs}/>
        </div>
        </div>
        </div>
        </div>
      );
    }
  }));

  React.render(
    <App />,
    document.body
  );
}

function makeArgFriendly(fn) {
  return function (a) {
    fn.apply(fn, a)
  }
}
