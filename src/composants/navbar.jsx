export const Navbar = ()=>{
    return(
    <div>
        <div className="relative top-0 left-0">
            <img src="../img/banniere3.png" alt="banniere" />
        </div>
        <div className="flex justify-between bg-neutral-950/50 w-screen py-5 px-24 text-xl absolute top-0 left-0">
            <div className="flex justift-between items-center gap-8">
                <img src="../img/logo-crista.png" alt="logo" className="max-w-32"/>
                <p className="text-neutral-50">Crista Desuraune-Cocu</p>
            </div>
            <div className="content-center">
                <nav className="flex justify-around  text-black text-xl gap-8 text-neutral-50">
                    <a href="#home">Accueil</a>
                    <a href="#about">Présentation</a>
                    <a href="#service">Projet</a>
                    <a href="#cv">CV</a>
                    <a href="#contact">Contacts</a>
                </nav>
            </div>
        </div>
        
    </div>
    )
};

