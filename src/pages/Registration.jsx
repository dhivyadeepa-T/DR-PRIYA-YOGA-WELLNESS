import { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    whatsapp: '',
    email: '',
    sessionType: 'online',
    date: '',
    timeSlot: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    let tempErrors = {};

    if (!formData.fullName)
      tempErrors.fullName = "Full Name is required";

    if (!formData.age || formData.age < 10)
      tempErrors.age = "Valid age is required";

    if (!formData.gender)
      tempErrors.gender = "Please select gender";

    if (!formData.phone || formData.phone.length < 10)
      tempErrors.phone = "Valid phone number is required";

    // WhatsApp validation only for online session
    if (
      formData.sessionType === "online" &&
      (!formData.whatsapp || formData.whatsapp.length < 10)
    ) {
      tempErrors.whatsapp = "Valid WhatsApp number is required";
    }

    if (
      !formData.email ||
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      tempErrors.email = "Valid email is required";
    }

    if (!formData.date)
      tempErrors.date = "Please select a date";

    if (!formData.timeSlot)
      tempErrors.timeSlot = "Please select time slot";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);

        setFormData({
          fullName: '',
          age: '',
          gender: '',
          phone: '',
          whatsapp: '',
          email: '',
          sessionType: 'online',
          date: '',
          timeSlot: '',
          message: ''
        });

      }, 4000);
    }
  };

  return (
    <div className="registration-page">

      <div className="page-header">
        <div className="container">
          <h1>Book a Session</h1>

          <p>
            Begin your wellness journey with us.
            Fill out the form below to register.
          </p>

        </div>
      </div>

      <section className="section bg-soft">

        <div className="container form-container">

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            {/* Name + Age */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Full Name *
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />

                {errors.fullName &&
                  <span className="error">
                    {errors.fullName}
                  </span>
                }

              </div>

              <div className="form-group">

                <label>
                  Age *
                </label>

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="25"
                />

                {errors.age &&
                  <span className="error">
                    {errors.age}
                  </span>
                }

              </div>

            </div>

            {/* Gender + Phone */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Gender *
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

                {errors.gender &&
                  <span className="error">
                    {errors.gender}
                  </span>
                }

              </div>

              <div className="form-group">

                <label>
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                />

                {errors.phone &&
                  <span className="error">
                    {errors.phone}
                  </span>
                }

              </div>

            </div>

            {/* WhatsApp only Online */}

            {formData.sessionType === "online" && (

              <div className="form-group">

                <label>
                  WhatsApp Number *
                </label>

                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="9876543210"
                />

                {errors.whatsapp &&
                  <span className="error">
                    {errors.whatsapp}
                  </span>
                }

              </div>

            )}

            {/* Email */}

            <div className="form-group">

              <label>
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />

              {errors.email &&
                <span className="error">
                  {errors.email}
                </span>
              }

            </div>

            {/* Session Type */}

            <div className="form-group radio-group">

              <label>
                Session Type *
              </label>

              <div className="radio-options">

                <label className="radio-label">

                  <input
                    type="radio"
                    name="sessionType"
                    value="online"
                    checked={
                      formData.sessionType === "online"
                    }
                    onChange={handleChange}
                  />

                  Online

                </label>


              </div>

            </div>

            {/* Date + Time */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Preferred Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                />

                {errors.date &&
                  <span className="error">
                    {errors.date}
                  </span>
                }

              </div>

              <div className="form-group">

                <label>
                  Time Slot *
                </label>

                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Time
                  </option>

                  <option value="09:00 AM">
                    09:00 AM - 11:00 AM
                  </option>

                  <option value="11:30 AM">
                    11:00 AM - 1:00 PM
                  </option>

                  <option value="05:30 PM">
                    05:30 PM - 07:30 PM
                  </option>

                  <option value="07:30 PM">
                    07:30 PM - 09:30 PM
                  </option>

                </select>

                {errors.timeSlot &&
                  <span className="error">
                    {errors.timeSlot}
                  </span>
                }

              </div>

            </div>

            {/* Message */}

            <div className="form-group">

              <label>
                Medical Conditions / Message
              </label>

              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe goals or concerns..."
              />

            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
            >

              Confirm Booking

            </button>

          </form>

        </div>

      </section>

      {showPopup && (

        <div className="popup-overlay">

          <div className="popup-content">

            <div className="popup-icon">
              ✓
            </div>

            <h2>
              Booking Successful!
            </h2>

            <p>

              Thank you,
              {formData.fullName}.

              Your session request has been received.

            </p>

          </div>

        </div>

      )}

    </div>
  );
};

export default Registration;