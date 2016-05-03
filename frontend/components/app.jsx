var React = require('react');
var Navbar = require('./navbar.jsx');
var PlaylistBar = require('./playlist_bar.jsx');
var PlayerStore = require('../stores/player_store.js');

var App = React.createClass({
  getInitialState: function() {
    return { showPlaylistBar: false };
  },

  componentDidMount: function() {
    this.listenerToken = PlayerStore.addListener(this.togglePlaylistBar);
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  togglePlaylistBar: function() {
    this.setState({ showPlaylistBar: PlayerStore.showPlaylistBar() });
  },

  render: function() {
    var playlistBar;
    if (this.state.showPlaylistBar) {
      playlistBar = <PlaylistBar show={this.state.showPlaylistBar}/>;
    } else {
      playlistBar = <div/>;
    }

    return (
      <div id="app-wrapper">
        <Navbar/>
        {playlistBar}
        <video preload autoPlay loop>
          <source
            src="https://res.cloudinary.com/chillsound/video/upload/v1461805151/Lightmirror_frzgxe.mp4"
            type="video/mp4"/>
        </video>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
