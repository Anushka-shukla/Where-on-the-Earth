// import  {useDispatch} from 'react-redux';
import './style.css';

function MainNav() {

    return (

        <header className="header box-shadow">
            <div className="logo-wrapper">
                <h2 className="logo">Where on the Earth?</h2>
            </div>

            <nav className="navigation nav-hide">
                <button className="btn btn-primary">Add New Country</button>


            </nav>

        </header>

    );
}

export default MainNav;