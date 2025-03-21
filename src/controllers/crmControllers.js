import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req,res) => {
    let newContact = new Contact(req.body);
    try {
        newContact.save();
        res.json(newContact);
      } catch (err) {
        console.log(err);
        res.send(err);
      }
}

export const getContacts = async (req,res) => {
    try {
        const contacts= await Contact.find({});
        res.json(contacts);
       
      } catch (err) {
        console.log(err);
        res.send(err);
      }
}   

export const getContactWithId = async (req,res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);
       
      } catch (err) {
        console.log(err);
        res.send(err);
      }
}   

export const updateContact = async (req,res) => {
    try {
        const contact = await Contact.findOneAndUpdate({_id:req.params.contactId},req.body, {new: true});
        res.json(contact);
       } catch (err) {
        console.log(err);
        res.send(err);
      }
}

export const deleteContact = async (req,res) => {
    try {
        await Contact.deleteOne({_id:req.params.contactId},req.body, {new: true});
        res.json({message: 'Contact deleted.'});
       } catch (err) {
        console.log(err);
        res.send(err);
      }
}