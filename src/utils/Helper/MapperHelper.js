const { createMapper, SnakeCaseNamingConvention } = require("@automapper/core");
const { sequelize } = require("@automapper/sequelize");

const mapper = createMapper({
    strategyInitializer: sequelize(),
    namingConventions: new SnakeCaseNamingConvention(),
});

module.exports = { mapper };
