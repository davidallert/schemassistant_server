import { testService } from '../services/test_service.js';
const http = {
    test: async (ctx) => {
        const data = await testService();
        ctx.body = {
            data: data,
        };
        ctx.type = 'application/json';
    },
};
export const test = http.test;
