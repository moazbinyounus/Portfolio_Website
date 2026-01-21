import type { Route } from "./+types/details";
import type { Project } from "~/types";
import {FaArrowLeft} from "react-icons/fa";
import { Link } from "react-router";

export async function clientLoader({ 
    request, 
    params, 
}: Route.ClientLoaderArgs): Promise<Project> {
    const res = await fetch(`http://localhost:8000/projects/${params.id}`);

    if (!res.ok) throw new Response('Project not found', { status: 404 });

    const project: Project = await res.json();
    return project;

}
export function HydrateFallback() {
    return <div>Loading project details...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
    const project = loaderData;
    
    return (
        <>
        <Link to="/projects" className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition" >
            <FaArrowLeft className="mr-2"/>
            Back to Projects
        </Link>
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md"/>

        </div>

        </>
    );
}

export default ProjectDetailsPage;