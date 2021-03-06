module.exports = {
  "extends": ["standard", "standard-react"],
  "parser": "babel-eslint",
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "env": {
    "jest": true
  }
}
