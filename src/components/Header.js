import React from 'react'
import Logo from '../assets/img/Logo.JPG'

const Header = () => {
    return(
        <header>
            <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
                <a className='flex items-center mb-4 md:mb-0 p-3 w-48 h-48 ' href="http://google.com">
                    <img src={Logo} alt="logo" className='rounded-full'/>
                </a>
                <span className="ml-3 text-xl font-nunito">Welcome to Zana</span>
                <nav class="lg:ml-auto lg:mt-4 flex  items-center text-base justify-center">
                    <a class="mr-5 hover:text-slate-500 hover:text-2xl font-koulen" href="http://google.com">
                        Login
                    </a>
                    <a class="mr-5 hover:text-slate-500 font-koulen" href="http://google.com">
                        Sign up
                    </a>
                </nav>
                <button className="w-48 sm:mt-4 h-14 rounded border-none bg-indigo-500 ...">Go to...</button>
            </div>
        </header>
    );
}

export default Header;
