const router = require("express").Router();

const {hasAdminAuthorization} = require("../controllers/diseases");


router.get('/diseases',hasAdminAuthorization,function(req,res){
    Disease.find({},function(err,diseases){
        if(err){
            return res.status(400).json({
                error: err
            })
        } else {
            res.json(diseases);
        }
    })
});

router.get('/disease/:diseaseId',hasAdminAuthorization,function(req,res){
    Disease.findById(req.params.diseaseId,function(err, dis){
        if(err || !dis){
            return res.status(400).json({
                error: err
            })
        }
        res.json(dis);
    })
})

router.post('/disease',hasAdminAuthorization,function(req,res){
    const dis = new Disease(req.body);
    dis.save(function(err){
        if(err){
            res.status(400).json({
                error: err
            })
        }
        else{
            res.json("Disease added "+dis);
        }
    })
})

router.put('/disease/:diseaseId',hasAdminAuthorization,function(req,res){
    Disease.findById(req.params.diseaseId, function(err, dis){
        if(err || !dis){
            return res.status(400).json({
                error: err
            })
        }
        dis=req.body;
        dis.save();
        res.json("Disease updated "+dis);
        // res.redirect('/diseases');
    })
})

router.delete('/disease/:diseaseId',hasAdminAuthorization,function(req,res){
    Disease.findByIdAndDelete(req.params.diseaseId,function(err){
        if(err)
            return res.status(400).json({error: err});
        res.json("Disease deleted");
    })
})

module.exports = router;