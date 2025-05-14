import React from 'react';

export default function Aside() {
    return (
        <aside className="aside-layout bg-zinc-800 p-5 shadow-md">
            <div className="text-xl font-bold mb-5">Mockup Header</div>
            <nav className="mt-5">
                <ul className="list-none p-0">
                    <li className="mb-2 cursor-pointer text-zinc-200">Mockup Link 1</li>
                    <li className="mb-2 cursor-pointer text-zinc-200">Mockup Link 2</li>
                    <li className="mb-2 cursor-pointer text-zinc-200">Mockup Link 3</li>
                </ul>
            </nav>
        </aside>
    );
};
