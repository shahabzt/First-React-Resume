export function Header() {
    return (
        <header className="bg-primary bg-gradient text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-left text-md-center mb-3">
                        <img className="rounded-circle img-fluid" src="https://s2.uupload.ir/files/dsc_0676_5min.jpg" alt="Profile Photo" />
                    </div>
                    <div className="col-md-9">
                        <h2>Shahab Banijamali</h2>
                        <h5>Front-end Developer </h5>
                        <p className="border-top pt-3">Geomechanics engineer @ shahrood unviersity of technology
                            <br />
                            Front-end trainee @ MapsaHr
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}