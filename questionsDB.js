let quizType = "question-bank";
let questionList = [
  {
    "prompt": "A 49-year-old male presents with recurrent purulent otorrhea and hearing loss. On exam there is retraction of the tympanic membrane with debris and a white mass visible behind the tympanic membrane. What is the most likely diagnosis?",
    "answers": [
      "Acoustic neuroma",
      "Cholesteatoma",
      "Mastoiditis",
      "Tympanosclerosis"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.enthealth.org/conditions/cholesteatoma/",
    "rationale": "Cholesteatoma is the presence of a white mass behind the tympanic membrane (the middle ear). May be asymptomatic or include recurrent purulent otorrhea. If left untreated it can cause chronic inflammation and erosion of bone and the ossicles, and hearing loss.<br>Acoustic neuroma typically presents with unilateral hearing loss and tinnitus but not with purulent otorrhea.<br>Mastoiditis with postauricular pain, swelling, and erythema.<br>Tympanosclerosis the formation of scar tissue on the tympanic membrane, which can lead to hearing loss.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Head_Eyes&ENT",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 6-year-old girl presents with multiple small, firm, dome-shaped bumps with central umbilication on her trunk and extremities. She reports mild itching but no pain. The lesions have been slowly increasing in number over the past few weeks. What is the most likely diagnosis?",
    "answers": [
      "Chickenpox",
      "Molluscum contagiosum",
      "Warts",
      "Impetigo"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.cdc.gov/poxvirus/molluscum-contagiosum/index.html",
    "rationale": "Molluscum contagiosum is characterized by multiple small, flesh-colored, dome-shaped papules with central umbilication. It is a viral infection caused by the molluscum contagiosum virus (MCV), which is part of the poxvirus family. The presence of central umbilication and the described appearance help differentiate it from other conditions like chickenpox, which typically presents with more widespread, vesicular lesions; warts, which are usually rough and raised without central umbilication; and impetigo, which often presents with honey-colored crusts.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Child (6-12)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient presents with symptoms of a persistent cough, night sweats, and unexplained weight loss. The nurse suspects active tuberculosis. Which diagnostic test is most definitive for confirming it?",
    "answers": [
      "Chest X-ray",
      "Tuberculin skin test",
      "Sputum cultures",
      "Complete blood count (CBC)"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.cdc.gov/tb/hcp/testing-diagnosis/clinical-and-laboratory-diagnosis.html",
    "rationale": "While a chest X-ray can show signs suggestive of tuberculosis and the tuberculin skin test can indicate exposure to TB, the most definitive test for diagnosing <b>active</b> tuberculosis is the examination of sputum cultures because they confirm the presence of Mycobacterium tuberculosis bacteria, which is essential for a definitive diagnosis of active TB. A CBC is not specific for diagnosing tuberculosis.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Respiratory",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The NP should prefer _____ to treat hypertension in postmenopausal women since it may also delay cortical bone loss.",
    "answers": [
      "Thiazides",
      "Calcium channel blockers",
      "ACE Inhibitors",
      "ARBs"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://pubmed.ncbi.nlm.nih.gov/11020392/",
    "rationale": "Thiazide diuretics are recommended for treating hypertension in postmenopausal women partly because they have been shown to decrease urinary calcium excretion, which may help delay cortical bone loss. This makes thiazides a beneficial choice not only for controlling blood pressure but also for potentially reducing the risk of osteoporosis in this patient group. The other listed antihypertensives do not offer the same benefit in terms of bone density preservation.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Cardiovascular",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 72-year-old patient diagnosed with COPD is currently on a long acting beta agonist (LABA) with minimal symptoms relief. You recognize the need to step up in his treatment, what would you prescribe next?",
    "answers": [
      "Short acting beta agonist (SABA)",
      "Glucocorticoid",
      "Low dose inhaled corticosteroid  (ICS)",
      "Long acting muscarinic antagonist (LAMA)"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.asthma-breathe.com/clinical-care-toolkit/current-guideline-for-asthma/",
    "rationale": "The patient should already be on a SABA. If LABA is not enough, the next drug of choice is LAMA and ICS comes after.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Elderly (65+)",
    "Subject": "Respiratory",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 12-year-old boy presents with chronic right hip pain and a resultant limp, without any preceding injury. On physical examination, he exhibits painful and restricted internal rotation of the right hip. X-ray findings reveal physis widening and displacement of the femoral head. What is the most likely diagnosis?",
    "answers": [
      "Developmental hip dysplasia",
      "Legg-Calve-Perthes disease",
      "Transient synovitis",
      "Slipped capital femoral epiphysis (SCFE)"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5421350",
    "rationale": "The most likely diagnosis for this 12-year-old boy is Slipped Capital Femoral Epiphysis (SCFE), common in adolescents. It is characterized by a displacement of the femoral head at the growth plate, typically presenting with hip or groin pain and a limp. The X-ray showing widening of the physis and displacement of the femoral head confirms SCFE. Limited hip movement and pain also support this diagnosis. Immediate surgical intervention is needed to stabilize the hip and prevent complications.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Child (6-12)",
    "Subject": "Musculoskeletal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which cranial nerve is associated with hearing?",
    "answers": [
      "Facial (VII)",
      "Trigeminal (V)",
      "Vestibulocochlear (VIII)",
      "Oculomotor (III)"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://training.seer.cancer.gov/brain/tumors/anatomy/nerves.html",
    "rationale": "Vestibulocochlear VIII is associated with hearing, hence the name “cochlea” which is a part inside the ear.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Neurological",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "NSAIDs may ____ the effects of thiazides, making blood pressure management ____ effective.",
    "answers": [
      "enhance, less",
      "inhibit, less",
      "enhance, more",
      "inhibit, more"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.amjmed.com/article/0002-9343(91)90485-G/abstract",
    "rationale": "NSAIDs can inhibit the blood pressure-lowering effects of diuretics by reducing the natriuretic and antihypertensive actionss. This interaction can lead to less effective blood pressure management in patients using both medications. Therefore, it is important to monitor blood pressure closely and consider alternative pain management strategies for those patients.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Cardiovascular",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which organism is responsible for most urinary tract infections?",
    "answers": [
      "Staphylococcus aureus",
      "Escherichia coli",
      "Klebsiella pneumoniae",
      "Pseudomonas aeruginosa"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4457377/",
    "rationale": "Escherichia coli (E. coli) is the most common organism responsible for urinary tract infections (UTIs). It accounts for the majority of both uncomplicated and complicated UTI cases. Other organisms like Staphylococcus aureus, Klebsiella pneumoniae, and Pseudomonas aeruginosa can also cause UTIs but are less common.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Genitourinary&Renal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 22-year-old patient has been diagnosed with Chlamydia. What is the preferred treatment?",
    "answers": [
      "Amoxicillin",
      "Doxycycline",
      "Azithromycin",
      "Ciprofloxacin"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm",
    "rationale": "The preferred treatment for Chlamydia, according to the CDC, is doxycycline. The recommended regimen is doxycycline 100 mg taken twice daily for 7 days. Azithromycin is an alternative treatment and is effective as well, typically given as a single 1-gram dose. Amoxicillin and ciprofloxacin are not recommended as first-line treatments for Chlamydia.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Adult (19-26)",
    "Subject": "Reproductive",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following is a positive sign of pregnancy?",
    "answers": [
      "Goodell’s sign.",
      "Nausea and vomiting.",
      "Positive Beta hCG.",
      "Fetal heart tone auscultated by health provider."
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://my.clevelandclinic.org/health/diagnostics/23464-fetal-heart-rate-monitoring",
    "rationale": "Fetal heart tone auscultated by a health provider is the only positive sign. Goodell's sign and positive hCG are probable, while nausea and vomiting are presumptive.",
    "bookmarked": 0,
    "Domain": "Assess",
    "Age Group": "Adult (19-26)",
    "Subject": "Pregnancy",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 45-year-old patient undergoes a diagnostic test for a specific disease. The test has a high sensitivity but low specificity. What does this imply about the test’s characteristics?",
    "answers": [
      "The test accurately identifies those without the disease.",
      "The test accurately identifies those with the disease.",
      "The test is likely to produce false negatives.",
      "The test is unlikely to produce false positives."
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://en.wikipedia.org/wiki/Sensitivity_and_specificity",
    "rationale": "Sensitivity refers to a test’s ability to correctly identify individuals who have the disease (true positives). A test with high sensitivity is effective at detecting the disease, meaning it minimizes false negatives. Low specificity indicates that the test may incorrectly identify individuals without the disease as positive (false positives), so it is not as effective at ruling out those who do not have the disease.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Not-Applicable",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 65-year-old patient presents with a tremor that occurs primarily at rest and improves with intentional movement. What is the most likely diagnosis?",
    "answers": [
      "Essential tremor",
      "Cerebellar tremor",
      "Parkinson's disease tremor",
      "Physiologic tremor"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.parkinson.org/understanding-parkinsons/movement-symptoms/tremor",
    "rationale": "The main difference between Parkinson’s tremor and most other types of tremor is that resting tremor is most common in Parkinson's disease (PD). Parkinson's tremor typically occurs when the muscles are at rest and decreases with voluntary movement. In contrast, essential tremor and other conditions are usually characterized by 'action tremor,' which tends to lessen at rest and increase during activities such as making a phone call or taking a drink. Cerebellar tremor is associated with coordination issues, and physiologic tremor is a normal, often imperceptible tremor that can be exacerbated by certain conditions.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Elderly (65+)",
    "Subject": "Neurological",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The family nurse practitioner is seeing a patient with gout. What patient education should she provide regarding his diet?",
    "answers": [
      "Eat more organ meats.",
      "Take a Vitamin C supplement.",
      "Eat anchovies daily.",
      "Avoid cherries."
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/gout-diet/art-20048524",
    "rationale": "Taking a Vitamin C supplement can help reduce uric acid levels, which may decrease the risk of gout attacks. Patients with gout should avoid foods high in purines, such as organ meats and anchovies, as these can increase uric acid levels. Cherries are beneficial for gout as they have been shown to reduce uric acid levels and lower the risk of gout attacks.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient presents with joint pain, swelling, and stiffness that is worse in the morning and improves with movement. The nurse practitioner recognizes that ____ is the most likely condition.",
    "answers": [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Osteoporosis",
      "Systemic Lupus Erythematosus"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.cdc.gov/arthritis/types/rheumatoid-arthritis.html",
    "rationale": "Rheumatoid arthritis is characterized by joint pain, swelling, and stiffness, particularly in the morning or after periods of inactivity. These symptoms tend to improve with movement. Unlike osteoarthritis, which is due to wear and tear on the joints, rheumatoid arthritis is an autoimmune condition where the body's immune system attacks the joint lining.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Musculoskeletal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is erythema migrans?",
    "answers": [
      "A type of skin cancer",
      "A common symptom of eczema",
      "A red, expanding rash with a clear center",
      "A viral infection causing widespread rash"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.cdc.gov/lyme/signs_symptoms/rashes.html",
    "rationale": "Erythema migrans is a red, expanding rash that often has a clear center, giving it a 'bull's-eye' appearance. It is commonly associated with Lyme disease and is a key early indicator of the infection.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "In which Tanner stage does the female develop thelarche?",
    "answers": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK470280",
    "rationale": "II. During the Tanner stage (Pre-adolescent stage) the female patient will develop breast budding, also known as thelarche. In this stage they will also develop areolar hyperplasia.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Adolescent (12-18)",
    "Subject": "Reproductive",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient presents with complaints of unsteadiness and frequent falls. As part of the neurological examination, you perform the Romberg's test. The patient is asked to stand with feet together and eyes closed, and they begin to sway significantly and almost fall over. How do you interpret this result?",
    "answers": [
      "Sensory ataxia",
      "Cerebellar ataxia",
      "Vestibular dysfunction",
      "Normal balance"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK563187/",
    "rationale": "A positive Romberg's test, where the patient sways significantly or falls when their eyes are closed, indicates sensory ataxia. This suggests a problem with proprioception or the body's ability to sense its position in space, often due to peripheral neuropathy or dorsal column dysfunction. Cerebellar ataxia usually presents with unsteadiness even with eyes open. Vestibular dysfunction might also cause unsteadiness, but it is less commonly isolated to a positive Romberg's test without other symptoms.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Neurological",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Choose the incorrect CAGE acronym definition.",
    "answers": [
      "C is for Cut down",
      "A: annoyed",
      "G: guilty",
      "E: emotional"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://jamanetwork.com/journals/jama/fullarticle/182810",
    "rationale": "The incorrect letter is E as it stands for EARLY or morning EYE-opener, as in needing a drink early in the morning.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "_____ is when someone tries to get attention and sympathy by falsifying an illness.",
    "answers": [
      "Munchausen syndrome",
      "Hypochondriasis",
      "Conversion disorder",
      "Somatization disorder"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://my.clevelandclinic.org/health/diseases/9833-munchausen-syndrome-factitious-disorder-imposed-on-self",
    "rationale": "Munchausen syndrome, now often referred to as Factitious Disorder Imposed on Self, involves a person repeatedly acting as if they have a physical or mental disorder when they are not really sick. This behavior is done to gain attention or sympathy from others. The other conditions listed involve psychological manifestations of distress, but do not involve deliberately faking illness for attention.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Adult (19-26)",
    "Subject": "Psychiatric",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What should the nurse practitioner prescribe to relieve the pain of a patient suffering from trigeminal neuralgia?",
    "answers": [
      "Carbamazepine (Tegretol)",
      "Gabapentin (Neuraptine)",
      "Amitriptyline",
      "Desipramine (Norpramin)"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/drugs-supplements/carbamazepine-oral-route/side-effects/drg-20062739",
    "rationale": "Trigeminal neuralgia, is effectively treated with anticonvulsants such as carbamazepine (Tegretol), since it reduces the nerve activity that causes the severe facial pain. Gabapentin may be used as a second-line treatment, while amitriptyline and desipramine are typically used for other types of neuropathic pain but are not the first choice for trigeminal neuralgia.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Neurological",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The family nurse practitioner counsels a patient with gout to avoid taking _____ for his high blood pressure as it can increase uric acid levels.",
    "answers": [
      "Amlodipine",
      "Losartan",
      "Hydrochlorothiazide",
      "Lisinopril"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.aafp.org/pubs/afp/issues/2015/1001/p622.html",
    "rationale": "Hydrochlorothiazide, a thiazide diuretic, should be avoided in patients with gout as it can increase uric acid levels, potentially worsening the condition. Other antihypertensive medications like amlodipine, losartan, and lisinopril do not have the same effect on uric acid levels and are safer options for patients with gout.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Musculoskeletal",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following exam findings matches the condition?",
    "answers": [
      "Allen test to meniscal tear",
      "McBurney’s point to cholecystitis",
      "McMurray test to appendicitis",
      "Rovsing sign to appendicitis "
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.sciencedirect.com/topics/medicine-and-dentistry/rovsings-sign",
    "rationale": "A positive Rovsing sign, pain in the RLQ on palpation of the LLQ, is a sign of appendicitis as well as tenderness over McBurney’s point. The McMurray test helps identify meniscal tears of the knee. Allen’s test is used to evaluate arterial blood flow of the hand.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Not-Applicable",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following is a risk factor for colon cancer in an elderly patient?",
    "answers": [
      "Iron deficiency anemia",
      "Changes in bowel habits",
      "Age",
      "Unexplained weight loss"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.cancer.org/cancer/types/colon-rectal-cancer/causes-risks-prevention/risk-factors.html",
    "rationale": "Advanced age is a significant risk factor for colon cancer. The risk of developing colon cancer increases as a person gets older. The other options are possible symptons rather than risk factors.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Elderly (65+)",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient presents with red, swollen eyelids and complains of a gritty sensation in the eyes, along with crusting at the base of the eyelashes, particularly in the morning. The patient also reports frequent episodes of dry eyes and itching. Based on these symptoms, what is the most likely diagnosis?",
    "answers": [
      "Conjunctivitis",
      "Blepharitis",
      "Glaucoma",
      "Uveitis"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.aao.org/eye-health/diseases/what-is-blepharitis",
    "rationale": "Blepharitis is characterized by inflammation of the eyelids, leading to symptoms such as red, swollen eyelids, a gritty sensation in the eyes, crusting at the base of the eyelashes, dry eyes, and itching. These symptoms are distinct from conjunctivitis, which typically involves conjunctival redness and discharge, glaucoma, which involves increased intraocular pressure and vision changes, and uveitis, which involves inflammation of the uvea and can cause eye pain, redness, and vision changes.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Head_Eyes&ENT",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The leading cause of Community Aquired Pneumonia is?",
    "answers": [
      "Mycoplasma pneumoniae",
      "Haemophilus influenzae",
      "Moraxella catarrhalis",
      "Streptococcus pneumoniae"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7147208/",
    "rationale": "Streptococcus pneumoniae is the leading cause of CAP. Other common bacterial causes include Haemophilus influenzae as well as atypical bacteria (Mycoplasma pneumoniae, Chlamydia pneumoniae, and Legionella species. Community-acquired pneumonia (CAP) is the sixth most common cause of death in the United States and the leading cause of death from infectious diseases. It is associated with significant morbidity and mortality and poses a major economic burden to the healthcare system.",
    "bookmarked": 0,
    "Domain": "Assess",
    "Age Group": "Elderly (65+)",
    "Subject": "Respiratory",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 22-year-old woman presents with an absence of menstrual periods for the past six months after previously having regular cycles. Which of the following should be the initial step to diagnose the cause of her secondary amenorrhea?",
    "answers": [
      "Pelvic ultrasound",
      "Thyroid function tests",
      "Pregnancy test",
      "Prolactin level"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/amenorrhea/symptoms-causes/syc-20369299",
    "rationale": "The initial step in diagnosing secondary amenorrhea should be a pregnancy test, as this is the most common cause of amenorrhea in reproductive-age women. Further testing, like thyroid function tests, prolactin levels, or a pelvic ultrasound, may be needed based on the results of the pregnancy test and other clinical findings.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Adult (19-26)",
    "Subject": "Reproductive",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which sign and diagnostic test should you use to assess a patient for cholecystitis?",
    "answers": [
      "McMurray and CT",
      "Murphy and US",
      "McBurney’s and US",
      "McFadden and CT"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.clinicaleducation.org/wp-content/uploads/MurphysTest.pdf",
    "rationale": "Murphy sign, which involves the patient experiencing pain upon palpation of the right upper quadrant during inspiration, is used to assess for cholecystitis because it indicates pain and tenderness in the gallbladder area, suggesting inflammation of the gallbladder. An abdominal ultrasound is the preferred initial imaging test to assess for cholecystitis, as it can effectively identify gallstones, gallbladder wall thickening, and other signs of inflammation. McMurray test is for meniscal tear, McFadden does not exist.",
    "bookmarked": 0,
    "Domain": "Assess",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient experiences pain with both the psoas and obturator signs. What diagnosis should the nurse practitioner suspect?",
    "answers": [
      "Nephrolithiasis",
      "Cholecystitis",
      "Appendicitis",
      "Pancreatitis"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.aafp.org/pubs/afp/issues/2018/0701/p25.html",
    "rationale": "Pain elicited by both the psoas and obturator signs is indicative of irritation in the lower abdomen, commonly associated with appendicitis.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Musculoskeletal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 28-year-old woman who is 24 weeks pregnant presents to your clinic with complaints of headaches and swelling in her hands and feet. Her blood pressure is measured at 150/95 mmHg. Laboratory test results show proteinuria with a protein/creatinine ratio of 0.35 and elevated serum creatinine levels. Which of the following is the most likely diagnosis?",
    "answers": [
      "Preeclampsia",
      "Chronic hypertension",
      "Gestational hypertension",
      "Eclampsia"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/preeclampsia/diagnosis-treatment/drc-20355751",
    "rationale": "Preeclampsia is characterized by the onset of hypertension and either proteinuria or signs of end-organ dysfunction after 20 weeks of gestation in a previously normotensive woman. In this case, the patient presents with elevated blood pressure (150/95 mmHg) and signs of kidney problems indicated by proteinuria and elevated serum creatinine levels. Gestational hypertension would be considered if there was hypertension without proteinuria or end-organ damage. Chronic hypertension is diagnosed if hypertension was present before pregnancy or before 20 weeks of gestation. Eclampsia is diagnosed if there are seizures in a woman with preeclampsia.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Pregnancy",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following would be best for a patient with molluscum contagiosum?",
    "answers": [
      "Flagyl",
      "Doxycycline",
      "Mupirocin",
      "Symptomatic management "
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.aad.org/public/diseases/a-z/molluscum-contagiosum-treatment",
    "rationale": "Molluscum contagiosum is a viral infection caused by the poxvirus. It is self-limiting, therefore treatment is symptomatic management. Key characteristics include flesh-colored bumps on the skin with an indurated center. If these are found on children near private parts, suspect sexual abuse.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Child (6-12)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 45-year-old patient presents with unilateral leg swelling, pain, and reddish skin. The patient recently underwent knee surgery and has been mostly immobile. Which condition is most likely causing these symptoms?",
    "answers": [
      "Deep vein thrombosis",
      "Cellulitis",
      "Peripheral artery disease",
      "Lymphedema"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/deep-vein-thrombosis/symptoms-causes/syc-20352557",
    "rationale": "Deep vein thrombosis (DVT) is highly likely given the patient's recent surgery, immobility, and symptoms of unilateral leg swelling and pain accompanied by color changes. DVT involves clot formation in deep veins, often of the legs. Peripheral artery disease typically presents with pain during walking, cellulitis with redness and warmth, and lymphedema with painless swelling.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Cardiovascular",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The absence of three or more periods in a row by someone who has had periods in the past is called?",
    "answers": [
      "Secondary amenorrhea",
      "Primary amenorrhea",
      "Menopause",
      "Dysmenorrhea"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/amenorrhea/symptoms-causes/syc-20369299",
    "rationale": "Secondary amenorrhea is defined as the absence of menstrual periods for three or more consecutive months in a woman who previously had regular menstrual cycles. Primary amenorrhea describes the condition where a female has not started menstruating by age 15. Menopause is the permanent cessation of menstrual periods, typically occurring between the ages of 45 and 55. Dysmenorrhea refers to painful periods, not the absence of periods.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Adult (19-26)",
    "Subject": "Reproductive",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 70-year-old patient presents with a persistent, severe headache localized to the temples, visual disturbances, and jaw pain when eating. The patient also reports feeling generally unwell and experiencing occasional fevers. Based on these symptoms, which condition is most likely?",
    "answers": [
      "Temporal arteritis",
      "Migraine",
      "Trigeminal neuralgia",
      "Cluster headaches"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/giant-cell-arteritis/symptoms-causes/syc-20372758",
    "rationale": "Temporal arteritis, aka giant cell arteritis, typically presents in older adults with the symptoms mentioned. These symptoms distinguish it from migraines, which typically involve photophobia and phonophobia, trigeminal neuralgia which primarily involves facial pain without systemic symptoms, and cluster headaches which are characterized by intense, unilateral headache episodes without systemic involvement.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Elderly (65+)",
    "Subject": "Neurological",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which first-line treatment should be prescribed when treating a patient with asthma?",
    "answers": [
      "Low dose ICS + SABA PRN",
      "Low dose ICS + leukotriene PRN",
      "SABA + LAMA",
      "Med dose ICS + LAMA daily"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://ginasthma.org/pocket-guide-for-asthma-management-and-prevention/",
    "rationale": "The most recent GINA guidelines recommend low dose inhaled corticosteroids (ICS) combined with a short-acting beta-agonist (SABA) as needed for the first-line treatment of asthma. This approach helps to control inflammation and manage acute symptoms.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Respiratory",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 30-year-old patient presents with complaints of severe, throbbing headaches that are often accompanied by nausea and sensitivity to light and sound. The headaches have been recurring over the past few months and are debilitating, preventing the patient from performing daily activities. What is the most appropriate treatment for this patient's acute migraine headaches?",
    "answers": [
      "Ibuprofen",
      "Acetaminophen",
      "Sumatriptan",
      "Amitriptyline"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/drugs-supplements/sumatriptan-oral-route/description/drg-20074356",
    "rationale": "Sumatriptan is a specific medication for treating acute migraine headaches. It is a serotonin receptor agonist (triptan) that works by constricting blood vessels and reducing inflammation, which helps to relieve migraine symptoms. Ibuprofen and acetaminophen may provide some relief for mild migraines but are generally less effective for severe, acute migraine attacks. Amitriptyline can be used as a preventative treatment for migraines but is not suitable for acute treatment.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Neurological",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which type of anemia may cause peripheral neuropathy?",
    "answers": [
      "Folate anemia",
      "Thalassemia",
      "B12 deficiency",
      "Iron deficiency anemia"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8858590",
    "rationale": "Vitamin B12 deficiency can lead to peripheral neuropathy because B12 is essential for the maintenance of the myelin sheath that surrounds and protects nerve fibers. A deficiency can cause demyelination, leading to nerve damage and symptoms such as numbness, tingling, and weakness. Folate anemia, thalassemia, and iron deficiency anemia do not typically cause peripheral neuropathy.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Hematopoietic",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the diagnostic imaging of choice for appendicitis?",
    "answers": [
      "US",
      "CT",
      "MRI",
      "Abdominal X-ray"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://journalofethics.ama-assn.org/article/ct-scans-diagnosis-appendicitis/2006-03",
    "rationale": "CT is often considered the best imaging for appendicitis due to its high accuracy in detecting the presence of an inflamed appendix as well as any complications such as perforation or abscess. While Ultrasound is used, particularly in pregnant women and children to avoid radiation, CT provides a more detailed view and is preferred in unclear cases. MRI is rarely used due to cost and accessibility, and Abdominal X-rays are not typically effective for diagnosing appendicitis.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Adult (19-26)",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 52-year-old alcoholic man presents to the clinic complaining of fatigue and shortness of breath. His physical examination reveals pale conjunctiva and a smooth tongue. Laboratory tests show macrocytic anemia. What is the most likely cause of this anemia?",
    "answers": [
      "Folate deficiency",
      "Iron Deficiency",
      "Aplastic anemia",
      "Sickle cell disease"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.hematology.org/education/patients/anemia",
    "rationale": "In patients with alcohol dependence, folate deficiency is the most common cause of macrocytic anemia. Alcohol interferes with folate absorption and metabolism, leading to decreased levels of this essential vitamin, which is required for proper DNA synthesis and red blood cell formation. The clinical presentation of fatigue, shortness of breath, and specific findings such as pale conjunctiva and a smooth tongue (glossitis) further support a diagnosis of folate deficiency anemia.<ul><li>A) Iron deficiency typically causes microcytic anemia, not macrocytic, and is less likely in this scenario without evidence of bleeding or malnutrition.</li><li>C) Aplastic anemia, which involves the failure of bone marrow to produce blood cells, is a possible but less likely diagnosis without evidence of pancytopenia (reduction in red and white blood cells and platelets).</li><li>D) Sickle cell disease is a genetic disorder causing abnormally shaped red blood cells and is not associated with alcohol use or macrocytosis.</li></ul>",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Hematopoietic",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 30-year-old female complains of bleeding gums after brushing her teeth and prolonged bleeding from minor cuts and injuries for the past two months. Her latest CBC reveals platelet count of 19,000 mm3, hemoglobin of 8 g/dL, and WBC count of 75,000/mm3. What is her most likely diagnosis?",
    "answers": [
      "Acute leukemia",
      "Drug-induced thrombocytopenia",
      "Hemolytic anemia",
      "Idiopathic thrombocytopenic purpura"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.hematology.org/education/patients/blood-cancers/leukemia",
    "rationale": "The patient's symptoms of bleeding gums and prolonged bleeding from minor cuts, along with a significantly low platelet count (150k to 450k is normal) and an extremely elevated WBC count (4k to 11k is normal), are highly suggestive of acute leukemia. Note that low platelet can have multiple causes we suspect leukemia when in conjuction with the other symptons and results. Acute leukemia often presents markedly elevated WBC count due to their rapid proliferation.<br>Drug-induced thrombocytopenia and idiopathic thrombocytopenic purpura (ITP) typically do not present with such high WBC counts, and hemolytic anemia primarily affects red blood cells rather than white blood cells and platelets.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Hematopoietic",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following lab values are usually elevated in alcoholic patients?",
    "answers": [
      "Hgb and Hct",
      "AST and ALT",
      "LDL and HDL",
      "Albumin"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.medleague.com/diagnosis-of-alcoholism/",
    "rationale": "AST (aspartate aminotransferase) and ALT (alanine aminotransferase) are liver enzymes that are commonly elevated in individuals with alcoholism. Chronic alcohol consumption can lead to liver inflammation and damage, resulting in the release of these enzymes into the bloodstream. Elevated levels of AST and ALT are key indicators of liver injury and are used to help diagnose and monitor the progression of liver disease related to alcohol use. Ratio of 2:1 with AST/ALT is associated with alcohol abuse. LOW protein/albumin levels indicates the patient’s poor nutritional status.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Mr Smith complains of headaches that wake him up in the middle of the night with intense pain around the right eye on one side of the head. He tells you the headaches are short-lived but happen many times in a day. What is the best treatment for this type of headache?",
    "answers": [
      "Acetaminophen",
      "Caffeine",
      "Phenytoin (Dilantin)",
      "100% oxygen via mask"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/cluster-headache/diagnosis-treatment/drc-20352084",
    "rationale": "The headache described is a cluster headache which usually awakens the patient at night and is felt in or around one eye, lasts a few minutes and happens multiple times in a day. 1st line treatment is 100% O2 via mask.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Neurological",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 30-year-old patient presents with low-grade fever, stuffy nose, productive cough, and a whistling sound while breathing. The NP suspects acute bronchitis. What is the first-line treatment?",
    "answers": [
      "Antibiotics.",
      "Inhaled corticosteroids.",
      "Bronchodilators.",
      "Rest and hydration."
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.lung.org/lung-health-diseases/lung-disease-lookup/bronchitis/symptoms-diagnosis-treatment",
    "rationale": "The first-line treatment for acute bronchitis is supportive care, including rest and hydration because most cases go away on their own. Most cases are caused by viral infections, so antibiotics are not effective. Inhaled corticosteroids are not typically used unless there is an underlying chronic condition like asthma. Bronchodilators may be used if there is significant wheezing, but they are not the primary treatment.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Respiratory",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 70-year-old patient is reviewing her Medicare coverage options and asks you, her nurse practitioner, what services are covered under Medicare Part A. Your reply should include:",
    "answers": [
      "Inpatient hospital care",
      "Prescription medications filled at a pharmacy",
      "Outpatient physical therapy",
      "Routine vision exams"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare",
    "rationale": "Medicare Part A primarily covers inpatient hospital care, skilled nursing facility care, hospice care, and some home health care. It does not cover outpatient physical therapy, which is covered under Medicare Part B. Prescription medications filled at a pharmacy are under Part D. Routine vision exams are not in Part A; these may be covered under Part B or supplemental plans.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Elderly (65+)",
    "Subject": "Non-Clinical",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 45-year-old female comes into your office complaining of lower back pain, urinary frequency, and burning with urination. She is allergic to sulfa drugs and penicillin. You recognize she has pyelonephritis. Which antibiotic should you prescribe?",
    "answers": [
      "Doxycycline",
      "Cipro",
      "Amoxicillin",
      "Bactrim"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK535454",
    "rationale": "Cipro (ciprofloxacin) is recommended to treat this complicated UTI case of pyelonephritis because it is a broad-spectrum antibiotic effective against the common gram-negative bacteria that cause urinary tract infections, including kidney infections. Doxy and amoxicillin have inferior efficacy against the gram-negative bacteria causing the infection, and do not achieve cipro's higher concentrations in the kidneys. Bactrim is a sulfa drug which the patient is allergic to.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Genitourinary&Renal",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What condition is diagnosed when a sputum smear tests positive for acid-fast bacilli?",
    "answers": [
      "Haemophilus influenzae",
      "Legionella pneumonia",
      "Streptococcus pneumoniae",
      "Tuberculosis"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.cdc.gov/tb/about/",
    "rationale": "A positive sputum smear for acid-fast bacilli is diagnostic of tuberculosis (TB). Mycobacterium tuberculosis, the bacteria causing TB, is an acid-fast bacillus. The acid-fast staining technique highlights these bacteria, confirming their presence in the sputum and thus diagnosing TB.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Respiratory",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Hydrochlorothiazide contraindications include?",
    "answers": [
      "Diabetics",
      "Gout",
      "Hyperlipidemia",
      "All of the above"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6802803/",
    "rationale": "Hydrochlorothiazide is contraindicated in certain populations due to its side effects. It can increase blood glucose levels (Hyperglycemia), making it less suitable for diabetics. It can also increase uric acid levels (hyperuricemia), which can exacerbate gout. Additionally, it can have adverse effects on lipid profiles, potentially worsening hyperlipidemia. Therefore, it is contraindicated for individuals with diabetes, gout, and hyperlipidemia.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Elderly (65+)",
    "Subject": "Cardiovascular",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What would be considered positive for a tuberculin purified protein derivative (PPD) reading on a migrant worker from latin america?",
    "answers": [
      "3mm or greater ",
      "5mm or greater ",
      "10mm or greater ",
      "15mm or greater"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html",
    "rationale": "For individuals such as migrant workers who are at higher risk for tuberculosis exposure from their home country, a tuberculin purified protein derivative (PPD) reading of 10mm or greater is considered positive. This is based on guidelines from the CDC, which take into account the increased likelihood of TB exposure in high-risk populations. A positive result indicates the need for further evaluation and possible treatment for TB infection.",
    "bookmarked": 0,
    "Domain": "Assess",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Respiratory",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Bell’s Palsy results from damage to the _____ cranial nerve.",
    "answers": [
      "IV (trochlear)",
      "V (trigeminal)",
      "VII (facial)",
      "VIII (vestibulocochlear)"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.hopkinsmedicine.org/health/conditions-and-diseases/bells-palsy",
    "rationale": "Bell's palsy is an unexplained episode of facial muscle weakness or paralysis. It begins suddenly and worsens over 48 hours. This condition results from damage to the facial nerve (the 7th cranial nerve). Pain and discomfort usually occur on one side of the face or head.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Elderly (65+)",
    "Subject": "Neurological",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 24-year-old female presents with symptoms of vaginal discharge and pelvic pain. She is sexually active with multiple partners and is concerned about the possibility of sexually transmitted infections. Which test is the most sensitive for diagnosing gonorrhea and chlamydia?",
    "answers": [
      "Nucleic acid amplification test (NAAT).",
      "Urinalysis",
      "Blood cultures",
      "Gram stain"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3372150/",
    "rationale": "The nucleic acid amplification test (NAAT) is the most sensitive and specific test for diagnosing gonorrhea and chlamydia. It detects the genetic material of the bacteria, providing highly accurate results. Urinalysis can suggest an infection but is not specific for gonorrhea and chlamydia. Culture and Gram stain are less sensitive.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Adult (19-26)",
    "Subject": "Reproductive",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 30-year-old male comes in with painful and difficult urination, pain in the groin/pelvic area. He tells you he suffers from chronic urinary tract infections (UTIs). UA culture is positive for Escherichia coli. What is one intervention the NP knows to avoid with this condition?",
    "answers": [
      "Treat with NSAIDs",
      "Treat with antibiotics",
      "Avoid prostate massage",
      "Alpha blockers can be used to reduce prostate inflammation"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.verywellhealth.com/things-to-know-about-prostate-health-4066015",
    "rationale": "Prostate massage carries some significant risks as it can potentially spread the infection to the bloodstream. Treatment includes NSAIDs and antibiotics, and patient education includes the avoidance of foods that can irritate the bladder including hot peppers, caffeine and alcohol.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Genitourinary&Renal",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What does a score 3 suggest in the Mini-Mental State Exam (MMSE)?",
    "answers": [
      "Mild dementia",
      "Moderate dementia",
      "Severe dementia",
      "No dementia"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.healthdirect.gov.au/mini-mental-state-examination-mmse#:~:text=GP%20or%20specialist.-,How%20is%20the%20MMSE%20scored%3F,abnormal%2C%20indicating%20possible%20cognitive%20impairment.",
    "rationale": "A score of 3 on the MMSE indicates severe cognitive impairment. The MMSE scores range from 0 to 30, with higher scores indicating better cognitive function. A score between 1-10 is generally considered indicative of severe dementia, distinguishing it from mild and moderate dementia, which are associated with higher scores.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Elderly (65+)",
    "Subject": "Psychiatric",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which organism causes Shingles?",
    "answers": [
      "Varicella zoster virus (VZV)",
      "Herpes simplex 1 virus",
      "Herpes simplex 2 virus",
      "Cytomegalovirus"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.cdc.gov/shingles/index.html",
    "rationale": "Varicella zoster virus is shingle’s causative organism. HSV-1 -usually causes blisters around the mouth and lips. HSV-2 - usually causes blisters around the genitals and rectum. Cytomegalovirus (CMV) is a common virus that is usually harmless. Sometimes it causes problems in babies if you get it during pregnancy (congenital CMV).",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "We use a Potassium hydroxide (KOH) prep to diagnose _______.",
    "answers": [
      "Viral infections",
      "Bacterial infection",
      "Protozoa infection",
      "Fungal infection "
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://medlineplus.gov/ency/article/003761.htm",
    "rationale": "A potassium hydroxide (KOH) prep is a diagnostic test used to identify fungal infections of the skin. The KOH solution dissolves keratin and other cellular material in a sample, making fungal elements such as hyphae or yeast cells more visible under a microscope. It is not used for diagnosing viral, bacterial, or protozoa infections.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Adult (19-26)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Positive clue cells are present in which diagnosis?",
    "answers": [
      "Chlamydia",
      "Trichomonas",
      "Genital herpes",
      "Bacterial Vaginosis"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/bacterial-vaginosis/diagnosis-treatment/drc-20352285",
    "rationale": "The presence of clue cells is a key diagnostic criterion for BV, which is characterized by a disruption of the normal vaginal flora. Chlamydia, Trichomonas, and Genital Herpes do not typically present with clue cells; these conditions have different diagnostic criteria and manifestations.",
    "bookmarked": 0,
    "Domain": "Assess",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Reproductive",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Patient education for preeclampsia should NOT include:",
    "answers": [
      "Bed rest except for bathroom privileges",
      "Close monitoring of weight and blood pressure",
      "Close follow up of urinary protein, serum creatinine and platelet count",
      "A prescription of methyldopa (Aldomet)"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/preeclampsia/diagnosis-treatment/drc-20355751#",
    "rationale": "Medication management is not 1st line tx so a prescription of methyldopa (Aldoment) to control blood pressure is incorrect. The primary treatment for preeclampsia is either to deliver the baby or manage the condition until the best time to deliver the baby.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Pregnancy",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient presents with red eyes, a thick yellow-green discharge, and eyelids that are stuck together upon waking. The patient reports no itching but mentions mild eye pain and sensitivity to light. The symptoms started two days ago and have progressively worsened. Based on the symptoms, what type of conjunctivitis is most likely?",
    "answers": [
      "Allergic",
      "Bacterial",
      "Viral",
      "Fungal"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.healthdirect.gov.au/conjunctivitis",
    "rationale": "The patient's symptoms of red eyes, thick yellow-green discharge, and eyelids that are stuck together upon waking are indicative of bacterial conjunctivitis. Bacterial conjunctivitis is characterized by purulent (pus-like) discharge, which can cause the eyelids to stick together. The lack of itching helps differentiate it from allergic conjunctivitis, which typically involves significant itching. Viral conjunctivitis usually presents with watery discharge rather than thick discharge and is often associated with other viral symptoms like a cold or sore throat. Fungal conjunctivitis is rare and not typically associated with such symptoms.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Head_Eyes&ENT",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "If a patient tests positive for the hep B antibody and negative for the Hep B antigen, what is the correct course of action to take?",
    "answers": [
      "Administer hepatitis B vaccine",
      "Administer IVIG",
      "Administer both hepatitis B vaccine and IVIG",
      "Do nothing"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/",
    "rationale": "A positive test for the hepatitis B antibody (anti-HBs) and a negative test for the hepatitis B antigen (HBsAg) typically indicates that the patient has either recovered from a past infection or has been successfully vaccinated against hepatitis B. In this case, the immune system has effectively responded to the virus or the vaccine, rendering further action like vaccination or IVIG administration unnecessary",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Adult (19-26)",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following are common findings in a young primigravida with pregnancy-induced hypertension?",
    "answers": [
      "Edema",
      "Abdominal cramping",
      "Light vaginal bleeding, spotting",
      "Dysuria"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://my.clevelandclinic.org/health/diseases/4497-gestational-hypertension",
    "rationale": "Edema, or swelling, particularly in the hands and face, is a common finding in pregnancy-induced hypertension (PIH), also known as gestational hypertension. While some swelling is typical in pregnancy, the sudden appearance of severe or atypical edema can be a sign of PIH. The other symptoms listed, such as abdominal cramping, light vaginal bleeding, and dysuria, are less specifically associated with gestational hypertension and are more indicative of other obstetric complications.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Adult (19-26)",
    "Subject": "Pregnancy",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 55-year-old patient presents with sudden, severe, stabbing pain on one side of the face. The pain is described as electric shock-like, lasts for a few seconds, and can be triggered by everyday activities such as chewing, speaking, or touching the face. The episodes have been occurring more frequently over the past few weeks. What is the most likely diagnosis?",
    "answers": [
      "Cluster headaches",
      "Migraine headaches",
      "Trigeminal neuralgia",
      "Temporomandibular joint disorder"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/trigeminal-neuralgia/symptoms-causes/syc-20353344",
    "rationale": "Trigeminal neuralgia, aka tic douloureux is characterized by sudden, severe, stabbing pain on one side of the face that is often described as electric shock-like. The pain can be triggered by everyday activities such as chewing, speaking, or touching the face. Cluster headaches and migraine headaches do not typically present with this type of brief, triggered pain, and TMJ disorder usually involves pain in the jaw and surrounding muscles rather than sharp, electric shock-like pain.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Neurological",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What should the nurse practitioner prescribe to treat mycoplasma pneumonia in an otherwise healthy young adult?",
    "answers": [
      "Penicillin",
      "Fluoroquinolone",
      "Azithromycin",
      "Tetracycline"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.cdc.gov/pneumonia/atypical/mycoplasma/hcp/antibiotic-treatment-resistance.html",
    "rationale": "Azithromycin is recommended for the treatment of mycoplasma pneumonia, especially in otherwise healthy young adults. Mycoplasma pneumoniae lacks a cell wall, making antibiotics that target cell wall synthesis, such as penicillin, ineffective. Fluoroquinolones and tetracyclines are alternative options, but azithromycin, a <b>macrolide</b>, is typically preferred due to its efficacy and favorable side effect profile.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Adult (19-26)",
    "Subject": "Respiratory",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which antipsychotic medication is most likely to produce side effects including: inability to sit still, involuntary muscle contractions, tremors, stiff muscles, and involuntary facial movements?",
    "answers": [
      "Haloperidol (Haldol)",
      "Sertraline (Zoloft)",
      "Citalopram (Celexa)",
      "Olanzapine (Zyprexa)"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK534115/",
    "rationale": "Haloperidol (Haldol) is a first-generation antipsychotic that has the potential to produce extrapyramidal effects. Example of extrapyramidal effects include inability to sit still, involuntary muscle contractions, tremors, stiff muscles, and involuntary facial movements.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Adult (19-26)",
    "Subject": "Psychiatric",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following conditions is most commonly associated with cystic fibrosis?",
    "answers": [
      "Bronchiectasis",
      "Bronchiolitis",
      "Pneumonitis",
      "Pulmonary hypertension"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://cystic-fibrosis.com/bronchiectasis",
    "rationale": "Bronchiectasis is a common complication in patients with cystic fibrosis due to the chronic obstruction and infection of the airways, leading to permanent dilation and damage of the bronchial walls. This results in recurrent respiratory infections and chronic productive cough, which are hallmark symptoms in cystic fibrosis patients.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Respiratory",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "If the TSH is elevated and the T4 is low, you should _______ levothyroxine.",
    "answers": [
      "Decrease",
      "Increase",
      "Not change",
      "Double up"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6822824/",
    "rationale": "Increase: elevated TSH and decreased T4 is hypothyroidism. If the patient is on levothyroxine, the drug needs to be increased to increase T4 level.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Endocrine",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following statements is true regarding testicular cancer?",
    "answers": [
      "A CT scan is the preferred initial imaging method for evaluating a scrotal mass.",
      "It is the most common neoplasm in men aged 20-35.",
      "Patients usually present with a single, painful testicular lesion.",
      "The five-year survival rate after orchiectomy and therapy is less than 50%."
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.cancer.org/cancer/types/testicular-cancer/about/key-statistics.html",
    "rationale": "Testicular cancer is the most common neoplasm in men aged 20-35 due to the higher prevalence of germ cell tumors within this age group. These tumors, which originate from the cells responsible for producing sperm, tend to develop during early adulthood. The exact cause is not well understood, but factors such as genetic predisposition, undescended testicles (cryptorchidism), and certain inherited conditions increase the risk. Early detection and treatment are crucial for favorable outcomes, as testicular cancer is highly responsive to therapy, especially when diagnosed early.<ul><li>A) An <strong>ultrasound</strong> is the preferred initial imaging method for diagnosing testicular cancer due to its specificity, safety, and accessibility.</li><li>C) Patients typically discover a painless testicular <strong>nodule</strong>.</li><li>D) The 5-year survival rate for most testicular cancer after orchiectomy and therapy is <strong>more than 90%</strong>.</li></ul>",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Adult (19-26)",
    "Subject": "Reproductive",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the treatment of choice for non-purulent cellulitis?",
    "answers": [
      "Clindamycin",
      "Trimethoprim/sulfamethoxazole (Bactrim)",
      "Hydrocortisone",
      "Cefalexin (Keflex) "
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/cellulitis.html",
    "rationale": "The treatment of choice for non-purulent cellulitis is typically an antibiotic that is effective against streptococci and staphylococci, such as cefalexin (Keflex). Non-purulent cellulitis is usually caused by beta-hemolytic streptococci and Staphylococcus aureus, and cefalexin is effective against these pathogens. Clindamycin and trimethoprim/sulfamethoxazole (Bactrim) can be used in certain cases, but are more often reserved for patients with a history of MRSA or penicillin allergy. Hydrocortisone is not an appropriate treatment for bacterial infections such as cellulitis.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 32-year-old pregnant woman in her third trimester presents with sudden-onset severe abdominal pain and vaginal bleeding. She also reports decreased fetal movements. On examination, her abdomen is tender and rigid, and her vital signs indicate hypotension and tachycardia. What is the most appropriate next step in management?",
    "answers": [
      "Administer oral pain relief and monitor.",
      "Schedule an urgent outpatient ultrasound.",
      "Send to the Emergency Room",
      "Refer to the obstetrician "
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/placental-abruption/symptoms-causes/syc-20376458",
    "rationale": "Placental abruption is a serious condition where the placenta detaches from the uterine wall before delivery, which can compromise the blood and oxygen supply to the fetus and cause severe maternal hemorrhage. Immediate evaluation and management in an emergency department are crucial to stabilize both the mother and the fetus, and to determine the need for urgent delivery.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Adult (19-26)",
    "Subject": "Pregnancy",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the treatment of choice for temporal ateritis?",
    "answers": [
      "NSAIDs",
      "Carbamazepine",
      "Long term steroids",
      "Gabapentin"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/giant-cell-arteritis/diagnosis-treatment/drc-20372764",
    "rationale": "The main treatment for giant cell arteritis involves long-term use of steroids (6 months), specifically corticosteroids, to reduce artery inflammation and prevent complications such as vision loss. NSAIDs may be used for symptomatic relief but are not sufficient as a primary treatment. Carbamazepine and Gabapentin are used for neuropathic pain and are not effective in treating giant cell arteritis.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Elderly (65+)",
    "Subject": "Neurological",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient with a history of conjunctivitis comes in complaining of itching, burning, and discharge from both eyes that is stringy. What is the best treatment choice for this type of conjunctivitis?",
    "answers": [
      "Moxifloxacin 0.5% drops",
      "Trimethoprim/polymyxin B drops",
      "Topical antihistamines/mast cell stabilizers",
      "Gentamicin 0.3% ointment"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/conjunctivitis?sso=y",
    "rationale": "The symptoms described—itching, burning, and stringy discharge—are indicative of <u>allergic</u> conjunctivitis; <u>bacterial</u> is purulent and <u>viral</u> is watery. The best treatment choice for allergic conjunctivitis is topical antihistamines or mast cell stabilizers, which help to alleviate allergic symptoms by reducing inflammation and controlling allergic reactions. Moxifloxacin, trimethoprim/polymyxin B, and gentamicin are antibiotics and would be appropriate for bacterial conjunctivitis, not allergic conjunctivitis.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Head_Eyes&ENT",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 70-year-old female has several lesions that appear as if 'pasted on' the skin, scaly, brown, and varying in size and shape. What is the name this skin condition?",
    "answers": [
      "Seborrheic Keratosis",
      "Actinic Keratosis",
      "Melanoma",
      "Psoriasis"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://my.clevelandclinic.org/health/diseases/21721-seborrheic-keratosis",
    "rationale": "Seborrheic Keratosis is a common, noncancerous, skin growth characterized by benign, often pigmented, growths that have a 'stuck on' appearance. People tend to get them as they get older. Actinic Keratosis presents as rough, scaly patches due to sun exposure, Melanoma is a serious form of skin cancer with asymmetric, irregular borders and multiple colors, and Psoriasis typically presents with red, scaly plaques that may be itchy or painful.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Elderly (65+)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Fill in the blanks: ___ is caused by 'wear and tear' while ___ is an autoimmune disease. Prescribe corticosteroids to alleviate ___ symptoms, Acetaminophen for ___ symptoms.",
    "answers": [
      "RA, OA, RA, OA",
      "OA, RA, RA, OA",
      "OA, RA, OA, RA",
      "RA, OA, OA, RA"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/syc-20350772",
    "rationale": "Osteoarthritis (OA) is a degenerative joint disease caused by 'wear and tear' on the joints, leading to the breakdown of cartilage. Rheumatoid arthritis (RA) is an autoimmune disease where the immune system attacks the joints, causing inflammation. Corticosteroids are prescribed to alleviate symptoms of RA due to their anti-inflammatory properties, while Acetaminophen is commonly used to manage pain in OA without addressing inflammation.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Musculoskeletal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The ____ is provoked by having the supine patient lift the thigh against hand resistance or with the patient laying on their contralateral side while the hip joint is passively extended.",
    "answers": [
      "psoas sign",
      "obturator sign",
      "Murphy's sign",
      "McBurney's sign"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.sciencedirect.com/topics/medicine-and-dentistry/psoas-sign",
    "rationale": "The psoas sign is used to assess for irritation of the psoas muscle, which can occur in cases of appendicitis. It is provoked by having the patient lift their thigh against resistance while supine or by passively extending the hip joint while the patient lies on their contralateral side. Pain elicited during these maneuvers suggests a positive psoas sign, indicating possible appendicitis",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Musculoskeletal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the most appropriate initial treatment for blepharitis?",
    "answers": [
      "Topical antibiotics",
      "Systemic corticosteroids",
      "Artificial tears",
      "Warm compresses and eyelid hygiene"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.aao.org/eye-health/diseases/what-is-blepharitis",
    "rationale": "The initial treatment for blepharitis typically involves conservative measures such as warm compresses and eyelid hygiene. These methods help to reduce inflammation and remove crusts and debris from the eyelids. Topical antibiotics may be used if there is a secondary bacterial infection, but they are not the first-line treatment. Systemic corticosteroids are generally not indicated for blepharitis, and while artificial tears can help alleviate dry eye symptoms, they do not address the underlying inflammation and debris associated with blepharitis.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Head_Eyes&ENT",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient comes in complaining of red, itchy, and scaly patches over the knees and elbows. Upon examination you notice silvery scales. What is the most likely diagnosis?",
    "answers": [
      "Psoriasis",
      "Eczema",
      "Erythematous plaques",
      "Erysipelas "
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.aad.org/public/diseases/psoriasis/what/symptoms",
    "rationale": "The presence of red, itchy, and scaly patches with silvery scales on the knees and elbows is characteristic of psoriasis. Psoriasis is a chronic autoimmune condition that causes rapid skin cell turnover, leading to thickened, scaly patches. Eczema typically presents with more diffuse itching and inflammation without the distinctive silvery scales. Erythematous plaques are a general description of red patches and can occur in various conditions, but the specific presentation of silvery scales points to psoriasis. Erysipelas is a bacterial skin infection that usually presents with sharply demarcated, raised, and warm red areas, not scaly patches.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which test is diagnostic for deep vein thrombosis (DVT)?",
    "answers": [
      "Angiogram ",
      "Ankle-Brachial Index (ABI)",
      "Duplex ultrasonography",
      "Contrast venography"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.cdc.gov/blood-clots/testing-diagnosis/",
    "rationale": "Duplex ultrasonography should be the first choice for diagnosing DVT because it is non-invasive, widely available, and highly accurate for detecting blood clots in the veins. Angiogram and contrast venography are more invasive procedures and are not typically used as the initial diagnostic tools. The Ankle-Brachial Index (ABI) is used to diagnose peripheral artery disease, not DVT.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Cardiovascular",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the ABCDE of melanoma?",
    "answers": [
      "Asymmetry, borders, color, depth, evolution",
      "Atrophy, borders, color, dimension, elevation",
      "Asymmetry, borders, characteristics, dimension, elevation",
      "Asymmetry, borders, color, diameter, evolution"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.aad.org/public/diseases/skin-cancer/find/at-risk/abcdes",
    "rationale": "<ol style=\"list-style-type: upper-alpha;\"><li>Asymmetry: One half of the spot is unlike the other half.</li><li>Border: The spot has an irregular, scalloped, or poorly defined border.</li><li>Color: The spot has varying colors from one area to the next, such as shades of tan, brown or black, or areas of white, red, or blue.</li><li>Diameter: While melanomas are usually greater than 6 millimeters, or about the size of a pencil eraser, when diagnosed, they can be smaller.</li><li>Evolving: The spot looks different from the rest or is changing in size, shape, or color.</li></ol>",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which murmur is characterized as high-pitched/harsh, and heard at the upper left sternal border?",
    "answers": [
      "Mitral valve prolapse",
      "Aortic stenosis",
      "Mitral regurgitation",
      "Pulmonary flow"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6368429/",
    "rationale": "Pulmonary flow murmur is heard on the left sternal border. Because they are high pitched, they are heard best with the diaphragm of the stethoscope.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Elderly (65+)",
    "Subject": "Cardiovascular",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the most common cancer for both men and women?",
    "answers": [
      "Skin",
      "Lung",
      "Pancreatic",
      "Colorectal"
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.cdc.gov/skin-cancer/statistics/index.html",
    "rationale": "Skin cancer, specifically Basal Cell carcinoma, is the most common type of cancer for both men and women. The most common death causing cancer for both men and women is lung cancer.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient living in a wooded area of the upper Midwest presents with a red, expanding rash that has a clear center, along with flu-like symptoms such as fever, fatigue, headache, and muscle aches. What is the most likely diagnosis?",
    "answers": [
      "Rocky Mountain spotted fever",
      "Lyme disease",
      "Ehrlichiosis",
      "Babesiosis"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.cdc.gov/lyme/signs_symptoms/index.html",
    "rationale": "The patient presents with a characteristic 'bull's-eye' rash (erythema migrans) and flu-like symptoms, which are indicative of the first stage of Lyme disease. Lyme disease is transmitted by ticks, which are prevalent in wooded areas of the upper Midwest. Rocky Mountain spotted fever, ehrlichiosis, and babesiosis are other tick-borne illnesses but have different symptom profiles and geographic prevalence. The 'bull's-eye' rash is a key indicator of Lyme disease.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following is not a risk factor for colon cancer?",
    "answers": [
      "Cholecystectomy",
      "Family history of polyps",
      "Race",
      "Hematochezia"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.cancer.org/cancer/types/colon-rectal-cancer/causes-risks-prevention/risk-factors.html",
    "rationale": "Hematochezia, which is the presence of blood in stool, is a symptom of colon cancer rather than a risk factor. Cholecystectomy, family history of polyps, and race are all established risk factors for developing colon cancer.",
    "bookmarked": 0,
    "Domain": "Plan",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient diagnosed with emphysema is seeking treatment for his hight blood pressure. The NP should advise him to avoid which antihypertensive?",
    "answers": [
      "Calcium Channel blockers",
      "Beta-blockers",
      "Thiazides",
      "Angiotensin-converting enzyme (ACE)"
    ],
    "correct": 1,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10377707/",
    "rationale": "Beta-blockers can potentially exacerbate respiratory symptoms in patients with emphysema by causing constriction of the airways. This effect is particularly concerning in patients with underlying obstructive pulmonary diseases. Other classes of antihypertensives do not generally have this effect. Non-selective beta blockers act on beta 1 and beta 2 receptors. We have beta 1 receptors in the heart and beta 2 in the lungs (easy way to remember is that we have 1 heart and 2 lungs). When beta 1 receptors are blocked, it affects the heart by slowing down the heart rate. When beta 2 receptors are blocked, it causes vasoconstriction/vasospasms in the lungs.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Cardiovascular",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the preferred treatment for Rocky Mountain Spotted Fever?",
    "answers": [
      "Amoxicillin",
      "Cipro",
      "Doxycycline",
      "Azithromycin "
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.cdc.gov/rocky-mountain-spotted-fever/hcp/clinical-care/",
    "rationale": "Doxycycline is the preferred treatment for Rocky Mountain Spotted Fever and all other tickborne rickettsial diseases. Use of antibiotics other than doxycycline is associated with a higher risk of fatal outcome from RMSF. Presumptive treatment with doxycycline is recommended in patients of all ages, including children <8 years of age",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Integumentary(Derm)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient presents with red, watery eyes, and a clear discharge. The patient also reports a recent upper respiratory infection with symptoms such as a sore throat and runny nose. There is no significant pain or itching. The symptoms started three days ago and have been gradually spreading to the other eye. Based on the symptoms, what type of conjunctivitis is most likely?",
    "answers": [
      "Allergic",
      "Bacterial",
      "Viral",
      "Fungal"
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.healthdirect.gov.au/conjunctivitis",
    "rationale": "The patient's symptoms of red, watery eyes with clear discharge and a recent upper respiratory infection suggest viral conjunctivitis. Viral conjunctivitis is commonly associated with upper respiratory infections and presents with watery discharge and redness. The absence of significant pain and itching helps differentiate it from bacterial conjunctivitis, which typically has thick, purulent discharge, and allergic conjunctivitis, which involves significant itching. Fungal conjunctivitis is rare and usually occurs in individuals with a compromised immune system.",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult (26-65)",
    "Subject": "Head_Eyes&ENT",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following is a sign for acute pancreatitis?",
    "answers": [
      "Murphy’s",
      "Appley’s",
      "Grey-Turner",
      "Battle "
    ],
    "correct": 2,
    "userChoice": -1,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK534296",
    "rationale": "Grey-Turner sign is characterized by bruising or a bluish discoloration on the flanks (the sides of the body between the ribs and the hips). It indicates retroperitoneal hemorrhage, which can occur in conditions such as acute pancreatitis, trauma, or ruptured ectopic pregnancy. This sign suggests severe internal bleeding and requires prompt medical evaluation and intervention.<ul><li>Murphy&rsquo;s is for cholelithiasis.</li><li>Appley&rsquo;s is for meniscus.</li><li>Battle indicates skull fracture.</li></ul>",
    "bookmarked": 0,
    "Domain": "Diagnose",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the preferred treatment for unknown Chlamydia and positive Gonorrhea?",
    "answers": [
      "Azithromycin and Ceftriaxone",
      "Augmentin and Azithromycin",
      "Ceftriaxone and Augmentin",
      "Azithromycin and Doxycycline "
    ],
    "correct": 0,
    "userChoice": -1,
    "source": "https://www.aafp.org/pubs/afp/issues/2022/0400/p388.html",
    "rationale": "The combination of Azithromycin and Ceftriaxone covers both pathogens effectively. Azithromycin is used to treat Chlamydia and provides additional coverage against possible co-infection. Ceftriaxone is highly effective against Gonorrhea. Augmentin is not recommended for treating either Gonorrhea or Chlamydia, and Doxycycline, while effective against Chlamydia, is typically reserved for alternative treatments or in different combinations.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Adult (19-26)",
    "Subject": "Reproductive",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The nurse practitioner will treat gastroesophageal reflux disease (GERD) with proton pump inhibitors (PPI). Which supplement should the patient take?",
    "answers": [
      "Vitamin C",
      "Vitamin D",
      "Folate",
      "Vitamin B12"
    ],
    "correct": 3,
    "userChoice": -1,
    "source": "https://www.amjmedsci.com/article/S0002-9629(22)00313-5/abstract",
    "rationale": "Long-term use of proton pump inhibitors (PPIs) for the treatment of GERD can lead to decreased absorption of Vitamin B12. This is because PPIs reduce stomach acid, which is necessary for the absorption of Vitamin B12. Therefore, patients on long-term PPI therapy may need to take a Vitamin B12 supplement to prevent deficiency. Vitamin C, Vitamin D, and Folate are not directly affected by PPI use.",
    "bookmarked": 0,
    "Domain": "Implement",
    "Age Group": "Older Adult and Elderly",
    "Subject": "Gastrointestinal",
    "Pharmacology?": "TRUE"
  }
];
