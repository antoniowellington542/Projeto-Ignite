import { useParams } from "react-router-dom"
import { ContentLesson } from "../components/ContentLesson/ContentLesson"
import { Header } from "../components/Header/Header"
import { Sidebar } from "../components/Sidebar/Sidebar"

export const Event = () =>{

    const { slug } = useParams<{slug: string}>()

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug 
                ? <ContentLesson  lessonSlug={slug} /> 
                : <div className="flex-1" />}
                <Sidebar />
            </main>
        </div>
    )
}