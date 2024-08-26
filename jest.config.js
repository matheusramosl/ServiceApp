module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest', 
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            isolatedModules: true, 
        },
    },
};