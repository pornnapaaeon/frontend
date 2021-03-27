import AdminHeader from '../component/layout/admin.header';
import AdminSiderbar from '../component/layout/admin.menu';
import AdminFooter from '../component/layout/admin.footer';
/* สวัสดี index */
export default function Home() {
  return (
  <div>
    <AdminHeader />
    <AdminSiderbar />
{/*     <div className="content-wrapper text-center">
    <h1>Hello world</h1>
    <br />
    <h1>My name is</h1>
    <br />
    <h2>worachet raphukhiew</h2>
    </div> */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">ADD</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard v3</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>



{/* /.content */}
<div className="container-fluid">



<form action="/action_page.php">
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" />
  </div>
  <div className="checkbox">
    <label><input type="checkbox" /> Remember me</label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>






    

</div>




</div>

<AdminFooter />
    </div>
  )
}