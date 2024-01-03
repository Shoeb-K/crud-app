import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./signup.css"

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    hearAbout: [],
    city: 'Mumbai',
    state: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedHearAbout = [...formData.hearAbout];

    if (checked) {
      updatedHearAbout.push(value);
    } else {
      updatedHearAbout = updatedHearAbout.filter((item) => item !== value);
    }

    setFormData({
      ...formData,
      hearAbout: updatedHearAbout,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send formData to the API for saving
    console.log(formData);
    // You can make API calls here to save the data
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          pattern="[A-Za-z ]+"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          pattern="[0-9]+"
          required
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleInputChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Others"
            checked={formData.gender === 'Others'}
            onChange={handleInputChange}
          />
          Others
        </label>
      </div>
      <div>
        <label>How did you hear about this?</label>
        <label>
          <input
            type="checkbox"
            name="hearAbout"
            value="LinkedIn"
            onChange={handleCheckboxChange}
          />
          LinkedIn
        </label>
        <label>
          <input
            type="checkbox"
            name="hearAbout"
            value="Friends"
            onChange={handleCheckboxChange}
          />
          Friends
        </label>
        <label>
          <input
            type="checkbox"
            name="hearAbout"
            value="Job Portal"
            onChange={handleCheckboxChange}
          />
          Job Portal
        </label>
        <label>
          <input
            type="checkbox"
            name="hearAbout"
            value="Others"
            onChange={handleCheckboxChange}
          />
          Others
        </label>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="Enter state"
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default SignupForm;
