import { JSX, ParentProps } from 'solid-js';

import './Box.scss';

export default function Box(props: ParentProps): JSX.Element {
    return (
        <div class="component-box">
            {props.children}
        </div>
    )
}