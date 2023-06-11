var data =  require("./fakeData");

const getUser = ( req, res, next ) => {

    const name =req.query.name
    let foundUser = false;

    for (let i = 0; i < data.length; i++) {
     
      if (data[i].name === name) {
        foundUser = true;
        res.json(data[i]);
        break
      }
    }
  
    if (!foundUser) {
      res.json({ error: "Usuário não encontrado" });
    }
  };


const getUsers = ( req, res, next ) => {

    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};