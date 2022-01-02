import Link from "next/link";
import React from "react";
// import Logo from "../images/logoRunZd.png"
import Layout from "./../components/layout";

function success() {
  return (
    <Layout>
      <div className="container">
        <div
          style={{
            width: "400px",
            height: "600px",
            margin: "50px auto 60px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={Logo} width="80%" alt="logo" /> */}
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Hvala Vam na prijavi!</h2>
            <p>
              Na vašu e-mail adresu će te uskoro dobiti sve potrebne informacije
            </p>
            <div className="linkBack">
              <Link href="/">
                <div className="linkBack">Povratak na početnu stranicu</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default success;