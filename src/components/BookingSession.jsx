import React, { useState } from 'react';
import emailjs from "emailjs-com";

const SERVICE_ID = "service_uhcux1s";
const TEMPLATE_ID = "template_vna8rpm"
const PUBLIC_KEY = "HOPXOPW_GKmUkeXJz";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '',
        email: '', confirmEmail: '',
        phoneNumber: '', dateOfBirth: '',
        relationshipStatus: '', raceEthnicity: '',
        addressLine1: '', addressLine2: '',
        city: '', state: '', zipCode: '', country: '',
        fees: '', slidingScale: false,
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleBooking = (e) => {
        e.preventDefault();

        if (!formData.email || formData.email !== formData.confirmEmail) {

            return;
        }

        const templateParams = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            phoneNumber: formData.phoneNumber.trim(),
            dateOfBirth: formData.dateOfBirth,
            relationshipStatus: formData.relationshipStatus,
            raceEthnicity: formData.raceEthnicity,
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            country: formData.country,
            fees: formData.fees,
            slidingScale: formData.slidingScale ? "Yes" : "No",
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);


                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    confirmEmail: "",
                    phoneNumber: "",
                    dateOfBirth: "",
                    relationshipStatus: "",
                    raceEthnicity: "",
                    addressLine1: "",
                    addressLine2: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    country: "",
                    fees: "",
                    slidingScale: false,
                });
            })
            .catch((error) => {
                console.error("FAILED...", error);

            });
    };
    return (
        <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#faf5ee' }}>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-light text-gray-800 mb-8">Registration</h1>

                <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Email Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-600">
                                Confirm Email
                            </label>
                            <input
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={formData.confirmEmail}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Phone and Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-600">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Relationship Status and Race/Ethnicity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="relationshipStatus" className="block text-sm font-medium text-gray-600">
                                Relationship Status
                            </label>
                            <select
                                id="relationshipStatus"
                                name="relationshipStatus"
                                value={formData.relationshipStatus}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                                <option value="">Select Status</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="separated">Separated</option>
                                <option value="widowed">Widowed</option>
                                <option value="partnership">Domestic Partnership</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="raceEthnicity" className="block text-sm font-medium text-gray-600">
                                Race/Ethnicity
                            </label>
                            <select
                                id="raceEthnicity"
                                name="raceEthnicity"
                                value={formData.raceEthnicity}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                                <option value="">Select Race/Ethnicity</option>
                                <option value="american-indian">American Indian or Alaska Native</option>
                                <option value="asian">Asian</option>
                                <option value="black">Black or African American</option>
                                <option value="hispanic">Hispanic or Latino</option>
                                <option value="native-hawaiian">Native Hawaiian or Pacific Islander</option>
                                <option value="white">White</option>
                                <option value="two-or-more">Two or More Races</option>
                                <option value="prefer-not-to-say">Prefer Not to Say</option>
                            </select>
                        </div>
                    </div>

                    {/* Address Line 1 and 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-600">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                id="addressLine1"
                                name="addressLine1"
                                value={formData.addressLine1}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-600">
                                Address Line 2 (Optional)
                            </label>
                            <input
                                type="text"
                                id="addressLine2"
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* City, State, Zip */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-600">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-600">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-600">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                        >
                            <option value="">Select Country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Fees and Sliding Scale */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="fees" className="block text-sm font-medium text-gray-600">
                                Fees (USD)
                            </label>
                            <input
                                type="text"
                                id="fees"
                                name="fees"
                                value={formData.fees}
                                onChange={handleInputChange}
                                placeholder="e.g., $150 per session"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                            />
                        </div>

                        <div className="flex items-center space-x-3 mt-8">
                            <input
                                type="checkbox"
                                id="slidingScale"
                                name="slidingScale"
                                checked={formData.slidingScale}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="slidingScale" className="text-sm font-medium text-gray-600">
                                Interested in sliding scale pricing
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            type="button"
                            onClick={handleBooking}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {sending ? 'Sending…' : 'Submit Registration'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
