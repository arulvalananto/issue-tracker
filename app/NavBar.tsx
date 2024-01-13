'use client';

import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

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
                            className={cn({
                                'text-zinc-900': link.href === currentPath,
                                'text-zinc-500': link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors': true,
                            })}
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
