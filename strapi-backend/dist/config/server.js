"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('API_URL', 'http://178.172.236.218'),
    app: {
        keys: env.array('APP_KEYS'),
    },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
});
