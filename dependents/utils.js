// utils.js
const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US");
  };
  
  module.exports = {
    formatDate
  };
  