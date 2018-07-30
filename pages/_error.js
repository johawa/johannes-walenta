import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Sorry, something went wrong</h1>
        <p>
            <Link href="/">
                <a>Back</a>
            </Link>
        </p>
    </div>
);

export default errorPage;