'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageDescription: "",
    messageContent: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    messageDescription: "",
    messageContent: "",
    check: ""
  });

  const [message, setMessage] = useState("");
  const [isEmailSuccess, setIsEmailSuccess] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // Clear any errors when the user edits a field
  };

  const sendEmail = () => {
    emailjs.init("public key");
    emailjs
      .send(
        "service_",
        'template_',
        {
          name: formData.name,
          email: formData.email,
          msgDesc: formData.messageDescription,
          msgContent: formData.messageContent
        }
      )
      .then(
        () => {
          setMessage("Obrazac uspješno poslan.");
          setIsEmailSuccess(true);
        },
        (error) => {
          setMessage("Došlo je do greške.");
          setIsEmailSuccess(false);
        }
      );
  }

  const validateForm = () => {
    let newErrors = {
      name: "",
      email: "",
      messageDescription: "",
      messageContent: "",
      check: ""
    };
    setIsEmailSuccess(false);

    if (!formData.name) newErrors.name = "Ime je obavezno.";
    if (!formData.email) {
      newErrors.email = "E-mail je obavezan.";
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Molimo unesite ispravnu e-mail adresu.";
    if (!formData.messageDescription) newErrors.messageDescription = "Predmet je obavezan.";
    if (!isChecked) newErrors.check = "Molimo prihvatite politiku privatnosti.";

    setErrors(newErrors);

    for (let key in newErrors) {
      if (newErrors[key]) return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setIsEmailSuccess(false);

    if (validateForm()) {
      if (isVerified) {
        setMessage("Obrazac uspješno poslan.");
        setIsEmailSuccess(true);
        // sendEmail();
      } else {
        setMessage("Molimo ispunite CAPTCHA provjeru.");
      }
    } else {
      setMessage("Molimo ispravno unesite sve podatke.");
    }
  };

  return (
    <section className="bg-white shadow-lg shadow-black/30 rounded-md p-6 mt-24 max-w-6xl mx-auto z-20" id="kontakt" role="region" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-2xl lg:text-4xl font-semibold mb-2">Kontaktirajte nas</h2>
      <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2'></div>

      <form id="contact" action="#" method="POST" className="space-y-6 mt-12" aria-describedby="contact-instructions" onSubmit={handleSubmit}>
        <p id="contact-instructions" className="sr-only">
          Sva polja označena su obavezna osim poruke. CAPTCHA mora biti ispunjena.
        </p>

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block font-semibold">Ime</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.name ? 'bg-neutral-300' : ''}`}
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-sm pt-1">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block font-semibold">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.email ? 'bg-neutral-300' : ''}`}
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-sm pt-1">{errors.email}</p>}
        </div>

        {/* Subject Input */}
        <div>
          <label htmlFor="msg" className="block font-semibold">Predmet</label>
          <input
            type="text"
            id="msg"
            name="messageDescription"
            className={`w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.messageDescription ? 'bg-neutral-300' : ''}`}
            value={formData.messageDescription}
            onChange={handleInputChange}
          />
          {errors.messageDescription && <p className="text-sm pt-1">{errors.messageDescription}</p>}
        </div>

        {/* Message Input (Optional) */}
        <div>
          <label htmlFor="content" className="block font-semibold">Poruka (opcionalno)</label>
          <textarea
            id="content"
            name="messageContent"
            className={`w-full min-h-36 border border-gray-300 rounded-md p-3 mt-2 focus:ring focus:ring-cyan-700 ${errors.messageContent ? 'bg-red-200' : ''}`}
            value={formData.messageContent}
            onChange={handleInputChange}
          />
        </div>

        {/* Privacy Policy */}
        <div className='py-4'>
                <label className="inline-flex items-start">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <span className="ml-2 text-gray-700">Slažem se s <a href='/politika-privatnosti' className='underline text-cyan-700 cursor-pointer'>Politikom privatnosti</a>.</span>
                </label>
                {errors.check && <p className="text-sm pt-1">{errors.check}</p>}
        </div>

        {/* Captcha */}
        <div className="self-start">
          <ReCAPTCHA
            sitekey={"6LcohQkrAAAAAOTHlPHcZrQYoDWcmpkkGF2Ejh7S"}
            ref={recaptchaRef}
            onChange={handleChange}
            onExpired={handleExpired}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
             className='px-4 py-2 border-[3px] border-cyan-700 bg-cyan-700 hover:bg-transparent text-white hover:text-black transition-all duration-300 rounded-md mt-8 cursor-pointer'
            aria-label="Pošaljite poruku"
          >
            Pošaljite poruku
          </button>
        </div>
      </form>

      {/* Success or Error Message */}
      {(message && isEmailSuccess) && 
        <div className="w-full rounded-sm mt-8 p-2 bg-teal-100" role="status" aria-live="polite">
          <h2 className="font-semibold text-lg">Poruka uspješno poslana!</h2>
          <p className="mt-2">Obratit ćemo vam se uskoro putem e-maila.</p>
        </div>
      }

      {(message && !isEmailSuccess) && 
        <div className="w-full rounded-sm mt-8 p-2 bg-red-100 text-red-500" role="status" aria-live="polite">
          <p className="font-semibold">{message}</p>
        </div>
      }
    </section>
  )
}

export default Contact;
