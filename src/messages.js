const ContactProtocolTypes = {
    GET_CONTACTS: 'GET_CONTACTS',
    GET_CONTACT: 'GET_CONTACT',
    UPDATE_CONTACT: 'UPDATE_CONTACT',
    REMOVE_CONTACT: 'REMOVE_CONTACT',
    CREATE_CONTACT: 'CREATE_CONTACT',
    // Operation sucessful
    SUCCESS: 'SUCCESS',
    // And finally if the contact is not found
    NOT_FOUND: 'NOT_FOUND'
  };

  module.exports = ContactProtocolTypes;