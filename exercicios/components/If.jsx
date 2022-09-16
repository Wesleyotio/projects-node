export default function If(props) {
    
    if (!props.teste) {
        return null
    }
    return props.children
}