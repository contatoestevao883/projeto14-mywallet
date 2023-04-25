export function validateSchema(schema){
    
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortyEarly: false })

        if(validation.error) {
            const errors = validation.error.details.map(detail.message)
            return res.status(422).send(errors)
        }

        next()
    }
}