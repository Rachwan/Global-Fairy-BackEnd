import Contact from "../Models/ContactModel.js";

export const ContactController ={
     
    addContact: async (req,res) => {
        try{
            const contact = new Contact(req.body)
            await contact.save()
            res.status(200).json(contact)
        }
        catch (error) {
            res.status(404).json({status:404,error:error.message})

        }
    },

    getContact: async (req, res) => {
        try {
            const Contact = await Contact.find()
            res.status(200).json(Contact)
        }
        catch (error) {
            res.status(404).json({ status: 404, error: error.message })
        }
    },

    }