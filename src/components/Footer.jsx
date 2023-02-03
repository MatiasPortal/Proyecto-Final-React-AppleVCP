const Footer = () => {
    return (
        <footer className="text-center text-lg-start mt-5 border-top">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-light">
                <div className="me-5 d-none d-lg-block">
                <span>¡Descubri más de nosotros!</span>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3 subtitle-footer">ECOMMERCE</i>
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur, ab a excepturi adipisci vitae quibusdam perspiciatis illo!.
                    </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold mb-4 subtitle-footer">
                        REDES
                    </h6>
                    <p>
                        <a href="https://www.facebook.com" className="text-reset">Facebook</a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com" className="text-reset">Instagram</a>
                    </p>
                    <p>
                        <a href="https://twitter.com" className="text-reset">Twitter</a>
                    </p>
                    </div>       
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 className="text-uppercase fw-bold mb-4 subtitle-footer">CONTACTO</h6>
                    <p><i className="fas fa-home me-3"></i> ARGENTINA</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        ecommerce@gmail.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                    </div>
                </div>
                </div>
            </section>
            <div className="text-center p-4">
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="/">ECOMMERCE</a>
            </div>
        </footer>
    )
}

export default Footer;