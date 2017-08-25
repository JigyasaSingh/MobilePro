var schema = new Schema({
    name:String,
    image:String,
    subtype:{
        type: Schema.Types.ObjectId,
        ref: 'Subtype',
        index: true
    },
});

schema.plugin(deepPopulate, {
    
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Subcategory', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    get:function(data,callback){

    },

    

    

};

    
module.exports = _.assign(module.exports, exports, model);