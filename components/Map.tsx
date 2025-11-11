const MapSection = () => {
    return (
        <div className="section-map">
            <div className="container">
                <div className="map-inner" data-aos="zoom-in-up">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.734341522863!2d19.95230231571708!3d50.05321197942258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b4487dba13d%3A0x1f7535b248e3f738!2sDajw%C3%B3r%2012%2C%2031-052%20Krak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2str!4v1672848202353!5m2!1sen!2str" width="1920" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default MapSection;