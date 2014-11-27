var React = require("react/lib/reactWithAddons");

export default  React.createFactory(React.createClass({



  componentDidMount: function() {
    $("#channel-a input[type=radio]").change(function (e){
      this.props.store.update('channel', {'url': '/channel/A/', 'channel': {input: e.target.value}}).done(function() {  });
    }.bind(this))

    $("#channel-b input[type=radio]").change(function (e){
      this.props.store.update('channel', {'url': '/channel/B/', 'channel': {input: e.target.value}}).done(function() {  });
    }.bind(this))
  },

  componentWillUnmount: function() {
  },


  render: function() {

    return (
      <div>
      <div className="row">
        <div className="btn-group" id="channel-a" data-toggle="buttons">
          <label className="btn btn-primary active">
            <input type="radio" name="input-a" id="input-1" value="1" autocomplete="off" /> Input 1
          </label>
          <label className="btn btn-primary">
            <input type="radio" name="input-a" id="input-2" value="2" autocomplete="off" /> Input 2
          </label>
          <label className="btn btn-primary">
            <input type="radio" name="input-a" id="input-3" value="3" autocomplete="off" /> Input 3
          </label>
          <label className="btn btn-primary">
            <input type="radio" name="input-a" id="input-4" value="4" autocomplete="off" /> Input 3
          </label>
        </div>
      </div>


      <div className="row">
        <div className="btn-group" id="channel-b" data-toggle="buttons">
          <label className="btn btn-primary active">
            <input type="radio" name="input-b" id="input-1" value="1" autocomplete="off" /> Input 1
          </label>
          <label className="btn btn-primary">
            <input type="radio" name="input-b" id="input-2" value="2" autocomplete="off" /> Input 2
          </label>
          <label className="btn btn-primary">
            <input type="radio" name="input-b" id="input-3" value="3" autocomplete="off" /> Input 3
          </label>
          <label className="btn btn-primary">
            <input type="radio" name="input-b" id="input-4" value="4" autocomplete="off" /> Input 3
          </label>
        </div>
      </div>
      </div>
    );
  }
}));
