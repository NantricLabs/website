import React from 'react';
import Image from 'next/image'

import aLogo from '@/assets/logo.png'

export const Logo = () => {
    return (
        <Image src={aLogo} alt="Nantric Logo" className='h-20 w-auto' />
    );
};
