import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'File_Converter',
            tech: 'C#',
            desc: 'A robust utility for converting between various file formats with high efficiency.',
            url: 'https://github.com/elllliif/File_Converter'
        },
        {
            title: 'System Monitor',
            tech: 'Python',
            desc: 'Real-time resource tracking and monitoring tool for system performance analysis.',
            url: 'https://github.com/elllliif/system-monitor'
        },
        {
            title: 'Erasmus Experience',
            tech: 'HTML, CSS',
            desc: 'A static website sharing personal Erasmus experiences and travel stories.',
            url: 'https://github.com/elllliif/my_erasmus_experience'
        },
        {
            title: 'Style WebApp',
            tech: 'C#, MSSQL, HTML',
            desc: 'A stylish web application focused on fashion and design management.',
            url: 'https://github.com/elllliif/style-webapp'
        },
        {
            title: 'Make-up Store DB',
            tech: 'PostgreSQL, PLpgSQL',
            desc: 'Comprehensive database management system for a makeup store with custom functions.',
            url: 'https://github.com/elllliif/make-up-store'
        },
        {
            title: 'OS CPU Scheduling',
            tech: 'C',
            desc: 'Implementation of various CPU scheduling algorithms for operating systems.',
            url: 'https://github.com/elllliif/os-cpu-scheduling'
        },
        {
            title: 'CI/CD Pipeline Demo',
            tech: 'HTML, DevOps',
            desc: 'Continuous integration and deployment pipeline demonstration project.',
            url: 'https://github.com/elllliif/devops-project3'
        },
        {
            title: 'Infrastructure Automation',
            tech: 'HTML, DevOps',
            desc: 'Infrastructure as Code and automation practices showcase.',
            url: 'https://github.com/elllliif/DevOps-Project-2'
        },
        {
            title: 'TDD Example',
            tech: 'Java',
            desc: 'Test-Driven Development practice examples and homework assignments.',
            url: 'https://github.com/elllliif/TDDExample2'
        },
        {
            title: 'Tarsau Archiver',
            tech: 'C',
            desc: 'Low-level archive program that bundles files without compression.',
            url: 'https://github.com/elllliif/SystemProgramming-Tarsau'
        }
    ];

    return (
        <section id="projects" className="section container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Featured <span className="accent-text">Projects</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {projectList.map((project, idx) => (
                    <div key={idx} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'var(--transition)', cursor: 'pointer' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '2rem' }}>📁</span>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>↗</a>
                        </div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.desc}</p>
                        <div style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>
                            {project.tech}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
