import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>

    <section className="d-flex justify-content-center text-center mt-5">
      <div className="wrapper">
        <div>404 Not Found</div>
        <Link to={"/"}>click me</Link>
      </div>
    </section>
    </>

  )
}

export default NotFound