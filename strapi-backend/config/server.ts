export default ({ env }) => ({
  host: env('HOST', '178.172.236.218'),
  port: env.int('PORT', 1337),
  url: env('API_URL', 'http://178.172.236.218'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
