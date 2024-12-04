import Chapter from "../../models/Chapter.js";


let create = async (req,res,next) =>{
    try {
        let chapter = req.body

        
        let newChapter = await Chapter.create(chapter)
        return res.status(201).json({
            response: newChapter
        })
    } catch (error) {
        next(error)
    }
}


export {create}