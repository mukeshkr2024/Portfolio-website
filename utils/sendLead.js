export async function submitLeadToSalesforce(leadValues, leadConfig) {
  console.log(leadValues, leadConfig);
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

    console.log("Submission Successful:", result);
    return result;
  } catch (error) {
    console.error("Error submitting form to Salesforce:", error.message);
    // Optionally re-throw or handle error more specifically here
  }
}
