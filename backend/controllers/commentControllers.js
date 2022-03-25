const Itinerary = require("../models/Itinerary")


const commentsControllers = {

    addComment: async (req, res) => {
        const { itinerary, comment } = req.body
        const user = req.user._id
        console.log(comment)
        try {
            const nuevoComment = await Itinerary.findOneAndUpdate({ _id: itinerary }, { $push: { comments: { comment, user } } }, { new: true }).populate("comments.user", { firstName: 1, lastName: 1, picture: 1 })
            res.json({ success: true, response: { nuevoComment }, message: "gracias por dejarnos tu comentario" })
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }
    },
    modifyComment: async (req, res) => {
        const { commentID, comment } = req.body.comment
        const user = req.user._id
        try {
            const newComment = await Itinerary.findOneAndUpdate({ "comments._id": commentID }, { $set: { "comments.$.comment": comment } }, { new: true })

            res.json({ success: true, response: { newComment }, message: "tu comentario ha sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itinerary.findOneAndUpdate({ "comments._id": id }, { $pull: { comments: { _id: id } } }, { new: true })

            res.json({ success: true, response: { deleteComment }, message: "has eliminado el comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },

}
module.exports = commentsControllers