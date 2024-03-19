// using promises 
const asyncHandler = (requestHandler)=>{
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>{next(error)})
    }
}

export  {asyncHandler}



//  using try catch blocks for it
// const asyncHandler = (fn) => async(req, res, next) =>{
//     try{
//         await fn(req, res, next);
//     }catch(error){
//         res.status(500).json({
//             message:error.message,
//             success:false
//         })

//     }
// }
