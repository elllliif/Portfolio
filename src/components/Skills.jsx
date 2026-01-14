import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <FaCode size={24} />,
            items: ['Java', 'C#', 'C++', 'JavaScript', 'SQL', 'HTML5', 'CSS', 'XML']
        },
        {
            title: 'Frameworks',
            icon: <FaServer size={24} />,
            items: ['Spring Boot', 'Spring Security', 'ASP.NET Core MVC', 'Web Forms', 'EF Core', 'Hibernate', 'JPA', 'JDBC']
        },
        {
            title: 'Database & Big Data',
            icon: <FaDatabase size={24} />,
            items: ['Oracle', 'PostgreSQL', 'MSSQL', 'MySQL', 'Hadoop', 'Kafka', 'Spark']
        },
        {
            title: 'Tools & Cloud',
            icon: <FaTools size={24} />,
            items: ['AWS Cloud', 'Docker', 'Jenkins', 'Git', 'Maven', 'RESTful APIs', 'Onion Arch', 'Vercel', 'Render']
        }
    ];

    return (
        <section id="skills" className="section container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Technical <span className="accent-text">Skills</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {skillCategories.map((cat, idx) => (
                    <div key={idx} className="glass" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(var(--accent-color-rgb), 0.1)', padding: '8px', borderRadius: '8px', color: 'var(--accent-color)' }}>{cat.icon}</span> {cat.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {cat.items.map((skill, sIdx) => (
                                <span key={sIdx} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '10px', fontSize: '0.85rem' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
