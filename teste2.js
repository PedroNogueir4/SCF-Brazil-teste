var data =  require("./fakeData");
const { v4: uuidv4 } = require('uuid')

module.exports = function(req, res){
  
    var name =  req.body.name;
    var job =  req.body.job;
   
    if(name && job){ 

        var newUser = {
        id:uuidv4(),
        name,
        job,
        admin:false //Como se ao criar,o default fosse false
    }
    data.push(newUser)
    res.json(data);
    
    }else{ 
        res.json({error:"Por favor,envie os dados do usuário!"})
    }
};