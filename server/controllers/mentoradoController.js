const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const prisma = new PrismaClient()

module.exports = {
    async index(req, res){
        const results = await prisma.mentorado.findMany()


        return res.json(results)

    },

    async showMentorado(req, res){
        const {id} = req.params

        const mentorado = await prisma.mentorado.findUnique({
            where:{id}
        })

        return mentorado

    },

    async login(req, res){
        const {email, password} = req.body

        const mentorado = await prisma.mentorado.findUnique({
            where:{
                email
            }},
            {
            select:{
                password:true,
                id:true
            }})

            const comparepass = await bcrypt.compareSync(password, mentorado.password)

            if(email === mentorado.email && comparepass === true){
                const token = jwt.sign({email}, process.env.SECRET,{
                    subject:"mentorado.id",
                    expiresIn:"50s"
                })
                return res.json(token)
            } else{
                return res.status(400).send("Login ou senha Invalidos")
            }

    },

    async createMentorado(req, res){
        const {
            name,
            lastName,
            genre,
            city,
            photo,
            about,
            job,
            onJob,
            formation,
            stackID,
            likedin,
            git,
            email,
            password,
            traning
        } = req.body

        const encrypted = bcrypt.hashSync(password, 10)

        await prisma.mentorado.create({
            data:{
                name,
                lastName,
                genre,
                city,
                photo,
                about,
                job,
                onJob,
                formation,
                stackID,
                likedin,
                git,
                email,
                password:encrypted,
                traning
            }})
            return res.status(201).send();
    },
}