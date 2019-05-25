const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const performQuery = require('./perform-query');
const ContactProtocolTypes = require('./messages');
const { GET_CONTACTS, GET_CONTACT, CREATE_CONTACT, UPDATE_CONTACT, REMOVE_CONTACT } = ContactProtocolTypes;

app.use(bodyParser.json());

app.get('/api/contacts', (req,res) => performQuery({ type: GET_CONTACTS }, res));

app.get('/api/contacts/:contact_id', (req,res) => performQuery({ type: GET_CONTACT, contactId: req.params.contact_id }, res));

app.post('/api/contacts', (req,res) => performQuery({ type: CREATE_CONTACT, payload: req.body }, res));

app.patch('/api/contacts/:contact_id',(req,res) => performQuery({ type: UPDATE_CONTACT, contactId: req.params.contact_id, payload: req.body }, res));

app.delete('/api/contacts/:contact_id', (req,res) => performQuery({ type: REMOVE_CONTACT, contactId: req.params.contact_id }, res));

app.listen(process.env.PORT || 3000, function () {
  console.log(`Address book listening on port ${process.env.PORT || 3000}!`);
});
