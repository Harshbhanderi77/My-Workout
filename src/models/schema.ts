import {appSchema, tableSchema} from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phoneNumber', type: 'string'},
        {name: 'password', type: 'string'},
      ],
    }),
  ],
});

export default schema;
