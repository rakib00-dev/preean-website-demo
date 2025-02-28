import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactPage = ({
  smallTitle = 'Contact Our Sales Team',
  bigTitle = 'Contact us by filling the form and we will reach out to you',
  para = `Remove the steps that cause friction for prospects. Add Calendly to your website, landing pages, or display ads, and embed sales reps’ Calendly links into emails and campaigns to set your team up to win more deals.`,
  linkText = 'Book a call with DesignPro work from anywhere',
  bgColor,
  contentOrder = 'order-1',
  formOrder = 'order-2',
  smallChild = true,
}) => {
  // const form = document.getElementById('form');
  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const formBody = e.target;
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const message = e.target.message.value;
  //   form.reset();
  //   const body = { name, email, message };
  //   console.log(body);
  // });
  return (
    <section className="w-full max-w-7xl mx-auto ">
      <div
        className={`grid px-3 py-8 place-items-center md:grid-cols-2 md:px-6 ${bgColor}`}
      >
        <div
          className={`p-2 place-items-start grid gap-7 md:w-[93%] ${contentOrder}`}
        >
          {smallChild ? (
            <p className="text-sm text-blue-800 bg-blue-100 px-2 py-1 w-fit rounded-full">
              {smallTitle}
            </p>
          ) : (
            <></>
          )}
          <h1 className="text-2xl md:text-4xl">{bigTitle}</h1>
          <div className="flex justify-start items-center gap-3 py-6 border-b-2 border-b-blue-500 w-full">
            <h1 className="text-6xl">900</h1>
            <p
              className="flex justify-center items-center mt-7 text-lg"
              style={{ color: '#0b3558' }}
            >
              Active Clients worldwide
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 py-6 border-b-2 border-b-blue-500 w-full">
            <h1 className="text-6xl">100+</h1>
            <p
              className="flex justify-center items-center mt-7 text-lg"
              style={{ color: '#0b3558' }}
            >
              companies worked with DesignPro
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 py-6 border-b-2 border-b-blue-500 w-full">
            <h1 className="text-6xl">230+</h1>
            <p
              className="flex justify-center items-center mt-7 text-lg"
              style={{ color: '#0b3558' }}
            >
              individuals worked with us
            </p>
          </div>

          <Link className="transition-all duration-300 text-blue-500 flex items-center gap-2 hover:gap-4 hover:text-black">
            {linkText} <FaArrowRight />
          </Link>
        </div>

        <Form className={formOrder} />
      </div>
    </section>
  );
};

export default ContactPage;

