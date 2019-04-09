module.exports = {
    extends: ["google"],
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        impliedStrict: true
    },
    rules:
    {
        "require-jsdoc": "off",
        "max-len": ["warn", 250],
        "no-invalid-this": "off"
    },
}
