import {
    aboutUsInfo,
    aboutUsMission,
    aboutUsMissionContent,
    aboutUsTitle,
    aboutUsValues,
    aboutUsValuesContent1,
    aboutUsValuesContent2,
    aboutUsValuesContent3,
    aboutUsValuesContent4,
    aboutUsVision,
    aboutUsVisionContent,
    bannerButton,
    bannerTitle,
    benefit1Subtitle,
    benefit1Title,
    benefit2Subtitle,
    benefit2Title,
    benefit3Subtitle,
    benefit3Title,
    benefit4Subtitle,
    benefit4Title,
    benefitSubtitle,
    benefitTitle, contactAddress, contactEmail,
    contactFormEmailLabel, contactFormMessageLabel,
    contactFormNameLabel,
    contactFormPhoneLabel, contactFormSubmitButton,
    contactFormSubtitle,
    contactFormTitle, contactPhone, contactTitle, copyrightText,
    knowMoreButton,
    knowMoreInfo,
    knowMoreSubtitle,
    knowMoreTitle, legalTitle,
    navbarButtonLogIn,
    navbarButtonSignUp,
    navbarItemAboutUs,
    navbarItemBenefits,
    navbarItemKnowMore,
    navbarItemPlans,
    navbarItemTestimonials,
    planBasicButton,
    planBasicFeature1,
    planBasicFeature2,
    planBasicFeature3,
    planBasicFeature4,
    planBasicFeature5,
    planBasicFeature6,
    planBasicPrice,
    planBasicTitle,
    planFreeButton,
    planFreeFeature1,
    planFreeFeature2,
    planFreeFeature3,
    planFreeFeature4,
    planFreeFeature5,
    planFreeFeature6,
    planFreePrice,
    planFreeTitle,
    planPremiumButton,
    planPremiumFeature1,
    planPremiumFeature2,
    planPremiumFeature3,
    planPremiumFeature4,
    planPremiumFeature5,
    planPremiumFeature6,
    planPremiumPrice,
    planPremiumTitle,
    planTitle, privacyPolicyText, signUpButton, signUpTitle, termsConditionsText,
    testimonialSubtitle,
    testimonialTitle, usefulLinksTitles
} from "../modules/constants.js";
import i18next from "i18next";

