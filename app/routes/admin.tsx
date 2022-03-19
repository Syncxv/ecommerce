import { Outlet } from "remix";

interface Props {}

const Admin: React.FC<Props> = (props) => {
    return (
        <>
            <div>admin eh</div>
            <Outlet />
        </>
    );
};

export default Admin;
