module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true
    },
    "rules": {
      "no-underscope-dangle": [
        "error",
        { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
      ]
    }
};
