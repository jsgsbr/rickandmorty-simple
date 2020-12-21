const Header = ({about}) => {
    return ( 
        <header>
            <div className="jumbotron jumbotron-fluid bg-dark text-light">
                <div className="container">
                    <h1 className="font-patrick">Rick and Morty</h1>
                    <hr className="my-4 bg-light"/>
                    <p className="lead">{about}</p>
                </div>
            </div>
        </header>
     );
}
 
export default Header;