import React from "react";

const App = () => {
  return (
    <div className="flex w-full">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
        <div className="card-body">
          <h2 className="card-title text-center">Vite + TailwindCSS + DaisyUI</h2>
          <p>Are Installed and Ready</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Click Me!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
