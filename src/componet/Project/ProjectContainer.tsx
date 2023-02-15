import type { ReactNode } from "react"

const ProjectContainer = ({children}: {children: ReactNode}) =>{
    return <>
      <div className=" scrollbar-hide mb-4 mt-6 h-full w-full overflow-scroll border-t border-gray-400 pt-3">
        {children}
      </div>
    </>
}

export default ProjectContainer