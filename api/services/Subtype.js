var schema = new Schema({
    name:String,
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        index: true
    },
    question:[{
        type: Schema.Types.ObjectId,
        ref: 'Question',
        index: true
    }]

    
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Subtype', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    get:function(data,callback){
        
    },
    

    

};

    
module.exports = _.assign(module.exports, exports, model);