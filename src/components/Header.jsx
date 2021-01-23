import React from 'react'

const Header = ({title}) => {
    return (
        <header className="h-full bg-rick bg-cover bg-bottom relative bg-fixed p-12">
            <div className="absolute h-full opacity-50 top-0 left-0 right-0 bottom-0 bg-black z-0"></div>
            <div className="flex flex-col justify-center items-center z-10 relative p-12">
                <h1 className="m-2 text-6xl font-semibold uppercase text-green-500 font-rick tracking-widest text-center">{title}</h1>
                <p className="text-xl font-morty tracking-wide text-center">this project ilustrate the famous rick and morty series</p>
            </div>
        </header>
    )
}

export default Header
