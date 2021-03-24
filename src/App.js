import "./styles.css";

const loadISU = () => {
  // call create referral api
  let responseFromAPI =
    "https://www.sandbox.paypal.com/us/merchantsignup/partner/onboardingentry?token=OWFkMGU0MzMtMjYxMy00ODFhLTkwOWEtZjRmMWZjMDRmOWRic01ZNXlBVzF0TWhLb1lZZWprVFFEM0J5aXRMYUw2R1hIVkIvczBmRW5vZz12Mg==&displayMode=minibrowser";

  let anchor = document.getElementById("ppbtn");
  anchor.href = responseFromAPI;

  alert("ISU Referral URl received");

  (function (d, s, id) {
    var js,
      ref = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.async = true;
      js.src =
        "https://www.paypal.com/webapps/merchantboarding/js/lib/lightbox/partner.js";
      js.onload = () => {
        alert("PayPal ISU script loaded");

        document.getElementById("ppbtn").style.display = "block";
      };
      ref.parentNode.insertBefore(js, ref);
    }
  })(document, "script", "paypal-js");
};

export default function App() {
  return (
    <div className="App">
      <h1>PayPal ISU react app demo </h1>
      <br />
      <button onClick={loadISU}>PayPal Onboarding </button>
      <br />
      <a id="ppbtn" data-paypal-button="true" target="PPFrame"
      >
        Connect With PayPal
      </a>
      <br />
    </div>
  );
}
