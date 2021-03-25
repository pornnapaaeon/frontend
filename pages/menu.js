import AdminHeader from '../component/layout/admin.header';
import AdminSiderbar from '../component/layout/admin.menu';
import AdminFooter from '../component/layout/admin.footer';
/* สวัสดี index */
export default function Home() {
  return (
  <div>
    <AdminHeader />
    <AdminSiderbar />
    <div>
        <a>MENU</a>
    </div>


<AdminFooter />
    </div>
  )
}