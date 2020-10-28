/* fetch all users user_totaldocs and user_totalthings values and want to sum those variables.*/
import { Schema, model } from "mongoose";


var userSchema = Schema({
    local : {
      user_id          : String,
      user_totaldocs   : Number,
      user_totalthings     : Number
    
    }
  });
  var User = model('User', userSchema);
  
  /*For example, to calculate sums (per user document) you can use the $add expression in a $project stage:*/
  User.aggregate(
      // Limit to relevant documents and potentially take advantage of an index
      { $match: {
          user_id: "foo"
      }},
  
      { $project: {
          user_id: 1,
          total: { $add: ["$user_totaldocs", "$user_totalthings"] }
      }}
  )
  
  /* To calculate totals across multiple documents you need to use a $group stage with a $sum accumulator, for example: */
  User.aggregate(
      { $group: {
          _id: null,
          total:       { $sum: { $add: ["$user_totaldocs", "$user_totalthings"] } },
          totaldocs:   { $sum: "$user_totaldocs" },
          totalthings: { $sum: "$user_totalthings" }
      }}
  )
  /*
  A group _id of null will combine values from all documents passed to the $group stage, 
    but you can also use other criteria here (such as grouping by user_id). 
    i.e. _id: user_id
  */