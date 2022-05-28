module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("Item", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
  });

  return Item;
};
