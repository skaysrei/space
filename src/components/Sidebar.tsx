import UserBadge from './UserBadge';
import ActionWidget from './sidebar/widgets/ActionWidget';
import './Sidebar.scss'

export default function Sidebar() {
    return (
    <div class="">
        <UserBadge/>
        <ActionWidget/>
        <ActionWidget/>
        <ActionWidget/>
        <ActionWidget/>
    </div>
    );
};