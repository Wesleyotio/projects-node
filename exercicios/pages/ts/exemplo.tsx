import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Jao usado" idade={30}/>
            <Pessoa nome="Maria"/>
        </div>
    )
}