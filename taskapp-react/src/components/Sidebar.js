import React from 'react';
import '../styles/sidebar.scss';

export default function Sidebar() {
    return (
        <aside className="task-panel">
            <div className="new-project-c"><p className="new-project-n">+ New Project</p><input className="npi" type="text" placeholder="Project Name" autoFocus /></div>
            <div>
                <p>Projects</p>
                <ul>
                    Tasks list
                </ul>
            </div>
        </aside>
    )
}
