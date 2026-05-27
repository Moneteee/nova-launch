// ==========================================================================
// Nova Launchpad Interactive JavaScript Logic
// Handles interactive styles, states, and client-side toggle engines.
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.getElementById("action-btn");
    const feedbackMsg = document.getElementById("feedback-msg");

    if (actionBtn && feedbackMsg) {
        actionBtn.addEventListener("click", () => {
            // Toggle the Magic Mode theme class on body
            document.body.classList.toggle("magic-mode");

            // Check if magic mode is currently active
            const isMagicMode = document.body.classList.contains("magic-mode");

            if (isMagicMode) {
                actionBtn.textContent = "Toggle Normal Mode 🌌";
                feedbackMsg.textContent = "Magic mode is active! Enjoy the stardust. ✨";
                feedbackMsg.classList.add("show");
            } else {
                actionBtn.textContent = "Toggle Magic Mode 🔮";
                feedbackMsg.textContent = "Normal cosmic engine active.";
                // Clear the message after a brief delay
                setTimeout(() => {
                    if (!document.body.classList.contains("magic-mode")) {
                        feedbackMsg.classList.remove("show");
                    }
                }, 2000);
            }
        });
    }
});
