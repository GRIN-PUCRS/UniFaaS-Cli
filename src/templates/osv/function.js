module.exports = function (req, res) { 
  if (req.query.name || (req.body && req.body.name)) {
   res.json({
         body: "Hello " + (req.query.name || req.body.name)
     });
   }
   else {
     res.json({
         status: 400,
         body: "Please pass a name on the query string or in the request body"
     });
   }
 }