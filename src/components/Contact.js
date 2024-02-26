import React from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const Contact = () => {
  const [t] = useTranslation("global");
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    phone: Yup.string().required("El teléfono es requerido"),
    affair: Yup.string().required("El asunto es requerido"),
    message: Yup.string().required("El mensaje es requerido"),
  });
  const emailURL = new URL(
    "mail.php",
    "https://cardozodevportfolio.000webhostapp.com/"
  );

  return (
    <div>
      <div className="content" id="contact">
        <h1 className="logo">{t("navbar.t3")}</h1>
        <div className="contact-wrapper">
          <div className="contact-form">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                phone: "",
                affair: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                emailURL.searchParams.append("name", values.fullname);
                emailURL.searchParams.append("phone", values.phone);
                emailURL.searchParams.append("email", values.email);
                emailURL.searchParams.append("subject", values.affair);
                emailURL.searchParams.append("message", values.message);
                console.log(values);
                fetch(emailURL)
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.OK) {
                      actions.resetForm();
                      Notify.success(
                        "Tus datos fueron enviados correctamente",
                        {
                          background: "#0093e9",
                          fontSize: "24",
                        }
                      );
                    }
                  });
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <p>
                    <label>{t("contact.t1")}</label>
                    <Field type="text" name="fullname" />
                    {errors.fullname && touched.fullname ? (
                      <div>{errors.fullname}</div>
                    ) : null}
                  </p>
                  <p>
                    <label>{t("contact.t2")}</label>
                    <Field type="email" name="email" />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                  </p>
                  <p>
                    <label>{t("contact.t3")}</label>
                    <Field type="tel" name="phone" />
                    {errors.phone && touched.phone ? (
                      <div>{errors.phone}</div>
                    ) : null}
                  </p>
                  <p>
                    <label>{t("contact.t4")}</label>
                    <Field type="text" name="affair" />
                    {errors.affair && touched.affair ? (
                      <div>{errors.affair}</div>
                    ) : null}
                  </p>
                  <p className="block">
                    <label>{t("contact.t5")}</label>
                    <Field as="textarea" name="message" rows="3"></Field>
                    {errors.message && touched.message ? (
                      <div>{errors.message}</div>
                    ) : null}
                  </p>
                  <p className="block">
                    <button type="submit" disabled={isSubmitting}>
                      {t("contact.t6")}
                    </button>
                  </p>
                </Form>
              )}
            </Formik>
          </div>{" "}
          <div className="contact-info">
            <h4>{t("contact.t7")}</h4>
            <ul>
              <li>
                <i className=" bi-geo-alt"></i> Maracaibo Edo. Zulia, Venezuela
              </li>
              <li>
                <i className=" bi-phone"></i>+58 4246926618
              </li>
              <li>
                <i className=" bi-envelope"></i> cardoz.jg@gmail.com
              </li>
            </ul>
            <p>
              "{t("contact.t8")}"
              <br />
              <br /> -Heráclito-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
