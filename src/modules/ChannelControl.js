var React = require("react/lib/reactWithAddons");

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

    return (
      <div id="channel-control">
        <div className="row">
          <h2>Channel A</h2>
          <button type="button" data-channel="A" data-input="1" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 1
          </button>

          <button type="button" data-channel="A" data-input="2" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 2
          </button>

          <button type="button" data-channel="A" data-input="3" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 3
          </button>

          <button type="button" data-channel="A" data-input="4" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 4
          </button>
        </div>


        <div className="row">
          <h2>Channel B</h2>
          <button type="button" data-channel="B" data-input="1" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 1
          </button>

          <button type="button" data-channel="B" data-input="2" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 2
          </button>

          <button type="button" data-channel="B" data-input="3" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 3
          </button>

          <button type="button" data-channel="B" data-input="4" data-loading-text="Loading..." className="btn btn-primary" autocomplete="off">
          Input 4
          </button>
        </div>
      </div>
    );
  }
}));
