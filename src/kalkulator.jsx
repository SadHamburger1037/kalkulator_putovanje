import { createSignal } from "solid-js"

export default function KalkulatorPutovanja(props){
    const [cijena, setCijena] = createSignal();

    function test(){
        if (cijena() > 0){
            return cijena();
        }
        else{
            return 0;
        } 
    }

    function submit(event){
        event.preventDefault()
        const podatci = new FormData(event.target)
        const duljinaPuta = podatci.get("duljinaPuta")
        const potrosnja = podatci.get("potrosnja")
        const cijenaGoriva = podatci.get("cijenaGoriva")
        setCijena(potrosnja * (duljinaPuta / 100) * cijenaGoriva)
    }

    return(
        <>
            <form onSubmit={submit}>
                <label htmlFor="duljinaPuta">Duljina puta (km)</label> <br />
                <input type="number" name="duljinaPuta"/> <br />
                <label htmlFor="potrosnja">Potrošnja goriva (l/100km)</label> <br />
                <input type="number" name="potrosnja" /> <br />
                <label htmlFor="cijenaGoriva">Cijena goriva (€/l)</label> <br />
                <input type="number" name="cijenaGoriva" /> <br />
                <input type="submit" value="Izračunaj!"/>
            </form>

            <p>Cijena vašeg puta biti će: {test()} €</p>
        </>
    )
}