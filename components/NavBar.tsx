import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <header className="site-header">
        <a className="brand" href="#top" aria-label="Dilshan Arachchige home"><span>DA</span><b>Dilshan Arachchige</b></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {['about', 'skills', 'projects', 'education ', 'certificates', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
  )
}
