function checkZIP() {
  // For each country, defines the pattern that the ZIP has to follow
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // Read the country id
  const country = document.getElementById("Country").value;

  // Get the NPA field
  const ZIPField = document.getElementById("ZIP");

  // Build the constraint checker
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Check it!
  if (constraint.test(ZIPField.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    ZIPField.setCustomValidity("");
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

window.onload = () => {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};

/* /// File size

function checkFileSize() {
  const FS = document.getElementById("FS");
  const files = FS.files;

  // If there is (at least) one file selected
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // Check the constraint
      FS.setCustomValidity("The selected file must not be larger than 75 kB");
      return;
    }
  }
  // No custom constraint violation
  FS.setCustomValidity("");
}

window.onload = () => {
  document.getElementById("FS").onchange = checkFileSize;
}; */
