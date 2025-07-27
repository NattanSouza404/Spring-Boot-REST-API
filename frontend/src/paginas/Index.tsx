import h2Logo from '../assets/11459762.png';
import swaggerLogo from '../assets/swagger-icon-2048x2048-563qbzey.png';
import githubLogo from "../assets/25231.png";

function Index() {
    
    return (
        <>
            <header>
                <div>
                    <h1>Desafio DIO - 2024</h1>
                    <p>Spring Boot Bootcamp</p>
                </div>
            </header>

            <main>
                <div className="navegacao">
                    <ul>
                        <li>
                            <span><img src={h2Logo} /></span>
                            <span><a href="http://localhost:8080/h2-console">Acessar o H2 Database</a></span>
                        </li>
                        <li>
                            <span><img src={swaggerLogo} /></span>
                            <span><a href="http://localhost:8080/swagger-ui/index.html">Acessar a documentação Swagger</a></span>
                        </li>
                        <li>
                            <span><img src={githubLogo} /></span>
                            <span><a href="https://github.com/NattanSouza404">Meu Github</a></span>
                        </li>
                    </ul>
                </div>
            </main>

            <footer />
        </>
    );
}

export default Index;
