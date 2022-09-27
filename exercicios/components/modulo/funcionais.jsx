export function Comp1() {
    return <h1>Comp1#</h1>
}

export const Comp2 = function() {
    return <h2>Comp2#</h2>
}

export default function Comp3() {
    return <h3>Comp3#</h3>
}

export const Comp4 = () => {
    return <h4>Comp4#</h4>
}

export const Comp5 = () => <h5>Comp5#</h5>

export const Comp6 = () => (
    <div>
        <h6>Comp6#</h6>
    </div>
)