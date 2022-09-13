const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const { use } = require('../routes/mentorRoute')

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
                password:true
            }})

            const comparepass = await bcrypt.compareSync(password, mentor.password)

            if(email === mentor.email && comparepass === true){}
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

    },

    async update(req, res){},

    async delete(req, res){}


}