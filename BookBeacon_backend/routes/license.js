const express = require("express");
const { createLicense, getLicenseById, getLicenses, EditLicense, UpdateBookConcurrencyInLicense } = require("../controller/license.controller")
const protect = require("../middleware/authMiddleware")

const licenseRoute = express.Router();

licenseRoute.get("/licenses", protect, getLicenses);
licenseRoute.get("/license/:license_id", getLicenseById);
licenseRoute.post("/license", createLicense);
licenseRoute.put("/license", EditLicense);

licenseRoute.put("/updateBookConcurrencyInLicense", UpdateBookConcurrencyInLicense);

module.exports = licenseRoute;