import Logo from "./components/Logo";
function Navbar() {
    return(
        <div className="navbar bg-violet-600">
            <div className="cointener flex items-center mx-auto">
                <div className="w-3/12">
                 <Logo/>
                </div>
                
                <div className="w-6/12">
                <ul className="nav nav-item flex justify-center space-x-10 py-16">
                    <li>
                      <a className="nav-item text-center text-white text-opacity-60 text-lg font-semibold">profile</a>
                    </li>
                    <li>
                      <a className="nav-item text-center text-white text-opacity-60 text-lg font-semibold">skills</a>
                    </li>
                    <li>
                      <a className="nav-item text-center text-white text-opacity-60 text-lg font-semibold">Project</a>
                    </li>
                    <li>
                      <a className="nav-item text-center text-white text-opacity-60 text-lg font-semibold">Contact</a>
                    </li>
                  </ul>
  
                </div>
                <div className="w-3/12">
                <div className="button text-center">
                  <a className="text-yellow-300 text-lg border rounded-full border-yellow-300 outline-yellow-300 font-semibold py-2 px-6">kontak</a>
                </div>
                
  
                </div>
  
            </div>
        </div>
    );
  }
  
  export default Navbar;