const enhancer = require('./enhancer.js');
// test away!


describe('enhancer.js', () => {
    describe('enhancer.repair()', () => {
        it('should increase durability to 100', () => {
            expect(enhancer.repair({durability: 100})).toBe(100)
        })
    })
})

