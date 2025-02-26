export const Footbar = ()=>{
    return(
        <div>
            <div className="flex gap-12 w-scren h-auto px-24 py-6 bg-marron place-content-center">
                <div className="items-center">
                    <img src="../img/logo-crista.png" alt="logo"className="max-w-32 max-h-auto"/>

                </div>
                <nav className=" flex flex-col text-noir">
                    <a href="#accueil">Accueil</a>
                    <a href="#présentaiton">Présentation</a>
                    <a href="#projet">Projets</a>
                    <a href="#cv">CV</a>
                    <a href="#Contacts">Contacts</a>
                </nav>
                <nav className="flex flex-col text-noir">
                    <a href="#quisuisje">Qui suis-je?</a>
                    <a href="#parcours">Mon parcours</a>
                    <a href="#charte">Ma charte graphique</a>
                </nav>
                <nav className="flex flex-col text-noir">
                    <a href="#projetbde">Projet BDE</a>
                    <a href="projetces">Projet Club Eco Saint Sever</a>
                    <a href="htmlcss">HTML/CSS</a>
                    <a href="#python">Python</a>
                    <a href="#dessin">Mes dessins</a>
                    <a href="#interview">Interview d'un professionnel</a>
                </nav>
                <div className="flex flex-col gap-4 text-noir">
                    <p>Suivez-moi!</p>
                    <div className="grid grid-cols-3 gap-2">
                        <img src="../public/img/instagram.png" alt="logo instagram" className="w-6" />
                        <img src="../public/img/linkedin.png" alt="logo linkedin" className="w-6"/>
                        <img src="../public/img/facebook.png" alt="logo facebook" className="w-6"/>
                        <img src="../public/img/github.png" alt="logo github" className="w-6"/>
                        <img src="../public/img/discord.png" alt="logo discord" className="w-6"/>

                    </div>
                    

                </div>
            </div>
            <div className="flex gap-2 w-scren h-auto px-24 py-6 bg-dark-marron place-content-center">
                <p className="text-noir">Copyright © 2025 Desuraune--Cocu Crista.</p>
                <p className="text-noir">Tout droit réservé.</p>
                <a href="#mentions" className="text-red">Mentions légales et politiques</a>
            </div>
        </div>
    )
};