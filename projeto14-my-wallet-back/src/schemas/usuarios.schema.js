import joi from "joi"


export const cadastroSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required().min(3),
    confirmPassword: joi.any().equal(joi.ref("password"))
})

export const loginSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})