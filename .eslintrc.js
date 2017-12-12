module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 7
    },
    "rules": {
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "indent": ["error", 2],
        "no-tabs": "off",
        "no-param-reassign": "off",
        "comma-dangle": ["error", "only-multiline"],
        "dot-notation": "off",
        "react/forbid-prop-types": "off",
        "arrow-parens": "off",
        "react/require-extension": "off",
        "react/wrap-multilines" : "off"
    },
    "settings": {
        "import/resolver": {
            "webpack": {}
        }
    }
};
