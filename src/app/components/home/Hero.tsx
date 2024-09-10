
function Hero() {
    return (
        <div className=" w-full h-fit lg:h-screen ">
            <div className="relative h-[550px] lg:h-4/5">
                <img className="absolute h-full w-full object-cover top-0" src="http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp" alt="" />
                <div className="absolute h-full w-full bg-black opacity-40"></div>
                <div className="p-8">
                    <h1 className=" absolute bottom-10 text-white text-4xl font-semibold md:text-8xl md:max-w-[90%] lg:text-9xl">Remodelaciones <br/> bien hechas.</h1>
                </div>
            </div>
            <div className="p-8">
                <h2 className=" text-lg"><span className="font-semibold">Dejalo en manos de profesionales.</span><br/>
                Nos encargamos de todo lo necesario para tu remodelación. </h2>
            </div>
        </div>
    );
}

export default Hero; 

