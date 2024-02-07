import express from "express"
const router=express.Router();
import signupcontroller from "../contorollers/signupcontroller.js";
 import logincontroller from "../contorollers/logincontroller.js";
 import tripformcontroller from "../contorollers/tripformcontroller.js";
 import attachmentscontroller from "../contorollers/attachmentscontroller.js";
 import triplistcontroller from "../contorollers/triplistcontroller.js";
 import upload from "../mulerconfig.js"
 import photourlgenerator from "../contorollers/photourl.js";
 import itinerarycontroller from "../contorollers/itinerarycontroller.js";
 import searchbarcontroller from "../contorollers/searchbarcontroller.js";
 import itineraryplacenotescontroller from "../contorollers/itineraryplacenotescontroller.js";
 import itineraryplacetimecontroller from "../contorollers/itineraryplacetimecontroller.js"
 import itineraryplaceexpensecontroller from "../contorollers/itineraryplaceexpensecontroller.js";
router.post("/signup",signupcontroller)
router.post("/login",logincontroller)
router.post("/tripform",tripformcontroller);
router.post("/tripdashboard/upload",upload.single('file'),attachmentscontroller)
router.post("/tripdelete",triplistcontroller)
router.post("/photourl",photourlgenerator)
router.post("/itinerary",itinerarycontroller)
router.post("/searchbar",searchbarcontroller)
router.post("/itineraryplacenotes",itineraryplacenotescontroller)
router.post("/itineraryplacetime",itineraryplacetimecontroller)
router.post("/itineraryplaceexpense",itineraryplaceexpensecontroller)

export default router;