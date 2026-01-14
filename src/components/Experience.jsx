import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Ford Otosan',
            role: 'Full-Stack Developer',
            period: '01/08/2023 - 19/12/2025',
            desc: 'Worked on the DRM (Dealer Management) system, managing backend data for business units and distributors. Utilized a wide stack including Java (Spring Boot, Hibernate), C# (ASP.NET Core MVC), and Frontend technologies (HTML, CSS, JS). Managed databases with MSSQL and PL/SQL.',
            tags: ['Java', 'Spring Boot', 'ASP.NET Core MVC', 'Hibernate', 'MSSQL', 'PL/SQL', 'HTML/CSS/JS']
        },
        {
            company: 'NRS Siber Güvenlik',
            role: 'Cyber Researcher',
            period: '01/03/2022 - 05/05/2022',
            desc: 'Researched past cyberattacks, analyzing their impact on companies, including financial losses and security vulnerabilities.',
            tags: ['Cybersecurity', 'Research', 'Vulnerability Analysis']
        }
    ];

    const education = [
        {
            school: 'Sakarya University',
            degree: "Bachelor's in Software Engineering",
            period: '2020 - 2024',
            grade: '3.47 / 4.0'
        },
        {
            school: 'University of Rzeszów',
            degree: "Bachelor's in Computer Science (Erasmus)",
            period: '2023 - 2023',
            grade: '3.92 / 4.0'
        }
    ];

    return (
        <section id="experience" className="section container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Expertise & <span className="accent-text">Journey</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                <div>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-color)' }}>■</span> Work Experience
                    </h3>
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="glass" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>{exp.company}</h4>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{exp.period}</span>
                            </div>
                            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{exp.role}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{exp.desc}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {exp.tags.map((tag, tIdx) => (
                                    <span key={tIdx} style={{ fontSize: '0.7rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-color)' }}>■</span> Education
                    </h3>
                    {education.map((edu, idx) => (
                        <div key={idx} className="glass" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{edu.school}</h4>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{edu.period}</span>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: '600', marginBottom: '0.5rem' }}>{edu.degree}</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Final Grade: {edu.grade}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
