export default function SomnentePar( props) {
    if (!(props.numero % 2 === 0)) {
        return null;
    }
    return <span>{props.numero}</span>
}