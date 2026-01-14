import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <div className="glass animate" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About <span className="accent-text">Me</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        I am a focused Backend Developer with a strong foundation in enterprise-level applications. My journey in Software Engineering has taken me from Sakarya University to the University of Rzeszów, giving me a global perspective on technology.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        I specialize in developing scalable backend services using <strong>.NET Core</strong> and <strong>Spring Boot</strong>. I have experience in full-stack development, database optimization, and microservices architecture.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                        <div>
                            <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Education</p>
                            <p style={{ fontSize: '0.9rem' }}>B.S. Software Engineering</p>
                        </div>
                        <div>
                            <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Focus</p>
                            <p style={{ fontSize: '0.9rem' }}>Backend & Systems</p>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <div style={{ width: '100%', aspectRatio: '1', borderRadius: '20px', overflow: 'hidden', border: '2px solid var(--accent-color)' }}>
                        {/* Note: In a real scenario, the user would provide their headshot. I'll use a placeholder or stylized div. */}
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #0f172a, #1e293b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '5rem' }}>ENT</span>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', padding: '1.5rem', background: 'var(--accent-color)', color: 'white', borderRadius: '15px', fontWeight: '800', boxShadow: '0 10px 20px rgba(0, 210, 255, 0.4)' }}>
                        3+ <br /><span style={{ fontSize: '0.7rem', fontWeight: '400' }}>Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
