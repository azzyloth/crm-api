import { addNewContact, deleteContact, getContacts, getContactWithId, updateContact } from "../controllers/crmControllers"

const routes = (app) => {
    app.route('/contact')
    //get all contacts
    .get((req,res,next) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next();

    }, getContacts
    )
    
    .post(addNewContact);
   
    app.route('/contact/:contactId')
    //get specific contact using the contact ID
    .get(getContactWithId)

    //update a contact
    .put(updateContact)

    .delete(deleteContact)
}

export default routes;