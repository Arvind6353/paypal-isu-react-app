import "./styles.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // call create referral api
    let responseFromAPI =
      "https://www.sandbox.paypal.com/us/merchantsignup/partner/onboardingentry?token=OWFkMGU0MzMtMjYxMy00ODFhLTkwOWEtZjRmMWZjMDRmOWRic01ZNXlBVzF0TWhLb1lZZWprVFFEM0J5aXRMYUw2R1hIVkIvczBmRW5vZz12Mg==";
    document.getElementById(
      "ppbtn"
    ).href = `${responseFromAPI}&displayMode=minibrowser`;
  }, []);

  const loadISU = () => {
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
          alert("paypal ISU script loaded");
          document.getElementById("ppbtn").style.display = "block";
        };
        ref.parentNode.insertBefore(js, ref);
      }
    })(document, "script", "paypal-js");
  };
  return (
    <div className="App">
      PayPal ISU react app demo <br />
      <button onClick={loadISU}>Load ISU button </button>
      <button id="ppbtn" data-paypal-button="true" target="PPFrame">
        Connect with PayPal
      </button>
    </div>
  );
}
