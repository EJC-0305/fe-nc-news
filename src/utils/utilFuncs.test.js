const { formatTopic } = require("./utilFuncs") 

describe('formatTopic', () => {
    test('returns correctly formatted topic name', () => {
        expect(formatTopic('football')).toBe('Football')
        expect(formatTopic('cooking')).toBe('Cooking')
        expect(formatTopic('coding')).toBe('Coding')
    })
})