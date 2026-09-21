import { useNavigate, useRouteError } from "react-router-dom";
import { DinoGame } from "../components/DinoGame";
import { useState } from "react";

export const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate();

  console.log(error);
  

  return (
    <main className="error-page">
      <div className="error-content">
        <p className="error-code">{error && error.status} {error.statusText} </p>

        <p className="error-description">
          {error && error.error.message}
        </p>

        <button className="error-btn cursor-pointer" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    </main>
  );
};
