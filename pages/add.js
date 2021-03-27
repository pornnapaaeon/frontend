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
<div classname="container-fluid">
  <form>
    <div classname="form-group">
      <label htmlfor="exampleInputEmail1">Email address</label>
      <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" classname="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div classname="form-group">
      <label htmlfor="exampleInputPassword1">Password</label>
      <input type="password" classname="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div classname="form-group form-check">
      <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
      <label classname="form-check-label" htmlfor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" classname="btn btn-primary">Submit</button>
  </form>
</div>





</div>

<AdminFooter />
    </div>
  )
}