export function updateContent() {
    bannerTitle.innerHTML = i18next.t("home-title");
    bannerButton.innerHTML = i18next.t("hero-button")
    navbarItemKnowMore.innerHTML = i18next.t("navbar-item-know-more");
    navbarItemBenefits.innerHTML = i18next.t("navbar-item-benefits");
    navbarItemTestimonials.innerHTML = i18next.t("navbar-item-testimonials");
    navbarItemAboutUs.innerHTML = i18next.t("navbar-item-about-us");
    navbarItemPlans.innerHTML = i18next.t("navbar-item-plans");
    navbarButtonSignUp.innerHTML = i18next.t("navbar-button-sign-up");
    navbarButtonLogIn.innerHTML = i18next.t("navbar-button-log-in");
    knowMoreTitle.innerHTML = i18next.t("know-more-section-title");
    knowMoreSubtitle.innerHTML = i18next.t("know-more-section-subtitle");
    knowMoreInfo.innerHTML = i18next.t("know-more-section-description");
    knowMoreButton.innerHTML = i18next.t("know-more-section-button");
    benefitTitle.innerHTML = i18next.t("benefitTitle");
    benefitSubtitle.innerHTML = i18next.t("benefitSubtitle");
    benefit1Title.innerHTML = i18next.t("benefit1Title");
    benefit1Subtitle.innerHTML = i18next.t("benefit1Subtitle");
    benefit2Title.innerHTML = i18next.t("benefit1Title");
    benefit2Subtitle.innerHTML = i18next.t("benefit1Subtitle");
    benefit3Title.innerHTML = i18next.t("benefit1Title");
    benefit3Subtitle.innerHTML = i18next.t("benefit1Subtitle");
    benefit4Title.innerHTML = i18next.t("benefit1Title");
    benefit4Subtitle.innerHTML = i18next.t("benefit1Subtitle");
    testimonialTitle.innerHTML = i18next.t("testimonialTitle");
    testimonialSubtitle.innerHTML = i18next.t("testimonialSubtitle");
    aboutUsTitle.innerHTML = i18next.t("aboutUsTitle");
    aboutUsInfo.innerHTML = i18next.t("aboutUsInfo");
    aboutUsMission.innerHTML = i18next.t("aboutUsMission");
    aboutUsMissionContent.innerHTML = i18next.t("aboutUsMissionContent");
    aboutUsVision.innerHTML = i18next.t("aboutUsVision");
    aboutUsVisionContent.innerHTML = i18next.t("aboutUsVisionContent");
    aboutUsValues.innerHTML = i18next.t("aboutUsValues");
    aboutUsValuesContent1.innerHTML = i18next.t("aboutUsValuesContent1");
    aboutUsValuesContent2.innerHTML = i18next.t("aboutUsValuesContent2");
    aboutUsValuesContent3.innerHTML = i18next.t("aboutUsValuesContent3");
    aboutUsValuesContent4.innerHTML = i18next.t("aboutUsValuesContent4");
    planTitle.innerHTML = i18next.t("planTitle");
    planFreeTitle.innerHTML = i18next.t("planFreeTitle");
    planFreePrice.innerHTML = i18next.t("planFreePrice");
    planFreeFeature1.innerHTML = i18next.t("planFreeFeature1");
    planFreeFeature2.innerHTML = i18next.t("planFreeFeature2");
    planFreeFeature3.innerHTML = i18next.t("planFreeFeature3");
    planFreeFeature4.innerHTML = i18next.t("planFreeFeature4");
    planFreeFeature5.innerHTML = i18next.t("planFreeFeature5");
    planFreeFeature6.innerHTML = i18next.t("planFreeFeature6");
    planFreeButton.innerHTML = i18next.t("planFreeButton");
    planBasicTitle.innerHTML = i18next.t("planBasicTitle");
    planBasicPrice.innerHTML = i18next.t("planBasicPrice");
    planBasicFeature1.innerHTML = i18next.t("planBasicFeature1");
    planBasicFeature2.innerHTML = i18next.t("planBasicFeature2");
    planBasicFeature3.innerHTML = i18next.t("planBasicFeature3");
    planBasicFeature4.innerHTML = i18next.t("planBasicFeature4");
    planBasicFeature5.innerHTML = i18next.t("planBasicFeature5");
    planBasicFeature6.innerHTML = i18next.t("planBasicFeature6");
    planBasicButton.innerHTML = i18next.t("planBasicButton");
    planPremiumTitle.innerHTML = i18next.t("planPremiumTitle");
    planPremiumPrice.innerHTML = i18next.t("planPremiumPrice");
    planPremiumFeature1.innerHTML = i18next.t("planPremiumFeature1");
    planPremiumFeature2.innerHTML = i18next.t("planPremiumFeature2");
    planPremiumFeature3.innerHTML = i18next.t("planPremiumFeature3");
    planPremiumFeature4.innerHTML = i18next.t("planPremiumFeature4");
    planPremiumFeature5.innerHTML = i18next.t("planPremiumFeature5");
    planPremiumFeature6.innerHTML = i18next.t("planPremiumFeature6");
    planPremiumButton.innerHTML = i18next.t("planPremiumButton");
    contactFormTitle.innerHTML = i18next.t("contactFormTitle");
    contactFormSubtitle.innerHTML = i18next.t("contactFormSubtitle");
    contactFormNameLabel.innerHTML = i18next.t("contactFormNameLabel");
    contactFormEmailLabel.innerHTML = i18next.t("contactFormEmailLabel");
    contactFormPhoneLabel.innerHTML = i18next.t("contactFormPhoneLabel");
    contactFormMessageLabel.innerHTML = i18next.t("contactFormMessageLabel");
    contactFormSubmitButton.innerHTML = i18next.t("contactFormSubmitButton");
    signUpTitle.innerHTML = i18next.t("signUpTitle");
    signUpButton.innerHTML = i18next.t("signUpButtonText");
    usefulLinksTitles.innerHTML = i18next.t("usefulLinksTitle");
    contactTitle.innerHTML = i18next.t("contactTitle");
    contactPhone.innerHTML = i18next.t("contactPhone");
    contactEmail.innerHTML = i18next.t("contactEmail");
    contactAddress.innerHTML = i18next.t("contactAddress");
    legalTitle.innerHTML = i18next.t("legalTitle");
    privacyPolicyText.innerHTML = i18next.t("privacyPolicyText");
    termsConditionsText.innerHTML = i18next.t("termsConditionsText");
    copyrightText.innerHTML = i18next.t("copyrightText");
}