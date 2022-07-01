const NavBarVet = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">ACME</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/vet/services">
                                Servicios
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/vet/record">
                                Historias clinicas
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/vet/pets">
                                Mascotas
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBarVet;