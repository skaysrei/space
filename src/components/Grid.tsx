import { JSX, ParentProps } from 'solid-js'

export default function Grid(props: ParentProps): JSX.Element {
    return (
        <div>
            {props.children}
        </div>
    )
}