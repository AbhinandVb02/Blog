const BlogData = require('../Model/BlogModel')

const GetBlogdata = async (req,res)=>{

    const data = await BlogData.find()

    res.json(data)
}

module.exports = GetBlogdata;