const Form = ({ className }) => {
  const [value, setValue] = useState('');

  function handleOptionChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }
  return (
    <form
      id="form"
      action="https://api.web3forms.com/submit"
      method="POST"
      className={`mx-auto w-full mt-8 mb-8 relative bg-white p-6 md:p-8 shadow-2xl border rounded-xl border-gray-300 md:w-[530px] ${className}`}
    >
      <input
        type="hidden"
        name="access_key"
        value="d86ee754-00c7-466f-83fd-aa1ebbe84579"
      />

      <div className="grid gap-4 mb-3">
        <h2 className="text-4xl font-medium">Let's Chat</h2>
        <p className="text-lg">
          A DesignPro expert will reach out to discuss your needs.
        </p>
      </div>

      <div id="name-container" className="flex gap-4 mb-4">
        <div id="first-name-container" className="w-full">
          <label
            htmlFor="First Name"
            className="text-sm font-medium text-gray-600"
          >
            First Name <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            id="First Name"
            name="First Name"
            placeholder="Enter First Name"
            required
            className="p-3 border border-gray-300 rounded-md w-full mt-1 outline-none"
          />
        </div>
        <div id="last-name-container" className="w-full">
          <label
            htmlFor="Last Name"
            className="text-sm font-medium text-gray-600"
          >
            Last Name <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            id="Last Name"
            name="Last Name"
            placeholder="Enter Last Name"
            required
            className="p-3 border border-gray-300 rounded-md w-full mt-1 outline-none"
          />
        </div>
      </div>

      <div id="email-container" className="w-full mb-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-600">
          Bussiness Email <span className="text-red-500 text-lg">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          required
          className="p-3 border border-gray-300 rounded-md w-full mt-1 outline-none"
        />
      </div>

      <div id="number-container" className=" mb-4">
        <label
          htmlFor="number"
          className="text-sm flex font-medium text-gray-600 pb-1"
        >
          Phone Number <span className="text-red-500 text-lg">*</span>
        </label>

        <div id="last-name-container" className="grid gap-2 md:gap-0 md:flex">
          <CountryCode
            className={
              'grid justify-center w-full md:w-1/3 items-center p-2 mr-2'
            }
            onChange={handleOptionChange}
          />
          <input
            type="text"
            value={value == '' ? '+974' : `${value}`}
            className="md:w-15 w-full py-3 pl-2 border md:rounded-r-none md:border-r-0 border-gray-300 rounded-md outline-none md:rounded-l-md"
            required
            readOnly
          />
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Enter Your Phone Number"
            required
            className="py-3 outline-0 border md:border-l-0 border-gray-300 rounded-l-md md:rounded-l-none rounded-r-md w-full "
          />
        </div>
      </div>

      <div id="message-container" className="w-full mb-4">
        <label htmlFor="message" className="text-sm font-medium text-gray-600">
          Message <span className="text-red-500 text-lg">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we Help?"
          required
          spellCheck="false"
          className="p-3 border outline-none border-gray-300 rounded-md w-full h-32 mt-1 resize-none"
        ></textarea>
      </div>

      <div className="flex flex-col gap-5 justify-center w-full">
        <button
          type="submit"
          className="w-full text-center transition-all duration-300 bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-white hover:text-blue-500 border border-gray-300 cursor-pointer "
        >
          Submit
        </button>
        <p className="text-sm font-[500]">
          By clicking submit you consent to receive email communications about
          Calendly products and services and agree to our{' '}
          <Link to={'/terms'} className="text-blue-600 underline">
            Terms
          </Link>
          . Your data will be processed in accordance with our{' '}
          <Link to={'/privacy-policy'} className="text-blue-600 underline">
            Privacy Policy
          </Link>
          . You may opt out at any time.
        </p>
      </div>
    </form>
  );
};

