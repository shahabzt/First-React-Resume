import {Experience} from "./components/exprience/index"
import {Education} from "./components/education/index"
import {Skills} from  "./components/skills/index"
import {RecentWork} from "./components/recentWork/index"



export function Mainbar(){
    return (
        <main className="container">
        <div className="row">
            <div className="col-6 mb-5">
                <Experience />
            </div>
            <div className="col-6 mb-5">
                <Education />
            </div>
        </div>
        <div className="row">
            <div className="col-6 mb-5">
                <Skills />
            </div>
            <div className="col-md">
                <RecentWork/>
            </div>
        </div>
    </main>
    )
}