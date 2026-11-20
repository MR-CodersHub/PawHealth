/**
 * PawHealth - blog-details.js
 * Blog article details: dynamic post rendering, reading progress, social share
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const posts = {
    'puppy-vaccination-schedule': {
      slug: 'puppy-vaccination-schedule',
      title: 'The Complete Guide to Puppy Vaccination Schedules: From 6 Weeks to 1 Year',
      shortTitle: 'Puppy Vaccination Guide',
      category: 'Vaccination & Prevention',
      author: 'Dr. Sarah Mitchell, BVSc, MRCVS',
      authorAvatar: 'https://picsum.photos/seed/dr-sarah-mitchell/200/200',
      authorMeta: 'Chief Veterinarian • Published 15 October 2026 • 8 min read',
      featuredImage: 'https://i.pinimg.com/1200x/ff/c1/e9/ffc1e918ac0001a7c2b5615f1ec6833f.jpg',
      featuredAlt: 'Puppy vaccination schedule and preventive care guide',
      excerpt: 'Essential vaccines your puppy needs from 6 weeks to 1 year, explained by our chief veterinarian.',
      introQuote: '"Welcoming a new puppy into your home is an incredible milestone. Ensuring their immune defenses are systematically built during their most vulnerable developmental weeks is the most powerful gift you can offer their future."',
      introHtml: `<p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: var(--space-6);">Newborn puppies initially receive maternal antibodies through their mother's milk (colostrum). While these maternal antibodies provide life-saving protection during their first weeks of life, they naturally decline between 6 and 16 weeks of age. This transitional period creates what veterinarians call the <em>immunity gap</em> — a window during which maternal antibodies are too low to prevent infection, but still high enough to neutralize an injected vaccine.</p>`,
      bodyHtml: `
        <h2>Why Vaccinations Are Non-Negotiable for Puppies</h2>
        <p>Infectious viral diseases like Canine Parvovirus and Canine Distemper are extraordinarily hardy pathogens capable of surviving in soil, on shoes, and on park benches for months. Because a puppy's immature immune system has zero natural defense once maternal protection wanes, contracting Parvovirus carries a high mortality risk without intensive hospitalization. Modern vaccination safely introduces harmless antigens, training memory T-cells and B-cells to mount rapid defenses upon real-world exposure.</p>

        <h2>Understanding Core vs. Lifestyle Vaccines</h2>
        <p>Veterinary guidelines categorize canine vaccinations into two distinct tiers:</p>
        <ul>
          <li><strong>Core Vaccines:</strong> Recommended for all dogs regardless of breed, location, or indoor/outdoor status due to severity and contagion. These include <em>Canine Parvovirus (CPV), Canine Distemper Virus (CDV), Canine Adenovirus (Infectious Hepatitis), and Rabies</em>.</li>
          <li><strong>Lifestyle (Non-Core) Vaccines:</strong> Recommended based on geography, lifestyle, boarding, and exposure risk. These may include <em>Bordetella (Kennel Cough), Leptospirosis, Canine Influenza, and Lyme Disease</em>.</li>
        </ul>

        <h2>The Recommended Puppy Vaccination Schedule</h2>
        <p>To overcome declining maternal antibodies without leaving the puppy vulnerable, vaccines are commonly administered in a sequential series spaced 3 to 4 weeks apart:</p>
        <div class="art-table-wrap">
          <table class="art-table">
            <thead>
              <tr>
                <th>Puppy Age</th>
                <th>Recommended Vaccines</th>
                <th>Category</th>
                <th>Clinical Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>6 – 8 Weeks</strong></td>
                <td>DHPP #1 (Distemper, Hepatitis, Parvovirus, Parainfluenza)</td>
                <td>Core</td>
                <td>First immune priming dose as maternal antibodies start dropping.</td>
              </tr>
              <tr>
                <td><strong>10 – 12 Weeks</strong></td>
                <td>DHPP #2 + Bordetella + Leptospirosis #1 (if indicated)</td>
                <td>Core + Lifestyle</td>
                <td>Second booster; added protection based on risk and exposure.</td>
              </tr>
              <tr>
                <td><strong>14 – 16 Weeks</strong></td>
                <td>DHPP #3 + Rabies + Leptospirosis #2 (if indicated)</td>
                <td>Core</td>
                <td>Completes puppy series and strengthens long-term immunity.</td>
              </tr>
              <tr>
                <td><strong>12 – 16 Months</strong></td>
                <td>DHPP Booster + Rabies Booster</td>
                <td>Core Booster</td>
                <td>Transitions puppy to an adult booster protocol as advised by your vet.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <img src="https://picsum.photos/seed/puppy-schedule/800/450" alt="Veterinarian examining a puppy during a wellness visit" class="art-inline-img" loading="lazy" />

        <h2>What to Expect Following Inoculation</h2>
        <p>It is normal for puppies to experience mild sleepiness, localized tenderness at the injection site, or a slight decrease in appetite for 12 to 24 hours after vaccination. This usually indicates the immune system is responding.</p>
        <p><strong>When to contact emergency care immediately:</strong> If your puppy develops facial swelling, hives, repeated vomiting, collapse, severe lethargy, or labored breathing, seek urgent veterinary care right away.</p>

        <h2>Balancing Socialization with Disease Prevention</h2>
        <p>Behavioral development and disease prevention must be balanced during early puppyhood. Until your veterinarian confirms adequate protection, choose low-risk socialization:</p>
        <ol>
          <li>Arrange playdates with healthy, fully vaccinated dogs in clean, controlled environments.</li>
          <li>Carry your puppy in public places to expose them to sights and sounds without contact with contaminated surfaces.</li>
          <li>Enroll in puppy classes that require age-appropriate vaccination and sanitation protocols.</li>
        </ol>
      `,
      insightsHtml: `
        <div class="art-insights-box__header">
          <span style="font-size: 2rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>
          <h3 class="art-insights-box__title">From the Chief Veterinarian's Desk</h3>
        </div>
        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.7; margin-bottom: var(--space-4);">"A single early vaccine is not the full story. Completing the puppy series on schedule is essential because maternal antibodies can interfere with early doses. Consistency and follow-up are what create reliable protection."</p>
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: 12px; border: 1px solid var(--color-border);">
          <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 4px;">Key Takeaway for Pet Parents:</strong>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 0;">Keep an official vaccination record, complete boosters on time, and ask your veterinarian which lifestyle vaccines are recommended for your puppy's environment.</p>
        </div>
      `,
      cta: {
        badge: 'Individualized Care',
        title: "Have Questions About Your Puppy's Vaccination Plan?",
        desc: "Every pet's lifestyle, breed predisposition, and environmental risk is unique. Book a gentle wellness consultation with our veterinary team today.",
        actionsHtml: `<a href="contact.html" class="btn btn--white btn--large" aria-label="Book a vaccination consultation">Book a Vaccination Consultation</a><a href="tel:+15551234567" class="btn btn--outline-light btn--large" aria-label="Call clinic at (555) 123-4567">Call Us: (555) 123-4567</a>`
      }
    },

    'periodontal-disease-dogs': {
      slug: 'periodontal-disease-dogs',
      title: 'Understanding Periodontal Disease in Dogs: Prevention & Care',
      shortTitle: 'Periodontal Disease in Dogs',
      category: 'Dog Health',
      author: 'Dr. James Okoye, DVM',
      authorAvatar: 'https://picsum.photos/seed/dr-james-okoye/200/200',
      authorMeta: 'Veterinary Surgeon • Published 10 October 2026 • 7 min read',
      featuredImage: 'https://i.pinimg.com/236x/77/bb/ec/77bbecbb09b9b8efdfb7370c80687c9e.jpg',
      featuredAlt: 'Dog dental health and periodontal disease prevention',
      excerpt: 'Learn how dental bacteria affects overall health and how to spot early warning signs of gum disease in dogs.',
      introQuote: '"Dental disease is one of the most common—and most overlooked—health issues in adult dogs. The earlier we intervene, the more comfortable and healthy your dog can be."',
      introHtml: `<p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: var(--space-6);">Periodontal disease begins with plaque buildup along the gumline. Without regular care, plaque hardens into tartar, bacteria inflame the gums, and infection can progress below the gumline. Over time, this can lead to pain, tooth loss, and systemic inflammation that may affect organs such as the heart, liver, and kidneys.</p>`,
      bodyHtml: `
        <h2>How Periodontal Disease Develops</h2>
        <p>Gum disease progresses in stages, often silently. Many dogs continue eating normally even when their mouth is painful, which is why routine checks matter.</p>
        <ul>
          <li><strong>Stage 1 (Gingivitis):</strong> Red, swollen gums and plaque accumulation; reversible with professional cleaning and home care.</li>
          <li><strong>Stage 2–3 (Early to Moderate Periodontitis):</strong> Tartar buildup, gum recession, bad breath, and early bone loss; requires veterinary treatment.</li>
          <li><strong>Stage 4 (Advanced Periodontitis):</strong> Significant infection, loose teeth, chronic pain, and higher risk of systemic complications.</li>
        </ul>

        <h2>Warning Signs Owners Should Watch For</h2>
        <p>Bad breath is common but not "normal." Look for these signs and schedule a dental exam if you notice them:</p>
        <ol>
          <li>Persistent bad breath, drooling, or dropping food while chewing</li>
          <li>Red, bleeding, or receding gums and yellow/brown tartar</li>
          <li>Pawing at the mouth, facial sensitivity, or reduced interest in chew toys</li>
          <li>Loose teeth, swelling around the muzzle, or behavioral changes</li>
        </ol>

        <img src="https://picsum.photos/seed/dog-dental-care/800/450" alt="Veterinary dental check for a dog" class="art-inline-img" loading="lazy" />

        <h2>Prevention and Home Care That Works</h2>
        <p>Daily tooth brushing with dog-safe toothpaste is the gold standard. Dental diets, approved chews, and water additives can help, but they do not replace brushing or professional care when disease is present.</p>
        <p>Most dogs benefit from regular oral exams during wellness visits. Your veterinarian may recommend professional dental cleaning under anesthesia to remove tartar below the gumline and assess tooth health with dental imaging.</p>

        <h2>Why Dental Health Matters Beyond the Mouth</h2>
        <p>Chronic oral infection can contribute to ongoing inflammation in the body. Treating dental disease improves comfort, appetite, and quality of life—and may reduce strain on other organ systems over time.</p>
      `,
      insightsHtml: `
        <div class="art-insights-box__header">
          <span style="font-size: 2rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>
          <h3 class="art-insights-box__title">Veterinary Dental Insight</h3>
        </div>
        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.7; margin-bottom: var(--space-4);">"If a dog has visible tartar and gum redness, there is often disease below the surface that only a professional dental assessment can fully evaluate. Early treatment is usually simpler, safer, and more affordable than waiting."</p>
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: 12px; border: 1px solid var(--color-border);">
          <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 4px;">Key Takeaway for Pet Parents:</strong>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 0;">Start home dental care early, schedule regular oral exams, and don’t ignore persistent bad breath—it’s often a sign of treatable disease.</p>
        </div>
      `,
      cta: {
        badge: 'Dental Wellness',
        title: 'Concerned About Your Dog’s Dental Health?',
        desc: 'Book a dental exam to catch problems early and create a prevention plan tailored to your dog’s age, breed, and lifestyle.',
        actionsHtml: `<a href="contact.html" class="btn btn--white btn--large">Book a Dental Checkup</a><a href="services.html" class="btn btn--outline-light btn--large">Explore Dental Services</a>`
      }
    },

    'senior-cat-care': {
      slug: 'senior-cat-care',
      title: 'Senior Cat Care: What Biological Changes Occur at Age 7+',
      shortTitle: 'Senior Cat Care',
      category: 'Cat Health',
      author: 'Dr. Priya Sharma, DVM',
      authorAvatar: 'https://picsum.photos/seed/dr-priya-sharma/200/200',
      authorMeta: 'Feline Medicine • Published 5 October 2026 • 7 min read',
      featuredImage: 'https://i.pinimg.com/736x/09/dd/02/09dd0291104d0da6c0456b4c6104f464.jpg',
      featuredAlt: 'Senior cat care and health monitoring',
      excerpt: 'Discover the vital screenings, dietary adjustments, and home comfort changes recommended for aging cats.',
      introQuote: '"Cats are experts at hiding discomfort. As they enter their senior years, subtle changes at home can be the earliest clues that they need extra support."',
      introHtml: `<p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: var(--space-6);">Many cats begin to show age-related changes around 7 years and older. While aging itself is not a disease, senior cats are more likely to develop conditions such as kidney disease, hyperthyroidism, arthritis, dental disease, and diabetes. Proactive monitoring helps catch issues early, when management is often more effective.</p>`,
      bodyHtml: `
        <h2>Common Biological Changes in Senior Cats</h2>
        <ul>
          <li><strong>Kidney function changes:</strong> Reduced concentrating ability may lead to increased thirst and urination.</li>
          <li><strong>Metabolic shifts:</strong> Weight loss despite a good appetite can signal thyroid or other metabolic conditions.</li>
          <li><strong>Joint stiffness and arthritis:</strong> Reduced jumping, hesitation on stairs, or less grooming can indicate pain.</li>
          <li><strong>Dental disease:</strong> Oral pain may cause drooling, bad breath, or changes in eating habits.</li>
        </ul>

        <h2>Recommended Veterinary Screenings</h2>
        <p>Senior wellness exams (often every 6 months) help track trends over time. Your veterinarian may recommend:</p>
        <ol>
          <li>Bloodwork and urinalysis to assess kidney, liver, thyroid, and glucose status</li>
          <li>Blood pressure checks, especially in cats with kidney or thyroid concerns</li>
          <li>Dental evaluation and weight/body condition monitoring</li>
          <li>Targeted diagnostics if behavior, appetite, or mobility changes are noted</li>
        </ol>

        <img src="https://picsum.photos/seed/senior-cat-vet/800/450" alt="Senior cat receiving a veterinary wellness exam" class="art-inline-img" loading="lazy" />

        <h2>Home Comfort and Lifestyle Adjustments</h2>
        <p>Small changes can make a big difference for aging cats: provide low-entry litter boxes, add steps or ramps to favorite resting spots, offer warm soft bedding, and place food/water in easily accessible locations. Keep routines consistent and minimize stress where possible.</p>
        <p>Nutrition may also need adjustment based on weight, muscle condition, and medical findings. Always consult your veterinarian before changing diets or adding supplements.</p>
      `,
      insightsHtml: `
        <div class="art-insights-box__header">
          <span style="font-size: 2rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>
          <h3 class="art-insights-box__title">Feline Wellness Insight</h3>
        </div>
        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.7; margin-bottom: var(--space-4);">"Behavior changes in older cats—sleeping more, hiding, missing jumps, or grooming less—are often dismissed as 'just aging.' In many cases, they are signs of treatable discomfort or illness."</p>
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: 12px; border: 1px solid var(--color-border);">
          <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 4px;">Key Takeaway for Pet Parents:</strong>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 0;">Schedule regular senior checkups, track small behavior changes, and make the home easier to navigate to support comfort and mobility.</p>
        </div>
      `,
      cta: {
        badge: 'Senior Pet Support',
        title: 'Help Your Senior Cat Thrive',
        desc: 'A senior wellness exam can uncover hidden issues early and give you a practical plan for comfort, nutrition, and long-term health.',
        actionsHtml: `<a href="contact.html" class="btn btn--white btn--large">Book a Senior Wellness Exam</a><a href="services.html" class="btn btn--outline-light btn--large">View Wellness Services</a>`
      }
    },

    'year-round-parasite-prevention': {
      slug: 'year-round-parasite-prevention',
      title: 'Parasite Prevention: Why Year-Round Protection Is Essential',
      shortTitle: 'Year-Round Parasite Prevention',
      category: 'Preventive Care',
      author: 'Dr. Sarah Mitchell, BVSc, MRCVS',
      authorAvatar: 'https://picsum.photos/seed/dr-sarah-mitchell/200/200',
      authorMeta: 'Chief Veterinarian • Published 28 September 2026 • 6 min read',
      featuredImage: 'https://i.pinimg.com/736x/a9/3e/d3/a93ed3c8f52660255e443bbd0e5e0f96.jpg',
      featuredAlt: 'Year-round parasite prevention for pets',
      excerpt: 'Understand why fleas, ticks, and heartworms require consistent protection throughout the year.',
      introQuote: '"Parasites do not follow a perfect calendar. Consistent prevention is one of the simplest and most effective ways to protect your pet’s health all year long."',
      introHtml: `<p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: var(--space-6);">Milder winters, indoor heating, travel, and wildlife exposure mean fleas, ticks, mosquitoes, and intestinal parasites can pose risks beyond the traditional "warm season." Year-round prevention helps reduce disease risk, discomfort, and costly emergency treatment.</p>`,
      bodyHtml: `
        <h2>Parasites to Protect Against</h2>
        <ul>
          <li><strong>Fleas:</strong> Cause itching, allergic dermatitis, anemia in severe cases, and can transmit tapeworms.</li>
          <li><strong>Ticks:</strong> Can transmit serious diseases and may be active during cool, damp periods as well as warm months.</li>
          <li><strong>Heartworms:</strong> Spread by mosquitoes; prevention is far safer and easier than treatment.</li>
          <li><strong>Intestinal parasites:</strong> Roundworms, hookworms, and others can affect pets and, in some cases, people in the household.</li>
        </ul>

        <h2>Why Seasonal Gaps Can Be Risky</h2>
        <p>Stopping prevention during colder months can leave pets unprotected during unexpected warm spells or indoor infestations. Flea eggs and larvae can persist in home environments, and mosquitoes may appear earlier or later than expected depending on weather patterns.</p>

        <img src="https://picsum.photos/seed/pet-parasite-prevention/800/450" alt="Veterinarian discussing parasite prevention options" class="art-inline-img" loading="lazy" />

        <h2>Building a Prevention Plan</h2>
        <p>The right plan depends on your pet’s species, age, health status, lifestyle, and local risk factors. Your veterinarian can recommend appropriate products and schedules, including:</p>
        <ol>
          <li>Monthly flea/tick preventives (oral or topical, as appropriate)</li>
          <li>Heartworm prevention and routine testing as advised</li>
          <li>Fecal screening and deworming protocols when needed</li>
          <li>Environmental control steps for the home and yard</li>
        </ol>
        <p>Always use products as directed and never combine preventives without veterinary guidance, especially in multi-pet households.</p>
      `,
      insightsHtml: `
        <div class="art-insights-box__header">
          <span style="font-size: 2rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>
          <h3 class="art-insights-box__title">Preventive Care Insight</h3>
        </div>
        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.7; margin-bottom: var(--space-4);">"The best parasite control plan is one that’s easy to follow consistently. Missed doses create gaps, and gaps create opportunities for preventable disease."</p>
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: 12px; border: 1px solid var(--color-border);">
          <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 4px;">Key Takeaway for Pet Parents:</strong>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 0;">Ask your veterinarian for a year-round prevention schedule tailored to your pet and set reminders to stay on track.</p>
        </div>
      `,
      cta: {
        badge: 'Preventive Protection',
        title: 'Need a Parasite Prevention Plan?',
        desc: 'We can help you choose safe, effective protection for your pet based on local risks, lifestyle, and medical history.',
        actionsHtml: `<a href="contact.html" class="btn btn--white btn--large">Book a Preventive Care Visit</a><a href="services.html" class="btn btn--outline-light btn--large">See Preventive Services</a>`
      }
    },

    'canine-nutrition-science': {
      slug: 'canine-nutrition-science',
      title: 'Canine Nutritional Science: Demystifying Ingredients & Portions',
      shortTitle: 'Canine Nutrition Science',
      category: 'Nutrition',
      author: 'Dr. Priya Sharma, DVM',
      authorAvatar: 'https://picsum.photos/seed/dr-priya-sharma/200/200',
      authorMeta: 'Veterinary Nutrition • Published 22 September 2026 • 7 min read',
      featuredImage: 'https://i.pinimg.com/1200x/d2/2c/c2/d22cc2518f5912e2fdf3fd14b5e1d04f.jpg',
      featuredAlt: 'Canine nutrition and balanced diet planning',
      excerpt: 'Our veterinary nutritionist breaks down labels, ingredients, and portion planning for a balanced canine diet.',
      introQuote: '"Good nutrition is not about trends—it’s about feeding a complete, balanced diet that fits your dog’s age, health, and lifestyle."',
      introHtml: `<p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: var(--space-6);">Pet food labels can be confusing, with marketing terms that don’t always reflect nutritional quality. Understanding a few key principles—complete and balanced formulas, life-stage appropriateness, and portion control—can help you make better choices for your dog’s long-term health.</p>`,
      bodyHtml: `
        <h2>What "Complete and Balanced" Really Means</h2>
        <p>A complete and balanced diet provides the essential nutrients dogs need in appropriate amounts. Look for foods formulated for your dog’s life stage (puppy, adult, senior) and consider any medical needs your veterinarian has identified.</p>
        <ul>
          <li><strong>Protein:</strong> Supports muscle maintenance, immune function, and tissue repair. Quality and digestibility matter as much as percentage.</li>
          <li><strong>Fats:</strong> Provide energy and essential fatty acids that support skin, coat, and overall health.</li>
          <li><strong>Carbohydrates and fiber:</strong> Can support energy needs and digestive health when included appropriately.</li>
          <li><strong>Vitamins and minerals:</strong> Must be balanced correctly; more is not always better.</li>
        </ul>

        <h2>Reading Ingredient Lists Without the Myths</h2>
        <p>Ingredients are listed by weight before processing, which can be misleading. A named meat ingredient may appear first due to water content, while other ingredients contribute significant nutrients. Focus less on buzzwords and more on whether the diet is appropriate, well-tolerated, and supported by sound formulation practices.</p>

        <img src="https://picsum.photos/seed/dog-nutrition-bowl/800/450" alt="Balanced dog meal and portion planning" class="art-inline-img" loading="lazy" />

        <h2>Portions, Treats, and Healthy Weight</h2>
        <p>Overfeeding—even high-quality food—can lead to weight gain and related health issues. Use feeding guidelines as a starting point, then adjust based on body condition, activity level, and veterinary advice.</p>
        <ol>
          <li>Measure meals consistently instead of estimating by eye</li>
          <li>Account for treats in daily calorie intake</li>
          <li>Monitor body condition and weight trends over time</li>
          <li>Consult your vet before starting homemade, raw, or elimination diets</li>
        </ol>
      `,
      insightsHtml: `
        <div class="art-insights-box__header">
          <span style="font-size: 2rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>
          <h3 class="art-insights-box__title">Nutrition Insight</h3>
        </div>
        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.7; margin-bottom: var(--space-4);">"The ‘best’ diet is the one that is nutritionally complete, safe, affordable for the household, and works well for the individual dog. Consistency and portion control often matter more than marketing claims."</p>
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: 12px; border: 1px solid var(--color-border);">
          <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 4px;">Key Takeaway for Pet Parents:</strong>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 0;">Choose a diet suited to your dog’s life stage and health needs, measure portions, and review nutrition regularly with your veterinarian.</p>
        </div>
      `,
      cta: {
        badge: 'Nutrition Guidance',
        title: 'Questions About Your Dog’s Diet?',
        desc: 'Get personalized nutrition advice based on your dog’s age, weight, activity level, and medical history.',
        actionsHtml: `<a href="contact.html" class="btn btn--white btn--large">Book a Nutrition Consult</a><a href="services.html" class="btn btn--outline-light btn--large">Explore Our Services</a>`
      }
    },

    'silent-pain-in-cats': {
      slug: 'silent-pain-in-cats',
      title: 'Recognizing Silent Pain in Cats: Behavioral Cues Every Owner Must Know',
      shortTitle: 'Recognizing Silent Pain in Cats',
      category: 'Cat Health',
      author: 'Nurse Emma Chen, RVN',
      authorAvatar: 'https://picsum.photos/seed/nurse-emma-chen/200/200',
      authorMeta: 'Registered Veterinary Nurse • Published 15 September 2026 • 6 min read',
      featuredImage: 'https://i.pinimg.com/736x/9c/06/1b/9c061b0a7b67029b0ef33b482b65f221.jpg',
      featuredAlt: 'Recognizing silent pain in cats through behavior changes',
      excerpt: 'Subtle changes in grooming, litter habits, and movement can signal discomfort in cats long before obvious symptoms appear.',
      introQuote: '"Cats rarely cry out in pain the way we expect. Often, the first signs are quiet changes in routine that are easy to miss at home."',
      introHtml: `<p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: var(--space-6);">Because cats instinctively mask vulnerability, pain from arthritis, dental disease, urinary issues, or internal conditions may appear as behavior changes rather than obvious distress. Recognizing these cues early can lead to faster diagnosis and better comfort.</p>`,
      bodyHtml: `
        <h2>Behavioral Signs That May Indicate Pain</h2>
        <ul>
          <li><strong>Reduced mobility:</strong> Hesitating to jump, avoiding stairs, or sleeping in lower, easier-to-reach places</li>
          <li><strong>Grooming changes:</strong> Overgrooming a painful area or reduced grooming leading to a dull, unkempt coat</li>
          <li><strong>Litter box changes:</strong> Urinating outside the box, straining, or vocalizing may reflect pain or medical issues</li>
          <li><strong>Temperament changes:</strong> Hiding more, irritability when touched, or decreased interest in play and interaction</li>
        </ul>

        <h2>Common Causes of Hidden Discomfort</h2>
        <p>Chronic pain in cats is frequently associated with osteoarthritis, dental disease, and urinary tract conditions, but many other problems can contribute. Age, previous injuries, and concurrent illnesses can all influence how pain presents.</p>

        <img src="https://picsum.photos/seed/cat-pain-behavior/800/450" alt="Cat being gently examined for signs of discomfort" class="art-inline-img" loading="lazy" />

        <h2>What Owners Can Do</h2>
        <ol>
          <li>Track changes in appetite, activity, grooming, and litter habits over time</li>
          <li>Provide easy access to resources (litter boxes, food, water, resting spots)</li>
          <li>Avoid giving human pain medications, which can be dangerous for cats</li>
          <li>Schedule a veterinary exam if you notice persistent behavior changes</li>
        </ol>
        <p>Your veterinary team can assess pain, identify underlying causes, and recommend safe options for treatment and home support.</p>
      `,
      insightsHtml: `
        <div class="art-insights-box__header">
          <span style="font-size: 2rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>
          <h3 class="art-insights-box__title">Nursing Insight</h3>
        </div>
        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.7; margin-bottom: var(--space-4);">"Owners often know their cat best. If something feels ‘off,’ that observation is valuable. Small, consistent changes are often the most important clues."</p>
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: 12px; border: 1px solid var(--color-border);">
          <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 4px;">Key Takeaway for Pet Parents:</strong>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 0;">Don’t wait for dramatic symptoms—subtle behavior changes in cats deserve timely veterinary attention.</p>
        </div>
      `,
      cta: {
        badge: 'Compassionate Care',
        title: 'Noticing Changes in Your Cat’s Behavior?',
        desc: 'A veterinary exam can help identify hidden pain and create a plan to improve your cat’s comfort and quality of life.',
        actionsHtml: `<a href="contact.html" class="btn btn--white btn--large">Book a Feline Checkup</a><a href="tel:+15551234567" class="btn btn--outline-light btn--large">Call Our Clinic</a>`
      }
    },

    'when-does-my-dog-need-surgery': {
      slug: 'when-does-my-dog-need-surgery',
      title: 'When Does My Dog Need Surgery? What to Expect from Consultation to Recovery',
      shortTitle: 'When Does My Dog Need Surgery?',
      category: 'Dog Health',
      author: 'Dr. James Okoye, DVM',
      authorAvatar: 'https://picsum.photos/seed/dr-james-okoye/200/200',
      authorMeta: 'Veterinary Surgeon • Published 8 September 2026 • 8 min read',
      featuredImage: 'https://i.pinimg.com/736x/e1/11/eb/e111ebacb1be7183bdb721103fd9cfbf.jpg',
      featuredAlt: 'Dog surgery consultation and recovery planning',
      excerpt: 'From diagnosis to recovery, learn when surgery may be recommended and how to prepare your dog for a safe outcome.',
      introQuote: '"Surgery can feel overwhelming, but understanding the process—from consultation to home care—helps owners make confident, informed decisions for their dogs."',
      introHtml: `<p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: var(--space-6);">Dogs may need surgery for many reasons, including injury, mass removal, dental procedures, orthopedic conditions, or emergency issues such as foreign body ingestion. Recommendations are based on diagnosis, severity, quality-of-life impact, and the safest treatment options available.</p>`,
      bodyHtml: `
        <h2>Common Reasons Surgery May Be Recommended</h2>
        <ul>
          <li><strong>Soft tissue procedures:</strong> Lump/mass removal, wound repair, or abdominal surgery for urgent conditions</li>
          <li><strong>Orthopedic procedures:</strong> Ligament injuries, fracture repair, or other mobility-related conditions</li>
          <li><strong>Dental surgery:</strong> Extractions or treatment for advanced oral disease causing pain or infection</li>
          <li><strong>Emergency surgery:</strong> Conditions that require prompt intervention to protect life or prevent complications</li>
        </ul>

        <h2>What Happens Before Surgery</h2>
        <p>Your veterinary team will review your dog’s history, perform an exam, and discuss diagnostic findings. Pre-anesthetic testing and individualized anesthesia planning help reduce risk. This is also the time to ask questions about expected outcomes, alternatives, costs, and recovery requirements.</p>

        <img src="https://picsum.photos/seed/dog-surgery-care/800/450" alt="Veterinary team preparing for a procedure" class="art-inline-img" loading="lazy" />

        <h2>Recovery and Home Care</h2>
        <p>Recovery varies by procedure, but most dogs need a calm environment, restricted activity, and careful monitoring at home. Follow discharge instructions closely, including medication schedules, incision care, and follow-up appointments.</p>
        <ol>
          <li>Use an e-collar or recovery garment if recommended to prevent licking</li>
          <li>Limit running, jumping, and rough play as instructed</li>
          <li>Watch for swelling, discharge, bleeding, or changes in appetite/energy</li>
          <li>Contact your clinic promptly if you have concerns during recovery</li>
        </ol>
      `,
      insightsHtml: `
        <div class="art-insights-box__header">
          <span style="font-size: 2rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>
          <h3 class="art-insights-box__title">Surgical Care Insight</h3>
        </div>
        <p style="font-size: 1rem; color: var(--color-text); line-height: 1.7; margin-bottom: var(--space-4);">"A successful outcome depends on both the procedure and the recovery period. Clear communication, pain management, and consistent home care are just as important as what happens in the operating room."</p>
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: 12px; border: 1px solid var(--color-border);">
          <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 4px;">Key Takeaway for Pet Parents:</strong>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 0;">Ask for a written recovery plan, understand warning signs, and keep follow-up appointments to support safe healing.</p>
        </div>
      `,
      cta: {
        badge: 'Surgical Guidance',
        title: 'Need Advice About a Possible Procedure?',
        desc: 'Our veterinary team can explain options, risks, and recovery expectations so you can make the best decision for your dog.',
        actionsHtml: `<a href="contact.html" class="btn btn--white btn--large">Book a Surgical Consultation</a><a href="services.html" class="btn btn--outline-light btn--large">View Surgical Services</a>`
      }
    }
  };

  const params = new URLSearchParams(window.location.search);
  const requested = params.get('post');
  const post = posts[requested] || posts['puppy-vaccination-schedule'];

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === 'string') el.textContent = value;
  }

  function setHtml(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === 'string') el.innerHTML = value;
  }

  function renderPost(p) {
    document.title = p.title + ' | PawHealth';
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc) metaDesc.setAttribute('content', p.excerpt || p.title);
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', p.title + ' – PawHealth');
    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', p.excerpt || '');
    const ogImage = document.getElementById('og-image');
    if (ogImage) ogImage.setAttribute('content', p.featuredImage || '');

    setText('art-breadcrumb-current', p.shortTitle || p.title);
    setText('art-tag', p.category || 'Pet Health');
    setText('art-title', p.title);
    setText('art-author-name', p.author || 'PawHealth Team');
    setText('art-author-role', p.authorMeta || '');

    const avatar = document.getElementById('art-author-avatar');
    if (avatar) {
      avatar.src = p.authorAvatar || avatar.src;
      avatar.alt = p.author || 'Author';
    }

    const featured = document.getElementById('art-featured-img');
    if (featured) {
      featured.src = p.featuredImage || '';
      featured.alt = p.featuredAlt || p.title;
    }

    setText('art-intro-quote', p.introQuote || '');
    setHtml('art-intro-text', p.introHtml || '');
    setHtml('art-prose', p.bodyHtml || '');
    setHtml('art-insights', p.insightsHtml || '');

    if (p.cta) {
      setText('art-cta-badge', p.cta.badge || 'Care Guidance');
      setText('cta-art-heading', p.cta.title || 'Have Questions About Your Pet\'s Care?');
      setText('art-cta-desc', p.cta.desc || '');
      setHtml('art-cta-actions', p.cta.actionsHtml || '');
    }

    renderRelated(p.slug);
    revealDynamic();
  }

  function renderRelated(currentSlug) {
    const grid = document.getElementById('art-related-grid');
    if (!grid) return;

    const related = Object.values(posts).filter(p => p.slug !== currentSlug).slice(0, 3);
    grid.innerHTML = related.map(p => {
      const href = `blog-details.html?post=${encodeURIComponent(p.slug)}`;
      const metaParts = String(p.authorMeta || '').split('•').map(s => s.trim()).filter(Boolean);
      const readTime = metaParts.length ? metaParts[metaParts.length - 1] : '';
      const author = (p.author || 'PawHealth Team').replace(/,\s*(BVSc|DVM|MRCVS|RVN).*$/i, '').trim();

      return `
      <article class="art-related-card">
        <a href="${href}" class="art-related-card__media" aria-label="Read article: ${escapeAttr(p.title)}">
          <img src="${p.featuredImage}" alt="${escapeAttr(p.featuredAlt || p.title)}" class="art-related-card__img" loading="lazy" />
          <span class="art-related-card__category">${escapeHtml(p.category || 'Pet Health')}</span>
        </a>
        <div class="art-related-card__body">
          <div class="art-related-card__meta">
            <span>${escapeHtml(author)}</span>
            ${readTime ? `<span class="art-related-card__meta-dot" aria-hidden="true">•</span><span>${escapeHtml(readTime)}</span>` : ''}
          </div>
          <h3 class="art-related-card__title"><a href="${href}">${escapeHtml(p.title)}</a></h3>
          <p class="art-related-card__desc">${escapeHtml(p.excerpt || '')}</p>
          <div class="art-related-card__footer">
            <span class="art-related-card__author">${escapeHtml(p.category || '')}</span>
            <a href="${href}" class="art-related-card__link">
              Read Guide
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </article>`;
    }).join('');
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, '&#39;');
  }

  function revealDynamic() {
    // Ensure reveal-on-scroll elements are visible after dynamic content updates
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
  }

  renderPost(post);

  // Reading progress bar
  const progressBar = document.querySelector('.reading-progress-bar');
  if (progressBar) {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Social share buttons
  const shareBtns = document.querySelectorAll('.art-share-btn');
  shareBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.getAttribute('data-share');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      if (action === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank', 'width=600,height=400');
      } else if (action === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
      } else if (action === 'linkedin') {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
      } else {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            if (window.showToast) window.showToast('Link Copied', 'Article URL copied to clipboard!', 'success');
          }).catch(() => {
            if (window.showToast) window.showToast('Share', window.location.href, 'info');
          });
        } else if (window.showToast) {
          window.showToast('Share', window.location.href, 'info');
        }
      }
    });
  });
});
