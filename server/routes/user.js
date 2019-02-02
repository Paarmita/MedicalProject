const express = require('express');
const app = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const passport = require('passport');

const Users = require('../models/User');

app.get("/test", (req, res) => res.json({ msg: "Users work" }));

app.post('/register',(req,res)=>{

	bcrypt.hash(req.body.password, 10, function(err, hash) {

		if(err){
			return res.json({
				error:err
			});
		}
		else{

			User.find({email:req.body.email})
			.exec((err,result) =>{

				if(result.length >= 1){
					res.json({
						success:false,
						error:'User Already Exists'
					})
				}
				else{

					const user = new User({
						username:req.body.username,
						email:req.body.email,
						password: hash
					})

					user.save().then((err,user)=>{
						res.json({
							success:true
						})
					})
					.catch((err)=>{
						res.json({
							error:err
						})
					})
				}
			})
		}	
	});
})

app.post('/authenticate',(req,res)=>{

	User.findOne({email:req.body.email},(err,user)=>{

		if(err){
			res.json({
					error:err
			})
		}
		else{
				bcrypt.compare(req.body.password, user.password, (err, result) => {

					if(result == true){

						const new_user = {
							email:user.email,
							password:user.password
						}

						jwt.sign(new_user,config.secretKey, {expiresIn : 60*60*24},(err,token)=>{

							if(err){
								res.json({
									error:err
								})
							}
							else{
								res.json({
									user:user,
									authenticate:true,
									token:token
								})
							}

						});
								
					}
					else
					{
							res.json({
								error:"Incorrect Password"
							})
					}
			});
		}
	})
})




module.exports = app;