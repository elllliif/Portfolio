import React from 'react';

const Hero = () => {
    const sectionStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    const contentStyle = {
        maxWidth: '800px',
        zIndex: 2,
    };

    const blobStyle = {
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--accent-color-alt) 0%, transparent 70%)',
        top: '20%',
        right: '-10%',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.2,
        zIndex: 1,
    };

    return (
        <section id="home" style={sectionStyle}>
            <div style={blobStyle}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={contentStyle} className="animate">
                    <h4 style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '2px' }}>HELLO, I'M</h4>
                    <h1 style={{ fontSize: 'calc(2.5rem + 2vw)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Elif Nur <br /><span className="accent-text">Tabaklı</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        A passionate <span style={{ color: 'var(--text-primary)' }}>Backend Developer</span> specialized in building robust and scalable systems with C#, Java, and modern web technologies.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
