const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const prisma = new PrismaClient()

module.exports = {
    async index(req, res){
        const results = await prisma.mentor.findMany()


        return res.json(results)

    },


    async login(req, res){
        const {email, password} = req.body

        const mentor = await prisma.mentor.findUnique({
            where:{
                email
            }},
            {
            select:{
                password:true,
                id:true
            }})

            const comparepass = await bcrypt.compareSync(password, mentor.password)

            if(email === mentor.email && comparepass === true){
                const token = jwt.sign({email}, "ae926461-6fa0-43fb-8bb8-a70191bcdac2",{
                    subject:"mentor.id",
                    expiresIn:"50s"
                })

                return res.json(token)
            } else{
                return res.status(404).send()
            }
    },

    async findOnde(req, res){},

    async create(req, res){
        const {name,
            lastName,
            city,
            photo,
            about,
            job,
            formation,
            stack,
            tecnologies,
            linkedin,
            git,
            email,
            login,
            password} = req.body

        const encrypted = bcrypt.hashSync(password, 10)

        await prisma.mentor.create({
            data:{
                name,
                lastName,
                city,
                photo,
                about,
                job,
                formation,
                stack,
                tecnologies,
                linkedin,
                git,
                email,
                login,
                password:encrypted
            }
        })

        return res.status(201).send();

    },

    async update(req, res){},

    async delete(req, res){}


}