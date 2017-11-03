import contactList from './contactList';

export const contactsController = async (req, res) => {
  res.json(contactList);
};

export const contactDetailController = async (req, res) => {
  const { params, query } = req;
  const { contacts } = contactList;
  const filteredContacts = contacts.filter(
    contact => contact[params.id] == query.q
  );

  const data = {
    contacts: filteredContacts,
    params,
    query,
    time: new Date(),
  };

  res.json(data);
};
