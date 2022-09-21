const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const prisma = new PrismaClient()

module.exports = {
    async index(req, res){
        const results = await prisma.mentor.findMany()


        return res.json(results)

    },

    async showMentor(req, res){
        const {id} = req.params

        const mentor = await prisma.mentor.findUnique({
            where:{
                id
            }
        })

        return mentor
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
                const token = jwt.sign({email}, process.env.SECRET,{
                    subject:"mentor.id",
                    expiresIn:"50s"
                })

                return res.json(token)
            } else{
                return res.status(400).send("Login ou senha Invalidos")
            }
    },

    async create(req, res){
        const {
            name,
            lastName,
            genre,
            city,
            photo,
            about,
            onjob,
            job,
            formation,
            stackID,
            linkedin,
            git,
            email,
            password} = req.body

        const encrypted = bcrypt.hashSync(password, 10)

        await prisma.mentor.create({
            data:{
                name,
                lastName,
                genre,
                city,
                photo,
                about,
                onjob,
                job,
                formation,
                stackID,
                linkedin,
                git,
                email,
                password:encrypted
            }
        })

        return res.status(201).send();

    },

    async update(req, res){

    },

    async delete(req, res){}


}