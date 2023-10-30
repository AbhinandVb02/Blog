const BlogData = require('../Model/BlogModel')

const DeleteBlog = async (req, res) => {

    const { id } = req.body;

    try {
        await BlogData.findByIdAndDelete(id)
        res.json({ status: 'Ok', Data: 'Data Deleted' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 'Error', Data: 'An error occured' });
    }

}

module.exports = DeleteBlog