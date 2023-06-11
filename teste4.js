var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var { id } =  req.params;
    

     const user = data.find(usr => usr.id == id);
     if(!user){
        res.json({error:"Usuário não encontrado!"});
     }
     user.name=req.body.name,
     user.job=req.body.job

    res.json(data);

};