var React = require("react");
var connect = require("react-redux").connect;

var FullPost = require("./full-post");

var mapStateToProps = function(state, props){
  return {
    fullPostClass: state.fullPostClass,
    post: state.displayPost
  }
}

var FullPostContainer = connect(mapStateToProps)(FullPost);

module.exports = FullPostContainer; 