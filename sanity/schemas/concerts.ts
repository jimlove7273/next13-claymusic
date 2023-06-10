const concerts = {
  name: 'concerts',
  title: 'Concerts',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96,
        }
    },
    {
      name: 'date',
      title: 'Concert Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      // type: 'blockContent',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
    {
      name: 'zipcode',
      title: 'Zip Code',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'contactperson',
      title: 'Contact Person',
      type: 'string',
    },
    {
      name: 'contactphone',
      title: 'Contact Phone #',
      type: 'string',
    },
    {
      name: 'contactemail',
      title: 'Contact Email',
      type: 'string',
    },
  ],
};

export default concerts;
