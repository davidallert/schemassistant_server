const test = {
    testOne: async (ctx) => {
        ctx.body = {
            message: 'Hello Test World'
        };
        ctx.type = 'application/json';
    }
};
export const testOne = test.testOne;
