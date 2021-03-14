const Sequelize = require('sequelize');

const Usuario = require('../models/Usuario');
const Evento = require('../models/Evento');

const dbconfig = require('../../config/database');

const models = [ Usuario, Evento ];

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(dbconfig);
        models.map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database;