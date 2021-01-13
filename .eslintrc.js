module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
    },
    extends: ["plugin:vue/essential", "@vue/standard"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        semi: [2, "always"], // 自动补充分号
        quotes: [2, "double"],
        indent: ["error", 4],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        camelcase: 0, // 非驼峰
        "vue/no-parsing-error": [
            2,
            {
                "x-invalid-end-tag": false
            }
        ],
        "no-irregular-whitespace": ["error", { skipComments: true }],
        "multiline-ternary": 0 // 关闭 JavaScript允许三元表达式的操作数被换行符隔开，这可以提高程序的可读性。
    }
};
