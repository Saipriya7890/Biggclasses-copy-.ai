// EnrollPage.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnrollPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] p-6 rounded shadow-lg relative">
        <button className="absolute top-2 right-4 text-xl" onClick={handleClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Get Skilled</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value="91"
                readOnly
                className="w-16 border border-gray-200 rounded px-3 py-2 bg-gray-50"
              />
              <input
                type="tel"
                className="flex-1 border border-gray-200 rounded px-3 py-2 bg-gray-50"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-50"
              required
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollPage;
