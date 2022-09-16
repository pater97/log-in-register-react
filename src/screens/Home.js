import { useLocation } from "react-router-dom";
import './home.css'
function Home() {

    const location = useLocation()

    return (
        
        <div>
            <h1 className="titleHome">Riepilogo</h1>
            <section className="homeContainer">
                
                {
                Object.keys(location.state).map((val, key) => {
                    return (<h4 key={key}>{`${val}: ${location.state[val]}`}</h4>)
                    })
                }

            </section>
        </div>
    )
}

export default Home;