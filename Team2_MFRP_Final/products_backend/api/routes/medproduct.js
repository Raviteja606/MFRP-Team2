const Medproduct = require('../../models/medproduct')

module.exports = function (router) {
     // GET: the medproduct info
     router.get('/medproduct',function (req,res) {
         Medproduct.find({}, (err,medproduct) => {
             //check if error was found or not
             if (err) {
                 res.json({ success: false,message: err}); // Return error message
             } else {
                 // check if medproduct were found in database
                 if (!medproduct){
                     res.json({success:false,message:'No medproduct found.'}); // return error of no medproduct found
                 } else {
                    //  res.json({ success:true,medproduct: medproduct}); // return success and medproduct array
                 res.json(medproduct);
                }
             }
         })
        })
      //GET:specific
      router.get('/medproduct/:_id',async(req,res)=>{
          try{
              const post = await Medproduct.findById(req.params._id);
              res.json(post);
          }
          catch(err){
              res.json({message:err});
          }
      })
        //POST: Get new medproduct information...
    router.post('/medproduct',function(req,res){
        let note = new Medproduct(req.body)
        note.save(function (err,note){
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//PUT--update the existing record of medproduct
router.put('/updateMedproduct/:_id',(req,res) => {
    //check if id is provided
    if (!req.body._id) {
        res.json({success:false,message:'No medproduct is provided'}); // return error message
    } else {
        // check if id exists in database
        Medproduct.findOne({_id:req.body._id}, (err,medproduct) => {
        //check if id is valid ID
        if (err) {
            res.json({ success:false,message:'Not a valid medproduct id'}); // return error message
        } else {
            medproduct.ProductId = req.body.ProductId;
            medproduct.ProductName = req.body.ProductName;
            medproduct.Img = req.body.Img;
            medproduct.Brand = req.body.Brand;
            medproduct.Drug = req.body.Drug;
            medproduct.Price = req.body.Price;
            medproduct.ManufacturingDate = req.body.ManufacturingDate;
            medproduct.ExpiryDate = req.body.ExpiryDate;
            medproduct.qnt = req.body.qnt; 
            medproduct.description = req.body.description;
            medproduct.category = req.body.category;   
            medproduct.save((err) => {
                if (err) {
                    res.json({success:false,message:err}); //return error message
                }else {
                    res.json({success:true,message:'Medproduct Updated!'}); //return success message
                }
            });
        }
        });
    }
});
//DELETE---delete the record in medproduct
router.delete('/deleteMedproduct/:_id',(req,res) => {
    //check if id was provided in parameters
    if(!req.params._id){
        res.json({ success:false,message:'No id provided'}); //return error message
    } else {
        //check id id is found in database
        Medproduct.findOne({_id: req.params._id},(err,medproduct) => {
            //check if error was found
            if (err) {
                res.json({success:false,message:'Invalid id'}); // return error message
            } else {
                //remove the medproduct from database
                medproduct.remove((err) => {
                    if(err) {
                        res.json({ success: false,message:err}); //return error message
                    } else{
                        res.json({success:true,message:'Medproduct deleted!'}); //return success message
                    }
                });
            }
        });
    }
});
}