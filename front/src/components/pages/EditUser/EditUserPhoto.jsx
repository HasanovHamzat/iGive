import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditUserPhoto() {
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  // const [uploadedFile, setUploadedFile] = useState({});

  const navigate = useNavigate();

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
       await axios.patch(
        "http://localhost:3001/user/profile/data/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // const { result } = res.data;
      // setUploadedFile(result);
      navigate("/private/user");
    } catch (err) {
      if (err?.response?.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err?.response?.data?.msg);
      }
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="d-flex align-items-center justify-content-center flex-column py-5"
    >
      <h2 className="mb-4">Редактировать фото</h2>
      <div className="mb-3">
        <p style={{ color: "red" }}>{message}</p>
        <input type="file" onChange={onChange} />
        <button type="submit" value="Upload" className="btn btn-danger mt-4">
          Добавить фото
        </button>
      </div>
    </form>
  );
}

export default EditUserPhoto;
