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

        e.stopPropagation(); // Prevent event bubbling
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleInputFocus = (e) => {
        e.stopPropagation(); // Prevent event bubbling on focus
    };

    const handleBooking = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling

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

                <form onSubmit={handleBooking} onClick={(e) => e.stopPropagation()}>
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    // onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
                                >
                                    <option value="">Select Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="separated">Separated</option>
                                    <option value="widowed">Widowed</option>
                                    <option value="widowed">Other</option>

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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
                                >
                                    <option value="">Select Race/Ethnicity</option>
                                    <option value="arab-american">Arab American </option>
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                    onFocus={handleInputFocus}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
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
                                onFocus={handleInputFocus}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
                            >
                                <option value="">Select Country</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia and Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="BN">Brunei</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo (Brazzaville)</option>
                                <option value="CD">Congo (Kinshasa)</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Côte d’Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="SZ">Eswatini</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Laos</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="KP">North Korea</option>
                                <option value="MK">North Macedonia</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russia</option>
                                <option value="RW">Rwanda</option>
                                <option value="KN">Saint Kitts and Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="VC">Saint Vincent and the Grenadines</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome and Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="KR">South Korea</option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syria</option>
                                <option value="TW">Taiwan</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VA">Vatican City</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
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
                                    onFocus={handleInputFocus}
                                    placeholder="e.g., $150 per session"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 text-base"
                                />
                            </div>

                            <div className="flex items-center space-x-3 mt-8">
                                <input
                                    type="checkbox"
                                    id="slidingScale"
                                    name="slidingScale"
                                    checked={formData.slidingScale}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="slidingScale" className="text-sm font-medium text-gray-600">
                                    Interested in sliding scale pricing
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#8B9A6B] hover:bg-[#7A8A5A] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                {sending ? 'Sending…' : 'Submit Registration'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;