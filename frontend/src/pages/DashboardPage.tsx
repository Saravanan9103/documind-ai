import { useAuth } from "../context/AuthContext";

export const DashboardPage = () => {
  const { username, logout } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand fw-semibold">DocuMind AI</span>
        <div className="d-flex align-items-center gap-3 text-white">
          <span className="small">Signed in as {username}</span>
          <button className="btn btn-outline-light btn-sm" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="container py-4">
        <h4>Your Document Workspace</h4>
        <p className="text-muted">
          JWT authentication is connected. Next, we will add PDF upload,
          indexing, and grounded RAG Q&A here.
        </p>
      </div>
    </div>
  );
};