//index, show, store, update, destroy
// reotnrar uma listagem, retornar uma unica, criar, alterar, remover

// Se seu controller precisa de mais metodos por padrão do MVC provaevlmente voce deve criar outro controller

const User = require('../models/User');

module.exports = {

    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({email});

        if (!user){
            user = await User.create({ email });
        } 

        return res.json(user);

    }


};