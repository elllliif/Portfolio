import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <div className="glass animate" style={{ padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--accent-color)', opacity: '0.05', borderRadius: '50%', filter: 'blur(50px)' }}></div>

                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get In <span className="accent-text">Touch</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities and challenges.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%', maxWidth: '800px' }}>
                        <div>
                            <p style={{ color: 'var(--accent-color)', fontWeight: '800', marginBottom: '0.5rem' }}>EMAIL</p>
                            <a href="mailto:elif772017@icloud.com" style={{ fontSize: '1.1rem' }}>elif772017@icloud.com</a>
                        </div>
                        <div>
                            <p style={{ color: 'var(--accent-color)', fontWeight: '800', marginBottom: '0.5rem' }}>LOCATION</p>
                            <p style={{ fontSize: '1.1rem' }}>İstanbul, Turkey</p>
                        </div>
                        <div>
                            <p style={{ color: 'var(--accent-color)', fontWeight: '800', marginBottom: '0.5rem' }}>SOCIAL</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
                                <a href="https://github.com/elllliif" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://linkedin.com/in/elif-nur-tabakli" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
