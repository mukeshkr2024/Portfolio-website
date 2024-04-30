async function submitLeadToSalesforce(leadValues, leadConfig) {
  const url =
    "https://cloudprismsolutionpvtltd.my.salesforce-sites.com/services/apexrest/createLeadCP";

  const defaultValues = {
    city: "",
    State: "",
    Company: "Outsource",
    Designation__c: "",
    RecordTypeName: leadConfig.recordTypeName || "Cloudprism",
  };

  const bodyData = {
    ...defaultValues,
    FirstName: leadValues.firstName,
    LastName: leadValues.lastName,
    Email: leadValues.email,
    Phone: leadValues.phone,
    Message__c: leadValues.message || "",
    Lead_Type__c: leadConfig.leadType,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error submitting form to Salesforce:", error.message);
    // Optionally re-throw or handle error more specifically here
  }
}

// Testing the function with example data
const testValues = {
  firstName: "test",
  lastName: "test",
  email: "test@example.com",
  phone: "91763653434",
  message: "message",
};

const testLeadInfo = {
  // leadType: "Prateek Prasoon Portfolio",
  leadType: "Case studies CTA",
};

submitLeadToSalesforce(testValues, testLeadInfo);
