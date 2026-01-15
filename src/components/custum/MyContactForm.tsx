"use client";

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, message } = formData;
        if (!firstName || !lastName || !email || !phone || !message) {
            alert('Please fill in all fields.');
            return;
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <section className="bg-gradient-to-r from-gray-200 to-gray-50 sm:py-8 py-2 sm:px-4 px-2 text-gray-800 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg sm:p-8 p-3 space-y-8">
                <div className="bg-gray-100 sm:p-6 p-3 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-sky-800 mb-4">Contact Me</h2>
                    <p className="text-gray-600 mb-4 text-base">If you have any questions or would like to collaborate, please feel free to reach out.</p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-600 text-sm">
                            <FaPhoneAlt className="text-xl mr-3 text-sky-800" />
                            +92 325 348857
                        </li>
                        <li className="flex items-center text-gray-600 text-sm">
                            <FaEnvelope className="text-xl mr-3  text-sky-800" />
                            anoushaasadullah18@gmail.com
                        </li>
                        <li className="flex items-center text-gray-600 text-sm">
                            <FaMapMarkerAlt className="text-xl mr-3  text-sky-800" />
                            Karachi, Pakistan
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-100 sm:p-6 p-3 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold  text-sky-800 mb-4">Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                    className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                    className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 h-32 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full p-4  bg-sky-800 text-white font-semibold rounded-lg hover:bg-sky-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
