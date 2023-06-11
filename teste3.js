var data =  require("./fakeData");

module.exports = function(req, res) {
  
    var name =  req.query.name;

   const userIndex= data.findIndex(user=>user.name === name)
  console.log(userIndex)

if (userIndex > -1) {
    data.splice(userIndex, 1);
    res.json({message:"Usuário deletado com sucesso"});
  }else{
    res.json({message:"Usuário não encontrado"});
  }
};