import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        background: scrolled ? 'rgba(5, 10, 20, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'var(--transition)',
        zIndex: 1000,
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
    };

    const navContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: '800',
        letterSpacing: '-1px',
    };

    const menuStyle = {
        display: 'flex',
        gap: '2rem',
    };

    const linkStyle = {
        fontSize: '0.9rem',
        fontWeight: '500',
        color: 'var(--text-secondary)',
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={navContainer}>
                <a href="#" style={logoStyle} className="accent-text">ENT.</a>
                <ul style={menuStyle}>
                    <li><a href="#about" style={linkStyle}>About</a></li>
                    <li><a href="#experience" style={linkStyle}>Experience</a></li>
                    <li><a href="#projects" style={linkStyle}>Projects</a></li>
                    <li><a href="#skills" style={linkStyle}>Skills</a></li>
                    <li><a href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Hire Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
