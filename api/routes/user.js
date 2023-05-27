import express from "express";
import multer from "multer";
import path from "path";
import {
  acceptFriendRequest,
  activateAccountByCode,
  activateAccountByLink,
  changePassword,
  checkPasswordResetOTP,
  coverPhotoUpdate,
  deleteFriendRequest,
  featuredSlides,
  findUserAccount,
  getAllUser,
  logedInUser,
  login,
  profilePhotoUpdate,
  register,
  resetPassword,
  sendActivateAccountResendMail,
  sendFriendRequest,
  sendPasswordResetOTP,
  sendRecoveryPasswordMail,
  sendResendMessageForPassword,
  userProfileUpdate,
} from "../controller/user.js";
const router = express.Router();
const __dirname = path.resolve();

/**
 * Multer featured sliders image
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "slides") {
      cb(null, path.join(__dirname, "/api/public/featured_slides"));
    } else if (file.fieldname === "profile") {
      cb(null, path.join(__dirname, "/api/public/profile_photo"));
    } else if (file.fieldname === "cover") {
      cb(null, path.join(__dirname, "/api/public/cover_photo"));
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadFeatured = multer({ storage: storage }).array("slides", 20);
const profilePhoto = multer({ storage: storage }).single("profile");
const coverPhoto = multer({ storage: storage }).single("cover");

router.post("/register", register);
router.post("/login", login);
router.get("/me", logedInUser);
router.get("/all-user/:id", getAllUser);
router.get("/send-friend-request/:sender/:receiver", sendFriendRequest);
router.get("/delete-friend-request/:meId/:requestId", deleteFriendRequest);
router.get("/accept-friend-request/:meId/:requestId", acceptFriendRequest);
router.put("/user-profile-update/:id", userProfileUpdate);
router.put("/profile-photo-update/:id", profilePhoto, profilePhotoUpdate);
router.put("/cover-photo-update/:id", coverPhoto, coverPhotoUpdate);
router.post("/featured-slides/:id", uploadFeatured, featuredSlides);
router.get("/activate/:token", activateAccountByLink);
router.post("/activate", activateAccountByCode);
router.post("/resend-mail", sendActivateAccountResendMail);
router.post("/resend-message-password", sendResendMessageForPassword);
router.post("/recover-password", sendRecoveryPasswordMail);
router.post("/reset-password/:token", resetPassword);
router.post("/find-user", findUserAccount);
router.post("/password-reset-otp", sendPasswordResetOTP);
router.post("/check-password-reset-otp", checkPasswordResetOTP);
router.post("/change-password", changePassword);

export default router;
