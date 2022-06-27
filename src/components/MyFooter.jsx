const MyFooter = () => {
  return (
    <footer className="container-fluid d-flex flex-column justify-content-center align-items-center py-3 bg-dark text-light">
      <button
        type="button"
        className="btn btn-outline-secondary mb-2"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Contact us
      </button>
      <span>© 2022 Ezi. All Rights Reserved.</span>
    </footer>
  );
};

export default MyFooter;
