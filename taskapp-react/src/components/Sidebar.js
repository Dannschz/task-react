import React, { useState, useEffect } from 'react';
import '../styles/sidebar.scss';
const axios = require('axios');

export default function Sidebar() {

    const [projectName, setProjectName] = useState('');
    const [projects, setProjects] = useState([]);

    function hanldeProjectName(e) {
        setProjectName(e.target.value);
    }

    async function createProject(e) {
        e.preventDefault();
        const response = axios({
            method: 'post',
            url: 'http://localhost:4000/api/tasks',
            data: {
                name: projectName
            }
        });
        console.log(response);
    }

    useEffect(() => {
        async function getProjects() {
            try {
                const response = await axios.get('http://localhost:4000/api/tasks');
                setProjects(response.data);
                //console.log(response);
            } catch (error) {
                console.log(error)
            }
        };
        getProjects();

    }, [projects]);

    return (
        <aside className="task-panel">
            <div className="new-project-c">
                <form className="new-p-form" onSubmit={createProject} >
                    <input className="project-btn" type="submit" value="+ New Project" />
                    <input className="npi" type="text" value={projectName} onChange={hanldeProjectName} placeholder="Project Name" autoFocus />
                </form>
            </div>
            <div>
                <p>Projects</p>
                <ul>
                    {projects.map(project => (
                        <p key={project._id} > {project.name} </p>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
