const fs = require('fs');

module.exports.detailRead = function(req, res){
    if (!req.payload._id) {
        res.status(401).json({
          "message" : "UnauthorizedError: private profile"
        });
    } else {
            var obj
            fs.readFile('config.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data)
            res.json(obj)
    });
    }
}

module.exports.detailWrite = function(req, res){
        var obj
        console.log(JSON.stringify(req.body));
        try{
          fs.writeFile('config.json', JSON.stringify(req.body), function(err,result){
            if(err)
            console.log(err)
          })
          obj = JSON.stringify(req.body)
        } catch(err){
          console.error(err)
        }
        res.json(obj)
}