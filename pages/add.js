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


<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationServer01">First name</label>
      <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" defaultValue="Mark" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationServer02">Last name</label>
      <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" defaultValue="Otto" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationServerUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationServer01">Password</label>
      <input type="text" className="form-control is-valid" id="validationServer01" placeholder="password" defaultValue="Mark" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit</button>
</form>






    

</div>




</div>

<AdminFooter />
    </div>
  )
}