import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ];

    return (
        <nav className="flex items-center gap-5 border-b mb-5 p-4 h-14">
            <Link href="/">
                <AiFillBug className="w-8 h-8 text-purple-500" />{' '}
            </Link>
            <ul className="flex items-center gap-5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-zinc-500 hover:text-zinc-800 transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
