document.getElementById("applicationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const discordUsername = formData.get("discordUsername");
  const age = formData.get("age");
  const nickname = formData.get("nickname");

  const message = `New application:\nDiscord Username: ${discordUsername}\nAge: ${age}\nNickname: ${nickname}`;

  const webhookURL = "https://discord.com/api/webhooks/1212859663146811522/eTs3oPO1Qh-HJWVPdLE3LXcwtWKzZ5S-vGj53oEh73MtVCLtQ-iD-vuV_QP_RKqQb0re";
  fetch(webhookURL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: message })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Failed to send message to Discord.");
      }
      alert("Application submitted successfully!");
      document.getElementById("applicationForm").reset();
  })
  .catch(error => {
      console.error(error);
      alert("Failed to submit application. Please try again later.");
  });
});
