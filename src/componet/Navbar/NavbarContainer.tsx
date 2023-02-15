import type { ReactNode } from "react"

const NavbarContainer = ({children}: {children: ReactNode}) => {
    return (
        <>

    <nav className="flex h-full flex-col justify-between p-2 scrollbar-hide">
        {children}
    </nav>
        </>
    )
}

export default NavbarContainer