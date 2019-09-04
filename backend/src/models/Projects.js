const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    name: { type: String, required: true },
    descripcion: { type: String, required: true },
    completada: { type: Boolean },
    fecha_creacion: { type: Date, default: Date.now },
    fecha_termino: { type: Date }
});

const ProjectSchema = new Schema({
    name: { type: String, required: true },
    fecha_creacion: { type: Date, default: Date.now },
    tasks: [TaskSchema]
});

module.exports = model('Project', ProjectSchema);