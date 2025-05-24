import React from 'react';

import Link from 'next/link';

const HomePage = () => {
    return(
        <>
            <h1>Home here</h1>
            <Link href="/login">Go to Login</Link>
        </>
    );
}

export default HomePage;