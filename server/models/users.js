



var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	username:{	type:String, required:true },
	email:{
				type:String,
				required:true,
				unique:true,
				match:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/		  
	},
   password:{
				 type:String,
				 required:true    
	}
});
module.exports = mongoose.model('User',UserSchema);
