const fs = require('fs');

module.exports.detailRead = function(req, res){
    if (!req.payload._id) {
        res.status(401).json({
          "message" : "UnauthorizedError: private profile"
        });
    } else {
            var obj;
            fs.readFile('config.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            console.log(obj);
            res.json(obj);
    });
    }
}