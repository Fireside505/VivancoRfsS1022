const bcrypt = require('bcryptjs')

class userController {
    inicioSession (req,res) {
        const user = {
            nombre: "Rocio",
            edad: 26,
        }
        req.session.user = user
        res.cookie("miPrimeraCookie",user.nombre,{maxAge:120000})
        res.json(req.session)
    }
    probarSession (req,res) {
        res.json({session: req.session, cookie: req.cookies.miPrimeraCookie})
    }
    borrarSession (req,res) {
        req.session.destroy()
        res.clearCookie("miPrimeraCookie")
        res.json({msg:"session cerrada"})
    }
    probarHash (req,res) {
        let contraseña = "abcdefg"
        let salt = bcrypt.genSaltSync(15)
        let hash = bcrypt.hashSync(contraseña,salt)

        res.json({hash})
    }
}

module.exports = new userController