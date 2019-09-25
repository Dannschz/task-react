import React, { Fragment, useState, useEffect } from 'react';
import '../styles/section.scss';
const axios = require('axios');


function Section() {

    // Nombre del nuevo projecto a crear
    const [projectName, setProjectName] = useState('');
    // Datos de todos los proyectos al hacer peticiones GET al servidor
    const [projects, setProjects] = useState([]);
    // Almacena el nombre del projecto y sirve para checar el boton tipo radio correspondiente
    const [selectedProject, setSelectedProject] = useState({});

    // Controla el input para el nombre del proyecto
    function hanldeProjectName(e) {
        setProjectName(e.target.value);
    }

    // Controla input radio para seleccionar projecto
    function handleSelectedProject(e) {
        //setSelectedProject(e.target);
        console.log(projects);
    }

    // Guardar un nuevo proyecto en la base de datos
    async function createProject(e) {
        e.preventDefault();
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/tasks',
            data: {
                name: projectName
            }
        });
        console.log(response);
    }

    // Use effect que actua si se añade un nuevo proyecto
    useEffect(() => {
        async function getProjects() {
            try {
                const response = await axios.get('http://localhost:4000/api/tasks');
                setProjects(response.data);
                setSelectedProject(response.data['0']);
                //console.log(projects);
            } catch (error) {
                throw error;
            }
        };
        getProjects();

    }, []);

    return (
        <Fragment>
            <aside className="task-panel">
                <div className="new-project-c">
                    <form className="new-p-form" onSubmit={createProject} >
                        <div className="project-btn">
                            + New Project
                            <input className="input-new-p" type="submit" />
                        </div>
                        <input
                            className="npi"
                            type="text"
                            value={projectName}
                            onChange={hanldeProjectName}
                            placeholder="Project Name" autoFocus />
                    </form>
                </div>
                <div className="project-sidebar">
                    <h1 className="title-projects">Projects</h1>
                    <div className="list-project-container">
                        <ul className="list-project">
                            {projects.map(project => (
                                <li className="li-p" key={`${project._id}${project.name}`} >
                                    <input
                                        key={project.name}
                                        className="radio-item"
                                        id={project.name}
                                        type="radio"
                                        value={project.name}
                                        checked={selectedProject.name === project.name}
                                        onChange={handleSelectedProject} />
                                    <label
                                        key={project._id}
                                        htmlFor={project.name}
                                        className="item-project" >
                                        {project.name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
            <section className="section">
                {selectedProject.name}
            </section>
        </Fragment>
    )
};

export default Section;