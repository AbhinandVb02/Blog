const BlogData = require('../Model/BlogModel');

const CreateBlog = async(req,res) =>{

    const {Name,Catagories,Discription,Images}  = req.body;

    const CreateBlogData = await BlogData.create({
        Name,
        Catagories,
        Discription,
        Images
    })

    res.json(CreateBlogData)

}

module.exports = CreateBlog;