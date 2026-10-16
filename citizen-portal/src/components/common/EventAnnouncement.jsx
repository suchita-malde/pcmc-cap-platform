
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations } from "../../data/translations";
import "./EventAnnouncement.css";

export default function EventAnnouncement({ language }) {
  const t = translations[language];
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setShowPopup(false);
      return;
    }

    const dismissed = sessionStorage.getItem("eventAnnouncementDismissed");

    if (!dismissed) {
      setShowPopup(true);
    }
  }, [isHomePage]);

  function closePopup() {
    setShowPopup(false);
    sessionStorage.setItem("eventAnnouncementDismissed", "true");
  }

  function openGetInvolved() {
    closePopup();
    navigate("/get-involved");
  }

  return (
    <>
      <section className="event-announcement-banner">
        <div className="event-banner-content">
          <span className="event-banner-label">
            {t.eventBannerLabel}
          </span>

          <div className="event-banner-text">
            <h2>{t.eventBannerTitle}</h2>
            <p>{t.eventBannerDescription}</p>
          </div>
 
          <button
            className="event-banner-button"
            onClick={() => setShowPopup(true)}
          >
            {t.eventBannerButton}
            <span aria-hidden="true"> →</span>
          </button>
        </div>
      </section>

      {showPopup && (
        <div
          className="event-popup-overlay"
          onClick={closePopup}
        >
          <section
            className="event-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-popup-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="event-popup-close"
              onClick={closePopup}
              aria-label={t.eventPopupClose}
            >
              ×
            </button>

            <span className="event-popup-eyebrow">
              {t.eventPopupEyebrow}
            </span>

            <div className="event-popup-icon" aria-hidden="true">
              <span>🌿</span>
            </div>

            <h2 id="event-popup-title">{t.eventPopupTitle}</h2>
            <p>{t.eventPopupDescription}</p>

            <div className="event-popup-actions">
                <button
                    className="event-popup-button"
                    onClick={closePopup}
                >
                    {t.eventPopupButton}
                </button>

                <button
                    className="event-popup-more-button"
                    onClick={() => {
                    closePopup();
                    navigate("/get-involved#upcoming-events");
                    }}
                >
                    {t.eventPopupMoreInfo} →
                </button>
            </div>

            <small className="event-popup-note">
              Event information will be updated when confirmed.
            </small>
          </section>
        </div>
      )}
    </>
  );
}
