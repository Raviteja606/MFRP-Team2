const User = require('../../models/user')

module.exports = function (router) {
     // GET: the user info
     router.get('/user',function (req,res) {
         User.find({}, (err,user) => {
             //check if error was found or not
             if (err) {
                 res.json({ success: false,message: err}); // Return error message
             } else {
                 // check if user were found in database
                 if (!user){
                     res.json({success:false,message:'No user found.'}); // return error of no user found
                 } else {
                    //  res.json({ success:true,user: user}); // return success and user array
                 res.json(user);
                }
             }
         })
        })
      //GET:specific
      router.get('/user/:_id',async(req,res)=>{
          try{
              const post = await User.findById(req.params._id);
              res.json(post);
          }
          catch(err){
              res.json({message:err});
          }
      })
        //POST: Get new user information...
    router.post('/user',function(req,res){
        let note = new User(req.body)
        note.save(function (err,note){
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//PUT--update the existing record of user
router.put('/updateUser/:_id',(req,res) => {
    //check if id is provided
    if (!req.body._id) {
        res.json({success:false,message:'No user is provided'}); // return error message
    } else {
        // check if id exists in database
        User.findOne({_id:req.body._id}, (err,user) => {
        //check if id is valid ID
        if (err) {
            res.json({ success:false,message:'Not a valid user id'}); // return error message
        } else {
            user.Firstname = req.body.Firstname;
            user.Lastname = req.body.Lastname;
            user.Email = req.body.Email;
            user.dob = req.body.dob;
            user.contactno = req.body.contactno;
            user.Pwd = req.body.Pwd;
            user.cnfPwd = req.body.cnfPwd;
            user.role = req.body.role;   
            user.save((err) => {
                if (err) {
                    res.json({success:false,message:err}); //return error message
                }else {
                    res.json({success:true,message:'User Updated!'}); //return success message
                }
            });
        }
        });
    }
});
//DELETE---delete the record in medproduct
router.delete('/deleteUser/:_id',(req,res) => {
    //check if id was provided in parameters
    if(!req.params._id){
        res.json({ success:false,message:'No id provided'}); //return error message
    } else {
        //check id id is found in database
        User.findOne({_id: req.params._id},(err,user) => {
            //check if error was found
            if (err) {
                res.json({success:false,message:'Invalid id'}); // return error message
            } else {
                //remove the user from database
                user.remove((err) => {
                    if(err) {
                        res.json({ success: false,message:err}); //return error message
                    } else{
                        res.json({success:true,message:'User deleted!'}); //return success message
                    }
                });
            }
        });
    }
});
}