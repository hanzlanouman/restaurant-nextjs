import SideNav from '@/components/admin/SideNav';
import NavbarAdmin from '@/components/admin/NavbarAdmin';

const AdminLayout = ({ children }) => {
  return (
    <div className=''>
      <NavbarAdmin />
      <SideNav> {children}</SideNav>
    </div>
  );
};

export default AdminLayout;
