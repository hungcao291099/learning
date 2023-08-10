const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Course = new Schema({
    name:{type: String},
    description:{type: String},
    videoID:{type: String},
    image:{type: String},
    slug: { type: String, slug: 'name', unique: true}
},{
    timestamps: true
})
// add plugins 

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true,
});
module.exports = mongoose.model('Course', Course); 