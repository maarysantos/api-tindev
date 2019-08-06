const Dev = require ('../models/Dev');
//store delete index show
//devs/id/likes
module.exports = {
//store medtodo de criação
    async store(req, res){
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error : 'Dev não existe'})
        }

        if(targetDev.likes.include(loggedDev._id)){
            console.log('Deu match')
           // return res.status(400).json({error : 'Dev não existe'})
        }

       loggedDev.likes.push(targetDev._id);
       await loggedDev.save();

       return res.status(201).json(loggedDev);
    }
}
