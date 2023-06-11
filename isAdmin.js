var data =  require("./fakeData");

module.exports = function isAdmin(req,res,next) {
    const usuárioLogado = data[1]
    const admin =usuárioLogado.admin
    
    if(!admin){
        return res.json({error:"Você não tem permissão para essa função!"})
    }
    next()
}