const CountryCode = ({ className, onChange }) => {
  return (
    <select
      name="Country Code"
      id=""
      className={`border border-gray-300 rounded-md ${className}`}
      defaultValue={'+974'}
      onChange={onChange}
    >
      <option value="+44">
        {/* data-countryCode="GB" */}
        UK (+44)
      </option>
      <option value="+1">
        {/* data-countryCode="US" */}
        USA (+1)
      </option>
      <option value="+213">
        {/* data-countryCode="DZ" */}
        Algeria (+213)
      </option>
      <option value="+376">
        {/* data-countryCode="AD" */}
        Andorra (+376)
      </option>
      <option value="+244">
        {/* data-countryCode="AO" */}
        Angola (+244)
      </option>
      <option value="+1264">
        {/* data-countryCode="AI" */}
        Anguilla (+1264)
      </option>
      <option value="+1268">
        {/* data-countryCode="AG" */}
        Antigua &amp; Barbuda (+1268)
      </option>
      <option value="+54">
        {/* data-countryCode="AR" */}
        Argentina (+54)
      </option>
      <option value="+374">
        {/* data-countryCode="AM" */}
        Armenia (+374)
      </option>
      <option value="+297">
        {/* data-countryCode="AW" */}
        Aruba (+297)
      </option>
      <option value="+61">
        {/* data-countryCode="AU" */}
        Australia (+61)
      </option>
      <option value="+43">
        {/* data-countryCode="AT" */}
        Austria (+43)
      </option>
      <option value="+994">
        {/* data-countryCode="AZ" */}
        Azerbaijan (+994)
      </option>
      <option value="+1242">
        {/* data-countryCode="BS" */}
        Bahamas (+1242)
      </option>
      <option value="+973">
        {/* data-countryCode="BH" */}
        Bahrain (+973)
      </option>
      <option value="+880">
        {/* data-countryCode="BD" */}
        Bangladesh (+880)
      </option>
      <option value="+1246">
        {/* data-countryCode="BB" */}
        Barbados (+1246)
      </option>
      <option value="+375">
        {/* data-countryCode="BY" */}
        Belarus (+375)
      </option>
      <option value="+32">
        {/* data-countryCode="BE" */}
        Belgium (+32)
      </option>
      <option value="+501">
        {/* data-countryCode="BZ" */}
        Belize (+501)
      </option>
      <option value="+229">
        {/* data-countryCode="BJ" */}
        Benin (+229)
      </option>
      <option value="+1441">
        {/* data-countryCode="BM" */}
        Bermuda (+1441)
      </option>
      <option value="+975">
        {/* data-countryCode="BT" */}
        Bhutan (+975)
      </option>
      <option value="+591">
        {/* data-countryCode="BO" */}
        Bolivia (+591)
      </option>
      <option value="+387">
        {/* data-countryCode="BA" */}
        Bosnia Herzegovina (+387)
      </option>
      <option value="+267">
        {/* data-countryCode="BW" */}
        Botswana (+267)
      </option>
      <option value="+55">
        {/* data-countryCode="BR" */}
        Brazil (+55)
      </option>
      <option value="+673">
        {/* data-countryCode="BN" */}
        Brunei (+673)
      </option>
      <option value="+359">
        {/* data-countryCode="BG" */}
        Bulgaria (+359)
      </option>
      <option value="+226">
        {/* data-countryCode="BF" */}
        Burkina Faso (+226)
      </option>
      <option value="+257">
        {/* data-countryCode="BI" */}
        Burundi (+257)
      </option>
      <option value="+855">
        {/* data-countryCode="KH" */}
        Cambodia (+855)
      </option>
      <option value="+237">
        {/* data-countryCode="CM" */}
        Cameroon (+237)
      </option>
      <option value="+1">
        {/* data-countryCode="CA" */}
        Canada (+1)
      </option>
      <option value="+238">
        {/* data-countryCode="CV" */}
        Cape Verde Islands (+238)
      </option>
      <option value="+1345">
        {/* data-countryCode="KY" */}
        Cayman Islands (+1345)
      </option>
      <option value="+236">
        {/* data-countryCode="CF" */}
        Central African Republic (+236)
      </option>
      <option value="+56">
        {/* data-countryCode="CL" */}
        Chile (+56)
      </option>
      <option value="+86">
        {/* data-countryCode="CN" */}
        China (+86)
      </option>
      <option value="+57">
        {/* data-countryCode="CO" */}
        Colombia (+57)
      </option>
      <option value="+269">
        {/* data-countryCode="KM" */}
        Comoros (+269)
      </option>
      <option value="+242">
        {/* data-countryCode="CG" */}
        Congo (+242)
      </option>
      <option value="+682">
        {/* data-countryCode="CK" */}
        Cook Islands (+682)
      </option>
      <option value="+506">
        {/* data-countryCode="CR" */}
        Costa Rica (+506)
      </option>
      <option value="+385">
        {/* data-countryCode="HR" */}
        Croatia (+385)
      </option>
      <option value="+53">
        {/* data-countryCode="CU" */}
        Cuba (+53)
      </option>
      <option value="+90392">
        {/* data-countryCode="CY" */}
        Cyprus North (+90392)
      </option>
      <option value="+357">
        {/* data-countryCode="CY" */}
        Cyprus South (+357)
      </option>
      <option value="+42">
        {/* data-countryCode="CZ" */}
        Czech Republic (+42)
      </option>
      <option value="+45">
        {/* data-countryCode="DK" */}
        Denmark (+45)
      </option>
      <option value="+253">
        {/* data-countryCode="DJ" */}
        Djibouti (+253)
      </option>
      <option value="+1809">
        {/* data-countryCode="DM" */}
        Dominica (+1809)
      </option>
      <option value="+1809">
        {/* data-countryCode="DO" */}
        Dominican Republic (+1809)
      </option>
      <option value="+593">
        {/* data-countryCode="EC" */}
        Ecuador (+593)
      </option>
      <option value="+20">
        {/* data-countryCode="EG" */}
        Egypt (+20)
      </option>
      <option value="+503">
        {/* data-countryCode="SV" */}
        El Salvador (+503)
      </option>
      <option value="+240">
        {/* data-countryCode="GQ" */}
        Equatorial Guinea (+240)
      </option>
      <option value="+291">
        {/* data-countryCode="ER" */}
        Eritrea (+291)
      </option>
      <option value="+372">
        {/* data-countryCode="EE" */}
        Estonia (+372)
      </option>
      <option value="+251">
        {/* data-countryCode="ET" */}
        Ethiopia (+251)
      </option>
      <option value="+500">
        {/* data-countryCode="FK" */}
        Falkland Islands (+500)
      </option>
      <option value="+298">
        {/* data-countryCode="FO" */}
        Faroe Islands (+298)
      </option>
      <option value="+679">
        {/* data-countryCode="FJ" */}
        Fiji (+679)
      </option>
      <option value="+358">
        {/* data-countryCode="FI" */}
        Finland (+358)
      </option>
      <option value="+33">
        {/* data-countryCode="FR" */}
        France (+33)
      </option>
      <option value="+594">
        {/* data-countryCode="GF" */}
        French Guiana (+594)
      </option>
      <option value="+689">
        {/* data-countryCode="PF" */}
        French Polynesia (+689)
      </option>
      <option value="+241">
        {/* data-countryCode="GA" */}
        Gabon (+241)
      </option>
      <option value="+220">
        {/* data-countryCode="GM" */}
        Gambia (+220)
      </option>
      <option value="+7880">
        {/* data-countryCode="GE" */}
        Georgia (+7880)
      </option>
      <option value="+49">
        {/* data-countryCode="DE" */}
        Germany (+49)
      </option>
      <option value="+233">
        {/* data-countryCode="GH" */}
        Ghana (+233)
      </option>
      <option value="+350">
        {/* data-countryCode="GI" */}
        Gibraltar (+350)
      </option>
      <option value="+30">
        {/* data-countryCode="GR" */}
        Greece (+30)
      </option>
      <option value="+299">
        {/* data-countryCode="GL" */}
        Greenland (+299)
      </option>
      <option value="+1473">
        {/* data-countryCode="GD" */}
        Grenada (+1473)
      </option>
      <option value="+590">
        {/* data-countryCode="GP" */}
        Guadeloupe (+590)
      </option>
      <option value="+671">
        {/* data-countryCode="GU" */}
        Guam (+671)
      </option>
      <option value="+502">
        {/* data-countryCode="GT" */}
        Guatemala (+502)
      </option>
      <option value="+224">
        {/* data-countryCode="GN" */}
        Guinea (+224)
      </option>
      <option value="+245">
        {/* data-countryCode="GW" */}
        Guinea - Bissau (+245)
      </option>
      <option value="+592">
        {/* data-countryCode="GY" */}
        Guyana (+592)
      </option>
      <option value="+509">
        {/* data-countryCode="HT" */}
        Haiti (+509)
      </option>
      <option value="+504">
        {/* data-countryCode="HN" */}
        Honduras (+504)
      </option>
      <option value="+852">
        {/* data-countryCode="HK" */}
        Hong Kong (+852)
      </option>
      <option value="+36">
        {/* data-countryCode="HU" */}
        Hungary (+36)
      </option>
      <option value="+354">
        {/* data-countryCode="IS" */}
        Iceland (+354)
      </option>
      <option value="+91">
        {/* data-countryCode="IN" */}
        India (+91)
      </option>
      <option value="+62">
        {/* data-countryCode="ID" */}
        Indonesia (+62)
      </option>
      <option value="+98">
        {/* data-countryCode="IR" */}
        Iran (+98)
      </option>
      <option value="+964">
        {/* data-countryCode="IQ" */}
        Iraq (+964)
      </option>
      <option value="+353">
        {/* data-countryCode="IE" */}
        Ireland (+353)
      </option>
      <option value="+972">
        {/* data-countryCode="IL" */}
        Israel (+972)
      </option>
      <option value="+39">
        {/* data-countryCode="IT" */}
        Italy (+39)
      </option>
      <option value="+1876">
        {/* data-countryCode="JM" */}
        Jamaica (+1876)
      </option>
      <option value="+81">
        {/* data-countryCode="JP" */}
        Japan (+81)
      </option>
      <option value="+962">
        {/* data-countryCode="JO" */}
        Jordan (+962)
      </option>
      <option value="+7">
        {/* data-countryCode="KZ" */}
        Kazakhstan (+7)
      </option>
      <option value="+254">
        {/* data-countryCode="KE" */}
        Kenya (+254)
      </option>
      <option value="+686">
        {/* data-countryCode="KI" */}
        Kiribati (+686)
      </option>
      <option value="+850">
        {/* data-countryCode="KP" */}
        Korea North (+850)
      </option>
      <option value="+82">
        {/* data-countryCode="KR" */}
        Korea South (+82)
      </option>
      <option value="+965">
        {/* data-countryCode="KW" */}
        Kuwait (+965)
      </option>
      <option value="+996">
        {/* data-countryCode="KG" */}
        Kyrgyzstan (+996)
      </option>
      <option value="+856">
        {/* data-countryCode="LA" */}
        Laos (+856)
      </option>
      <option value="+371">
        {/* data-countryCode="LV" */}
        Latvia (+371)
      </option>
      <option value="+961">
        {/* data-countryCode="LB" */}
        Lebanon (+961)
      </option>
      <option value="+266">
        {/* data-countryCode="LS" */}
        Lesotho (+266)
      </option>
      <option value="+231">
        {/* data-countryCode="LR" */}
        Liberia (+231)
      </option>
      <option value="+218">
        {/* data-countryCode="LY" */}
        Libya (+218)
      </option>
      <option value="+417">
        {/* data-countryCode="LI" */}
        Liechtenstein (+417)
      </option>
      <option value="+370">
        {/* data-countryCode="LT" */}
        Lithuania (+370)
      </option>
      <option value="+352">
        {/* data-countryCode="LU" */}
        Luxembourg (+352)
      </option>
      <option value="+853">
        {/* data-countryCode="MO" */}
        Macao (+853)
      </option>
      <option value="+389">
        {/* data-countryCode="MK" */}
        Macedonia (+389)
      </option>
      <option value="+261">
        {/* data-countryCode="MG" */}
        Madagascar (+261)
      </option>
      <option value="+265">
        {/* data-countryCode="MW" */}
        Malawi (+265)
      </option>
      <option value="+60">
        {/* data-countryCode="MY" */}
        Malaysia (+60)
      </option>
      <option value="+960">
        {/* data-countryCode="MV" */}
        Maldives (+960)
      </option>
      <option value="+223">
        {/* data-countryCode="ML" */}
        Mali (+223)
      </option>
      <option value="+356">
        {/* data-countryCode="MT" */}
        Malta (+356)
      </option>
      <option value="+692">
        {/* data-countryCode="MH" */}
        Marshall Islands (+692)
      </option>
      <option value="+596">
        {/* data-countryCode="MQ" */}
        Martinique (+596)
      </option>
      <option value="+222">
        {/* data-countryCode="MR" */}
        Mauritania (+222)
      </option>
      <option value="+269">
        {/* data-countryCode="YT" */}
        Mayotte (+269)
      </option>
      <option value="+52">
        {/* data-countryCode="MX" */}
        Mexico (+52)
      </option>
      <option value="+691">
        {/* data-countryCode="FM" */}
        Micronesia (+691)
      </option>
      <option value="+373">
        {/* data-countryCode="MD" */}
        Moldova (+373)
      </option>
      <option value="+377">
        {/* data-countryCode="MC" */}
        Monaco (+377)
      </option>
      <option value="+976">
        {/* data-countryCode="MN" */}
        Mongolia (+976)
      </option>
      <option value="+1664">
        {/* data-countryCode="MS" */}
        Montserrat (+1664)
      </option>
      <option value="+212">
        {/* data-countryCode="MA" */}
        Morocco (+212)
      </option>
      <option value="+258">
        {/* data-countryCode="MZ" */}
        Mozambique (+258)
      </option>
      <option value="+95">
        {/* data-countryCode="MN" */}
        Myanmar (+95)
      </option>
      <option value="+264">
        {/* data-countryCode="NA" */}
        Namibia (+264)
      </option>
      <option value="+674">
        {/* data-countryCode="NR" */}
        Nauru (+674)
      </option>
      <option value="+977">
        {/* data-countryCode="NP" */}
        Nepal (+977)
      </option>
      <option value="+31">
        {/* data-countryCode="NL" */}
        Netherlands (+31)
      </option>
      <option value="+687">
        {/* data-countryCode="NC" */}
        New Caledonia (+687)
      </option>
      <option value="+64">
        {/* data-countryCode="NZ" */}
        New Zealand (+64)
      </option>
      <option value="+505">
        {/* data-countryCode="NI" */}
        Nicaragua (+505)
      </option>
      <option value="+227">
        {/* data-countryCode="NE" */}
        Niger (+227)
      </option>
      <option value="+234">
        {/* data-countryCode="NG" */}
        Nigeria (+234)
      </option>
      <option value="+683">
        {/* data-countryCode="NU" */}
        Niue (+683)
      </option>
      <option value="+672">
        {/* data-countryCode="NF" */}
        Norfolk Islands (+672)
      </option>
      <option value="+670">
        {/* data-countryCode="NP" */}
        Northern Marianas (+670)
      </option>
      <option value="+47">
        {/* data-countryCode="NO" */}
        Norway (+47)
      </option>
      <option value="+968">
        {/* data-countryCode="OM" */}
        Oman (+968)
      </option>
      <option value="+680">
        {/* data-countryCode="PW" */}
        Palau (+680)
      </option>
      <option value="+507">
        {/* data-countryCode="PA" */}
        Panama (+507)
      </option>
      <option value="+675">
        {/* data-countryCode="PG" */}
        Papua New Guinea (+675)
      </option>
      <option value="+595">
        {/* data-countryCode="PY" */}
        Paraguay (+595)
      </option>
      <option value="+51">
        {/* data-countryCode="PE" */}
        Peru (+51)
      </option>
      <option value="+63">
        {/* data-countryCode="PH" */}
        Philippines (+63)
      </option>
      <option value="+48">
        {/* data-countryCode="PL" */}
        Poland (+48)
      </option>
      <option value="+351">
        {/* data-countryCode="PT" */}
        Portugal (+351)
      </option>
      <option value="+1787">
        {/* data-countryCode="PR" */}
        Puerto Rico (+1787)
      </option>
      <option value="+974">
        {/* data-countryCode="QA" */}
        Qatar (+974)
      </option>
      <option value="+262">
        {/* data-countryCode="RE" */}
        Reunion (+262)
      </option>
      <option value="+40">
        {/* data-countryCode="RO" */}
        Romania (+40)
      </option>
      <option value="+7">
        {/* data-countryCode="RU" */}
        Russia (+7)
      </option>
      <option value="+250">
        {/* data-countryCode="RW" */}
        Rwanda (+250)
      </option>
      <option value="+378">
        {/* data-countryCode="SM" */}
        San Marino (+378)
      </option>
      <option value="+239">
        {/* data-countryCode="ST" */}
        Sao Tome &amp; Principe (+239)
      </option>
      <option value="+966">
        {/* data-countryCode="SA" */}
        Saudi Arabia (+966)
      </option>
      <option value="+221">
        {/* data-countryCode="SN" */}
        Senegal (+221)
      </option>
      <option value="+381">
        {/* data-countryCode="CS" */}
        Serbia (+381)
      </option>
      <option value="+248">
        {/* data-countryCode="SC" */}
        Seychelles (+248)
      </option>
      <option value="+232">
        {/* data-countryCode="SL" */}
        Sierra Leone (+232)
      </option>
      <option value="+65">
        {/* data-countryCode="SG" */}
        Singapore (+65)
      </option>
      <option value="+421">
        {/* data-countryCode="SK" */}
        Slovak Republic (+421)
      </option>
      <option value="+386">
        {/* data-countryCode="SI" */}
        Slovenia (+386)
      </option>
      <option value="+677">
        {/* data-countryCode="SB" */}
        Solomon Islands (+677)
      </option>
      <option value="+252">
        {/* data-countryCode="SO" */}
        Somalia (+252)
      </option>
      <option value="+27">
        {/* data-countryCode="ZA" */}
        South Africa (+27)
      </option>
      <option value="+34">
        {/* data-countryCode="ES" */}
        Spain (+34)
      </option>
      <option value="+94">
        {/* data-countryCode="LK" */}
        Sri Lanka (+94)
      </option>
      <option value="+290">
        {/* data-countryCode="SH" */}
        St. Helena (+290)
      </option>
      <option value="+1869">
        {/* data-countryCode="KN" */}
        St. Kitts (+1869)
      </option>
      <option value="+1758">
        {/* data-countryCode="SC" */}
        St. Lucia (+1758)
      </option>
      <option value="+249">
        {/* data-countryCode="SD" */}
        Sudan (+249)
      </option>
      <option value="+597">
        {/* data-countryCode="SR" */}
        Suriname (+597)
      </option>
      <option value="+268">
        {/* data-countryCode="SZ" */}
        Swaziland (+268)
      </option>
      <option value="+46">
        {/* data-countryCode="SE" */}
        Sweden (+46)
      </option>
      <option value="+41">
        {/* data-countryCode="CH" */}
        Switzerland (+41)
      </option>
      <option value="+963">
        {/* data-countryCode="SI" */}
        Syria (+963)
      </option>
      <option value="+886">
        {/* data-countryCode="TW" */}
        Taiwan (+886)
      </option>
      <option value="+7">
        {/* data-countryCode="TJ" */}
        Tajikstan (+7)
      </option>
      <option value="+66">
        {/* data-countryCode="TH" */}
        Thailand (+66)
      </option>
      <option value="+228">
        {/* data-countryCode="TG" */}
        Togo (+228)
      </option>
      <option value="+676">
        {/* data-countryCode="TO" */}
        Tonga (+676)
      </option>
      <option value="+1868">
        {/* data-countryCode="TT" */}
        Trinidad &amp; Tobago (+1868)
      </option>
      <option value="+216">
        {/* data-countryCode="TN" */}
        Tunisia (+216)
      </option>
      <option value="+90">
        {/* data-countryCode="TR" */}
        Turkey (+90)
      </option>
      <option value="+7">
        {/* data-countryCode="TM" */}
        Turkmenistan (+7)
      </option>
      <option value="+993">
        {/* data-countryCode="TM" */}
        Turkmenistan (+993)
      </option>
      <option value="+1649">
        {/* data-countryCode="TC" */}
        Turks &amp; Caicos Islands (+1649)
      </option>
      <option value="+688">
        {/* data-countryCode="TV" */}
        Tuvalu (+688)
      </option>
      <option value="+256">
        {/* data-countryCode="UG" */}
        Uganda (+256)
      </option>
      {/* <option  value="44">UK (+44)</option> */}
      {/* data-countryCode="GB" */}
      <option value="+380">
        {/* data-countryCode="UA" */}
        Ukraine (+380)
      </option>
      <option value="+971">
        {/* data-countryCode="AE" */}
        United Arab Emirates (+971)
      </option>
      <option value="+598">
        {/* data-countryCode="UY" */}
        Uruguay (+598)
      </option>
      {/* option  value="1">USA (+1)</option> */}
      {/* data-countryCode="US" */}
      <option value="+7">
        {/* data-countryCode="UZ" */}
        Uzbekistan (+7)
      </option>
      <option value="+678">
        {/* data-countryCode="VU" */}
        Vanuatu (+678)
      </option>
      <option value="+379">
        {/* data-countryCode="VA" */}
        Vatican City (+379)
      </option>
      <option value="+58">
        {/* data-countryCode="VE" */}
        Venezuela (+58)
      </option>
      <option value="+84">
        {/* data-countryCode="VN" */}
        Vietnam (+84)
      </option>
      <option value="+84">
        {/* data-countryCode="VG" */}
        Virgin Islands - British (+1284)
      </option>
      <option value="+84">
        {/* data-countryCode="VI" */}
        Virgin Islands - US (+1340)
      </option>
      <option value="+681">
        {/* data-countryCode="WF" */}
        Wallis &amp; Futuna (+681)
      </option>
      <option value="+969">
        {/* data-countryCode="YE" */}
        Yemen (North)(+969)
      </option>
      <option value="+967">
        {/* data-countryCode="YE" */}
        Yemen (South)(+967)
      </option>
      <option value="+260">
        {/* data-countryCode="ZM" */}
        Zambia (+260)
      </option>
      <option value="+263">
        {/* data-countryCode="ZW" */}
        Zimbabwe (+263)
      </option>
    </select>
  );
};
