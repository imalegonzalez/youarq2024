import { Button } from "@/components/ui/button";

function Hero() {
    return (
        <div className=" w-full h-fit lg:h-[calc(100vh-200px)] md:p-3 md:mt-20 ">
            <div className="relative h-[550px] lg:h-5/6 md:rounded-lg md:overflow-hidden">
                <img className="absolute h-full w-full object-cover top-0 md:rounded-lg" src="http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp" alt="" />
                <div className="absolute h-full w-full bg-black opacity-40"></div>
                <div className="p-5">
                    <h1 className=" absolute bottom-10 text-white text-4xl sm:text-5xl font-semibold md:text-8xl md:max-w-[90%] lg:text-9xl">Remodelaciones <br/> bien hechas.</h1>
                </div>
            </div>
            <div className="p-5 md:flex md:justify-between md:p-0 md:items-center">
                <h2 className=" text-lg"><span className="font-semibold">Dejalo en manos de profesionales.</span><br/>
                Nos encargamos de todo lo necesario para tu remodelación. </h2>
                <Button className=" bg-[--primary] text-white mt-4 text-xl px-12 py-10 w-full md:w-1/2 rounded-xl ">Quiero remodelar mi casa</Button>
            </div>
        </div>
    );
}

export default Hero; 
