require("dotenv").config()


function error(error, req, res, next) {
    if(error.custom){
        return res.status(400).json(error)
    }
    if(error.message.includes("Uniques contraint failed")){
           if(error.meta){
            return res.status(400).json({
                custom: true,
                message: `! ${error.meta.target.join(", ")}. Should be unique`,
                meta: error.meta.target
            })
           } 
    }
    res.status(500).json({
        custom: true,
        message: "check form"
    })
}

module.exports = error