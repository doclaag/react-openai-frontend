import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

interface Props {
    to: string;
    icon: string;
    title: string;
    description: string;
}

export const SidebarMenuItem = ({ to, icon, title, description }: Props) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
                    : "flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
            }
        >
            <i className={`${icon} text-2xl mr-4 text-indigo-400`}></i>
            <div className="flex flex-col">
                <span className="font-bold">{title}</span>
                <span className="text-sm">{description}</span>
            </div>
        </NavLink>
    );
};

// SidebarMenuItem.propTypes = {
//     to: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
// };
