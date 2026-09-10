// ========================================
// NEXORA AI - MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. FLOATING CHAT OPEN / CLOSE
    // ========================================

    const chatButton =
        document.getElementById("chatButton");

    const chatBox =
        document.getElementById("chatBox");

    const closeChat =
        document.getElementById("closeChat");


    if (chatButton && chatBox) {

        chatButton.addEventListener("click", function () {

            chatBox.classList.toggle("active");

        });

    }


    if (closeChat && chatBox) {

        closeChat.addEventListener("click", function () {

            chatBox.classList.remove("active");

        });

    }



    // ========================================
    // 2. MAIN AI ASSISTANT
    // ========================================

    const aiChatForm =
        document.getElementById("aiChatForm");

    const aiChatInput =
        document.getElementById("aiChatInput");

    const aiMessages =
        document.getElementById("aiMessages");


    if (
        aiChatForm &&
        aiChatInput &&
        aiMessages
    ) {

        aiChatForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const message =
                    aiChatInput.value.trim();

                if (message === "") {
                    return;
                }


                // USER MESSAGE

                const userMessage =
                    document.createElement("div");

                userMessage.className =
                    "ai-message user-message";

                userMessage.textContent =
                    message;

                aiMessages.appendChild(
                    userMessage
                );


                aiChatInput.value = "";


                aiMessages.scrollTop =
                    aiMessages.scrollHeight;


                // AI RESPONSE

                setTimeout(function () {

                    const botMessage =
                        document.createElement("div");

                    botMessage.className =
                        "ai-message bot-message";

                    botMessage.textContent =
                        getResponse(message);


                    aiMessages.appendChild(
                        botMessage
                    );


                    aiMessages.scrollTop =
                        aiMessages.scrollHeight;

                }, 600);

            }
        );

    }



    // ========================================
    // 3. FLOATING CHAT
    // ========================================

    const floatingChatForm =
        document.getElementById(
            "floatingChatForm"
        );

    const floatingChatInput =
        document.getElementById(
            "floatingChatInput"
        );

    const floatingChatMessages =
        document.getElementById(
            "floatingChatMessages"
        );


    if (
        floatingChatForm &&
        floatingChatInput &&
        floatingChatMessages
    ) {

        floatingChatForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                sendFloatingMessage();

            }
        );

    }



    // ========================================
    // 4. FLOATING CHAT SEND FUNCTION
    // ========================================

    function sendFloatingMessage() {

        const message =
            floatingChatInput.value.trim();


        if (message === "") {
            return;
        }


        // USER MESSAGE

        const userMessage =
            document.createElement("p");

        userMessage.textContent =
            message;

        userMessage.className =
            "floating-user-message";


        floatingChatMessages.appendChild(
            userMessage
        );


        // CLEAR INPUT

        floatingChatInput.value = "";


        floatingChatMessages.scrollTop =
            floatingChatMessages.scrollHeight;



        // AI REPLY

        setTimeout(function () {

            const botMessage =
                document.createElement("p");

            botMessage.textContent =
                getResponse(message);

            botMessage.className =
                "floating-bot-message";


            floatingChatMessages.appendChild(
                botMessage
            );


            floatingChatMessages.scrollTop =
                floatingChatMessages.scrollHeight;

        }, 600);

    }



    // ========================================
    // 5. COMMON AI RESPONSE
    // ========================================

    function getResponse(message) {

        const text =
            message.toLowerCase();


        if (
            text.includes("service") ||
            text.includes("services")
        ) {

            return (
                "Nexora AI provides AI solutions, " +
                "digital advertising, digital marketing, " +
                "social media management, website and app " +
                "development, AI calling, WhatsApp automation, " +
                "election campaign services, and accounting " +
                "and taxation services."
            );

        }


        if (
            text.includes("calling") ||
            text.includes("call")
        ) {

            return (
                "Our AI Calling Agent can help with " +
                "customer enquiries, information sharing, " +
                "appointments and follow-ups."
            );

        }


        if (
            text.includes("whatsapp")
        ) {

            return (
                "Our WhatsApp Automation solution can help " +
                "manage customer enquiries, automated " +
                "responses, notifications and follow-ups."
            );

        }


        if (
            text.includes("website") ||
            text.includes("app")
        ) {

            return (
                "Nexora AI provides website, web application, " +
                "mobile application and e-commerce development " +
                "solutions."
            );

        }


        if (
            text.includes("marketing") ||
            text.includes("ads")
        ) {

            return (
                "We provide digital marketing, Facebook Ads, " +
                "Instagram Ads, Google Ads, lead generation " +
                "and social media management."
            );

        }


        return (
            "Thanks for contacting Nexora AI. Tell me " +
            "what you want to build, automate or improve, " +
            "and I will guide you toward the right solution."
        );

    }


    // ========================================
// 6. CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const formData =
                new FormData(contactForm);

            const name =
                formData.get("name");

            const business =
                formData.get("business");

            const phone =
                formData.get("phone");

            const email =
                formData.get("email");

            const service =
                formData.get("service");

            const budget =
                formData.get("budget");

            const requirement =
                formData.get("requirement");


            const message =
                "Hello Nexora AI,%0A%0A" +
                "Name: " + name + "%0A" +
                "Business: " + business + "%0A" +
                "Phone: " + phone + "%0A" +
                "Email: " + email + "%0A" +
                "Service: " + service + "%0A" +
                "Budget: " + budget + "%0A" +
                "Requirement: " + requirement;


            const whatsappNumber =
                "919942885326";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                message;


            window.open(
                whatsappURL,
                "_blank"
            );
            alert("Your enquiry is ready. WhatsApp will open now.");

        }
    );
}

    // ========================================
// FAQ ACCORDION
// ========================================

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    const question =
        item.querySelector("h3");


    question.addEventListener(
        "click",
        function () {

            // Current FAQ ko open/close karo
            item.classList.toggle("active");

        }
    );

});

});
// ========================================================
// NEXORA AI — PREMIUM 3D AI ORB
// STEP 1
// ========================================================

document.addEventListener("DOMContentLoaded", function () {

    const aiOrb = document.getElementById("aiOrb");

    if (!aiOrb) {
        return;
    }


    // ----------------------------------------------------
    // Desktop 3D mouse movement
    // ----------------------------------------------------

    const supportsHover =
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;


    if (supportsHover) {

        aiOrb.addEventListener("mousemove", function (event) {

            const rect =
                aiOrb.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) / centerX) * 8;


            const rotateX =
                ((centerY - y) / centerY) * 8;


            aiOrb.style.transform =
                `translateY(-5px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        });


        // Reset when mouse leaves

        aiOrb.addEventListener("mouseleave", function () {

            aiOrb.style.transform =
                "translateY(0) rotateX(0deg) rotateY(0deg)";

        });

    }

});
// =====================================================
// STEP 2.2 — SOLUTION CARD 3D TILT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".solution-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -6;

            const rotateY =
                ((x - centerX) / centerX) * 6;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)
                 scale(1.02)`;
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

        });

    });

});
// ================================
// TEAM MEMBERS MODAL
// ================================

function openTeamModal() {
    const modal = document.getElementById("teamModal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeTeamModal() {
    const modal = document.getElementById("teamModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


// Close when clicking outside the popup
document.getElementById("teamModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeTeamModal();
    }

});