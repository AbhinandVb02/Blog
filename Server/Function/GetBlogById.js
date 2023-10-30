const BlogData = require('../Model/BlogModel')

const GetBlogdatabyId =  async (req,res) =>{

    const {id} = req.params;

    const Data = await BlogData.findById(id)

    if (Data) {
        res.json(Data)
    } else {
        res.json({message:'Error'})
    }
}

module.exports = GetBlogdatabyId;