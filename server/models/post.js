var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
  subject: {type:String, required: true},
  body: {type:String},
  img: {type:String},
  timestamp: {type:Date},
  draft: {type: Boolean, required: true}
});

var Post = mongoose.model("Post",PostSchema);

module.exports = Post;