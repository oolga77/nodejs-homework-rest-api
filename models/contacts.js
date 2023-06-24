const fs = require("fs").promises;
const path = require("path");
// const { v4: uuidv4 } = require("uuid");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "../models/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const result = data.find((item) => item.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const index = data.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = data.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return result;
};

const addContact = async (body) => {
  const data = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const data = await listContacts();
  const index = data.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  data[index] = {
    ...data[index],
    ...body,
  };

  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return data[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};



// const fs = require("fs").promises;
// const { nanoid } = require("nanoid");
// const path = require("path");
// require("colors");

// const contactsPath = path.join(__dirname, "contacts.json");


// const listContacts = async () => {
//   try {
//     const contacts = await fs.readFile(contactsPath, { encoding: "utf-8" });
//     return JSON.parse(contacts);
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red);
//   }
// };

// const getContactById = async (contactId) => {
//   try {
//     const contacts = await listContacts();
//     return contacts.filter(({ id }) => id === contactId);
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red);
//   }

  
// };

// const removeContact = async (contactId) => {
//   try {
//     const contacts = await listContacts();
//     const newContacts = contacts.filter(({ id }) => id !== contactId);
//     await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2), {
//       encoding: "utf-8",
//     });

//     return newContacts;
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red);
//   }
// };

// const addContact = async (name, email, phone) => {
//   try {
//     const contacts = await listContacts();
//     const newContact = {
//       id: nanoid(),
//       name,
//       email,
//       phone,
//     };
//     contacts.push(newContact);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), {
//       encoding: "utf-8",
//     });
//     return newContact;
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red);
//   }
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// };