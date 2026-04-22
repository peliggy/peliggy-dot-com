"use strict";

const form = document.querySelector("[data-waitlist-form]");
const statusElement = document.querySelector("[data-form-status]");

function setStatus(message, tone) {
  statusElement.textContent = message;
  statusElement.dataset.tone = tone || "";
}

function clearErrors() {
  document.querySelectorAll("[data-error-for]").forEach((element) => {
    element.textContent = "";
  });
}

function showErrors(errors) {
  Object.entries(errors || {}).forEach(([field, message]) => {
    const element = document.querySelector(`[data-error-for="${field}"]`);
    if (element) {
      element.textContent = message;
    }
  });
}

function serializeForm(formElement) {
  const formData = new FormData(formElement);
  const payload = Object.fromEntries(formData.entries());
  payload.consent = formData.has("consent") ? "yes" : "";
  return payload;
}

function encodeFormData(data) {
  return new URLSearchParams(data).toString();
}

function getSubmissionUrl(formElement) {
  return formElement.dataset.netlifyEndpoint || formElement.action;
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearErrors();
    setStatus("", "");

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.dataset.loading = "true";

    try {
      const payload = serializeForm(form);
      const response = await fetch(getSubmissionUrl(form), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: encodeFormData(payload)
      });

      const result = response.headers.get("content-type")?.includes("application/json")
        ? await response.json()
        : { ok: response.ok };

      if (!response.ok) {
        showErrors(result.errors);
        setStatus(result.error || "Check the highlighted fields.", "error");
        return;
      }

      form.reset();
      setStatus(result.message || "You are on the Veyora waitlist.", "success");
    } catch {
      setStatus("The waitlist service is not reachable. Please try again in a moment.", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.dataset.loading = "false";
    }
  });
}
