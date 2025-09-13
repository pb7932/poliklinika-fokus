'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const OrderFormSection = () => {
  const phoneNumberRegex = /^(\+\d{1,3}\s*)?(\d\s*){9}\d$/;
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    birthYear: "",
    serviceType: "",
    appointmentTime: "",
    note: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    birthYear: "",
    serviceType: "",
    appointmentTime: "",
    check: ""
  });
  
  const [isEmailSuccess, setIsEmailSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // Clear errors when user edits field
  };

  const handleCaptchaSubmission = (token: string | null) => {
    try {
      if (token) {
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  };

  const sendEmail = () => {
    emailjs.send("service_", "template_", {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        location: formData.location,
        birthYear: formData.birthYear,
        serviceType: formData.serviceType,
        appointmentTime: formData.appointmentTime,
        note: formData.note
      })
      .then(
        () => {
          setMessage("Narudžba uspješna! Obratit ćemo Vam se na e-mail adresu s daljnjim informacijama u najkraćem mogućem roku.");
          setIsEmailSuccess(true);
        },
        (error) => {
          setMessage("Došlo je do pogreške.");
          setIsEmailSuccess(false);
        }
      );
  }

  const validateForm = () => {
    const newErrors = {
        name: formData.name ? "" : "Ime je obavezno.",
        email: formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "" : "Molimo unesite ispravnu e-mail adresu.",
        phoneNumber: formData.phoneNumber ? "" : "Broj telefona je obavezan.",
        location: formData.location ? "" : "Mjesto stanovanja je obavezno.",
        birthYear: formData.birthYear ? "" : "Godina rođenja je obavezna.",
        serviceType: formData.serviceType ? "" : "Morate odabrati uslugu.",
        appointmentTime: formData.appointmentTime ? "" : "Morate odabrati termin.",
        check: isChecked ? "" : "Molimo prihvatite politiku privatnosti."
      };
  
      setErrors(newErrors);
  
      for (let key in newErrors) {
        if (newErrors[key]) return false;
        console.log(newErrors[key])
      }
      
      return true
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setIsEmailSuccess(false);

    // Validate form
   
    if(validateForm()) {
        setMessage("Narudžba uspješna! Obratit ćemo Vam se na e-mail adresu s daljnjim informacijama u najkraćem mogućem roku.");
        if(isVerified) {
            setIsEmailSuccess(true);
        }
        // sendEmail();
        else {
            setMessage("Molimo ispravite označene greške.")
        }
    } else {
        setMessage("Molimo ispunite CAPTCHA provjeru.");
    }
  };

  return (
    <section className="py-20 pt-36 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Naručivanje termina</h2>
        <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2 mb-12'></div>


        <div className="bg-white rounded-lg shadow-lg max-w-6xl p-6 space-y-4 mx-auto">
          <form id="booking" className="space-y-4" onSubmit={handleSubmit}>
            {/* Ime i prezime */}
            <div>
              <label htmlFor="name" className="block lg:text-lg font-semibold">Ime i prezime</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.name ? 'bg-red-200' : ''}`}
              />
              {errors.name && <p className="text-sm pt-1 text-red-500">{errors.name}</p>}
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="email" className="block lg:text-lg font-semibold">E-mail</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.email ? 'bg-red-200' : ''}`}
              />
              {errors.email && <p className="text-sm pt-1 text-red-500">{errors.email}</p>}
            </div>

            {/* Broj telefona */}
            <div>
              <label htmlFor="phoneNumber" className="block lg:text-lg font-semibold">Broj telefona</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.phoneNumber ? 'bg-red-200' : ''}`}
              />
              {errors.phoneNumber && <p className="text-sm pt-1 text-red-500">{errors.phoneNumber}</p>}
            </div>

            {/* Mjesto stanovanja */}
            <div>
              <label htmlFor="location" className="block lg:text-lg font-semibold">Mjesto stanovanja</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.location ? 'bg-red-200' : ''}`}
              />
              {errors.location && <p className="text-sm pt-1 text-red-500">{errors.location}</p>}
            </div>

            {/* Godina rođenja */}
            <div>
              <label htmlFor="birthYear" className="block lg:text-lg font-semibold">Godina rođenja</label>
              <input
                type="number"
                id="birthYear"
                name="birthYear"
                value={formData.birthYear}
                onChange={handleInputChange}
                className={`w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.birthYear ? 'bg-red-200' : ''}`}
              />
              {errors.birthYear && <p className="text-sm pt-1 text-red-500">{errors.birthYear}</p>}
            </div>

            {/* Narucivanje za */}
            <div>
              <label htmlFor="serviceType" className="block lg:text-lg font-semibold">Narucivanje za</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className={`w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.serviceType ? 'bg-red-200' : ''}`}
              >
                <option value="">Odaberite uslugu</option>
                <option value="Ocni pregled">Očni pregled</option>
                <option value="Pregled za operaciju mrene">Pregled za operaciju mrene</option>
                <option value="Oftalmolosku dijagnostiku">Oftalmolosku dijagnostiku</option>
              </select>
              {errors.serviceType && <p className="text-sm pt-1 text-red-500">{errors.serviceType}</p>}
            </div>

            {/* Termin za pregled */}
            <div>
              <label htmlFor="appointmentTime" className="block lg:text-lg font-semibold">Termin za pregled</label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleInputChange}
                className={`w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.appointmentTime ? 'bg-red-200' : ''}`}
              >
                <option value="">Odaberite termin</option>
                <option value="Ujutro">Ujutro</option>
                <option value="Popodne">Popodne</option>
              </select>
              {errors.appointmentTime && <p className="text-sm pt-1 text-red-500">{errors.appointmentTime}</p>}
            </div>

            {/* Napomena */}
            <div>
              <label htmlFor="note" className="block lg:text-lg font-semibold">Napomena</label>
              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                rows={4}
                className="w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:ring focus:ring-cyan-700"
              ></textarea>
            </div>

            <div className='py-4'>
                <label className="inline-flex items-start">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <span className="ml-2 text-gray-700">Slažem se s <a href='/politika-privatnosti' className='underline text-cyan-600 cursor-pointer'>Politikom privatnosti</a>.</span>
                </label>
                {errors.check && <p className="text-sm pt-1 text-red-500">{errors.check}</p>}
            </div>

            {/* CAPTCHA */}
            <div className="self-start">
              <ReCAPTCHA
                sitekey={"6LcohQkrAAAAAOTHlPHcZrQYoDWcmpkkGF2Ejh7S"}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition cursor-pointer"
              aria-label="Pošaljite prijavu termina"
            >
              Pošaljite
            </button>

              {/* Success or Error Message */}
              {(message && isEmailSuccess) && 
                <div className="w-full rounded-sm mt-8 p-2 bg-green-300">
                  <h2 className="font-semibold lg:text-lg">Narudžba uspješna!</h2>
                  <p className="mt-2">Obratit ćemo Vam se na e-mail adresu s daljnjim informacijama u najkraćem mogućem roku.</p>
                </div>
              }

              {(message && !isEmailSuccess) && 
                <div className="w-full rounded-sm mt-8 p-2 bg-red-100 text-red-500">
                  <h2 className="font-semibold">{message}</h2>
                </div>
              }
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;
