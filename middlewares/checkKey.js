export default {
   checkKey: (req,res,next) =>{
       if(req.headers.key == "123456"){
         next();
       }else{
           return res.status(404).json({
               status : 404,
               message : "Key invalide" 
           })
       }
   } 
}