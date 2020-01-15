import { schema, normalize } from 'normalizr'
export const messageSchema = new schema.Entity('messages', {}, {
    idAttribute: 'key',
  });
export const responseMessageSchema = { messages: new schema.Array(messageSchema) };