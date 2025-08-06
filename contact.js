document.addEventListener('DOMContentLoaded', () => {

    // --- Phone Ringing Animation ---
    const phoneContact = document.getElementById('phone-contact');
    const phoneIcon = phoneContact ? phoneContact.querySelector('.phone-icon') : null;

    if (phoneContact && phoneIcon) {
        phoneContact.addEventListener('click', () => {
            phoneIcon.classList.add('animate-ring');
            setTimeout(() => {
                phoneIcon.classList.remove('animate-ring');
            }, 800);
        });
    }

    // --- Email Floating Letters Animation ---
    const emailContact = document.getElementById('email-contact');
    const animatedLetters = emailContact ? emailContact.querySelectorAll('.animated-letter') : null;

    if (emailContact && animatedLetters && animatedLetters.length > 0) {
        emailContact.addEventListener('click', () => {
            animatedLetters.forEach((letter, index) => {
                letter.classList.remove('animate-float');
                void letter.offsetWidth; // Trigger reflow
                setTimeout(() => {
                    letter.classList.add('animate-float');
                }, index * 50); // Stagger start
            });

            setTimeout(() => {
                animatedLetters.forEach(letter => {
                    letter.classList.remove('animate-float');
                });
            }, 1500 + (animatedLetters.length * 50)); // Ensure all letters finish
        });
    }

    // --- Testimonial Modal Elements ---
    const testimonialModal = document.getElementById('testimonialModal');
    const modalQuote = document.getElementById('modalQuote');
    const modalCustomerName = document.getElementById('modalCustomerName');
    const closeButton = document.querySelector('.close-button');

    // Function to open the modal
    function openTestimonialModal(quote, name) {
        modalQuote.textContent = `"${quote}"`;
        modalCustomerName.textContent = `- ${name}`;
        testimonialModal.classList.add('active');
        document.body.classList.add('modal-open'); // Prevent body scroll
    }

    // Function to close the modal
    function closeTestimonialModal() {
        testimonialModal.classList.remove('active');
        document.body.classList.remove('modal-open'); // Allow body scroll
    }

    // Event listener for close button
    if (closeButton) {
        closeButton.addEventListener('click', closeTestimonialModal);
    }

    // Event listener for clicking outside the modal content
    if (testimonialModal) {
        testimonialModal.addEventListener('click', (event) => {
            if (event.target === testimonialModal) {
                closeTestimonialModal();
            }
        });
    }


    // --- Floating and Tilting Testimonials Animation (on Contact Page) ---
    const floatingTestimonialsBox = document.getElementById('floating-testimonials-box');
    const floatingTestimonialsContainer = floatingTestimonialsBox ? floatingTestimonialsBox.querySelector('.floating-testimonials-container') : null;

    if (floatingTestimonialsContainer) {
        const testimonialsContent = [
            { quote: "Absolutely love Swan Botanicals! My sensitive skin has never felt this calm and hydrated, and the natural glow is incredible. It’s truly transformed my skincare routine and I can't imagine going back to anything else.", name: "Riya Sharma, New Delhi" },
            { quote: "The Rosehip Oil is liquid gold! It faded my dark spots beautifully and my complexion has never been more even. A true game-changer that every skincare enthusiast needs.", name: "Vikram Singh, Bengaluru" },
            { quote: "Their commitment to ethical sourcing really resonates with me. Knowing that the products are high-quality, effective, and align with my values makes all the difference. Guilt-free beauty!", name: "Anjali Mehta, Mumbai" },
            { quote: "As a mom, I trust Swan Botanicals for my family's skin. The products are gentle enough for my children yet effective for my own needs. Pure ingredients give me peace of mind.", name: "Pooja Reddy, Hyderabad" },
            { quote: "The packaging is as beautiful as the products inside. Every detail speaks of luxury and care. It feels like a premium experience from the moment you unbox it.", name: "Kabir Malhotra, Chennai" },
            { quote: "My search for truly natural and effective skincare ends here. Swan Botanicals is amazing! My skin has never felt so nourished and vibrant. A truly remarkable brand.", name: "Sanjana Rao, Pune" },
            { quote: "Their cleansers are incredibly gentle yet effective. My skin feels clean without feeling stripped or dry. It's the perfect first step in my daily routine.", name: "David Kumar, Kolkata" },
            { quote: "I appreciate the transparency in their ingredients. It's rare to find such honest brands that clearly list what goes into their products. Trustworthy and reliable.", name: "Fatima Ali, Lucknow" },
            { quote: "Finally found products that don't irritate my sensitive skin. They are soothing and deliver amazing results without any redness or discomfort. Highly recommend!", name: "Arjun Deshpande, Mumbai" },
            { quote: "The facial oils are divine! They absorb quickly and leave my skin glowing without any greasiness. It's a miracle product that gives instant radiance.", name: "Priyanka Singh, Chennai" },
            { quote: "Swan Botanicals embodies true natural beauty. So happy with my purchases and the positive impact they've had on my complexion. My skin has never looked better.", name: "Rohan Kapoor, Delhi" },
            { quote: "The best part is knowing these products are cruelty-free. Quality and conscience go hand-in-hand with Swan Botanicals. A brand I can truly support.", name: "Simran Kaur, Chandigarh" },
            { quote: "My skin feels so much healthier since I started using their serums. There's a visible improvement in texture and tone. It's like my skin finally breathes.", name: "Gayatri Iyer, Hyderabad" },
            { quote: "The herbal masks are a weekly ritual now. They provide a pure spa experience at home, leaving my skin refreshed and revitalized. Absolutely luxurious.", name: "Chris Thomas, Goa" },
            { quote: "Effective and affordable. Swan Botanicals has become my go-to brand for all my skincare needs. High quality doesn't always have to break the bank.", name: "Sana Khan, Bengaluru" },
            { quote: "Their customer service is as wonderful as their products. Truly a caring brand that goes above and beyond for their customers. Exemplary in every way.", name: "Rajeshwari Devi, Jaipur" },
            { quote: "I gifted their hamper, and my friend absolutely loved it! It's perfect for conscious gifting, showing you care about quality and ethics. A thoughtful present.", name: "Nikhil Gupta, Pune" },
            { quote: "The difference in my skin texture is remarkable after just a few weeks of consistent use. Smoother, softer, and more supple than ever before.", name: "Meera Menon, Kochi" },
            { quote: "Pure botanical magic in every bottle. My favorite discovery this year! Each product feels like a treat for my skin, and the results speak for themselves.", name: "Imran Siddiqui, Noida" },
            { quote: "Their commitment to sustainability is commendable. Great products, great values, and a dedication to the planet. It's truly inspiring.", name: "Tanya Sharma, Ahmedabad" },
            { quote: "No more dry patches! Their moisturizers are incredibly hydrating and leave my skin feeling plump and dewy all day long. A life-saver for dry skin.", name: "Akash Verma, Lucknow" },
            { quote: "I've tried many natural brands, but Swan Botanicals stands out for its purity and effectiveness. It's a cut above the rest, delivering real results.", name: "Nisha Patel, Surat" },
            { quote: "The mild fragrances are so soothing, not overpowering at all. They add to the luxurious experience without irritating sensitive skin. Perfect balance.", name: "Varun Rao, Mysore" },
            { quote: "From packaging to product, everything about Swan Botanicals is premium. It's clear that every aspect is carefully considered and crafted with care.", name: "Deepika Reddy, Chennai" },
            { quote: "My acne-prone skin has calmed down significantly. Thank you, Swan Botanicals, for creating products that truly help problematic skin without harsh chemicals!", name: "Aditi Sharma, Bhopal" },
            { quote: "Love the natural glow their products give me. I feel confident going makeup-free now! It’s wonderful to see my skin thrive with natural ingredients.", name: "Sneha Bansal, Indore" },
            { quote: "Their toners are so refreshing and prepare the skin perfectly for serums and moisturizers. They balance the skin without stripping it.", name: "Rahul Singh, Nagpur" },
            { quote: "Finally, a brand that delivers on its promises of natural and gentle care. My skin feels healthier and happier than ever before. So impressed!", name: "Kiran Kumar, Vadodara" },
            { quote: "The ingredients list is so clean and transparent. Makes me feel safe using them on my skin, knowing exactly what I'm applying. Transparency is key.", name: "Zoya Khan, Delhi" },
            { quote: "My sensitive skin is grateful for Swan Botanicals. No irritation, just nourishment and a noticeable improvement in overall skin health. A true blessing.", name: "Alok Dubey, Patna" }
        ];

        let currentTestimonialIndex = 0;
        const totalTestimonials = testimonialsContent.length;
        const maxConcurrentTestimonials = 4; // Number of testimonials floating at once
        const animationInterval = 1500; // How often a new testimonial appears (1.5 seconds)
        const animationDuration = 8000; // How long each testimonial floats (8 seconds)

        const generateFloatingTestimonial = () => {
            if (!floatingTestimonialsContainer || floatingTestimonialsContainer.offsetWidth === 0 || floatingTestimonialsContainer.offsetHeight === 0) {
                return;
            }

            // Remove any testimonials that have finished their animation and are fully faded out
            const animatedItems = floatingTestimonialsContainer.querySelectorAll('.floating-testimonial-item-single.animate-float-tilt-boxed');
            if (animatedItems.length >= maxConcurrentTestimonials) {
                const oldest = floatingTestimonialsContainer.querySelector('.floating-testimonial-item-single:first-child');
                if (oldest) {
                    oldest.remove();
                }
            }

            const data = testimonialsContent[currentTestimonialIndex % totalTestimonials];

            const item = document.createElement('div');
            item.classList.add('floating-testimonial-item-single');
            item.innerHTML = `<p>"${data.quote}"</p><p class="customer-name">${data.name}</p>`;

            // Store full data on the element for modal access
            item.dataset.quote = data.quote;
            item.dataset.customerName = data.name;

            // Add click listener to each floating testimonial
            item.addEventListener('click', () => {
                openTestimonialModal(item.dataset.quote, item.dataset.customerName);
            });

            const containerRect = floatingTestimonialsContainer.getBoundingClientRect();
            // These widths/heights should roughly match CSS for accurate positioning
            const itemWidth = 200;
            const itemHeight = 100;

            const startX = Math.random() * (containerRect.width - itemWidth);
            const startY = containerRect.height - itemHeight - (Math.random() * 50);

            const midX = Math.random() * (containerRect.width - itemWidth);
            const midY = Math.random() * (containerRect.height / 2) - (itemHeight / 2); // Float to upper middle

            const endX = Math.random() * (containerRect.width - itemWidth);
            const endY = -(Math.random() * itemHeight) - 50;

            const startRotate = (Math.random() * 20) - 10 + 'deg';
            const midRotate = (Math.random() * 40) - 20 + 'deg';
            const endRotate = (Math.random() * 60) - 30 + 'deg';

            item.style.setProperty('--start-x', startX + 'px');
            item.style.setProperty('--start-y', startY + 'px');
            item.style.setProperty('--start-rotate', startRotate);
            item.style.setProperty('--mid-x', midX + 'px');
            item.style.setProperty('--mid-y', midY + 'px');
            item.style.setProperty('--mid-rotate', midRotate);
            item.style.setProperty('--end-x', endX + 'px');
            item.style.setProperty('--end-y', endY + 'px');
            item.style.setProperty('--end-rotate', endRotate);
            item.style.setProperty('--animation-duration', animationDuration + 'ms');

            floatingTestimonialsContainer.appendChild(item);

            setTimeout(() => {
                item.classList.add('animate-float-tilt-boxed');
            }, 50);

            currentTestimonialIndex++;
        };

        // Start generating testimonials at an interval
        setInterval(generateFloatingTestimonial, animationInterval);

        // Generate initial set of testimonials
        for (let i = 0; i < maxConcurrentTestimonials; i++) {
            setTimeout(generateFloatingTestimonial, i * (animationInterval / maxConcurrentTestimonials));
        }
    }
});