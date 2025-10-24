import React from 'react';
import Image from 'next/image'

import aLogo from '@/assets/logo.svg'

export const Logo = () => {
    return (
        <Image src={aLogo} alt="Nantric Logo" className='h-6 w-auto' />
    );
};
