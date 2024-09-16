let quizType = "question-bank";
let questionList = [
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5421350",
    "rationale": "The most likely diagnosis for this 12-year-old boy is Slipped Capital Femoral Epiphysis (SCFE), common in adolescents. It is characterized by a displacement of the femoral head at the growth plate, typically presenting with hip or groin pain and a limp. The X-ray showing widening of the physis and displacement of the femoral head confirms SCFE. Limited hip movement and pain also support this diagnosis. Immediate surgical intervention is needed to stabilize the hip and prevent complications.",
    "Age Group": "Child (6-12)",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK534296",
    "rationale": "Grey-Turner sign is characterized by bruising or a bluish discoloration on the flanks (the sides of the body between the ribs and the hips). It indicates retroperitoneal hemorrhage, which can occur in conditions such as acute pancreatitis, trauma, or ruptured ectopic pregnancy. This sign suggests severe internal bleeding and requires prompt medical evaluation and intervention.<ul><li>Murphy&rsquo;s is for cholelithiasis.</li><li>Appley&rsquo;s is for meniscus.</li><li>Battle indicates skull fracture.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 52-year-old man with a long history of alcohol dependence presents to the clinic complaining of fatigue and shortness of breath. His physical examination reveals pale conjunctiva and a smooth tongue. Laboratory tests show macrocytic anemia. What is the most likely cause of this anemia?",
    "answers": [
      "Folate deficiency",
      "Iron Deficiency",
      "Aplastic anemia",
      "Sickle cell disease"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.hematology.org/education/patients/anemia",
    "rationale": "In patients with alcohol dependence, folate deficiency is the most common cause of macrocytic anemia. Alcohol interferes with folate absorption and metabolism, leading to decreased levels of this essential vitamin, which is required for proper DNA synthesis and red blood cell formation. The clinical presentation of fatigue, shortness of breath, and specific findings such as pale conjunctiva and a smooth tongue (glossitis) further support a diagnosis of folate deficiency anemia.<ul><li>A) Iron deficiency typically causes microcytic anemia, not macrocytic, and is less likely in this scenario without evidence of bleeding or malnutrition.</li><li>C) Aplastic anemia, which involves the failure of bone marrow to produce blood cells, is a possible but less likely diagnosis without evidence of pancytopenia (reduction in red and white blood cells and platelets).</li><li>D) Sickle cell disease is a genetic disorder causing abnormally shaped red blood cells and is not associated with alcohol use or macrocytosis.</li></ul>",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/tb/about/",
    "rationale": "A positive sputum smear for acid-fast bacilli is diagnostic of tuberculosis (TB). Mycobacterium tuberculosis, the bacteria causing TB, is an acid-fast bacillus. The acid-fast staining technique highlights these bacteria, confirming their presence in the sputum and thus diagnosing TB.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.cancer.org/cancer/types/testicular-cancer/about/key-statistics.html",
    "rationale": "Testicular cancer is the most common neoplasm in men aged 20-35 due to the higher prevalence of germ cell tumors within this age group. These tumors, which originate from the cells responsible for producing sperm, tend to develop during early adulthood. The exact cause is not well understood, but factors such as genetic predisposition, undescended testicles (cryptorchidism), and certain inherited conditions increase the risk. Early detection and treatment are crucial for favorable outcomes, as testicular cancer is highly responsive to therapy, especially when diagnosed early.<ul><li>A) An <strong>ultrasound</strong> is the preferred initial imaging method for diagnosing testicular cancer due to its specificity, safety, and accessibility.</li><li>C) Patients typically discover a painless testicular <strong>nodule</strong>.</li><li>D) The 5-year survival rate for most testicular cancer after orchiectomy and therapy is <strong>more than 90%</strong>.</li></ul>",
    "Age Group": "Adult (19-26)",
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
    "bookmarked": 0,
    "source": "https://en.wikipedia.org/wiki/Sensitivity_and_specificity",
    "rationale": "Sensitivity refers to a test’s ability to correctly identify individuals who have the disease (true positives). A test with high sensitivity is effective at detecting the disease, meaning it minimizes false negatives. Low specificity indicates that the test may incorrectly identify individuals without the disease as positive (false positives), so it is not as effective at ruling out those who do not have the disease.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK535454",
    "rationale": "Cipro (ciprofloxacin) is recommended to treat this complicated UTI case of pyelonephritis because it is a broad-spectrum antibiotic effective against the common gram-negative bacteria that cause urinary tract infections, including kidney infections. Doxy and amoxicillin have inferior efficacy against the gram-negative bacteria causing the infection, and do not achieve cipro's higher concentrations in the kidneys. Bactrim is a sulfa drug which the patient is allergic to.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.asthma-breathe.com/clinical-care-toolkit/current-guideline-for-asthma/",
    "rationale": "The patient should already be on a SABA. If LABA is not enough, the next drug of choice is LAMA and ICS comes after.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.clinicaleducation.org/wp-content/uploads/MurphysTest.pdf",
    "rationale": "Murphy sign, which involves the patient experiencing pain upon palpation of the right upper quadrant during inspiration, is used to assess for cholecystitis because it indicates pain and tenderness in the gallbladder area, suggesting inflammation of the gallbladder. An abdominal ultrasound is the preferred initial imaging test to assess for cholecystitis, as it can effectively identify gallstones, gallbladder wall thickening, and other signs of inflammation. McMurray test is for meniscal tear, McFadden does not exist.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://cystic-fibrosis.com/bronchiectasis",
    "rationale": "Bronchiectasis is a common complication in patients with cystic fibrosis due to the chronic obstruction and infection of the airways, leading to permanent dilation and damage of the bronchial walls. This results in recurrent respiratory infections and chronic productive cough, which are hallmark symptoms in cystic fibrosis patients.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.cancer.org/cancer/types/colon-rectal-cancer/causes-risks-prevention/risk-factors.html",
    "rationale": "Hematochezia, which is the presence of blood in stool, is a symptom of colon cancer rather than a risk factor. Cholecystectomy, family history of polyps, and race are all established risk factors for developing colon cancer.",
    "Age Group": "Older Adult and Elderly",
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
    "bookmarked": 0,
    "source": "https://www.cancer.org/cancer/types/colon-rectal-cancer/causes-risks-prevention/risk-factors.html",
    "rationale": "Advanced age is a significant risk factor for colon cancer. The risk of developing colon cancer increases as a person gets older. The other options are possible symptons rather than risk factors.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4457377/",
    "rationale": "Escherichia coli (E. coli) is the most common organism responsible for urinary tract infections (UTIs). It accounts for the majority of both uncomplicated and complicated UTI cases. Other organisms like Staphylococcus aureus, Klebsiella pneumoniae, and Pseudomonas aeruginosa can also cause UTIs but are less common.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2015/1001/p622.html",
    "rationale": "Hydrochlorothiazide, a thiazide diuretic, should be avoided in patients with gout as it can increase uric acid levels, potentially worsening the condition. Other antihypertensive medications like amlodipine, losartan, and lisinopril do not have the same effect on uric acid levels and are safer options for patients with gout.",
    "Age Group": "Older Adult and Elderly",
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
    "bookmarked": 0,
    "source": "https://www.sciencedirect.com/topics/medicine-and-dentistry/rovsings-sign",
    "rationale": "A positive Rovsing sign, pain in the RLQ on palpation of the LLQ, is a sign of appendicitis as well as tenderness over McBurney’s point. The McMurray test helps identify meniscal tears of the knee. Allen’s test is used to evaluate arterial blood flow of the hand.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.medleague.com/diagnosis-of-alcoholism/",
    "rationale": "AST (aspartate aminotransferase) and ALT (alanine aminotransferase) are liver enzymes that are commonly elevated in individuals with alcoholism. Chronic alcohol consumption can lead to liver inflammation and damage, resulting in the release of these enzymes into the bloodstream. Elevated levels of AST and ALT are key indicators of liver injury and are used to help diagnose and monitor the progression of liver disease related to alcohol use. Ratio of 2:1 with AST/ALT is associated with alcohol abuse. LOW protein/albumin levels indicates the patient’s poor nutritional status.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://jamanetwork.com/journals/jama/fullarticle/182810",
    "rationale": "The incorrect letter is E as it stands for EARLY or morning EYE-opener, as in needing a drink early in the morning.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/arthritis/types/rheumatoid-arthritis.html",
    "rationale": "Rheumatoid arthritis is characterized by joint pain, swelling, and stiffness, particularly in the morning or after periods of inactivity. These symptoms tend to improve with movement. Unlike osteoarthritis, which is due to wear and tear on the joints, rheumatoid arthritis is an autoimmune condition where the body's immune system attacks the joint lining.",
    "Age Group": "Older Adult and Elderly",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3372150/",
    "rationale": "The nucleic acid amplification test (NAAT) is the most sensitive and specific test for diagnosing gonorrhea and chlamydia. It detects the genetic material of the bacteria, providing highly accurate results. Urinalysis can suggest an infection but is not specific for gonorrhea and chlamydia. Culture and Gram stain are less sensitive.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diagnostics/23464-fetal-heart-rate-monitoring",
    "rationale": "Fetal heart tone auscultated by a health provider is the only positive sign. Goodell's sign and positive hCG are probable, while nausea and vomiting are presumptive.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/placental-abruption/symptoms-causes/syc-20376458",
    "rationale": "Placental abruption is a serious condition where the placenta detaches from the uterine wall before delivery, which can compromise the blood and oxygen supply to the fetus and cause severe maternal hemorrhage. Immediate evaluation and management in an emergency department are crucial to stabilize both the mother and the fetus, and to determine the need for urgent delivery.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK534115/",
    "rationale": "Haloperidol (Haldol) is a first-generation antipsychotic that has the potential to produce extrapyramidal effects. Example of extrapyramidal effects include inability to sit still, involuntary muscle contractions, tremors, stiff muscles, and involuntary facial movements.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.hopkinsmedicine.org/health/conditions-and-diseases/bells-palsy",
    "rationale": "Bell's palsy is an unexplained episode of facial muscle weakness or paralysis. It begins suddenly and worsens over 48 hours. This condition results from damage to the facial nerve (the 7th cranial nerve). Pain and discomfort usually occur on one side of the face or head.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6822824/",
    "rationale": "Increase: elevated TSH and decreased T4 is hypothyroidism. If the patient is on levothyroxine, the drug needs to be increased to increase T4 level.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Mr Smith complains of headaches that wake him up in the middle of the night with intense pain around the right eye on one side of the head. He tells you the headaches last a short period of time but happen many times in a day. What is the best treatment for this type of headache?",
    "answers": [
      "Acetaminophen",
      "Caffeine",
      "Phenytoin (Dilantin)",
      "100% oxygen via mask"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/cluster-headache/diagnosis-treatment/drc-20352084",
    "rationale": "The headache described is a cluster headache which usually awakens the patient at night and is felt in or around one eye, lasts a few minutes and happens multiple times in a day. 1st line treatment is 100% O2 via mask.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/skin-cancer/statistics/index.html",
    "rationale": "Skin cancer, specifically Basal Cell carcinoma, is the most common type of cancer for both men and women. The most common death causing cancer for both men and women is lung cancer.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/conjunctivitis?sso=y",
    "rationale": "The symptoms described—itching, burning, and stringy discharge—are indicative of <u>allergic</u> conjunctivitis; <u>bacterial</u> is purulent and <u>viral</u> is watery. The best treatment choice for allergic conjunctivitis is topical antihistamines or mast cell stabilizers, which help to alleviate allergic symptoms by reducing inflammation and controlling allergic reactions. Moxifloxacin, trimethoprim/polymyxin B, and gentamicin are antibiotics and would be appropriate for bacterial conjunctivitis, not allergic conjunctivitis.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.healthdirect.gov.au/conjunctivitis",
    "rationale": "The patient's symptoms of red eyes, thick yellow-green discharge, and eyelids that are stuck together upon waking are indicative of bacterial conjunctivitis. Bacterial conjunctivitis is characterized by purulent (pus-like) discharge, which can cause the eyelids to stick together. The lack of itching helps differentiate it from allergic conjunctivitis, which typically involves significant itching. Viral conjunctivitis usually presents with watery discharge rather than thick discharge and is often associated with other viral symptoms like a cold or sore throat. Fungal conjunctivitis is rare and not typically associated with such symptoms.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.healthdirect.gov.au/conjunctivitis",
    "rationale": "The patient's symptoms of red, watery eyes with clear discharge and a recent upper respiratory infection suggest viral conjunctivitis. Viral conjunctivitis is commonly associated with upper respiratory infections and presents with watery discharge and redness. The absence of significant pain and itching helps differentiate it from bacterial conjunctivitis, which typically has thick, purulent discharge, and allergic conjunctivitis, which involves significant itching. Fungal conjunctivitis is rare and usually occurs in individuals with a compromised immune system.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://ginasthma.org/pocket-guide-for-asthma-management-and-prevention/",
    "rationale": "The most recent GINA guidelines recommend low dose inhaled corticosteroids (ICS) combined with a short-acting beta-agonist (SABA) as needed for the first-line treatment of asthma. This approach helps to control inflammation and manage acute symptoms.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://medlineplus.gov/ency/article/003761.htm",
    "rationale": "A potassium hydroxide (KOH) prep is a diagnostic test used to identify fungal infections of the skin. The KOH solution dissolves keratin and other cellular material in a sample, making fungal elements such as hyphae or yeast cells more visible under a microscope. It is not used for diagnosing viral, bacterial, or protozoa infections.",
    "Age Group": "Adult (19-26)",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK563187/",
    "rationale": "A positive Romberg's test, where the patient sways significantly or falls when their eyes are closed, indicates sensory ataxia. This suggests a problem with proprioception or the body's ability to sense its position in space, often due to peripheral neuropathy or dorsal column dysfunction. Cerebellar ataxia usually presents with unsteadiness even with eyes open. Vestibular dysfunction might also cause unsteadiness, but it is less commonly isolated to a positive Romberg's test without other symptoms.",
    "Age Group": "Older Adult and Elderly",
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/shingles/index.html",
    "rationale": "Varicella zoster virus is shingle’s causative organism. HSV-1 -usually causes blisters around the mouth and lips. HSV-2 - usually causes blisters around the genitals and rectum. Cytomegalovirus (CMV) is a common virus that is usually harmless. Sometimes it causes problems in babies if you get it during pregnancy (congenital CMV).",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.aad.org/public/diseases/skin-cancer/find/at-risk/abcdes",
    "rationale": "<ol style=\"list-style-type: upper-alpha;\"><li>Asymmetry: One half of the spot is unlike the other half.</li><li>Border: The spot has an irregular, scalloped, or poorly defined border.</li><li>Color: The spot has varying colors from one area to the next, such as shades of tan, brown or black, or areas of white, red, or blue.</li><li>Diameter: While melanomas are usually greater than 6 millimeters, or about the size of a pencil eraser, when diagnosed, they can be smaller.</li><li>Evolving: The spot looks different from the rest or is changing in size, shape, or color.</li></ol>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/rocky-mountain-spotted-fever/hcp/clinical-care/",
    "rationale": "Doxycycline is the preferred treatment for Rocky Mountain Spotted Fever and all other tickborne rickettsial diseases. Use of antibiotics other than doxycycline is associated with a higher risk of fatal outcome from RMSF. Presumptive treatment with doxycycline is recommended in patients of all ages, including children <8 years of age",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.aad.org/public/diseases/psoriasis/what/symptoms",
    "rationale": "The presence of red, itchy, and scaly patches with silvery scales on the knees and elbows is characteristic of psoriasis. Psoriasis is a chronic autoimmune condition that causes rapid skin cell turnover, leading to thickened, scaly patches. Eczema typically presents with more diffuse itching and inflammation without the distinctive silvery scales. Erythematous plaques are a general description of red patches and can occur in various conditions, but the specific presentation of silvery scales points to psoriasis. Erysipelas is a bacterial skin infection that usually presents with sharply demarcated, raised, and warm red areas, not scaly patches.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/poxvirus/molluscum-contagiosum/index.html",
    "rationale": "Molluscum contagiosum is characterized by multiple small, flesh-colored, dome-shaped papules with central umbilication. It is a viral infection caused by the molluscum contagiosum virus (MCV), which is part of the poxvirus family. The presence of central umbilication and the described appearance help differentiate it from other conditions like chickenpox, which typically presents with more widespread, vesicular lesions; warts, which are usually rough and raised without central umbilication; and impetigo, which often presents with honey-colored crusts.",
    "Age Group": "Child (6-12)",
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
    "bookmarked": 0,
    "source": "https://www.aad.org/public/diseases/a-z/molluscum-contagiosum-treatment",
    "rationale": "Molluscum contagiosum is a viral infection caused by the poxvirus. It is self-limiting, therefore treatment is symptomatic management. Key characteristics include flesh-colored bumps on the skin with an indurated center. If these are found on children near private parts, suspect sexual abuse.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/cellulitis.html",
    "rationale": "The treatment of choice for non-purulent cellulitis is typically an antibiotic that is effective against streptococci and staphylococci, such as cefalexin (Keflex). Non-purulent cellulitis is usually caused by beta-hemolytic streptococci and Staphylococcus aureus, and cefalexin is effective against these pathogens. Clindamycin and trimethoprim/sulfamethoxazole (Bactrim) can be used in certain cases, but are more often reserved for patients with a history of MRSA or penicillin allergy. Hydrocortisone is not an appropriate treatment for bacterial infections such as cellulitis.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6802803/",
    "rationale": "Hydrochlorothiazide is contraindicated in certain populations due to its side effects. It can increase blood glucose levels (Hyperglycemia), making it less suitable for diabetics. It can also increase uric acid levels (hyperuricemia), which can exacerbate gout. Additionally, it can have adverse effects on lipid profiles, potentially worsening hyperlipidemia. Therefore, it is contraindicated for individuals with diabetes, gout, and hyperlipidemia.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/drugs-supplements/sumatriptan-oral-route/description/drg-20074356",
    "rationale": "Sumatriptan is a specific medication for treating acute migraine headaches. It is a serotonin receptor agonist (triptan) that works by constricting blood vessels and reducing inflammation, which helps to relieve migraine symptoms. Ibuprofen and acetaminophen may provide some relief for mild migraines but are generally less effective for severe, acute migraine attacks. Amitriptyline can be used as a preventative treatment for migraines but is not suitable for acute treatment.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 55-year-old patient presents with sudden, severe, stabbing pain on one side of the face. The pain is described as electric shock-like, lasts for a few seconds, and can be triggered by everyday activities such as chewing, speaking, or touching the face. The episodes have been occurring more frequently over the past few weeks. What is the most likely diagnosis?",
    "answers": [
      "Cluster headaches",
      "Migraine headaches",
      "Trigeminal neuralgia, aka tic douloureux",
      "Temporomandibular joint (TMJ) disorder"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/trigeminal-neuralgia/symptoms-causes/syc-20353344",
    "rationale": "Trigeminal neuralgia is characterized by sudden, severe, stabbing pain on one side of the face that is often described as electric shock-like. The pain can be triggered by everyday activities such as chewing, speaking, or touching the face. Cluster headaches and migraine headaches do not typically present with this type of brief, triggered pain, and TMJ disorder usually involves pain in the jaw and surrounding muscles rather than sharp, electric shock-like pain.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/drugs-supplements/carbamazepine-oral-route/side-effects/drg-20062739",
    "rationale": "Trigeminal neuralgia, is effectively treated with anticonvulsants such as carbamazepine (Tegretol), since it reduces the nerve activity that causes the severe facial pain. Gabapentin may be used as a second-line treatment, while amitriptyline and desipramine are typically used for other types of neuropathic pain but are not the first choice for trigeminal neuralgia.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://training.seer.cancer.gov/brain/tumors/anatomy/nerves.html",
    "rationale": "Vestibulocochlear VIII is associated with hearing, hence the name “cochlea” which is a part inside the ear.",
    "Age Group": "Older Adult and Elderly",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/gout-diet/art-20048524",
    "rationale": "Taking a Vitamin C supplement can help reduce uric acid levels, which may decrease the risk of gout attacks. Patients with gout should avoid foods high in purines, such as organ meats and anchovies, as these can increase uric acid levels. Cherries are beneficial for gout as they have been shown to reduce uric acid levels and lower the risk of gout attacks.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.amjmedsci.com/article/S0002-9629(22)00313-5/abstract",
    "rationale": "Long-term use of proton pump inhibitors (PPIs) for the treatment of GERD can lead to decreased absorption of Vitamin B12. This is because PPIs reduce stomach acid, which is necessary for the absorption of Vitamin B12. Therefore, patients on long-term PPI therapy may need to take a Vitamin B12 supplement to prevent deficiency. Vitamin C, Vitamin D, and Folate are not directly affected by PPI use.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/pneumonia/atypical/mycoplasma/hcp/antibiotic-treatment-resistance.html",
    "rationale": "Azithromycin is recommended for the treatment of mycoplasma pneumonia, especially in otherwise healthy young adults. Mycoplasma pneumoniae lacks a cell wall, making antibiotics that target cell wall synthesis, such as penicillin, ineffective. Fluoroquinolones and tetracyclines are alternative options, but azithromycin, a <b>macrolide</b>, is typically preferred due to its efficacy and favorable side effect profile.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.aao.org/eye-health/diseases/what-is-blepharitis",
    "rationale": "Blepharitis is characterized by inflammation of the eyelids, leading to symptoms such as red, swollen eyelids, a gritty sensation in the eyes, crusting at the base of the eyelashes, dry eyes, and itching. These symptoms are distinct from conjunctivitis, which typically involves conjunctival redness and discharge, glaucoma, which involves increased intraocular pressure and vision changes, and uveitis, which involves inflammation of the uvea and can cause eye pain, redness, and vision changes.",
    "Age Group": "Older Adult and Elderly",
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
    "bookmarked": 0,
    "source": "https://www.aao.org/eye-health/diseases/what-is-blepharitis",
    "rationale": "The initial treatment for blepharitis typically involves conservative measures such as warm compresses and eyelid hygiene. These methods help to reduce inflammation and remove crusts and debris from the eyelids. Topical antibiotics may be used if there is a secondary bacterial infection, but they are not the first-line treatment. Systemic corticosteroids are generally not indicated for blepharitis, and while artificial tears can help alleviate dry eye symptoms, they do not address the underlying inflammation and debris associated with blepharitis.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
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
    "bookmarked": 0,
    "source": "https://www.enthealth.org/conditions/cholesteatoma/",
    "rationale": "Cholesteatoma is the presence of a white mass behind the tympanic membrane (the middle ear). May be asymptomatic or include recurrent purulent otorrhea. If left untreated it can cause chronic inflammation and erosion of bone and the ossicles, and hearing loss.<br>Acoustic neuroma typically presents with unilateral hearing loss and tinnitus but not with purulent otorrhea.<br>Mastoiditis with postauricular pain, swelling, and erythema.<br>Tympanosclerosis the formation of scar tissue on the tympanic membrane, which can lead to hearing loss.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.parkinson.org/understanding-parkinsons/movement-symptoms/tremor",
    "rationale": "The main difference between Parkinson’s tremor and most other types of tremor is that resting tremor is most common in Parkinson's disease (PD). Parkinson's tremor typically occurs when the muscles are at rest and decreases with voluntary movement. In contrast, essential tremor and other conditions are usually characterized by 'action tremor,' which tends to lessen at rest and increase during activities such as making a phone call or taking a drink. Cerebellar tremor is associated with coordination issues, and physiologic tremor is a normal, often imperceptible tremor that can be exacerbated by certain conditions.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://www.hematology.org/education/patients/blood-cancers/leukemia",
    "rationale": "The patient's symptoms of bleeding gums and prolonged bleeding from minor cuts, along with a significantly low platelet count (150k to 450k is normal) and an extremely elevated WBC count (4k to 11k is normal), are highly suggestive of acute leukemia. Note that low platelet can have multiple causes we suspect leukemia when in conjuction with the other symptons and results. Acute leukemia often presents markedly elevated WBC count due to their rapid proliferation.<br>Drug-induced thrombocytopenia and idiopathic thrombocytopenic purpura (ITP) typically do not present with such high WBC counts, and hemolytic anemia primarily affects red blood cells rather than white blood cells and platelets.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The leading cause of CAP is?",
    "answers": [
      "Mycoplasma pneumoniae",
      "Haemophilus influenzae",
      "Moraxella catarrhalis",
      "Streptococcus pneumoniae"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7147208/",
    "rationale": "Streptococcus pneumoniae is the leading cause of CAP. Other common bacterial causes include Haemophilus influenzae as well as atypical bacteria (Mycoplasma pneumoniae, Chlamydia pneumoniae, and Legionella species. Community-acquired pneumonia (CAP) is the sixth most common cause of death in the United States and the leading cause of death from infectious diseases. It is associated with significant morbidity and mortality and poses a major economic burden to the healthcare system.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/syc-20350772",
    "rationale": "Osteoarthritis (OA) is a degenerative joint disease caused by 'wear and tear' on the joints, leading to the breakdown of cartilage. Rheumatoid arthritis (RA) is an autoimmune disease where the immune system attacks the joints, causing inflammation. Corticosteroids are prescribed to alleviate symptoms of RA due to their anti-inflammatory properties, while Acetaminophen is commonly used to manage pain in OA without addressing inflammation.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.lung.org/lung-health-diseases/lung-disease-lookup/bronchitis/symptoms-diagnosis-treatment",
    "rationale": "The first-line treatment for acute bronchitis is supportive care, including rest and hydration because most cases go away on their own. Most cases are caused by viral infections, so antibiotics are not effective. Inhaled corticosteroids are not typically used unless there is an underlying chronic condition like asthma. Bronchodilators may be used if there is significant wheezing, but they are not the primary treatment.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/lyme/signs_symptoms/index.html",
    "rationale": "The patient presents with a characteristic 'bull's-eye' rash (erythema migrans) and flu-like symptoms, which are indicative of the first stage of Lyme disease. Lyme disease is transmitted by ticks, which are prevalent in wooded areas of the upper Midwest. Rocky Mountain spotted fever, ehrlichiosis, and babesiosis are other tick-borne illnesses but have different symptom profiles and geographic prevalence. The 'bull's-eye' rash is a key indicator of Lyme disease.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/lyme/signs_symptoms/rashes.html",
    "rationale": "Erythema migrans is a red, expanding rash that often has a clear center, giving it a 'bull's-eye' appearance. It is commonly associated with Lyme disease and is a key early indicator of the infection.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8858590",
    "rationale": "Vitamin B12 deficiency can lead to peripheral neuropathy because B12 is essential for the maintenance of the myelin sheath that surrounds and protects nerve fibers. A deficiency can cause demyelination, leading to nerve damage and symptoms such as numbness, tingling, and weakness. Folate anemia, thalassemia, and iron deficiency anemia do not typically cause peripheral neuropathy.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "NSAIDs may ____ the effects of thiazides, making blood pressure management with thiazides ____ effective.",
    "answers": [
      "enhance, less",
      "inhibit, less",
      "enhance, more",
      "inhibit, more"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.amjmed.com/article/0002-9343(91)90485-G/abstract",
    "rationale": "NSAIDs can inhibit the blood pressure-lowering effects of diuretics by reducing the natriuretic and antihypertensive actionss. This interaction can lead to less effective blood pressure management in patients using both medications. Therefore, it is important to monitor blood pressure closely and consider alternative pain management strategies for those patients.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm",
    "rationale": "The preferred treatment for Chlamydia, according to the CDC, is doxycycline. The recommended regimen is doxycycline 100 mg taken twice daily for 7 days. Azithromycin is an alternative treatment and is effective as well, typically given as a single 1-gram dose. Amoxicillin and ciprofloxacin are not recommended as first-line treatments for Chlamydia.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.sciencedirect.com/topics/medicine-and-dentistry/psoas-sign",
    "rationale": "The psoas sign is used to assess for irritation of the psoas muscle, which can occur in cases of appendicitis. It is provoked by having the patient lift their thigh against resistance while supine or by passively extending the hip joint while the patient lies on their contralateral side. Pain elicited during these maneuvers suggests a positive psoas sign, indicating possible appendicitis",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient experiences pain with both the psoas and obturator signs. What diagnosis should the nurse practitioner suspect?",
    "answers": [
      "Kidney stones",
      "Cholecystitis",
      "Appendicitis",
      "Pancreatitis"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2018/0701/p25.html",
    "rationale": "Pain elicited by both the psoas and obturator signs is indicative of irritation in the lower abdomen, commonly associated with appendicitis.",
    "Age Group": "Older Adult and Elderly",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/preeclampsia/diagnosis-treatment/drc-20355751",
    "rationale": "Preeclampsia is characterized by the onset of hypertension and either proteinuria or signs of end-organ dysfunction after 20 weeks of gestation in a previously normotensive woman. In this case, the patient presents with elevated blood pressure (150/95 mmHg) and signs of kidney problems indicated by proteinuria and elevated serum creatinine levels. Gestational hypertension would be considered if there was hypertension without proteinuria or end-organ damage. Chronic hypertension is diagnosed if hypertension was present before pregnancy or before 20 weeks of gestation. Eclampsia is diagnosed if there are seizures in a woman with preeclampsia.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/preeclampsia/diagnosis-treatment/drc-20355751#",
    "rationale": "Medication management is not 1st line tx so a prescription of methyldopa (Aldoment) to control blood pressure is incorrect. The primary treatment for preeclampsia is either to deliver the baby or manage the condition until the best time to deliver the baby.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare",
    "rationale": "Medicare Part A primarily covers inpatient hospital care, skilled nursing facility care, hospice care, and some home health care. It does not cover outpatient physical therapy, which is covered under Medicare Part B. Prescription medications filled at a pharmacy are under Part D. Routine vision exams are not in Part A; these may be covered under Part B or supplemental plans.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html",
    "rationale": "For individuals such as migrant workers who are at higher risk for tuberculosis exposure from their home country, a tuberculin purified protein derivative (PPD) reading of 10mm or greater is considered positive. This is based on guidelines from the CDC, which take into account the increased likelihood of TB exposure in high-risk populations. A positive result indicates the need for further evaluation and possible treatment for TB infection.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/9833-munchausen-syndrome-factitious-disorder-imposed-on-self",
    "rationale": "Munchausen syndrome, now often referred to as Factitious Disorder Imposed on Self, involves a person repeatedly acting as if they have a physical or mental disorder when they are not really sick. This behavior is done to gain attention or sympathy from others. The other conditions listed involve psychological manifestations of distress, but do not involve deliberately faking illness for attention.",
    "Age Group": "Adult (19-26)",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10377707/",
    "rationale": "Beta-blockers can potentially exacerbate respiratory symptoms in patients with emphysema by causing constriction of the airways. This effect is particularly concerning in patients with underlying obstructive pulmonary diseases. Other classes of antihypertensives do not generally have this effect. Non-selective beta blockers act on beta 1 and beta 2 receptors. We have beta 1 receptors in the heart and beta 2 in the lungs (easy way to remember is that we have 1 heart and 2 lungs). When beta 1 receptors are blocked, it affects the heart by slowing down the heart rate. When beta 2 receptors are blocked, it causes vasoconstriction/vasospasms in the lungs.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/4497-gestational-hypertension",
    "rationale": "Edema, or swelling, particularly in the hands and face, is a common finding in pregnancy-induced hypertension (PIH), also known as gestational hypertension. While some swelling is typical in pregnancy, the sudden appearance of severe or atypical edema can be a sign of PIH. The other symptoms listed, such as abdominal cramping, light vaginal bleeding, and dysuria, are less specifically associated with gestational hypertension and are more indicative of other obstetric complications.",
    "Age Group": "Adult (19-26)",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6368429/",
    "rationale": "Pulmonary flow murmur is heard on the left sternal border. Because they are high pitched, they are heard best with the diaphragm of the stethoscope.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/deep-vein-thrombosis/symptoms-causes/syc-20352557",
    "rationale": "Deep vein thrombosis (DVT) is highly likely given the patient's recent surgery, immobility, and symptoms of unilateral leg swelling and pain accompanied by color changes. DVT involves clot formation in deep veins, often of the legs. Peripheral artery disease typically presents with pain during walking, cellulitis with redness and warmth, and lymphedema with painless swelling.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.cdc.gov/blood-clots/testing-diagnosis/",
    "rationale": "Duplex ultrasonography should be the first choice for diagnosing DVT because it is non-invasive, widely available, and highly accurate for detecting blood clots in the veins. Angiogram and contrast venography are more invasive procedures and are not typically used as the initial diagnostic tools. The Ankle-Brachial Index (ABI) is used to diagnose peripheral artery disease, not DVT.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/amenorrhea/symptoms-causes/syc-20369299",
    "rationale": "Secondary amenorrhea is defined as the absence of menstrual periods for three or more consecutive months in a woman who previously had regular menstrual cycles. Primary amenorrhea describes the condition where a female has not started menstruating by age 15. Menopause is the permanent cessation of menstrual periods, typically occurring between the ages of 45 and 55. Dysmenorrhea refers to painful periods, not the absence of periods.",
    "Age Group": "Adult (19-26)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/amenorrhea/symptoms-causes/syc-20369299",
    "rationale": "The initial step in diagnosing secondary amenorrhea should be a pregnancy test, as this is the most common cause of amenorrhea in reproductive-age women. Further testing, like thyroid function tests, prolactin levels, or a pelvic ultrasound, may be needed based on the results of the pregnancy test and other clinical findings.",
    "Age Group": "Adult (19-26)",
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
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK470280",
    "rationale": "II. During the Tanner stage (Pre-adolescent stage) the female patient will develop breast budding, also known as thelarche. In this stage they will also develop areolar hyperplasia.",
    "Age Group": "Adolescent (12-18)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/giant-cell-arteritis/symptoms-causes/syc-20372758",
    "rationale": "Temporal arteritis, aka giant cell arteritis, typically presents in older adults with the symptoms mentioned. These symptoms distinguish it from migraines, which typically involve photophobia and phonophobia, trigeminal neuralgia which primarily involves facial pain without systemic symptoms, and cluster headaches which are characterized by intense, unilateral headache episodes without systemic involvement.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/giant-cell-arteritis/diagnosis-treatment/drc-20372764",
    "rationale": "The main treatment for giant cell arteritis involves long-term use of steroids (6 months), specifically corticosteroids, to reduce artery inflammation and prevent complications such as vision loss. NSAIDs may be used for symptomatic relief but are not sufficient as a primary treatment. Carbamazepine and Gabapentin are used for neuropathic pain and are not effective in treating giant cell arteritis.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/21721-seborrheic-keratosis",
    "rationale": "Seborrheic Keratosis is a common, noncancerous, skin growth characterized by benign, often pigmented, growths that have a 'stuck on' appearance. People tend to get them as they get older. Actinic Keratosis presents as rough, scaly patches due to sun exposure, Melanoma is a serious form of skin cancer with asymmetric, irregular borders and multiple colors, and Psoriasis typically presents with red, scaly plaques that may be itchy or painful.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://www.verywellhealth.com/things-to-know-about-prostate-health-4066015",
    "rationale": "Prostate massage carries some significant risks as it can potentially spread the infection to the bloodstream. Treatment includes NSAIDs and antibiotics, and patient education includes the avoidance of foods that can irritate the bladder including hot peppers, caffeine and alcohol.",
    "Age Group": "Older Adult (26-65)",
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
    "bookmarked": 0,
    "source": "https://www.healthdirect.gov.au/mini-mental-state-examination-mmse#:~:text=GP%20or%20specialist.-,How%20is%20the%20MMSE%20scored%3F,abnormal%2C%20indicating%20possible%20cognitive%20impairment.",
    "rationale": "A score of 3 on the MMSE indicates severe cognitive impairment. The MMSE scores range from 0 to 30, with higher scores indicating better cognitive function. A score between 1-10 is generally considered indicative of severe dementia, distinguishing it from mild and moderate dementia, which are associated with higher scores.",
    "Age Group": "Elderly (65+)",
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
    "bookmarked": 0,
    "source": "https://journalofethics.ama-assn.org/article/ct-scans-diagnosis-appendicitis/2006-03",
    "rationale": "CT is often considered the best imaging for appendicitis due to its high accuracy in detecting the presence of an inflamed appendix as well as any complications such as perforation or abscess. While Ultrasound is used, particularly in pregnant women and children to avoid radiation, CT provides a more detailed view and is preferred in unclear cases. MRI is rarely used due to cost and accessibility, and Abdominal X-rays are not typically effective for diagnosing appendicitis.",
    "Age Group": "Adult (19-26)",
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
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2022/0400/p388.html",
    "rationale": "The combination of Azithromycin and Ceftriaxone covers both pathogens effectively. Azithromycin is used to treat Chlamydia and provides additional coverage against possible co-infection. Ceftriaxone is highly effective against Gonorrhea. Augmentin is not recommended for treating either Gonorrhea or Chlamydia, and Doxycycline, while effective against Chlamydia, is typically reserved for alternative treatments or in different combinations.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "TRUE"
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
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/bacterial-vaginosis/diagnosis-treatment/drc-20352285",
    "rationale": "The presence of clue cells is a key diagnostic criterion for BV, which is characterized by a disruption of the normal vaginal flora. Chlamydia, Trichomonas, and Genital Herpes do not typically present with clue cells; these conditions have different diagnostic criteria and manifestations.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following is required to diagnose COPD?",
    "answers": [
      "Presence of wheezing",
      "History of smoking",
      "Sputum production",
      "Spirometry"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/tests-procedures/spirometry/about/pac-20385201",
    "rationale": "Spirometry, the measurement of FEV (forced expiratory colume), is the most accurate and reliable way to support a diagnosis of COPD. History of tobacco abuse is a risk factor for COPD. Sputum production and wheezing are often observed but do not confirm a diagnosis.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The NP knows not to prescribe this medication for an elderly patient with type 2 diabetes.",
    "answers": [
      "Metformin",
      "Thiazolidinediones",
      "ACE-inhibitors",
      "ARBs"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK532918/",
    "rationale": "Thiazolidinediones can increase chances of heart failure, which is a particular concern in the elderly population who may already have compromised cardiovascular function. Additionally, they are associated with an increased risk of bone fractures, particularly in older adults. Therefore, other antidiabetic agents with a more favorable safety profile in the elderly, such as metformin or ACE inhibitors, are preferred. Metformin is an appropriate medication for the elderly with diabetes because of its proven effectiveness and minimal side effects. ACE-inhibitors and ARBs are also proven to be cardio-protective in diabetic patients.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 70-year-old male presents for an annual exam with no complaints. His blood pressure is 144/88 mmHg, total cholesterol 190 mg/dL, HDL 50 mg/dL, LDL 90 mg/dL, and A1C 6.7%. What is the most appropriate management?",
    "answers": [
      "Prescribe Lisinopril 2.5 and follow up in 1 month",
      "Advise lifestyle modifications, such as the DASH diet and exercise",
      "Prescribe Metformin 500 mg BID and follow up in 1 month",
      "No treatment indications are needed. Follow up in 1 year for an annual exam"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2014/1001/p503.html",
    "rationale": "Parameters for older adults are less strict as physical changes, such as decreased vascular resistance, are expected. Blood pressure parameters for 60 years and up are less than 150/90 and an A1C less than 7%. Lifestyle modifications, are the first-line intervention for both borderline hypertension and prediabetes. However, in this scenario, given the patient's overall stable condition, no immediate pharmacological intervention is required. The best course of action is to reassess in a year, unless symptoms develop or other risk factors arise.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Long-term (6+ weeks) use of a proton-pump inhibitor (PPI) is appropriate when treating:",
    "answers": [
      "Barrett's esophagus",
      "Irritable bowel syndrome",
      "Chronic diarrhea",
      "Celiac disease"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://pathology.jhu.edu/barretts-esophagus/reflux-treatment",
    "rationale": "Long-term use of proton-pump inhibitors (PPIs) is appropriate for Barrett’s esophagus because this condition involves chronic acid reflux, which can lead to esophageal cancer. PPIs reduce acid production, minimizing damage to the esophageal lining and lowering cancer risk. In contrast, conditions like irritable bowel syndrome, chronic diarrhea, and celiac disease (better managed by restricting gluten in the diet) do not benefit from acid suppression, making PPI use inappropriate for these diagnoses.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 66-year-old male reports progressive vision loss over the past few months. He notes that while his peripheral vision is unaffected, his central vision has become increasingly blurry. Which assessment tool is most appropriate to evaluate and support a diagnosis of this condition?",
    "answers": [
      "Snellen chart",
      "Amsler Grid",
      "Tonometry",
      "Flurescein staining"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aao.org/eye-health/tips-prevention/facts-about-amsler-grid-daily-vision-test",
    "rationale": "The Amsler Grid is the most suitable tool for assessing central vision loss, particularly when the patient reports symptoms such as blurry central vision while peripheral vision remains intact. This pattern is indicative of <em>macular degeneration</em>, a condition that affects the macula, the part of the retina responsible for central vision. The Amsler Grid is specifically designed to detect changes in the macula by revealing distortions or missing areas in the grid when viewed by the patient. The Snellen chart assesses overall visual acuity, while tonometry measures intraocular pressure, and fluorescein staining detects corneal abnormalities and foreign objects.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Staff from a nearby nursing facility report that one of their residents has developed new-onset confusion. After performing a complete work-up, you determine that the patient has a urinary tract infection (UTI) based on a positive urinalysis. Which empiric antibiotic is most appropriate for treating this patient’s UTI?",
    "answers": [
      "Amoxicillin",
      "Levofloxacin",
      "Ciprofloxacin",
      "Trimethoprim-Sulfamethoxazole (Bactrim)"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5873814/",
    "rationale": "Since this patient resides in a nursing home and has confusion, <em>this UTI is considered complicated</em>. Ciprofloxacin offers strong coverage against common uropathogens and is often preferred unless contraindicated. It is a broad-spectrum fluoroquinolone antibiotic that is often used as an empiric treatment for complicated UTIs, particularly in older adults, who are more susceptible to resistant organisms. This case requires quick, effective treatment to prevent complications. Amoxicillin can treat UTIs in pregnancy. Trimethoprim-Sulfamethoxazole is used for uncomplicated UTI treatment - resistance rates are higher. Levofloxacin is usually only used for bacterial infections that cannot be treated with safer antibiotics.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 70-year-old white female presents with a new scaly maculopapular rash on her forearm that she describes as pruritic. Which treatment should the nurse practitioner prescribe?",
    "answers": [
      "5-Fluorouracil topical cream",
      "Hydrocoritsone 2.5%",
      "Keflex",
      "Clobetasol topical"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aad.org/public/diseases/skin-cancer/actinic-keratosis-treatment",
    "rationale": "5-FU topical cream is an appropriate treatment for <em>actinic keratosis</em>, a precancerous skin condition often seen in older, fair-skinned individuals with significant sun exposure. 5-FU works by inhibiting DNA synthesis in abnormal keratinocytes, leading to the destruction of these precancerous cells. Hydrocortisone and clobetasol are corticosteroids, which are effective for inflammatory or allergic dermatoses but do not address the underlying risk of malignant transformation in actinic keratosis. Keflex, an oral antibiotic, is not indicated for treating this type of skin lesion.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "During a Weber test, what result would you expect in a patient with sensorineural hearing loss?",
    "answers": [
      "No lateralization.",
      "Sound will lateralize equally to both sides.",
      "Sound will lateralize to the affected ear.",
      "Sound will lateralize to the unaffected ear."
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK526135/",
    "rationale": "In a Weber test, a tuning fork is placed on the midline of the patient’s forehead, and the patient is asked where the sound is heard. In a normal subject, the sound should be heard in the middle and equally on both sides. In cases of <em>sensorineural hearing loss</em>, sound lateralizes to the unaffected ear because the damaged inner ear or auditory nerve on the affected side cannot perceive the sound as well. This is in contrast to <em>conductive hearing loss</em>, where the sound would lateralize to the affected ear due to the reduced perception of external noise, making the tuning fork’s vibrations more prominent on that side.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "When should the nurse practitioner advise a patient who had heart failure to call the clinic for further evaluation?",
    "answers": [
      "More than one bilateral lower leg edema develops.",
      "Chronic cough for more than four weeks.",
      "3 pound weight gain in one day.",
      "Having fatigue with activity."
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.heart.org/en/health-topics/heart-failure/warning-signs-of-heart-failure/managing-heart-failure-symptoms#:~:text=Daily%20weight.,heart%20is%20not%20functioning%20properly.",
    "rationale": "A sudden weight gain of 3+ lbs in one day is a critical warning sign for heart failure patients, indicating potential fluid retention and worsening heart failure. This requires prompt evaluation to adjust treatment and prevent complications, such as pulmonary edema or hospitalization. All other answer choices are considered chronic symptoms of heart failure. The rapid weight gain is a more immediate indicator of fluid overload, which necessitates timely medical intervention to prevent further decompensation.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "An elderly patient presents to review recent lab results showing that his hemoglobin and hematocrit are below the normal range, with normocytic and normochromic red blood cells. What is the most likely diagnosis?",
    "answers": [
      "Iron deficiency anemia.",
      "Folic acid anemia.",
      "Thalassemia.",
      "Anemia of chronic disease."
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/14477-anemia-of-chronic-disease",
    "rationale": "<em>Anemia of chronic disease (ACD)</em> is typically characterized by normocytic (normal-sized) and normochromic (normal-colored) red blood cells, along with decreased hemoglobin and hematocrit levels. It often occurs in elderly patients with underlying chronic conditions, such as inflammatory diseases, infections, or malignancies. This type of anemia results from the body’s impaired iron utilization, reduced red blood cell production, and shortened red cell lifespan due to chronic disease processes. In contrast, <em>IDA</em> usually presents with microcytic (small) and hypochromic (pale) red blood cells, <em>folic acid anemia</em> causes macrocytic (large) red cells, and <em>thalassemia</em> abnormal red blood cell morphology with microcytosis.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "An 80-year-old gentleman is brought to the clinic by his daughter, who reports that his memory is gradually declining, and he no longer recognizes his own home. He is experiencing:",
    "answers": [
      "Aphasia",
      "Apraxia",
      "Agnosia",
      "Amnesia"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.merriam-webster.com/dictionary/agnosia",
    "rationale": "Agnosia is the inability to recognize familiar objects, this condition often occurs in neurodegenerative diseases such as Alzheimer’s disease, where cognitive decline impairs the brain’s ability to process and interpret sensory information correctly.. Aphasia is the inability to express speech. Apraxia is the misuse of objects due to failure to identify them. Amnesia is memory loss.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A raised, colored growth on the conjunctiva identified during a physical exam is most likely:",
    "answers": [
      "Pterygium",
      "Pinguecula",
      "Cataracts",
      "Xanthelasma"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aao.org/eye-health/diseases/pinguecula-pterygium",
    "rationale": "A pinguecula is a raised, yellowish, benign growth on the conjunctiva, typically found on the nasal side of the sclera, near the cornea. It is caused by exposure to sunlight, wind, or dust, and is more common in older adults. Although it may be unsightly, a pinguecula usually does not require treatment unless it causes discomfort or cosmetic concerns.<br>Pterygium is a similar growth that extends onto the cornea, and is triangular. Cataracts are an opacity or clouding of the lens, leading to vision impairment, and xanthelasma refers to yellowish cholesterol deposits on the eyelids, which are unrelated to conjunctival growths.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient presents with a sudden onset of unilateral headache, diplopia, and jaw claudication. The NP should diagnose this condition as:",
    "answers": [
      "Polymyalgia rhemuatica",
      "Rheumatoid arthritis",
      "Cerebrovascular accident",
      "Systemic Lupus Erythematosus"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.niams.nih.gov/health-topics/polymyalgia-rheumatica-giant-cell-arteritis",
    "rationale": "The symptoms described are highly suggestive of giant cell arteritis (temporal arteritis), which is commonly associated with polymyalgia rheumatica. Giant cell arteritis is an inflammatory condition of the blood vessels, particularly the temporal arteries, and can lead to serious complications like vision loss if not promptly treated.<br>Polymyalgia rheumatica often coexists with giant cell arteritis and is characterized by muscle pain and stiffness, particularly in the shoulders and hips. Rheumatoid arthritis is an autoimmune condition affecting joints, but it does not typically present with the acute vascular symptoms described. A cerebrovascular accident (stroke) may cause sudden headache and neurological symptoms but does not typically cause jaw claudication. Systemic lupus erythematosus is a systemic autoimmune disease that can affect many organs but is less likely to cause the specific symptoms seen here.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 65-year-old female complains of joint stiffness that worsens with activity, especially in the evenings. An X-ray reveals joint space narrowing but no swelling of the joints. What is the best first-line treatment for this patient?",
    "answers": [
      "NSAIDs",
      "Referral to a rheumatologist",
      "Methotrexate",
      "Acetaminophen"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2012/0101/p49.html",
    "rationale": "Acetaminophen is recommended as the first-line treatment for <em>osteoarthritis</em>, particularly in elderly patients or those with mild to moderate symptoms. It is preferred initially due to its safety profile, especially in avoiding gastrointestinal, renal, and cardiovascular side effects associated with long-term NSAID use. The first line treatment for <em>RA</em> is NSAIDS and early referral to a rheumatologist. NSAIDs may be considered if acetaminophen is ineffective, but they carry higher risks for adverse effects. Methotrexate is used for inflammatory conditions like rheumatoid arthritis, not osteoarthritis. Referral to a rheumatologist might be necessary if there is uncertainty about the diagnosis or if the condition worsens, but it is not the first step in management.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 55-year-old female asks you about her vaccination status. Her immunization record shows that she has only done her childhood vaccinations. Which vaccinations should you recommend at this time?",
    "answers": [
      "Shingrix, influenza, HPV",
      "Influenza, TDAP, PCV15",
      "PCV15 and shingrix",
      "Td, Shingrix, Influenza"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html",
    "rationale": "<p>For a 55-year-old female, the recommended vaccinations include:</p>\n<ul>\n<li><strong>Td (Tetanus and diphtheria booster):</strong> or TDAP booster every 10 years.</li>\n<li><strong>Shingrix:</strong> A two-dose vaccine for the prevention of shingles, for adults 50 years and older.</li>\n<li><strong>Influenza vaccine:</strong> Annually for all adults, particularly important as age increases.</li>\n</ul>\n<p>HPV vaccination is generally recommended for adults up to age 26, or up to 45 in certain cases. PCV15 (pneumococcal conjugate vaccine) is recommended for adults 65 years and older or those with specific risk factors.</p>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 60-year-old female presents with a gradual onset of pain in the right shoulder that interferes with her sleep and worsens with overhead movements. There is tenderness on palpation and a limited range of motion. You diagnose her with adhesive capsulitis. Which labs would be most important to order today?",
    "answers": [
      "CBC, CMP",
      "TSH, A1C",
      "UA and urine cultures",
      "B12 and folate"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.centerfororthosurgery.com/what-does-diabetes-have-to-do-with-my-frozen-shoulder/",
    "rationale": "Adhesive capsulitis, or “frozen shoulder,” is often associated with underlying conditions such as diabetes mellitus and hypothyroidism. Therefore, checking A1C (to assess for diabetes or glucose control) and TSH (to evaluate thyroid function) is crucial for diagnosis. Identifying and managing these underlying conditions can help address the root cause and influence the treatment plan for adhesive capsulitis. <br>Other lab tests like CBC, CMP, UA, urine cultures, B12, and folate are not directly related to the diagnosis or management of adhesive capsulitis and are less pertinent in this scenario.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "An adult patient presents with rhinorrhea, coryza, fever, headache, and maxillary sinus tenderness for the past 14 days. The patient has a documented severe penicillin allergy. Which antibiotic is most appropriate?",
    "answers": [
      "Augmentin",
      "Keflex",
      "Bactrim",
      "Doxycycline "
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/family-physician/patient-care/clinical-recommendations/all-clinical-recommendations/adult-sinusitis.html",
    "rationale": "Doxycycline is an appropriate choice for treating acute bacterial sinusitis, especially in patients with a severe penicillin allergy. It is well tolerated and provides effective coverage against common bacterial pathogens, including Streptococcus pneumoniae and Haemophilus influenzae. Augmentin (amoxicillin-clavulanate) can treat sinusitis but is contraindicated in patients with penicillin allergies. Keflex (cephalexin) is a first-generation cephalosporin and is generally avoided in those with severe penicillin allergies due to potential cross-reactivity. Bactrim (trimethoprim-sulfamethoxazole) is less effective against certain strains of S. pneumoniae and is not the preferred choice for sinusitis.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which finding is not associated with benign prostate hypertrophy?",
    "answers": [
      "Tender prostate",
      "Overflow incontinence",
      "Smooth, rubbery prostate",
      "Bladder retention"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.hopkinsmedicine.org/health/conditions-and-diseases/benign-prostatic-hyperplasia-bph",
    "rationale": "A tender prostate is not associated with benign prostatic hypertrophy (BPH). BPH typically presents with a smooth, rubbery, and non-tender prostate on digital rectal examination. Overflow incontinence, a smooth, rubbery prostate, and bladder retention are all found with BPH. Prostate tenderness is more commonly associated with conditions like prostatitis, which is an infection or inflammation of the prostate gland.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which physical pulmonology finding is common in the elderly population?",
    "answers": [
      "Incrased lung compliance",
      "Decreased risk of infection",
      "Increased AP diameter",
      "Increase mucus clereance"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9713755/",
    "rationale": "Physical changes in the respiratory system in the elderly include increased AP diameter, increased risk of infection, decreased lung compliance, and decreased mucus clearance due to a reduced cough reflex and diminished cilia.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 69-year-old woman complains of fatigue with most of her daily activities, but not addressed. According to the New York heart Association (NYHA) Functional Classification, which classification of heart failure does this patient fall within?",
    "answers": [
      "Class I",
      "Class II",
      "Class III",
      "Class IV"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.heart.org/en/health-topics/heart-failure/what-is-heart-failure/classes-of-heart-failure",
    "rationale": "Class III of the NYHA Functional Classification is characterized by marked limitation of physical activity. Patients in this class experience fatigue, palpitations, or dyspnea with less-than-ordinary activity, although they are comfortable at rest.<br>Class I indicates no limitation of physical activity, Class II indicates slight limitation with ordinary activity, and Class IV indicates symptoms at rest and an inability to carry on any physical activity without discomfort.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "During a cardiac examination, the nurse practitioner hears a loud diastolic crescendo murmur with a low-pitched quality at the apex of the heart. How should the nurse practitioner document this finding?",
    "answers": [
      "Mitral setnosis",
      "Mitral regurgitation",
      "Aortic stenosis",
      "Aortic regurgitation"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.escardio.org/Journals/E-Journal-of-Cardiology-Practice/Volume-16/Mitral-valve-disease-clinical-features-focusing-on-auscultatory-findings-including-auscultation-of-mitral-valve-prolapse",
    "rationale": "Mitral stenosis produces a diastolic murmur that is often described as a low-pitched, rumbling sound heard best at the apex, particularly in the left lateral decubitus position. Mitral regurgitation (B) produces a systolic murmur, not diastolic, and is heard best at the apex radiating to the axilla. Aortic stenosis (C) results in a systolic murmur typically heard at the right upper sternal border (2nd intercostal space). Aortic regurgitation (D) shows a diastolic murmur but is best heard along the left sternal border, not the apex.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient on long-term warfarin therapy presents with an INR of 9.2 during a routine check. What should the nurse practitioner recommend?",
    "answers": [
      "Increase the current Warfarin dose.",
      "Decrease the current Warfarin dose.",
      "Hold the Warfarin and recheck the INR in 3 days.",
      "Send the patient to the Emergency Department for reversal treatment."
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4653986/",
    "rationale": "An INR of 9.2 is significantly elevated, increasing the risk of bleeding. The recommended approach is to hold the warfarin. If the INR gets above 10, or the patient shows signs of bleeding consider administering vitamin K. However, since the scenario does not mention active bleeding, rechecking the INR in a few days is appropriate. Increasing (A) or decreasing (B) the warfarin dose would be inappropriate given the dangerously high INR. Sending the patient to the ED (D) is warranted if the patient has severe symptoms or active bleeding, but it’s not the first step in this case.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A male patient with a history of hyperlipidemia and tobacco use reports calf pain at rest and numbness in the lower extremities. What additional finding would the nurse practitioner expect with this condition?",
    "answers": [
      "Lower extremity edema",
      "Brownish discoloration in the lower extremities",
      "History of leg trauma",
      "An ankle-brachial index of less than 0.90"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://stanfordmedicine25.stanford.edu/the25/ankle-brachial-index.html#:~:text=The%20Ankle%20Brachial%20Index%20(ABI%20Test)%20is%20an%20important%20way,severity%20of%20peripheral%20vascular%20disease.",
    "rationale": "This patient is presenting with symptoms consistent with peripheral artery disease (PAD), characterized by reduced blood flow to the extremities. An ABI of less than 0.90 is diagnostic for PAD and indicates significant arterial narrowing. Lower extremity edema (A) and Brownish discoloration (B) suggests chronic venous insufficiency rather than arterial disease.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient with a history of long-standing hypertension is being assessed in the office. Which physical manifestation will the nurse practitioner expect to see?",
    "answers": [
      "S4 heart sound",
      "Cotton wool spots",
      "Waist circumference grater than 40 inches",
      "Elevated liver enzymes"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK344",
    "rationale": "An S4 heart sound, is commonly associated with long-standing hypertension. It occurs due to the atria contracting forcefully to overcome a stiffened or non-compliant left ventricle. Cotton wool spots are seen with long-standing diabetes mellitus. Wait circumference greater than 40 inches for men is a risk factor for metabolic syndrome. Elevated liver enzymes are not a direct manifestation of hypertension but may indicate other conditions such as fatty liver disease.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A male patient presents with recurrent facial inflammation, particularly after shaving. On examination, the nurse practitioner observes small clusters of pustules. What is the most appropriate treatment?",
    "answers": [
      "Doxycycline",
      "Mupirocin",
      "Metronidazole",
      "Hydrocortisone"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://dermnetnz.org/topics/mupirocin",
    "rationale": "This presentation suggests the patient may have folliculitis, a bacterial infection of the hair follicles often caused by Staphylococcus aureus. Mupirocin, a topical antibiotic, is effective in treating superficial bacterial skin infections like folliculitis. Doxycycline is an oral antibiotic that might be used for more severe or widespread infections, but topical treatment is generally preferred for localized infections. Metronidazole is typically used for rosacea or infections caused by anaerobic bacteria, which doesn’t match this case. Hydrocortisone is a corticosteroid used for inflammatory skin conditions but does not address the bacterial component of folliculitis.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The NP observes an erythematous, indurated, and clearly demarcated area on the face of an elderly patient. What is the most likely causative agent?",
    "answers": [
      "Staphylococcus aureus",
      "Group B Streptococcus",
      "Group A Streptococcus",
      "Haemophilus Influenzae"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mountsinai.org/health-library/diseases-conditions/erysipelas",
    "rationale": "The condition described suggests erysipelas, a type of superficial cellulitis typically caused by Group A Streptococcus (e.g., Streptococcus pyogenes). Staphylococcus aureus can cause cellulitis, but it usually presents with less sharply defined borders and often includes abscess formation. Group B Streptococcus is more commonly associated with infections in newborns and certain adult populations, such as those with diabetes. Haemophilus influenzae is associated with respiratory infections, and less likely to cause this type of skin infection, especially in the post-vaccine era.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The _____ occurs when bleeding follows the removal of scaly areas in patient with psoriasis.",
    "answers": [
      "Koebner phenomenon",
      "Herald patch",
      "Wichham's striae",
      "Auspitz sign"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.jaad.org/article/S0190-9622(97)70252-4/abstract",
    "rationale": "This sign is characteristic of psoriasis and helps in differentiating it from other skin conditions.<ul><li><strong>Koebner phenomenon</strong> refers to the appearance of new skin lesions at sites of trauma or injury in patients with psoriasis and other skin diseases.</li><li><strong>Herald patch</strong> is the initial lesion seen in pityriasis rosea, not psoriasis.</li><li><strong>Wickham&#39;s striae</strong> are fine, white lines seen on the surface of lichen planus lesions, not typically associated with psoriasis.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The nurse practitioner suspects her patient, who just returned from a camping trip with flu-like symptoms and a red rash with central clearing, has Lyme disease. Which initial diagnostic test should she order?",
    "answers": [
      "ELISA test",
      "Western blot",
      "PCR",
      "Antigen testing with indirect immunofluorescence assay"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mountsinai.org/health-library/tests/lyme-disease-blood-test#:~:text=A%20doctor%20will%20test%20your,for%20up%20to%20a%20month.",
    "rationale": "ELISA test is the initial diagnostic test for Lyme disease. Western blot would confirm a diagnosis of Lyme disease. | The ELISA (Enzyme-Linked Immunosorbent Assay) test detects antibodies against Borrelia burgdorferi, the bacterium responsible for Lyme disease. If the ELISA test is positive or ambiguous, it is typically followed by a Western blot test to confirm the diagnosis. PCR (Polymerase Chain Reaction) and antigen testing with indirect immunofluorescence assay is used for Rocky Mountain Spotted Fever.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The nurse practitioner diagnoses a new patient with tinea capitis. All of the following treatments are appropriate, except:",
    "answers": [
      "Selenium shampoo",
      "Oral terbinafine",
      "Griseofluvin",
      "Metronidazole"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/22449-tinea-capitis",
    "rationale": "Metronidazole is an antibiotic and antiprotozoal medication, and it is not used to treat fungal infections such as tinea capitis.<ul><li><strong>Selenium shampoo</strong> can be used as an adjunct therapy for tinea capitis to help reduce fungal spores on the scalp.</li><li><strong>Oral terbinafine</strong> and <strong>griseofulvin</strong> are effective systemic antifungal agents commonly prescribed to treat tinea capitis, as the infection involves the hair shafts, making topical treatments insufficient.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "An African-American male is seen in the office with a blood pressure of 128/77, which he confirms has been consistent when measured at home. According to the current guidelines, what should the nurse practitioner prescribe?",
    "answers": [
      "Lifestyle modificaitons, such as decreaseing salt intake and exercise",
      "amlodipine",
      "lisinopril",
      "hydroclorothiazide"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings",
    "rationale": "His blood pressure falls within the “elevated” range according to the American College of Cardiology/American Heart Association (ACC/AHA) guidelines. For this patient, the recommended management is lifestyle modifications rather than pharmacotherapy. These modifications include reducing salt intake, increasing physical activity, maintaining a healthy weight, and following a balanced diet such as the DASH (Dietary Approaches to Stop Hypertension) diet. Medications like amlodipine, lisinopril, and hydrochlorothiazide are typically considered when blood pressure reaches the stage 1 or stage 2 hypertension thresholds or if the patient has other compelling indications for treatment. Also, Lisinopril is not recommended for African Americans.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your 72 year old female patient has come to the office complaining of excruciating pain in her great toe and has a fever. She has a history of gout and has been noncompliant with her allopurinol. Which medication would be best to prescribe today?",
    "answers": [
      "Methimazole",
      "Alopurinol",
      "Acetaminophen",
      "Colchicine"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK431102/",
    "rationale": "Colchicine is appropriate to prescribe as it reduces the inflammation and pain that follow <strong>acute gout flares</strong>.<ul><li><strong>Allopurinol</strong> is used for long-term management to reduce uric acid levels but should not be started or increased during an acute flare, as it can exacerbate the symptoms.</li><li><strong>Acetaminophen</strong> may provide pain relief but does not address the underlying inflammation of a gout flare.</li><li><strong>Methimazole</strong> is unrelated to gout treatment and is used to treat hyperthyroidism.</li></ul>",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient with type 2 diabetes reports high glucose readings each morning despite no changes to his medication or diet. The nurse practitioner recognizes this as the Dawn phenomenon and will:",
    "answers": [
      "Advise him not to eat 3 hours before bedtime.",
      "Incrase his metformin dose to the max dose.",
      "Increase the evening dose of NPH.",
      "Reduce the evening dose of NPH."
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://diabetes.org/living-with-diabetes/high-morning-blood-glucose",
    "rationale": "Dawn phenomenon refers to the natural rise in blood glucose levels in the early morning hours due to the release of growth hormone and other counter-regulatory hormones. This phenomenon is not related to food intake or changes in diet. Increasing the evening dose of NPH (an intermediate-acting insulin) can help manage early morning hyperglycemia by providing additional insulin coverage during the night. Not eating 3 hours before bedtime or increasing the metformin dose may help with overall glucose control but does not address the hormonal cause of the Dawn phenomenon. Reducing the evening dose of NPH would likely worsen morning hyperglycemia.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following lab results confirms a diagnosis of type 2 diabates:",
    "answers": [
      "A fasting blood glucose of 122 mg/dL.",
      "An A1C of 6.1%.",
      "A plasma glucose of 190 mg/dL measured 2 hours after glucose load.",
      "A random glucose of 211 and complaints of increased thirst."
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://diabetes.org/about-diabetes/diagnosis",
    "rationale": "A diagnosis of type 2 diabetes mellitus can be made based on the following criteria:<ol><li>Fasting blood glucose ≥ 126 mg/dL </li><li>A1C ≥ 6.5%</li><li>2-hour plasma glucose ≥ 200 mg/dL during an oral glucose tolerance test</li><li><strong>Random glucose ≥ 200 mg/dL</strong> with symptoms of hyperglycemia (such as increased thirst, polyuria, etc.)</li></ol>The other options indicate prediabetes.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A female patient reports recent occurrences of cold intolerance, constipation, and fatigue. Which lab test is best to make a diagnosis?",
    "answers": [
      "CBC",
      "Ferritin",
      "TSH",
      "Vitamin B12"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/hypothyroidism/diagnosis-treatment/drc-20350289",
    "rationale": "The symptoms mentioned are classic signs of hypothyroidism. The best initial lab test to evaluate thyroid function and make a diagnosis of hypothyroidism is the Thyroid-Stimulating Hormone (TSH) level. Elevated TSH indicates an underactive thyroid gland, which is consistent with hypothyroidism.CBC, Ferritin, and Vitamin B12 are appropriate labs for a differential diagnosis. But a TSH will be the best to start with, considering those symptoms.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following will confirm a diagnosis of hyperthyroidism?",
    "answers": [
      "Decreased TSH, elevated T3",
      "Elevated TSH, elevated T3",
      "Elevated TSH, decreased T3",
      "Decreased TSH, decreased T4"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.thyroid.org/thyroid-function-tests/",
    "rationale": "Hyperthyroidism shows up on lab tests as decreased TSH (due to negative feedback) and elevated T3 (and often T4). TSH is typically low because the pituitary gland reduces its production of TSH in response to high levels of circulating thyroid hormones.<ul><li><strong>Elevated TSH, elevated T3</strong> would suggest secondary hyperthyroidism, which is much less common and involves a pituitary disorder.</li><li><strong>Elevated TSH, decreased T3</strong> indicates hypothyroidism, not hyperthyroidism.</li><li><strong>Decreased TSH, decreased T4</strong> suggests central hypothyroidism or non-thyroidal illness, not hyperthyroidism.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Metformin is contraindicated for which of the following patients?",
    "answers": [
      "An elderly patient",
      "History of metabolic syndrome",
      "History of thyroid cancer",
      "History of alcoholism"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.diabetes.co.uk/diabetes-medication/metformin-and-alcohol-effects-of-drinking-when-taking-metformin.html",
    "rationale": "Metformin is contraindicated in patients with a history of alcoholism due to the increased risk of lactic acidosis, a rare but serious complication of metformin therapy. Alcohol can potentiate the effects of metformin on lactate metabolism, thereby raising the risk of lactic acidosis. Elderly patients may require careful monitoring when on metformin, but age alone is not a contraindication. Metabolic syndrome is actually an indication for metformin as it is commonly associated with insulin resistance.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The nurse practitioner is reviewing a recent hepatitis titers for a patient. It reads HBsAg: positive, anti-HBc: positive, anti-HB IgM: positive, and anti-HBs: negative. What is the diagnosis?",
    "answers": [
      "Chronic hepatitis B",
      "Active hepatitis B",
      "Immunity against hepatitis B",
      "Recovered hepatitis B"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.hepb.org/prevention-and-diagnosis/diagnosis/understanding-your-test-results/",
    "rationale": "The presence of HBsAg (Hepatitis B surface antigen) indicates an active hepatitis B infection. The positive anti-HBc (core antibody) and anti-HB IgM (IgM antibody to hepatitis B core antigen) confirm that the infection is recent or acute, as IgM is the first antibody produced in response to an infection. The negative anti-HBs (surface antibody) indicates that the patient has not yet developed immunity to the virus, which typically occurs after recovery or successful vaccination.<ul><li><strong>Chronic hepatitis B</strong> would show a positive HBsAg and anti-HBc, but anti-HB IgM would typically be negative, indicating a long-term infection.</li><li><strong>Immunity against hepatitis B</strong> would show positive anti-HBs with negative HBsAg and anti-HBc (if immunity is due to vaccination) or positive anti-HBc if due to natural infection.</li><li><strong>Recovered hepatitis B</strong> would show positive anti-HBs and anti-HBc, with negative HBsAg.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which result on a DEXA scan is diagnostic for osteoporosis?",
    "answers": [
      "T-score of -1.0 or higher",
      "T-score between -1.0 and -2.5",
      "T-score of -2.5 or lower",
      "Z-score of -1.0 or lower"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.niams.nih.gov/health-topics/bone-mineral-density-tests-what-numbers-mean",
    "rationale": "A T-score of -2.5 or lower on a DEXA scan is diagnostic for osteoporosis, indicating a significant decrease in bone density and a higher risk of fractures.<ul><li>A <strong>T-score of -1.0 or higher</strong> is considered normal bone density.</li><li>A <strong>T-score between -1.0 and -2.5</strong> indicates osteopenia, which is low bone density but not as severe as osteoporosis.</li><li><strong>Z-scores</strong> are used to compare bone density to what is expected in someone of the same age and body size.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which factor places an individual at the highest risk for osteoporosis?",
    "answers": [
      "History of short-term corticosteroid use",
      "BMI <18",
      "Hypothyroidism",
      "High-fat diet"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://radiology.ucsf.edu/blog/identifying-risk-factors-early-osteoporosis-screening",
    "rationale": "Risk factors for osteoporosis include family history, smoking, excessive exercise, excessive alcohol use, long-term corticosteroid use, hyperthyroidism, and extremely low BMI.<ul><li>Short-term corticosteroid use generally poses a lower risk compared to long-term use, which is a known risk factor for osteoporosis.</li><li>Hypothyroidism does not directly lead to osteoporosis; in fact, hyperthyroidism is more commonly associated with increased bone loss.</li><li>High-fat diet is not directly linked to osteoporosis risk, though poor overall nutrition can contribute to weaker bones.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Bell's palsy affects which cranial nerve?",
    "answers": [
      "V",
      "VII",
      "X",
      "XII"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.pennmedicine.org/for-patients-and-visitors/patient-information/conditions-treated-a-to-z/bells-palsy#:~:text=Bell%20palsy%20is%20a%20disorder,use%20the%20muscles%20at%20all.",
    "rationale": "Cranial nerve VII moves the face, closes the mouth and eyes, and controls tear secretion, which are symptoms of Bell’s palsy. V is the trigeminal nerve, controlling mastication muscles and sensation of the face. X is the vagus nerve, controlling talking, swallowing, and the carotid reflex. XII is the hypoglossal nerve that moves the tongue.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A female patient complains of frequent headaches, describing them as tight and intense, particularly at the posterior neck. There are no associated neurological symptoms upon further assessment. What treatment would be best?",
    "answers": [
      "Over-the-counter analgesics",
      "Prophylactic triptans",
      "Inhalation of 100% oxygen",
      "Prednisone"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2002/0901/p797.html",
    "rationale": "These symptoms suggest <em>tension headaches</em>. These are commonly managed with over-the-counter analgesics such as acetaminophen or nonsteroidal anti-inflammatory drugs (NSAIDs), which are effective in relieving the associated pain.<ul><li>Prophylactic triptans are typically used for preventing migraines, not tension headaches.</li><li>Inhalation of 100% oxygen is a treatment for cluster headaches, which are characterized by severe, unilateral headaches with autonomic symptoms.</li><li>Prednisone is not typically used for treating tension headaches and is more appropriate for conditions with significant inflammation or autoimmune components.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The ___ heart sound represents the closure of the aortic and pulmonic valves",
    "answers": [
      "S1",
      "S2",
      "S3",
      "S4"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.utmb.edu/pedi_ed/CoreV2/CardiologyPart1/CardiologyPart12.html#:~:text=The%20second%20heart%20sound%20(S2,the%20pulmonary%20valve%20(P2).",
    "rationale": "The S2 heart sound marks the end of systole and the beginning of diastole. This sound is typically heard as two components: A2 (aortic valve closure) and P2 (pulmonic valve closure).<ul><li><strong>S1</strong> represents the closure of the mitral and tricuspid valves, marking the beginning of systole.</li><li><strong>S3</strong> is associated with early diastolic filling and can indicate heart failure or volume overload.</li><li><strong>S4</strong> is associated with late diastolic filling due to atrial contraction, often seen in conditions with reduced ventricular compliance, such as left ventricular hypertrophy or ischemic heart disease.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which medication, prescribed to patients with high cholesterol to reduce LDL and increase HDL, can cause flushing sensations after two weeks of use?",
    "answers": [
      "Atrovastatin",
      "Rosuvastatin",
      "Fenofibrate",
      "Niacin"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mountsinai.org/health-library/supplement/vitamin-b3-niacin",
    "rationale": "Flushing--a warm, red, and sometimes itchy sensation on the skin-- is a common side effect of niacin, particularly after starting the medication or increasing the dose. It can be minimized by taking aspirin 30 minutes before the dose or using extended-release formulations.<ul><li><strong>Atorvastatin</strong> and <strong>Rosuvastatin</strong> are statins that primarily reduce LDL cholesterol with less effect on HDL and do not commonly cause flushing.</li><li><strong>Fenofibrate</strong> primarily reduces triglycerides and can moderately increase HDL but does not cause flushing.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient presents with low back pain, and the nurse practitioner suspects L5-S1 pathology. Which physical exam maneuver best assists in confirming this diagnosis?",
    "answers": [
      "Have the patient squat and rise.",
      "Have the patient straighten both legs while supine.",
      "Have the patient walk on the heels of their feet.",
      "Have the patient walk on their toes."
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK560878/#:~:text=L5%20nerve%20root%20exits%20at,foot%2C%20and%20the%20great%20toe.",
    "rationale": "The L5-S1 nerve root is primarily responsible for plantar flexion of the foot. Having the patient walk on their toes tests the integrity of this nerve root. Difficulty, pain or weakness in performing this maneuver can indicate L5-S1 pathology. Walking on the heels primarily assesses L4-L5 function, squatting and rising is a general assessment of lower extremity strength, and straight leg raising tests for nerve root irritation, which is less specific for L5-S1.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A nurse practitioner assesses a knee injury by flexing the knee at 90 degrees with the patient prone, applying pressure on the heel, and rotating the lower leg internally and externally. What is the name of this test?",
    "answers": [
      "Lachman’s test",
      "Apley’s grind test",
      "McMurray’s test",
      "McBurney’s test"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK470549/",
    "rationale": "Apley’s grind test is used to assess meniscal damage in the knee. Pain or clicking suggests a meniscal tear. Lachman’s test and McMurray’s test also assess the knee but focus on ligament integrity and meniscal damage differently. McBurney’s test, however, relates to appendicitis, not knee injuries.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient exhibits a positive Psoas sign. Which diagnostic test is most appropriate to confirm the underlying condition?",
    "answers": [
      "CBC",
      "MRI",
      "CT",
      "X-ray "
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK549903/#:~:text=Computed%20tomography%20(CT)%20is%20one,%25%20and%2076%25%2C%20respectively.",
    "rationale": "A positive Psoas sign suggests irritation of the psoas muscle, commonly associated with appendicitis. A CT scan (alternativelly an ultrasound) is the most appropriate test as it provides detailed imaging of abdominal structures. MRI can also be used but is typically reserved for cases where radiation avoidance is necessary. CBC may show signs of infection but will not confirm a diagnosis, and X-ray is not sensitive for soft tissue or abdominal pathology.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient presents with left lower quadrant pain, nausea, vomiting, loose stool, and a low-grade fever. What is the most likely diagnosis?",
    "answers": [
      "Diverticulitis",
      "Cholecystitis",
      "Pelvic inflammatory disease",
      "Irritable bowel syndrome"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cedars-sinai.org/health-library/diseases-and-conditions/d/diverticular-disease.html",
    "rationale": "Cholecystitis typically causes right upper quadrant pain, while pelvic inflammatory disease usually involves lower abdominal pain but often with a focus on the pelvis and different systemic symptoms. Irritable bowel syndrome (IBS) can cause gastrointestinal discomfort but is not typically associated with fever or acute inflammation (usually relieved by defecating).",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A female patient experiencing increased anxiety and stress after losing her job mentions hearing about an herb that promotes relaxation. Which herb is she most likely referring to?",
    "answers": [
      "Black cohosh",
      "Evening primrose",
      "Kava Kava",
      "Ginseng"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mountsinai.org/health-library/herb/kava-kava#:~:text=In%20addition%20to%20its%20ceremonial,insomnia%2C%20and%20related%20nervous%20disorders.",
    "rationale": "Kava Kava is a herb that can improve relaxation without disrupting mental clarity. Black cohosh and evening primrose improve premenstrual and menopausal discomfort. Ginseng has various health benefits, such as improved overall health, reduced fatigue, and enhanced libido.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 56-year-old man with a history of type 2 diabetes is diagnosed with community-acquired pneumonia. What is the most appropriate treatment for this patient?",
    "answers": [
      "Amoxicillin",
      "Augmentin with azithromycin",
      "Doxycycline",
      "Clarithromycin"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3248869/",
    "rationale": "For a patient with type 2 diabetes, which is considered a comorbid condition, the treatment of community-acquired pneumonia typically requires broader coverage. <em>Augmentin (amoxicillin-clavulanate)</em> combined with a macrolide such as <em>azithromycin</em> offers coverage against common pathogens, including atypical organisms, and is a preferred choice for patients with comorbidities. Amoxicillin, Doxycycline, or Clarithromycin are only appropriate for CAP in healthy adults. Amoxicillin alone lacks atypical coverage, while doxycycline and clarithromycin are alternatives but may not be as effective as the combination therapy in patients with comorbid conditions.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient taking Metformin for diabetes, Warfarin for atrial fibrillation, and occasional Acetaminophen for osteoarthritis asks about taking Aspirin as a prophylactic measure against heart disease. What is the most appropriate advice?",
    "answers": [
      "Take a baby aspirin daily for preventative measures.",
      "Avoid aspirin since you are on Warfarin for A-fib.",
      "Only take Aspirin if you experience cardiac symptoms.",
      "Avoid aspirin since you are on Metformin."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6335934/#:~:text=Although%20the%20combination%20of%20aspirin,events%20(1%2C2).",
    "rationale": "Aspirin is an antiplatelet agent that can increase the risk of bleeding, especially in patients already on anticoagulants like Warfarin. Therefore, it is advisable to avoid Aspirin in this context, speciall since it does not add any benefit in stroke and cardiovascular events. The presence of Metformin does not influence the decision regarding Aspirin use, and recommending Aspirin only for symptoms would not align with its prophylactic use.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 58-year-old male presents with chest pain described as a tightness that occurs during physical activity, and is relieved by rest. The pain radiates to his left arm and is accompanied by shortness of breath. What is the most likely diagnosis?",
    "answers": [
      "Gastroesophageal reflux disease (GERD)",
      "Stable angina",
      "Costochondritis",
      "Pulmonary embolism"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mountsinai.org/health-library/selfcare-instructions/angina-when-you-have-chest-pain",
    "rationale": "The patient’s symptoms are classic signs of stable angina, a condition caused by reduced blood flow to the heart muscle during increased demand. GERD can cause chest pain but typically does not radiate or is linked to physical activity. Costochondritis is musculoskeletal and not related to exertion, while a pulmonary embolism presents more acutely with different symptoms, such as sudden shortness of breath and sharp chest pain.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 61-year-old male experiences chronic chest discomfort during exertion that subsides with rest. His ECG is normal. What should be included in the initial treatment?",
    "answers": [
      "Amlodipine",
      "Clopidogrel",
      "Lisinopril",
      "Losartan"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://medlineplus.gov/druginfo/meds/a692044.html#:~:text=Amlodipine%20is%20in%20a%20class,of%20blood%20to%20the%20heart.",
    "rationale": "The patient’s symptoms suggest stable angina, which is often managed initially with medications that reduce myocardial oxygen demand or increase oxygen supply. Amlodipine, a calcium channel blocker, is effective in reducing angina symptoms by causing vasodilation and decreasing the workload on the heart. Clopidogrel is an antiplatelet agent used primarily for preventing thrombotic events, Lisinopril is an ACE inhibitor used for hypertension and heart failure, and Losartan is an ARB used for hypertension. These are not first-line treatments for stable angina.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 62-year-old male presents with chest pain that began while he was watching TV and has persisted for 25 minutes. The pain is severe, does not improve with rest, and is not relieved by his usual nitroglycerin. He reports that his chest pain episodes have been occurring more frequently and with less exertion over the past week. What is the most appropriate next step?",
    "answers": [
      "Prescribe Ranolazine for his unstable angina.",
      "Prescribe an increased dose of nitroglycerin for his stable angina.",
      "Order an ECG to confirm he has unstable angina.",
      "Diagnose with unstable angina and send to the emergency department."
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/angina/symptoms-causes/syc-20369373",
    "rationale": "This patient’s symptoms are characteristic of unstable angina, which is unpredictable, occurs at rest, lasts longer than 20 minutes, and does not respond to usual treatment like nitroglycerin. Unlike stable angina, which is predictable and triggered by exertion, unstable angina is a medical emergency due to the high risk of progression to a heart attack. Immediate referral to the emergency department is necessary for further evaluation and treatment.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The nurse practioner sees a patient for a dog bite on his inner thigh. The patient reports a severe allergic reaction to penicillin five years ago. Which antibiotic should be prescribed?",
    "answers": [
      "Augmentin",
      "Ciprofloxacin",
      "Azithromycin",
      "Doxycycline"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1804160/",
    "rationale": "Augmentin is the first line for animal bites. However, with a penicillin allergy, doxycycline is an appropriate alternative. Ciprofloxacin and azithromycin may not provide adequate coverage for the polymicrobial nature of dog bite infections, which often include Pasteurella, a common bacterium in such wounds.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "_______ is commonly associated with chronic right-sided heart failure?",
    "answers": [
      "Wheezing with a frothy cough.",
      "Dyspnea at rest.",
      "Dependent edema.",
      "S3 gallop."
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/21494-right-sided-heart-failure",
    "rationale": "Chronic right-sided heart failure leads to systemic venous congestion, resulting in symptoms like dependent edema, which is the accumulation of fluid in the lower extremities due to gravity. Dyspnea at rest, wheezing with a frothy cough, and an S3 gallop are more commonly associated with left-sided heart failure.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient with a chalazion that has persisted despite using warm compresses seeks further treatment. What should be the next intervention?",
    "answers": [
      "Prescribe azithromycin prophylactically.",
      "No other treatment is necessary.",
      "Advise use of over-the-counter eye drops.",
      "Refer for surgical removal."
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://nyulangone.org/conditions/stye/treatments/surgery-for-stye#:~:text=Surgery%20to%20treat%20a%20chalazion,Typically%2C%20no%20stitches%20are%20required.",
    "rationale": "A chalazion that does not resolve with conservative treatments, such as warm compresses, may require further intervention. The next appropriate step is referral for surgical removal or incision and drainage, especially if the chalazion is causing discomfort or to prevent visual disturbances from pressure on the cornea. Azithromycin is not typically prescribed for a chalazion, and over-the-counter eye drops are unlikely to resolve a persistent chalazion.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 67-year-old female reports painless blurred vision, difficulty seeing at night, and needing brighter lights when reading. What is the most likely diagnosis?",
    "answers": [
      "Open-angle glaucoma",
      "Closed-angle glaucoma",
      "Cataracts",
      "Retinal detachment"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts",
    "rationale": "The symptoms described are classic indicators of cataracts, which involve clouding of the eye’s lens, and usually occur after age 65. Open-angle glaucoma typically presents with peripheral vision loss, closed-angle glaucoma causes sudden, painful vision changes, and retinal detachment involves acute vision loss and floaters but not these specific symptoms.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "An elderly female comes to your office with inflammation and irritation on her vagina. Cultures identify Candida albicans as the causative organism. How should you treat this infection?",
    "answers": [
      "Clotrimazole",
      "Ciprofloxacin",
      "Penicillin",
      "Mupirocin"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/candidiasis/treatment/index.html#:~:text=Treatment%20is%20usually%20an%20antifungal,recommended%20before%20starting%20a%20treatment.",
    "rationale": "Candida albicans is a <strong>fungal infection</strong>, and the appropriate treatment is an antifungal agent such as clotrimazole. Ciprofloxacin and penicillin are antibiotics used for bacterial infections and would not be effective against Candida. Mupirocin is a topical antibiotic primarily used for bacterial skin infections like impetigo.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A man brings his elderly father, who has periorbital ecchymosis and bruising around the mastoid area, to your office. The cause of the injuries is unclear, and it is uncertain whether a fall or trauma occurred. What is the most appropriate intervention?",
    "answers": [
      "Refer for an MRI.",
      "Assess for neurological symptoms and follow up in 24-48 hours.",
      "Refer to ED.",
      "Refer to Neurology."
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK542227/",
    "rationale": "The presence of periorbital ecchymosis (raccoon eyes) and bruising around the mastoid area (Battle’s sign) are concerning for a basilar skull fracture, which is a serious condition requiring immediate medical attention. Referral to the emergency department (ED) is essential for prompt evaluation and management. Waiting 24-48 hours or referring directly for imaging or to Neurology may delay necessary treatment for a potentially life-threatening injury.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The nurse practioner sees a perimenopausal woman who reports a tender, mobile mass in her right breast. Her last mammogram, conducted a year and a half ago, was normal. What is the most likely diagnosis?",
    "answers": [
      "Fibrocystic breast disease",
      "Breast cancer",
      "Mastitis",
      "Paget’s disease of the breast"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/breast-cancer/symptoms/index.html",
    "rationale": "Fibrocystic breast disease is characterized by tender, mobile lumps in the breast, particularly in perimenopausal women. These lumps fluctuate with the menstrual cycle and are often benign. Breast cancer is less likely because cancerous masses are typically hard, non-tender, and fixed. Mastitis generally presents with infection signs such as redness, warmth, and fever, and Paget’s disease involves changes to the nipple and areola, not a mobile mass.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 72-year-old female walks in for a review of the medications prescribed for her Atrial Fibrilation. The nurse practitioner decides to use the CHADS-VASc score to guide the next steps in her treatment. Which of the following conditions from her past medical history is NOT included in the CHADS-VASc score?",
    "answers": [
      "CHF",
      "HTN",
      "Alzheimer's",
      "Diabetes"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://en.wikipedia.org/wiki/CHA2DS2–VASc_score",
    "rationale": "The CHADS-VASc score is used to assess stroke risk in patients with atrial fibrillation. Conditions included in this score are Congestive Heart Failure (CHF), Hypertension (HTN), Age ≥ 75, Diabetes Mellitus, Stroke or TIA, Vascular disease, Age 65–74, and Sex category (female). Alzheimer’s disease is not a component of the CHADS-VASc score and does not directly impact the stroke risk assessment for atrial fibrillation.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following sexually transmitted infections (STIs) has the most reported cases in the United States?",
    "answers": [
      "Syphilis (All Stages)",
      "Genital Herpes",
      "Chlamydia",
      "Gonorrhea"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/std/statistics/2022/default.htm",
    "rationale": "As of 2022, chlamydia is the most common STI in the U.S. and is almost three times more prevalent than Gonorrhea. | Chlamydia is the most commonly reported sexually transmitted infection in the United States, it's almost three times more prevalent than #2 Gonorrhea. It often presents with mild or no symptoms, which contributes to its high prevalence.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "There are four stages of syphilis (primary, secondary, latent, and tertiary). Which of the following is a finding in the secondary stage of syphilis?",
    "answers": [
      "Non-itchy skin rash",
      "A single sore at the site of syphilis entry",
      "Central nervous system involvement.",
      "Asymptomatic."
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/syphilis/about/index.html#:~:text=There%20are%20four%20stages%20of,has%20different%20signs%20and%20symptoms.",
    "rationale": "The secondary stage of syphilis is characterized by a non-itchy skin rash, often on the palms of the hands and soles of the feet. The primary stage is marked by a single sore, known as a chancre, at the infection site (Option B). Central nervous system involvement may occur in the tertiary stage (Option C). The latent stage can be asymptomatic (Option D).",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A male patient presents with dysuria and urinary frequency. After completing the assessment and history, which condition should be ruled out using a Thayer-Martin culture?",
    "answers": [
      "Chlamydia",
      "Gonorrhea",
      "Primary Syphilis",
      "Genital Herpes"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cantonhealth.org/pdf/400-001-06-08-A_BD%20BBL%20Modified%20Thayer%20Martin%20product%20insert.pdf",
    "rationale": "A Thayer-Martin culture is a selective medium used to isolate Neisseria gonorrhoeae, the bacterium responsible for gonorrhea. Chlamydia is typically diagnosed using nucleic acid amplification tests (NAATs), while syphilis and herpes require serologic testing or viral cultures, respectively.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient with a confirmed diagnosis of HSV-2 inquires about treatment options. What should the nurse practitioner recommend to reduce asymptomatic viral shedding?",
    "answers": [
      "No treatment since HSV2 is not curable",
      "Doxycycline",
      "Valacyclovir",
      "Ceftriaxone "
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/std/treatment-guidelines/herpes.htm#:~:text=Treatment%20with%20valacyclovir%20500%20mg,%2D2%20infection%20(473).",
    "rationale": "While HSV-2 is not curable, antiviral therapy is effective in managing symptoms and reducing viral shedding. Doxycycline and Ceftriaxone are antibiotics used for <strong>bacterial infections</strong> such as Gonorrhea.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "An elderly male with a history of GI bleeding presents with low hemoglobin and hematocrit levels, increased red cell distribution width (RDW), and total iron-binding capacity (TIBC). How should you treat this type of anemia?",
    "answers": [
      "Oral Vitamin B12",
      "Folate",
      "Parenteral Vitamin B12",
      "Elemental Iron"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2013/0115/p98.html#:~:text=The%20dosage%20of%20elemental%20iron,to%2060%20mg%20per%20day.",
    "rationale": "The patient’s lab findings suggest iron deficiency anemia, commonly associated with chronic blood loss, such as from gastrointestinal bleeding. Treatment involves supplementation with elemental iron to replenish iron stores. Oral or parenteral Vitamin B12 (Options A and C) are used for B12 deficiency anemia, which is characterized by different lab findings, such as a normal or low TIBC and normal RDW. Folate (Option B) is used for folate deficiency anemia.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 58-year-old male is diagnosed with major depressive disorder based on DSM-5 criteria. Which initial laboratory test should be prioritized by the nurse practitioner?",
    "answers": [
      "A1C",
      "CBC",
      "BMP",
      "TSH"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10554405/",
    "rationale": "Thyroid dysfunction, particularly hypothyroidism, can present with symptoms similar to major depressive disorder, such as fatigue, weight gain, and depressed mood. Therefore, assessing thyroid-stimulating hormone (TSH) levels is a priority to rule out or confirm hypothyroidism as a contributing factor. A1C is relevant for diabetes management. A CBC and BMP are also important labs after a depression diagnosis, but they are not the priority.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 39-year-old female with no past medical history or medication allergies is diagnosed with anxiety. What is the most appropriate initial treatment?",
    "answers": [
      "Amitriptyline",
      "Duloxetine",
      "Trazodone",
      "Escitalopram"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/medicines-and-psychiatry/ssri-antidepressants/overview/#:~:text=SSRIs%20are%20usually%20the%20first,generalised%20anxiety%20disorder%20(GAD)",
    "rationale": "Escitalopram, an SSRI, is first-line treatment for anxiety. Amitriptyline is a tricyclic antidepressant, Duloxetine, is an SNRI, and Trazodone is an atypical antidepressant. | Escitalopram, a selective serotonin reuptake inhibitor (SSRI), is typically the first-line treatment for anxiety due to its efficacy and favorable side effect profile. Duloxetine is a serotonin-norepinephrine reuptake inhibitor (SNRI) and can also be used for anxiety, but SSRIs are generally preferred initially. Amitriptyline and Trazodone are not first-line treatments for anxiety due to their sedative effects and higher side-effect burden.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which medication is most appropriate for treating an exacerbation of chronic obstructive pulmonary disease (COPD)?",
    "answers": [
      "Leukotriene",
      "Long-acting beta-agonist",
      "Tapered Steroids",
      "High dose antibiotics"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2019/0301/p295.html#:~:text=Current%20guidelines%20from%20the%20Global,five%20days%20in%20most%20patients.",
    "rationale": "A COPD exacerbation often requires the use of systemic corticosteroids, for 5-14 days, to reduce airway inflammation and improve breathing. While long-acting beta-agonists are part of the maintenance therapy for COPD, they are not appropriate for acute exacerbations. Leukotrienes are more commonly used in asthma management, and high-dose antibiotics are only indicated if a bacterial infection is suspected, not as the first line of treatment.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "When interpreting a patient’s Snellen chart results, what does the top number of 20/40 indicate?",
    "answers": [
      "The patient can see at 40 feet what a person with normal vision can see at 20 feet.",
      "The patient can see at 20 feet what a person with normal vision can see at 40 feet.",
      "The patient’s vision is normal at both 20 and 40 feet.",
      "The patient has normal vision when standing 40 feet from the chart."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK558961/",
    "rationale": "In Snellen chart results, the top number (20) represents the distance at which the test chart was presented, typically 20 feet. The bottom number (40) indicates the distance at which a person with normal vision can stand to read the same line on the chart. Therefore, a result of 20/40 means the patient sees at 20 feet what a person with normal vision could see clearly at 40 feet, indicating reduced visual acuity.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 56-year-old female presents with stringy eye tearing, a post-nasal drip, and no other symptoms. What is the most appropriate treatment?",
    "answers": [
      "Antibiotic eye drops.",
      "Oral antibiotic.",
      "Oral antihistamine.",
      "Cool compresses."
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.jiaci.org/issues/vol19s1/3.pdf",
    "rationale": "The symptoms described are associated with allergic conjunctivitis. The best treatment option is oral antihistamines. Antibiotic eye drops are appropriate for bacterial conjunctivitis, oral antibiotics are appropriate for bacterial sinusitis, and cool compresses are appropriate for viral conjunctivitis. | Stringy eye tearing combined with post-nasal drip suggests an allergic conjunctivitis, rather than an infectious etiology. Oral antihistamines are the best treatment option as they address the underlying allergic response. Antibiotic eye drops and oral antibiotics are unnecessary, as there is no indication of bacterial infection. Cool compresses may provide symptomatic relief but do not treat the cause of the symptoms.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient presents with daily, debilitating asthma symptoms. The nurse practitioner diagnoses the condition as severe persistent asthma. What is the most appropriate treatment option?",
    "answers": [
      "Medium-dose inhaled corticosteroids and short-acting beta-agonist.",
      "High-dose inhaled corticosteroids and oral steroids.",
      "Short-acting beta-agonist as needed.",
      "Daily low-dose inhaled corticosteroids and as needed short-acting beta-agonist."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://ginasthma.org/2023-gina-main-report/",
    "rationale": "Severe persistent asthma requires aggressive treatment to manage symptoms and prevent exacerbations. High-dose inhaled corticosteroids are the cornerstone of therapy for severe asthma, and oral steroids are often necessary to control inflammation. Reccomend this regimen for 5 to 14 days. As-needed short-acting beta-agonist is insufficient as a standalone treatment. Medium-dose inhaled corticosteroids and low-dose inhaled corticosteroids are appropriate for less severe forms of asthma.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 25-year-old patient reports experiencing asthma symptoms about twice a week with occasional nighttime awakenings but no limitations in normal activity. How should the nurse practitioner categorize this patient’s asthma?",
    "answers": [
      "Intermittent",
      "Mild persistent",
      "Moderate persistent",
      "Severe persistent"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.medicalnewstoday.com/articles/324461#intermittent",
    "rationale": "Intermittent asthma is characterized by symptoms occurring two days or fewer per week, with nighttime awakenings fewer than two times per month. There is no interference with normal activities, and lung function tests typically show normal FEV1 between exacerbations.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 30-year-old patient reports daily asthma symptoms and nighttime awakenings about three times a week, which moderately limit daily activities. How should the nurse practitioner categorize this patient’s asthma?",
    "answers": [
      "Intermittent",
      "Mild persistent",
      "Moderate persistent",
      "Severe persistent"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.medicalnewstoday.com/articles/324461#intermittent",
    "rationale": "Mild persistent asthma is characterized by symptoms more than twice a week but not daily, with nighttime awakenings three to four times per month. There may be some limitation in normal activities, but FEV1 remains within 80% of predicted.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 40-year-old patient reports experiencing asthma symptoms almost every day, with nighttime awakenings more than once a week, and some limitation in daily activities. How should the nurse practitioner categorize this patient’s asthma?",
    "answers": [
      "Intermittent",
      "Mild persistent",
      "Moderate persistent",
      "Severe persistent"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.medicalnewstoday.com/articles/324461#intermittent",
    "rationale": "Moderate persistent asthma involves daily symptoms and nighttime awakenings more than once a week, with some limitation in normal activities. Lung function tests show FEV1 between 60% and 80% of predicted.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 35-year-old patient presents with continuous asthma symptoms, frequent nighttime awakenings, and severely limited physical activity. How should the nurse practitioner categorize this patient’s asthma?",
    "answers": [
      "Intermittent",
      "Mild persistent",
      "Moderate persistent",
      "Severe persistent"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.medicalnewstoday.com/articles/324461#intermittent",
    "rationale": "Severe persistent asthma is marked by symptoms throughout the day, frequent nighttime awakenings (often nightly), and severe limitations in physical activity. FEV1 is less than 60% of predicted.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Your patient was recently started on albuterol for asthma. Which of the following side effects is she most likely to report?",
    "answers": [
      "Blurry vision",
      "Anorexia",
      "Maculopapular rash",
      "Heart palpitations"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/asthma-attack/expert-answers/albuterol-side-effects/faq-20058088#:~:text=Side%20effects%20of%20albuterol%20include,a%20pounding%20heart%2C%20called%20palpitations.",
    "rationale": "Albuterol, a short-acting beta-agonist, is commonly associated with side effects like heart palpitations, tremors, and nervousness due to its stimulatory effects on the cardiovascular system. They should be used with caution in patients with HTN, angina, and hyperthyroidism. Blurry vision and anorexia are not typical side effects of albuterol. A maculopapular rash may indicate an allergic reaction, but it is less common compared to cardiovascular symptoms like heart palpitations.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A tonometry reading of 22 mmHg, with a gradual onset of increased intraocular pressure and gradual changes in peripheral vision, is most likely to result in a diagnosis of:",
    "answers": [
      "Closed-angle glaucoma",
      "Macular degeneration",
      "Presbyopia",
      "Open-angle glaucoma"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://glaucoma.org/understanding-glaucoma/testing",
    "rationale": "Open-angle glaucoma is characterized by a gradual increase in intraocular pressure, often with readings above 20 mmHg (normal is 10-21), along with a slow progression of peripheral vision loss. It is the most common form of glaucoma and develops gradually without acute symptoms. Closed-angle glaucoma typically presents with a sudden increase in intraocular pressure and is a medical emergency. Macular degeneration affects central vision rather than peripheral vision. Presbyopia is an age-related condition affecting near vision, not related to intraocular pressure.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following is a contributing factor to angular cheilitis?",
    "answers": [
      "Hypernatremia",
      "Dehydration",
      "Vitamin B12 deficiency",
      "Young age"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK536929/#:~:text=Lack%20of%20vitamin%20B12%20can,also%20usually%20are%20folate%20deficient.",
    "rationale": "Angular cheilitis, characterized by inflammation and cracking at the corners of the mouth, can be caused by nutritional deficiencies, particularly of Vitamin B12, iron, or folate. Lack of moisture might worsen the condition but is not a primary contributing factor. Hypernatremia and young age are not related to the development of angular cheilitis.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 72-year-old female on Alendronate for osteoporosis presents with chest discomfort when eating, dysphagia, and heartburn. What is this patient at risk for?",
    "answers": [
      "Erosive esophagitis",
      "GERD",
      "Duodenal ulcer",
      "Barrett’s esophagus"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK470248/",
    "rationale": "Alendronate, a bisphosphonate, is associated with esophageal irritation and can lead to erosive esophagitis, especially if not taken properly; it should be taken with 8 ounces of water, not mixed with other medications, and the person should sit upright for 30 minutes after swallowing. GERD can cause similar symptoms but is a broader diagnosis not specifically related to bisphosphonate use. A duodenal ulcer affects the small intestine and is less likely to present with dysphagia. Barrett’s esophagus is a complication of chronic GERD but is not directly linked to Alendronate use.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The nurse practitioner prescribes an atypical antipsychotic to a 43-year-old female. Considering the side effects of this drug class, what is an important next step?",
    "answers": [
      "Tapering the medication once its result has been met.",
      "Monitoring her weight every three months.",
      "Assessing for suicidal ideation every two weeks.",
      "Ensure the patient is not taking NSAIDs while on atypical antipsychotics."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5574691/",
    "rationale": "Atypical antipsychotics are associated with weight gain and metabolic syndrome, which increases the risk of diabetes and cardiovascular disease. Regular weight monitoring every three months is crucial for early detection and management of these side effects. Tapering the medication is not a routine step unless discontinuation is warranted. While assessing for suicidal ideation is important in psychiatric care, it is not specifically related to atypical antipsychotics. NSAID use is not directly contraindicated with atypical antipsychotics.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "While assessing a patient in the office, the nurse practitioner uses the CURB-65 scoring system to determine a treatment course for pneumonia. Which of the following criteria would elevate the score?",
    "answers": [
      "Blood urea nitrogen levels greater than 20.",
      "Respirations greater than 18.",
      "Blood pressure greater than 160/90.",
      "Age greater than age 60."
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://en.wikipedia.org/wiki/CURB-65",
    "rationale": "The CURB-65 scoring system is used to assess the severity of pneumonia and guide treatment decisions. It includes the following criteria: Confusion, Urea (BUN > 20 mg/dL), Respiratory rate ≥ 30, low Blood pressure (systolic < 90 mmHg or diastolic ≤ 60 mmHg), and Age ≥ 65 years.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A young adult presents with a chronic cough and is diagnosed with acute bronchitis. What should the nurse practitioner expect to see on the chest X-ray?",
    "answers": [
      "Patchy opacities",
      "Consolidation in the lower lobes",
      "Interstitial patterns",
      "Normal findings"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK448067/",
    "rationale": "Acute bronchitis is characterized by a persistent cough without significant abnormal findings on a chest X-ray. Patchy opacities, consolidation, and interstitial patterns are more indicative of pneumonia or other pulmonary conditions (eg COVID, fibrosis).",
    "Age Group": "Adolescent (12-18)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A patient who has developed pulmonary emboli most likely has a history of:",
    "answers": [
      "Hypertension",
      "Hyperlipidemia",
      "Atrial fibrillation",
      "Exercise-induced asthma"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ahajournals.org/doi/10.1161/JAHA.117.006502",
    "rationale": "History of atrial fibrillation, estrogen therapy, smoking, surgery, cancer, pregnancy, long bone fractures, and prolonged immobility increase the risk of thrombus formation in the heart, which can dislodge and travel to the lungs, leading to pulmonary embolism. Hypertension and hyperlipidemia are risk factors for cardiovascular disease but are less directly associated with pulmonary emboli. Exercise-induced asthma does not contribute to the formation of emboli.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Tapping the anterior wrist briskly to produce a pins and needles sensation describes which sign?",
    "answers": [
      "Phalen's",
      "Tinel's",
      "McMurray's",
      "Psoas"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diagnostics/22662-tinels-sign",
    "rationale": "Tinel’s sign checks for Carpal Tunnel Syndrome by tapping the anterior wrist briskly. When positive, it produces a pins and needles sensation. Phalen’s sign also checks for Carpal Tunnel Syndrome by flexing the wrist for 60 seconds to reproduce a tingling sensation. McMurray’s sign and Psoas sign are unrelated to Carpal Tunnel Syndrome.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Amaurosis fugax, often caused by temporal arteritis, is:",
    "answers": [
      "Transient blindness",
      "Scalp tenderness",
      "Jaw pain",
      "Facial numbness"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/amaurosis-fugax",
    "rationale": "Amaurosis fugax refers to a transient loss of vision in one eye, often described as a curtain coming down over the visual field. It is commonly associated with temporal arteritis (also known as giant cell arteritis), a condition that inflames the arteries, including those supplying the eyes, limiting blood flow. Scalp tenderness and jaw pain are also symptoms of temporal arteritis. Facial numbness is not typically associated with this condition.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which medication should be the first-line treatment for a 62-year-old woman diagnosed with trigeminal neuralgia?",
    "answers": [
      "Propranolol",
      "Amitriptyline",
      "Naproxen",
      "Carbamazepine"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ucsfhealth.org/conditions/trigeminal-neuralgia",
    "rationale": "Carbamazepine is the first-line treatment for trigeminal neuralgia due to its effectiveness in reducing nerve pain. Amitriptyline is used primarily for other types of neuropathic pain but is not the first-line treatment for trigeminal neuralgia. Propranolol is a beta-blocker typically used for cardiovascular conditions and migraines, not trigeminal neuralgia. Naproxen is an NSAID used for pain relief but is ineffective in treating trigeminal neuralgia​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which pathogen is the most common cause of community-acquired pneumonia?",
    "answers": [
      "Chlamydia pneumoniae",
      "Mycoplasma pneumoniae",
      "Streptococcus pneumoniae",
      "Legionella pneumoniae"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK470537",
    "rationale": "Streptococcus pneumoniae is the most common pathogen responsible for community-acquired pneumonia. It is especially prevalent in older adults and those with chronic conditions. Chlamydia pneumoniae, M. pneumoniae, and Legionella pneumoniae are seen in atypical pneumonia.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 31-year-old male presents with dysuria, urinary urgency, a positive Phren’s sign, and a normal cremasteric reflex. Based on these findings, the diagnosis is likely to be:",
    "answers": [
      "Prostatitis",
      "Epididymitis",
      "Benign Prostatic hyperplasia",
      "Testicular cancer"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/epididymitis/symptoms-causes/syc-20363853",
    "rationale": "Epididymitis is common in males younger than 35 with Chlamydia. It is characterized by dysuria, urinary urgency, a positive Prehn’s sign (pain relief when lifting the scrotum), and a normal cremasteric reflex. These clinical features help differentiate it from other conditions like prostatitis, which presents with pelvic pain but lacks the positive Prehn's sign. Benign prostatic hyperplasia typically occurs in older men and involves urinary retention rather than acute pain. Testicular torsion can be ruled out because the cremasteric reflex is normal. Testicular cancer might present with a mass but not typically with the acute symptoms described here​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Elderly patients are at higher risk of nephrotoxicity due to physiological changes. Which other physiological change commonly affects the elderly?",
    "answers": [
      "Increased residual urine",
      "Decreased nocturnal urine production",
      "Increased bladder tone",
      "Increased GFR"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8748297/#:~:text=Clinical%20urodynamic%20studies%20have%20demonstrated,volume%20%5B4%2C5%5D.",
    "rationale": "In elderly patients, increased residual urine is common due to decreased bladder contractility and incomplete bladder emptying, contributing to a higher risk of UTIs and other complications. This is compounded by age-related changes in renal function, which increase the risk of nephrotoxicity. Decreased nocturnal urine production is not typical in the elderly; instead, they often experience increased nocturnal urine production (nocturia). Bladder tone generally decreases with age, and glomerular filtration rate (GFR) typically decreases, not increases​.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A young adult presents to the clinic for a second opinion after being diagnosed with condyloma acuminata. The patient is requesting curative treatment. What is the best recommendation for this patient?",
    "answers": [
      "14-day dose of Metronidazole",
      "Discuss shared decision making for cryotherapy",
      "Topical clobetasol",
      "Explain there are no curative treatments"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2004/1215/p2335.html",
    "rationale": "Condyloma acuminata (genital warts) can be treated with cryotherapy, which is effective in removing warts but may require multiple sessions. While not curative in the sense of eliminating the virus (HPV), it can remove visible lesions. Metronidazole is an antibiotic used for bacterial infections like trichomoniasis, not for viral warts. Topical clobetasol is a potent steroid used for inflammatory skin conditions, not warts. It's important to inform the patient that while treatments can remove warts, there is no cure for the underlying HPV infection​.",
    "Age Group": "Adult (19-26)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Fitz-Hugh-Curtis Syndrome is a complication of which sexually transmitted disease?",
    "answers": [
      "Hepatitis B",
      "HIV",
      "Gonorrhea",
      "HPV"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/fitz-hugh-curtis-syndrome",
    "rationale": "Fitz-Hugh-Curtis Syndrome is a rare complication of pelvic inflammatory disease (PID), most commonly associated with Neisseria gonorrhoeae or Chlamydia trachomatis infections. It involves inflammation of the liver capsule and results in right upper quadrant pain. Hepatitis B is a viral infection affecting the liver, not associated with PID. HIV and HPV are viral infections with different systemic effects but are not linked to Fitz-Hugh-Curtis Syndrome​.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following drug regimens is commonly prescribed for treating H. pylori infection?",
    "answers": [
      "Metronidazole, amoxicillin, and Omeprazole",
      "Doxycycline, clarithromycin, and Bismuth subsalicylate",
      "Metronidazole, amoxicillin, and doxycycline",
      "Omeprazole, tetracycline, and Famotidine"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6905081/",
    "rationale": "A typical regimen for H. pylori infection includes a combination of two antibiotics (such as metronidazole and amoxicillin) to target bacterial eradication and a proton pump inhibitor (omeprazole) to reduce stomach acid and promote healing. Other regimens might substitute clarithromycin or bismuth-based therapies. Option B is incorrect because doxycycline is not commonly used in H. pylori treatment, though bismuth subsalicylate may be part of a quadruple therapy. Famotidine is an H2 blocker and not part of standard H. pylori treatment​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your new patient is a 75-year-old female recently diagnosed with hypothyroidism based on clinical observations and her most recent TSH panel. What should you prescribe?",
    "answers": [
      "Levothyroxine 75 mg",
      "Methimazole 30 mg",
      "Levothyroxine 25 mg",
      "Methimazole 60mg"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2006/0401/p1271.html",
    "rationale": "For elderly patients with new-onset hypothyroidism, the recommended starting dose of levothyroxine (Synthroid) is typically lower (e.g., 25 mcg) due to increased sensitivity to thyroid hormones and the risk of cardiovascular side effects. Methimazole is an antithyroid drug used for hyperthyroidism, not hypothyroidism, making options B and D incorrect. Levothyroxine 75 mcg is generally too high for initial treatment in elderly patients, increasing the risk of overtreatment​.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the definition of forced vital capacity (FVC)?",
    "answers": [
      "The maximum volume of air that can be forcibly exhaled after a full inhalation.",
      "The amount of air exhaled in the first second of a forced breath.",
      "The total amount of air exchanged during normal breathing.",
      "The volume of air remaining in the lungs after a maximal exhalation."
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://internal.medicine.ufl.edu/files/2012/06/5.12.02-How-to-Interpret-Pulmonary-Function-Tests.pdf",
    "rationale": "Forced vital capacity (FVC) refers to the maximum amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible. This test is commonly used in pulmonary function tests to assess lung capacity. Option B describes forced expiratory volume in one second (FEV1). Option C refers to tidal volume, and Option D refers to residual volume​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following individuals would have a positive TB skin test at 5 mm of induration?",
    "answers": [
      "A 32-year-old registered nurse working on the oncology unit.",
      "A 66-year-old male with positive HIV status.",
      "A 25-year-old college student living in a dormitory.",
      "A 78-year-old recently discharged from the hospital after a hip fracture."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mountsinai.org/health-library/tests/ppd-skin-test#:~:text=A%20negative%20reaction%20usually%20means,and%20other%20high%2Drisk%20groups.",
    "rationale": "A positive TB skin test (TST) is defined as 5 mm or more of induration in individuals with high-risk factors such as HIV infection. Patients with HIV are considered immunocompromised, which lowers the threshold for a positive test. The nurse, college student, and elderly patient would require larger indurations (typically 10-15 mm) to be considered positive​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is the name for the formation of abscesses in the groin or axilla in an individual infected with Staphylococcus aureus?",
    "answers": [
      "Hidradenitis Suppurativa",
      "Cellulitis",
      "Folliculitis",
      "Erysipelas"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4257786/",
    "rationale": "Hidradenitis Suppurativa is a chronic skin condition characterized by painful abscesses and inflammation in areas such as the groin and axilla, often linked to Staph infection. Cellulitis involves deeper skin layers, affects the extremities, and lacks abscess formation. Folliculitis involves inflammation of hair follicles but usually appears as smaller, superficial pustules. Erysipelas is a superficial skin infection, usually on the face, with clear demarcation but does not form abscesses​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What is an appropriate alternative treatment for erysipelas in patients with a penicillin allergy?",
    "answers": [
      "Augmentin",
      "Ciprofloxacin",
      "Bactrim",
      "Clindamycin"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8693180/",
    "rationale": "For penicillin‐allergic participants the usual recommended alternatives are erythromycin or clindamycin. Augmentin contains amoxicillin, which should be avoided in penicillin-allergic patients. Ciprofloxacin has limited activity against Streptococcus species and is not commonly used for skin infections like erysipelas. Bactrim covers Staphylococcus aureus but lacks sufficient activity against Streptococcus, the primary pathogen responsible for erysipelas​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "An 81-year-old male is brought to the clinic by his daughter. He has with new-onset confusion, speech difficulties, and intermittent numbness in the right arm, which began two hours ago. What is the next step?",
    "answers": [
      "Order labs and follow up with results.",
      "Collect a UA and urine culture.",
      "Refer to the ED.",
      "Review current medications with the patient and his daughter."
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/transient-ischemic-attack/symptoms-causes/syc-20355679",
    "rationale": "The patient’s sudden onset of confusion, speech difficulties, and numbness are concerning for an acute cerebrovascular event, such as a transient ischemic attack (TIA) or stroke. Immediate referral to the emergency department (ED) is necessary for urgent imaging and evaluation. Waiting for lab results (A) or reviewing medications (D) would delay crucial treatment. While a urinary tract infection (B) could cause confusion in older adults, the combination of neurological symptoms makes a stroke the more urgent concern​.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "Which of the following is an example of tertiary prevention?",
    "answers": [
      "Wearing a seatbelt",
      "Prostate cancer screening",
      "Initiating vaccinations",
      "Cardiac rehabilitation after an MI"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK537222/",
    "rationale": "Tertiary prevention involves interventions that aim to reduce the impact of an already established disease by improving function and quality of life. Cardiac rehabilitation after a myocardial infarction (MI) fits this definition as it helps the patient recover and prevent further complications. Wearing a seatbelt (A) and initiating vaccinations (C) are examples of primary prevention, which aim to prevent disease. Prostate cancer screening (B) is an example of secondary prevention, which focuses on early detection​.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "An 8-year-old child with acute otitis media (AOM) treated with amoxicillin returns to the clinic after 72 hours with persistent symptoms, including a bulging, erythematous tympanic membrane and severe ear pain. The appropriate next step is to:",
    "answers": [
      "Continue amoxicillin and re-evaluate in 7 days.",
      "Discontinue amoxicillin and initiate amoxicillin-clavulanate for 10 days.",
      "Switch to levofloxacin 750 mg daily for 5 days.",
      "Add azithromycin to the current antibiotic regimen."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://triggered.edina.clockss.org/ServeContent?url=http%3A%2F%2Farchfami.ama-assn.org%2Fcgi%2Fcontent%2Ffull%2F8%2F1%2F68#:~:text=Amoxicillin%2Dclavulanate%20is%20a%20good,penicillin%20hypersensitivity%20or%20concomitant%20gastroenteritis.",
    "rationale": "When a child with AOM does not improve after 48-72 hours of treatment with amoxicillin, amoxicillin-clavulanate (Augmentin) is recommended due to its broader coverage of beta-lactamase-producing organisms like Haemophilus influenzae and Moraxella catarrhalis. Levofloxacin is not typically first-line for pediatric AOM due to safety concerns and is used in special cases. Adding azithromycin is unnecessary as it would not offer superior coverage compared to amoxicillin-clavulanate​​.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient with acute bacterial sinusitis presents with fever, facial pain, and mucopurulent nasal drainage. The patient has a severe penicillin allergy, including angioedema requiring hospitalization. Which antibiotic should be avoided?",
    "answers": [
      "Doxycycline",
      "Moxifloxacin",
      "Cephalexin",
      "Azithromycin"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://health.ucdavis.edu/antibiotic-stewardship/pdfs/abx_cross_reactivity.pdf",
    "rationale": "Cephalexin (Keflex) is a first-generation cephalosporin, and while cross-reactivity between penicillins and cephalosporins is generally low, patients with severe reactions like angioedema are advised to avoid cephalosporins due to the risk of cross-sensitivity. Doxycycline, moxifloxacin, and azithromycin are safe alternatives in patients with severe penicillin allergies as they do not share a beta-lactam structure​​.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 55-year-old female recently established care with you after moving from Nigeria. She takes lisinopril for hypertension and omeprazole for GERD. She reports a persistent dry cough and has a blood pressure of 176/97 mmHg. What should be your first priority?",
    "answers": [
      "Prescribe Tessalon Perles for the cough and reassess in two weeks.",
      "Check thyroid and hormone levels to assess menopausal status.",
      "Add metoprolol BID to improve blood pressure control.",
      "Discontinue lisinopril and initiate a thiazide diuretic."
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK554579/",
    "rationale": "ACE/ARBs have poorer blood pressure control efficacy in the black population, so first-line drugs should be thiazide diuretics and calcium channel blockers. Also, given the elevated blood pressure and the cough, discontinuing lisinopril and switching to an alternative antihypertensive, such as a thiazide diuretic, is appropriate. Tessalon Perles would not address the underlying cause of the cough. Metoprolol is not the best choice for first-line therapy in this scenario without addressing the lisinopril-related cough​​.",
    "Age Group": "Older Adult (26-65)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Anthrax, caused by Bacillus anthracis a gram-positive bacteria, can infect the skin, lungs, and gastrointestinal system. What is the first-line treatment for this infection?",
    "answers": [
      "Ciprofloxacin",
      "Meropenem",
      "Vancomycin",
      "Chloramphenicol"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/anthrax/pdf/cipro-eui-recipients-H.pdf",
    "rationale": "Cipro is recommended for both prophylaxis and treatment, especially in inhalational anthrax. Doxy or Levaquin may be used instead of Cipro. Meropenem is a carbapenem used for treating multidrug-resistant bacterial infections. Vancomycin is primarily used for gram-positive cocci, including MRSA. Chloramphenicol is used for serious infections but is not first-line for anthrax due to its adverse effects and narrower application.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which class of medications is the first-line treatment for depression in the elderly?",
    "answers": [
      "Atypical Antidepressants",
      "SSRIs",
      "TCAs",
      "MAOIs"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.apa.org/depression-guideline/older-adults",
    "rationale": "SSRIs (Selective Serotonin Reuptake Inhibitors) are considered the first-line treatment for depression in the elderly due to their favorable side effect profile and lower risk of serious complications compared to other classes. Atypical antidepressants such as bupropion or mirtazapine can be considered in certain cases but are not first-line.. TCAs and MAOIs are generally avoided in the elderly due to their significant adverse effects, such as orthostatic hypotension and anticholinergic effects, which increase the risk of falls and cognitive impairment.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Most drug excretion occurs through:",
    "answers": [
      "Stool",
      "Insensible loss (sweat, saliva, etc.)",
      "Renal/urine",
      "Fat metabolism"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.merckmanuals.com/professional/clinical-pharmacology/pharmacokinetics/drug-excretion",
    "rationale": "The renal route (leading to urine) is the predominant pathway for excreting water-soluble substances, making it the most common form of drug excretion. Excretion through the stool occurs with bile or unabsorbed drugs but is less frequent. Insensible losses through sweat or saliva are minimal contributors to drug excretion. Fat metabolism does not play a direct role in excretion, although some fat-soluble drugs may be stored in adipose tissue.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following drugs is significantly affected by the first-pass effect?",
    "answers": [
      "Sublingual clonazepam",
      "IV acetaminophen",
      "Vaginal metronidazole",
      "Oral contraceptives"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://en.wikipedia.org/wiki/First_pass_effect",
    "rationale": "Oral contraceptives are subject to the first-pass effect, where drugs absorbed from the gastrointestinal tract pass through the liver before entering systemic circulation, reducing their bioavailability. Sublingual clonazepam bypasses the liver and avoids the first-pass effect. IV acetaminophen is administered directly into the bloodstream, bypassing the liver initially. Vaginal metronidazole also bypasses the first-pass metabolism by being absorbed through local tissues.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your patient with a history of Clostridioides difficile infection requires antibiotic treatment during carpal tunnel surgery. Which antibiotic is likely contraindicated?",
    "answers": [
      "Doxycycline",
      "Clindamycin",
      "Unasyn",
      "Clarithromycin"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK519574/",
    "rationale": "Clindamycin is contraindicated in patients with a history of C. difficile infection because it is strongly associated with triggering recurrence due to its disruption of normal gut flora. Doxy, Unasyn and Clarithromycin have a lower risk of inducing C. difficile infections, making them safer alternatives in such patients.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 75-year-old patient with hypertension has a blood pressure above 140/90 despite lifestyle changes. His DEXA scan shows a T-score of -2.5. Which medication would provide benefits for both conditions?",
    "answers": [
      "Spironolactone",
      "Atenolol",
      "Valsartan",
      "Chlorthalidone"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK532918/#:~:text=Hypercalcemia.,for%20nephrolithiasis%20and%20osteoporosis%20treatment.",
    "rationale": "Chlorthalidone, a thiazide-like diuretic, is effective in managing hypertension and has been shown to increase calcium reabsorption, which can help improve bone mineral density in patients with osteoporosis (T-score of -2.5). Spironolactone is a potassium-sparing diuretic used for resistant hypertension but does not offer bone-protective benefits. Atenolol and Valsartan manage hypertension but lack the dual benefits for both hypertension and osteoporosis that chlorthalidone provides.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "According to the 2017 ACC/AHA Hypertension Guidelines, what is the blood pressure range for stage 1 hypertension?",
    "answers": [
      "Systolic 120-129 or diastolic >80",
      "Systolic 130-139 or diastolic ≥90",
      "Systolic 130-139 or diastolic 80-89",
      "Systolic ≥140 or diastolic ≥90"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings",
    "rationale": "Choice (a) represents elevated blood pressure but does not reach the threshold for hypertension. Choice (b) incorrectly uses a diastolic cutoff of ≥90 mm Hg, which falls under stage 2 hypertension. Option (d) describes stage 2 hypertension, where systolic is ≥140 mm Hg or diastolic ≥90 mm Hg.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "How long does it typically take for platelet function to return to normal after discontinuing clopidogrel (Plavix)?",
    "answers": [
      "10 days",
      "30 days",
      "3 months",
      "60 days"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.sciencedirect.com/science/article/pii/S0735109712012132",
    "rationale": "Clopidogrel (Plavix) irreversibly inhibits platelet aggregation, and its effects persist for the lifespan of the platelet, which is approximately 7-10 days. Therefore, platelet function typically returns to normal about 10 days after discontinuation, as new platelets are produced. Option (b), 30 days, and (d), 60 days, are too long for platelet recovery. Option (c), 3 months, significantly exceeds the normal platelet lifespan.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your hypertensive patient has a potassium level of 4.7 mEq/L. Which of the following medications is the least appropriate choice for her?",
    "answers": [
      "Loop diuretic such as furosemide",
      "Aldosterone antagonist such as spironolactone",
      "Calcium channel blocker such as amlodipine",
      "Beta blocker such as propranolol"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.nature.com/articles/ncpcardio0018",
    "rationale": "Spironolactone is a potassium-sparing diuretic, and prescribing it to a patient with a potassium level of 4.7 mEq/L risks hyperkalemia, which could lead to dangerous cardiac effects. Loop diuretics like furosemide typically lower potassium levels, making option (a) a safer choice in this scenario. Calcium channel blockers (c) and beta blockers (d) do not significantly affect potassium levels, so they are also appropriate.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the best treatment for a gonorrheal infection in a pregnant patient?",
    "answers": [
      "Tetracycline",
      "Levofloxacin",
      "Amoxicillin and clavulanic acid",
      "Ceftriaxone"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://pubmed.ncbi.nlm.nih.gov/8416458/",
    "rationale": "Ceftriaxone is the recommended treatment for gonorrheal infections, including during pregnancy, as it is safe and effective. Tetracycline is contraindicated in pregnancy due to risks to fetal bone and teeth development. Levofloxacin is not a first-line treatment for gonorrhea due to increasing resistance. Amoxicillin with clavulanic acid is not effective for gonorrhea but is used for other bacterial infections.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 65-year-old male with a history of CVA secondary to a VTE and Type 2 diabetes is discharged on warfarin, metformin, and aspirin. What is the ideal INR range for this patient?",
    "answers": [
      "1.5-2.5",
      "2.0-3.0",
      "3.0-4.0",
      "2.5-3.5"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK507707/",
    "rationale": "The 2.0-3.0 range minimizes the risk of both bleeding and clot formation. An INR of 1.5-2.5 is too low, increasing the risk of thromboembolism. An INR of 3.0-4.0 or 2.5-3.5 is generally reserved for patients with mechanical heart valves or certain high-risk conditions.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the primary focus of pharmacogenomics?",
    "answers": [
      "Studying the genetic basis of diseases to develop new medications.",
      "Understanding how an individual’s genetic makeup affects their response to medications.",
      "Analyzing population-wide drug response patterns.",
      "Developing cost-effective drug manufacturing processes."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://en.wikipedia.org/wiki/Pharmacogenomics",
    "rationale": "Pharmacogenomics may help tailor drug therapy for better efficacy and reduced side effects. Choice (a) describes drug development, not pharmacogenomics. Option (c) refers to epidemiology, and option (d) is related to drug manufacturing processes.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the primary focus of pharmacology?",
    "answers": [
      "The study of drug absorption, distribution, metabolism, and excretion.",
      "The study of drug interactions with the body and how they affect biological systems.",
      "The development of new drug formulations and delivery systems.",
      "The study of genetic influences on drug response."
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://en.wikipedia.org/wiki/Pharmacology",
    "rationale": "Pharmacology studies how the body metabolizes medications. This includes the mechanisms of action, therapeutic effects, and side effects of drugs. Choice (a) refers to pharmacokinetics, a subfield of pharmacology. Option (c) deals with pharmaceutics, and (d) defines pharmacogenomics, which focuses on genetics.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is a common adverse effect of non-dihydropyridine calcium channel blockers?",
    "answers": [
      "Constipation",
      "Hyperuricemia",
      "Decreased seizure threshold",
      "Hyperkalemia"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ahajournals.org/doi/pdf/10.1161/01.HYP.11.3_Pt_2.II42",
    "rationale": "Non-dihydropyridine calcium channel blockers, such as verapamil and diltiazem, cause constipation as a side effect due to their effects on smooth muscles. Hyperuricemia (b) is more associated with diuretics like thiazides. Decreased seizure threshold (c) and hyperkalemia (d) are not typically associated with this class of medications.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A middle-aged woman presents with unilateral temporal pain, jaw pain, intermittent vision loss, and a fever. You suspect Temporal arteritis. What is the best immediate treatment before waiting for bloodwork results?",
    "answers": [
      "High dose NSAIDs",
      "A DMARD such as methotrexate",
      "Oral steroids such as prednisone",
      "Ophthalmic ketorolac"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3333461/",
    "rationale": "Temporal arteritis (giant cell arteritis) can lead to irreversible vision loss if not treated promptly. Immediate administration of high-dose oral steroids, such as prednisone, is the recommended treatment to prevent complications, especially while awaiting diagnostic confirmation. NSAIDs are not effective in preventing the severe complications of arteritis. DMARDs like methotrexate are used for chronic inflammatory conditions but not for the acute management of temporal arteritis. Ophthalmic ketorolac would not address the underlying vascular inflammation.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which over-the-counter (OTC) pain reliever should not be prescribed for osteoarthritis in patients with poor cardiovascular health, such as heart failure or hypertension?",
    "answers": [
      "Opiates",
      "Gabapentin",
      "Acetaminophen",
      "NSAIDs"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5422108/",
    "rationale": "NSAIDs (nonsteroidal anti-inflammatory drugs) such as ibuprofen and naproxen can worsen cardiovascular conditions by causing fluid retention, increasing blood pressure, and heightening the risk of heart failure exacerbations. Acetaminophen is generally considered safe for pain relief in patients with cardiovascular issues. Gabapentin and opiates are also safer options for these patients, as they do not directly impact cardiovascular health like NSAIDs.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 55-year-old patient presents with a swollen, red, painful wound with purulent drainage after a cat bite four days ago. What is the appropriate treatment for this patient?",
    "answers": [
      "Tetanus vaccine",
      "Rabies prophylaxis vaccine",
      "Amoxicillin-clavulanate (Augmentin)",
      "Vancomycin"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2014/0815/p239.html",
    "rationale": "Cat bites commonly lead to bacterial infections, particularly from the gram-negative anaerobic bacteria <em>Pasteurella multocida</em>, which is sensitive to amoxicillin-clavulanate. This antibiotic provides broad-spectrum coverage. Tetanus is important but not the primary treatment here, and rabies prophylaxis is only indicated if the cat was rabid or unvaccinated. Vancomycin targets gram-positive bacteria, such as MRSA.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 73-year-old female presents with fatigue, drastic weight gain, dry skin, and cognitive difficulties. Her labs show a T4 of 0.8 ng/dL, TSH of 6.2 mU/L, and an MMSE score of 25. Which medication would most benefit this patient?",
    "answers": [
      "Propylthiouracil (PTU)",
      "Levothyroxine (Synthroid)",
      "Fluoxetine (Prozac)",
      "Memantine (Namenda)"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.nhs.uk/medicines/levothyroxine",
    "rationale": "This patient’s symptoms and lab results (elevated TSH and low T4) suggest hypothyroidism, which is best treated with levothyroxine, a synthetic thyroid hormone. Propylthiouracil (PTU) is used for hyperthyroidism. Fluoxetine (Prozac) is for depression, but her cognitive symptoms and fatigue are more likely related to thyroid dysfunction. Memantine (Namenda) is used for dementia, but an MMSE score of 25 suggests mild cognitive impairment, which is often reversible with proper thyroid treatment.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your patient is a teenager with myasthenia gravis. She is diagnosed with pertussis after a recent exposure at school. Which medication should you prescribe?",
    "answers": [
      "Erythromycin",
      "Azithromycin",
      "Doxycycline",
      "Penicillin"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/pertussis/hcp/clinical-care/index.html",
    "rationale": "Azithromycin (or Clarithromycin) is the preferred treatment for pertussis (whooping cough), especially in patients with myasthenia gravis, as it is effective and has a lower risk of causing complications. Erythromycin can worsen symptoms of myasthenia gravis due to its potential for neuromuscular blockade. Doxycycline is not typically first-line for pertussis, and penicillin is ineffective against Bordetella pertussis, the bacteria that causes pertussis.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 78-year-old female with a history of GERD and a T11 fracture now presents with a new T12 fracture, elevated serum alkaline phosphatase, and a decrease in height. Which medication is most appropriate to prescribe?",
    "answers": [
      "Alendronate (Fosamax)",
      "Colchicine",
      "Allopurinol",
      "Ibuprofen"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://medlineplus.gov/druginfo/meds/a601011.html",
    "rationale": "Alendronate, a bisphosphonate, is the first-line treatment for osteoporosis, which is likely contributing to the patient’s vertebral fractures and height loss. It helps prevent further bone loss and reduces fracture risk. Colchicine is used for gout. Allopurinol treats hyperuricemia, and ibuprofen addresses pain but does not treat the underlying cause of bone fragility.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following otic medications is safe for a perforated tympanic membrane?",
    "answers": [
      "Neomycin sulfate ear drops",
      "Tobramycin ear drops",
      "Ofloxacin ear drops",
      "Gentamicin ear drops"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.merckmanuals.com/professional/ear-nose-and-throat-disorders/inner-ear-disorders/drug-induced-ototoxicity",
    "rationale": "Ofloxacin is a fluoroquinolone antibiotic that is considered safe for use in patients with a perforated tympanic membrane because it is non-ototoxic. Neomycin, Tobramycin , and Gentamicin are aminoglycosides, which are ototoxic and can cause hearing loss if they enter the middle ear through a perforation.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient with Bell’s palsy has minimal improvement after a 10-day course of high-dose steroids. You now suspect Herpes Simplex Virus 1 (HSV-1). What will you prescribe?",
    "answers": [
      "Acyclovir",
      "Trimethoprim-sulfamethoxazole (Bactrim)",
      "Penicillin",
      "Ciprofloxacin"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK542180",
    "rationale": "Bell’s palsy is often linked to reactivation of HSV-1. Acyclovir is an antiviral effective against HSV-1 and is commonly used when viral involvement is suspected. The other options target bacterial infections.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which drug class puts a patient at risk for an Achilles tendon rupture?",
    "answers": [
      "Penicillins",
      "Fluoroquinolones",
      "Cephalosporins",
      "Sulfonamides"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/755922",
    "rationale": "Fluoroquinolones, such as ciprofloxacin and levofloxacin, are associated with an increased risk of Achilles tendon rupture, especially in older adults or those taking corticosteroids. This risk is not observed with penicillins, cephalosporins, or sulfonamides, which do not typically affect tendon health.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your patient's DEXA scan reveals a T-score of -2.8. Which medication should be your first-line treatment option to treat this patient’s condition?",
    "answers": [
      "Bisphosphonates",
      "Selective estrogen receptor modulators (SERMs)",
      "Hormone replacement therapy",
      "Calcium with Vitamin D"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/treatments/24753-bisphosphonates",
    "rationale": "A T-score of -2.8 indicates osteoporosis, and bisphosphonates are the first-line treatment due to their efficacy in reducing fracture risk and increasing bone density. SERMs may be used in postmenopausal women but are generally second-line. Hormone replacement therapy is less commonly used due to risks such as cardiovascular events and cancer. Calcium with Vitamin D supports bone health but is not sufficient as the primary treatment for osteoporosis.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A diabetic patient uses a sliding scale and long-acting insulin to manage her type 1 diabetes. Which insulin is best for addressing elevated blood glucose between meals?",
    "answers": [
      "NPH and regular insulin",
      "Glargine (Lantus)",
      "Lispro (Humalog)",
      "NPH"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK507840",
    "rationale": "Lispro (Humalog) is a rapid-acting insulin ideal for correcting elevated blood glucose between meals due to its quick onset of action. Glargine is a long-acting insulin used for basal control, not for rapid correction. NPH is intermediate-acting, and combining it with regular insulin is outdated and less precise than using rapid-acting insulin like Lispro for correction.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The nurse practitioner should prescribe a minimum of _____ antibiotic regimen for a 75-year-old female with a complicated urinary tract infection.",
    "answers": [
      "3 days",
      "5 days",
      "7 days",
      "14 days"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK436013/#:~:text=typically%2010%20to%2014%20days.",
    "rationale": "For a complicated urinary tract infection (UTI) in older adults, a minimum 7-day course of antibiotics is recommended. Shorter regimens like 3 days are suitable for uncomplicated UTIs. In some cases, a longer course may be required depending on the severity.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which of the following is not a side effect of hydrochlorothiazide?",
    "answers": [
      "Hyperglycemia",
      "Hypokalemia",
      "Hypertriglyceridemia",
      "Hypernatremia"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://ro.co/health-guide/hydrochlorothiazide-side-effects/#:~:text=This%20medication%20may%20cause%20low%20sodium%20levels%20(hyponatremia)",
    "rationale": "Hydrochlorothiazide commonly causes hyperglycemia (high blood sugar), hypokalemia (low potassium), and hypertriglyceridemia (high blood fat, triglycerides) as side effects. However, it leads to hyponatremia (low sodium), not hypernatremia, because it promotes sodium excretion through urine.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your patient presents with a sudden headache, sore throat, cough, wheezing, and a fever of 100.6°F. On exam, you hear rhonchi, crackles, and wheezing. A chest X-ray shows patchy infiltrates. The patient completed antibiotics for strep throat two months ago. What is the most appropriate treatment?",
    "answers": [
      "Azithromycin",
      "Levofloxacin",
      "Amoxicillin-clavulanate (Augmentin)",
      "Moxifloxacin"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://pubmed.ncbi.nlm.nih.gov/20455679/",
    "rationale": "Because the patient received antibiotic treatment within the past three months, levofloxacin should be prescribed. Azithromycin would be appropriate if the patient hadn't received recent antibiotics, and the others would be appropriate if the patient had other comorbid conditions such as diabetes or heart disease.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 6-year-old child presents with burning and frequent urination. A urinalysis is positive for gram-negative bacteria. Which antibiotic is most appropriate for treating this patient?",
    "answers": [
      "Ciprofloxacin",
      "Trimethoprim-Sulfamethoxazole",
      "Levofloxacin",
      "Doxycycline"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.drugs.com/dosage/bactrim.html",
    "rationale": "Bactrim DS (trimethoprim-sulfamethoxazole) is effective, commonly used, and safe for pediatric patients when prescribed in age-appropriate doses. Ciprofloxacin and levofloxacin, while effective against gram-negative bacteria, are generally reserved for more serious infections in children due to potential risks, such as damage to growing cartilage. Doxycycline is not typically used in children under eight due to its association with permanent teeth discoloration. Quinolones should not be given to patients younger than 18 years old.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 72-year-old patient presents with an acute gout flare-up and is seeking prompt relief. What should the nurse practitioner prescribe?",
    "answers": [
      "Celecoxib",
      "Colchicine",
      "Steroid injection",
      "Calcium gluconate"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://pubmed.ncbi.nlm.nih.gov/21849262/#:~:text=Evidence%20suggests%20that%20colchicine%2C%20NSAIDs%2C%20and%20corticosteroids%20are%20all%20efficacious%20in%20the%20treatment%20of%20acute%20gout%20in%20the%20older%20adult.",
    "rationale": "Colchicine is a well-established treatment for acute gout flares, providing quick relief by reducing inflammation caused by urate crystals. It is effective in elderly patients when renal function is monitored, as it can cause gastrointestinal side effects at higher doses. Celecoxib, a COX-2 inhibitor, may provide pain relief but is not first-line for acute gout flares. Steroid injections are an option for localized relief but are more invasive and typically used if colchicine or NSAIDs are contraindicated. Calcium gluconate is inappropriate for treating gout, as it is used for calcium replacement, not inflammation management.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The nurse practitioner should advise patients on warfarin to avoid consuming kale due to:",
    "answers": [
      "Elevated vitamin K levels in green leafy vegetables, which decreases INR.",
      "Too much ascorbic acid, which can counteract warfarin.",
      "High fiber content that decreases warfarin’s absorption.",
      "Vitamins that can bind with and inactivate warfarin."
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/thrombophlebitis/expert-answers/warfarin/faq-20058443",
    "rationale": "Kale, along with other green leafy vegetables, is rich in vitamin K, which can interfere with the anticoagulant effect of warfarin by promoting blood clotting. This leads to a decreased INR (International Normalized Ratio), making warfarin less effective and increasing the risk of clot formation. Ascorbic acid (vitamin C), fiber, and other vitamins do not significantly affect warfarin’s efficacy or absorption.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which class of drugs is contraindicated in patients with a sulfa allergy?",
    "answers": [
      "Potassium-sparing diuretics",
      "Direct renin inhibitors",
      "Beta-blockers",
      "Thiazide diuretics"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK532918/#:~:text=Thiazide%20diuretics%20are%20contraindicated%20for%20use%20in%20patients%20with%20anuria%20and%20sulfonamide%20allergies.",
    "rationale": "Thiazide diuretics are contraindicated in patients with a known sulfa allergy because they contain a sulfonamide group, which can trigger allergic reactions. Though the risk is low, it is significant enough to warrant caution. Potassium-sparing diuretics, direct renin inhibitors, and beta-blockers do not contain sulfonamide groups and are generally safe for patients with sulfa allergies.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient with benign prostatic hypertrophy (BPH) and hypertension can treat both conditions with which medication?",
    "answers": [
      "Silodosin (Rapaflo)",
      "Terazosin (Hytrin)",
      "Phenoxybenzamine (Dibenzyline)",
      "Finasteride (Proscar)"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK545208/",
    "rationale": "Terazosin is an alpha-1 blocker that effectively treats both benign prostatic hypertrophy (BPH) by relaxing the smooth muscle of the prostate and bladder neck, and hypertension by causing vasodilation, which lowers blood pressure. Silodosin is selective for the alpha-1 receptors in the prostate but does not significantly affect blood pressure. Phenoxybenzamine is a non-selective alpha blocker used for conditions like pheochromocytoma, not typically for BPH or hypertension. Finasteride reduces prostate size by inhibiting 5-alpha-reductase.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 3-year-old patient is diagnosed with impetigo and requires antibiotic treatment. Which of the following antibiotics is contraindicated for this patient?",
    "answers": [
      "Mupirocin",
      "Tetracycline",
      "Amoxicillin",
      "Dicloxacillin"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK549905/#:~:text=Tetracycline%20usage%20is%20also%20associated%20with%20teeth%20discoloration%20in%20children%20under%20the%20age%20of%20eight.",
    "rationale": "Tetracycline is contraindicated in children under 8 years old due to its potential to cause permanent discoloration of teeth and impact bone development. For treating impetigo, mupirocin is often used topically, while amoxicillin and dicloxacillin are effective oral antibiotics for systemic infections caused by Staphylococcus aureus or Streptococcus pyogenes.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "An 85-year-old patient reports experiencing skipped beats, dizziness, and shortness of breath. Her heart rate is 120 bpm and irregular. In addition to ordering an EKG and echocardiogram, which medication is the nurse practitioner most likely to prescribe?",
    "answers": [
      "12.5 mg chlorthalidone daily",
      "25 mg chlorthalidone daily",
      "2.5 mg warfarin daily",
      "5 mg warfarin daily"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2006/0301/p898.html/#:~:text=They%20add%20that%20the%20practice%20of%20starting%20warfarin%20therapy%20at%205%20mg%20per%20day%20would%20result%20in%20overanticoagulating%20a%20significant%20number%20of%20older%20patients",
    "rationale": "In elderly patients, such as this 85-year-old, the risk of bleeding with anticoagulation therapy is increased due to age-related changes in drug metabolism and a higher likelihood of comorbidities. As a result, starting warfarin at a lower dose, such as 2.5 mg daily, is prudent to minimize bleeding risk while still providing anticoagulation to prevent thromboembolic events associated with atrial fibrillation. Chlorthalidone (a, b) is a diuretic used for hypertension, but it does not address the anticoagulation needs in atrial fibrillation. 5 mg warfarin (d) is the standard initial dose but may be too high for elderly patients at risk for bleeding.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Tinea unguium (onychomycosis) is primarily treated with which of the following medications?",
    "answers": [
      "PO terbinafine (Lamisil)",
      "Azelaic acid",
      "Topical metronidazole (MetroGel)",
      "10% efinaconazole solution (Jublia)"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10922011/#:~:text=terbinafine%20is%20now%20recommended%20as%20first-line%20onychomycosis%20treatment%20by%20the%20British%20Association%20of%20Dermatologists",
    "rationale": "PO terbinafine is the first-line treatment for onychomycosis due to its high efficacy in eradicating the fungal infection that affects the nails. It is administered orally because topical treatments generally have poor nail penetration and are less effective in treating this condition.<ul><li>Azelaic acidis used for acne and rosacea, not fungal infections.</li><li>Topical metronidazole is an antibiotic/antiprotozoal, primarily used for rosacea and certain bacterial infections.</li><li>Efinaconazole solution is a topical antifungal but is typically less effective than oral terbinafine for onychomycosis.</li></ul>",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Extrapyramidal symptoms (EPS) are most likely to occur with which of the following medications?",
    "answers": [
      "Citalopram",
      "Sertraline",
      "Haloperidol",
      "Aripiprazole"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.nami.org/about-mental-illness/treatments/mental-health-medications/types-of-medication/haloperidol-haldol/#:~:text=Symptoms%20of%20EPS%20include%20restlessness%2C%20tremor%2C%20and,cannot%20control%2C%20often%20starting%20in%20the%20mouth",
    "rationale": "Haloperidol, a first-generation (typical) antipsychotic, is strongly associated with extrapyramidal symptoms (EPS), including tremors, rigidity, bradykinesia, and tardive dyskinesia, due to its potent dopamine D2 receptor blockade. These side effects are more common with typical antipsychotics compared to second-generation (atypical) antipsychotics. Citalopram and sertraline are selective serotonin reuptake inhibitors (SSRIs), primarily used to treat depression and anxiety. Aripiprazole, an atypical antipsychotic, has a lower risk of EPS compared to typical antipsychotics like haloperidol.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The NP should recommend ______ as the first line treatment for mild allergic conjunctivitis.",
    "answers": [
      "NSAIDs",
      "Ophthalmic steroids",
      "PO antihistamines",
      "Ophthalmic antihistamines or mast cell stabilizers"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5010431/",
    "rationale": "This combination provides both immediate and long-term relief of symptoms like itching, redness, and tearing. NSAIDs may reduce inflammation but are not the primary treatment for allergic conjunctivitis. Ophthalmic steroids are reserved for more severe cases due to the risk of side effects like increased intraocular pressure. PO antihistamines can be used for systemic allergy symptoms but are not as effective for direct eye symptoms as topical treatments.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "How should you begin category C (high risk, few symptoms) COPD treatment?",
    "answers": [
      "LAMA",
      "SABA",
      "LABA",
      "SAMA"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.uspharmacist.com/article/summarizing-the-2021-updated-gold-guidelines-for-copd/#:~:text=Maintenance%20Treatment%20of%20COPD",
    "rationale": "For category C COPD (high risk with few symptoms), the long-acting muscarinic agonist (LAMA), such as tiotropium, is the recommended first-line treatment. SAMA would be for category A, LABA for B. SABA and SAMA are used for short-term symptom relief. LABA can be considered as an alternative or add-on therapy.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient’s nucleic acid amplification test (NAAT) is positive for chlamydia. Which regimen should the nurse practitioner prescribe for this patient?",
    "answers": [
      "500 mg ceftriaxone IM x 1 dose",
      "100 mg doxycycline PO, BID x 7 days",
      "2.4 million units benzathine penicillin IM, x 1",
      "300 mg clindamycin PO BID x 7 days"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm/#:~:text=Recommended%20Regimens%20for%20Chlamydial%20Infection%20Among%20Adolescents%20and%20Adults",
    "rationale": "For treating chlamydial infection, doxycycline 100 mg PO BID for 7 days is the preferred regimen, especially in uncomplicated cases. It has shown higher efficacy, particularly in rectal chlamydia, compared to single-dose therapies. Ceftriaxone is used for gonorrhea, often in conjunction with chlamydia treatment but is not a treatment for chlamydia alone. Benzathine penicillin for syphilis. Clindamycin is not effective for treating chlamydia.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 6-year-old presents with intense itching, especially at night, and small red bumps between the fingers and on the wrists. The parents report that the itching started about two weeks ago and has progressively worsened. There are similar symptoms in other family members. Based on this presentation, what is the most likely diagnosis?",
    "answers": [
      "Eczema",
      "Scabies",
      "Impetigo",
      "Contact dermatitis"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/scabies/signs-symptoms/index.html",
    "rationale": "Scabies is a highly contagious parasitic skin infestation caused by the <em>Sarcoptes scabiei</em> mite. Classic symptoms include intense itching (especially at night) and small, red, raised bumps or burrows in characteristic areas such as between the fingers, wrists, and other warm areas of the body. The presence of itching among family members supports the diagnosis due to its contagious nature. Eczema typically presents with dry, scaly skin and less specific patterns. Impetigo involves honey-colored crusted lesions. Contact dermatitis is linked to recent contact with allergens or irritants, often with clear exposure history.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "A 6-year-old presents with intense itching, particularly at night, and small red bumps between the fingers. The nurse practitioner suspects scabies. How is the diagnosis typically confirmed?",
    "answers": [
      "Blood test to detect antibodies",
      "Skin biopsy for histological examination",
      "Microscopic examination of skin scraping",
      "Swab of the affected area for bacterial culture"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/scabies/about/index.html#cdc_disease_basics_testing_screening-diagnosis",
    "rationale": "To confirm a diagnosis of scabies, the most common method is a microscopic examination of a skin scraping. The provider scrapes the skin or uses a needle to extract material from a burrow to look for mites, mite eggs, or feces (scybala). This method directly identifies the presence of Sarcoptes scabiei, the mite responsible for scabies. Blood tests are not useful in diagnosing scabies. Skin biopsy is unnecessary when scabies is suspected. Swabs are used for bacterial infections, such as impetigo.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "The nurse practitioner should prescribe which medication to treat scabies?",
    "answers": [
      "Topical permethrin",
      "PO ketoconazole",
      "PO griseofulvin",
      "Topical nystatin"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/drugs-supplements/permethrin-topical-route/proper-use/drg-20065448",
    "rationale": "Topical permethrin 5% is the first-line treatment for scabies. It is applied from the neck down and left on overnight to eradicate the mites and their eggs. The others are for fungal and yeast infections.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 57-year-old female patient, recently diagnosed with irritable bowel syndrome (IBS), reports intermittent constipation over the past several months. Which medication should be included in her treatment plan?",
    "answers": [
      "Amitriptyline",
      "Lubiprostone",
      "Alosetron",
      "Dicyclomine"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://medlineplus.gov/druginfo/meds/a607034.html",
    "rationale": "Lubiprostone is a chloride channel activator used to treat constipation-predominant IBS (IBS-C). It increases intestinal fluid secretion and motility, helping to alleviate constipation. Amitriptyline is a tricyclic antidepressant often used to treat IBS with diarrhea due to its anticholinergic effects, which can worsen constipation. Alosetron is used to treat IBS with diarrhea (IBS-D) in women, not IBS-C. Dicyclomine is an antispasmodic used to treat abdominal pain in IBS but does not address constipation and may worsen it due to its anticholinergic effects.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the first-line treatment for polymyalgia rheumatica (PMR)?",
    "answers": [
      "Etanercept (Enbrel)",
      "PO prednisone",
      "Methotrexate",
      "Indomethacin"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.nhs.uk/conditions/polymyalgia-rheumatica/treatment/",
    "rationale": "The first-line treatment for polymyalgia rheumatica (PMR) is oral prednisone at a low to moderate dose, typically 10-20 mg daily. PMR responds rapidly to corticosteroids, which reduce inflammation and alleviate symptoms such as muscle pain and stiffness. Etanercept is a TNF inhibitor used for autoimmune conditions like rheumatoid arthritis. Methotrexate may be used as a steroid-sparing agent in some cases. Indomethacin is a nonsteroidal anti-inflammatory drug (NSAID) used for pain management.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A patient presents with pain in the wrist and thumb. The nurse practitioner performs Finkelstein’s test, which is positive. What does a positive Finkelstein’s test indicate?",
    "answers": [
      "Carpal tunnel syndrome",
      "De Quervain’s tenosynovitis",
      "Lateral epicondylitis",
      "Trigger finger"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://en.wikipedia.org/wiki/Finkelstein%27s_test",
    "rationale": "A positive Finkelstein’s test indicates De Quervain’s tenosynovitis, an inflammation of the tendons at the base of the thumb (the abductor pollicis longus and extensor pollicis brevis). This condition causes pain with thumb movements and grasping. The test is performed by having the patient make a fist with the thumb tucked inside, followed by ulnar deviation of the wrist, which reproduces pain if the condition is present. Carpal tunnel syndrome affects the median nerve and is diagnosed with different tests like Tinel’s or Phalen’s. Lateral epicondylitis involves the elbow. Trigger finger involves locking or catching of a finger joint, unrelated to thumb tendon inflammation.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "FALSE"
  },
  {
    "prompt": "What should be the first-line treatment for a patient diagnosed with De Quervain’s tenosynovitis?",
    "answers": [
      "Oral prednisone",
      "Ibuprofen",
      "Lidocaine injection",
      "Surgery"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK442005/#article-20270.s8",
    "rationale": "The first-line treatment for De Quervain’s tenosynovitis is ibuprofen or other NSAIDs, which help reduce pain and inflammation. Since the condition can be self-limiting, conservative treatments like NSAIDs are typically used initially. Lidocaine injection provides temporary relief but is not first-line treatment. Surgery is considered only after conservative treatments fail to provide relief.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The nurse practitioner knows that erythema migrans is often an indicator of early Lyme disease. Which of the following antibiotics is recommended for this condition?",
    "answers": [
      "Dicloxacillin",
      "Ciprofloxacin",
      "Doxycycline",
      "Erythromycin"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.uptodate.com/contents/lyme-disease-treatment-beyond-the-basics#H3",
    "rationale": "Doxycycline is the recommended antibiotic for early Lyme disease, particularly in adults and children over 8 years old. Dicloxacillin is used for staphylococcal infections. Ciprofloxacin is not recommended for Lyme disease due to its limited efficacy against Borrelia. Erythromycin may be used in patients who cannot tolerate doxycycline, but it is less effective.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Over the past few months, your patient with a history of cardiac disease and nephrolithiasis has experienced frequent headaches. After trying Tylenol and ibuprofen without relief, which medication should you recommend?",
    "answers": [
      "Topamax",
      "Imitrex",
      "Atenolol",
      "Amitriptyline"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.healthline.com/health/migraine/amitriptyline-migraine",
    "rationale": "Amitriptyline, a tricyclic antidepressant, is often used for chronic headache prevention, particularly tension-type headaches or migraines, and can be a good option when over-the-counter medications fail. Given the patient’s history of cardiac disease and nephrolithiasis, careful consideration is needed, and amitriptyline has a lower risk of complications in these conditions compared to other options. Topamax is an effective migraine preventative, but it is not ideal for a patient with nephrolithiasis, as it may increase the risk of kidney stones. Imitrex is used for acute migraine relief but is contraindicated in patients with cardiac disease due to vasoconstrictive effects. Atenolol is a beta-blocker that can be used for migraine prevention but is typically less effective than amitriptyline for headache management.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "An 8-year-old with acute otitis media (AOM) presents after a few days of watchful waiting and palliative treatment. His condition has worsened, with a fever of 101.8°F. He has not had antibiotic therapy in the past three months and has no known allergies. Which medication should be part of this patient’s treatment plan?",
    "answers": [
      "Cefaclor",
      "Amoxicillin",
      "Erythromycin",
      "Azithromycin"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK470332/#:~:text=Treatment%20%2F%20Management&text=When%20a%20bacterial%20etiology%20is,concentration%20in%20the%20middle%20ear.",
    "rationale": "Amoxicillin is the first-line antibiotic treatment for acute otitis media (AOM) in children without recent antibiotic use or allergies. It is highly effective against common pathogens such as Streptococcus pneumoniae and Haemophilus influenzae. Cefaclor is a second-line cephalosporin used in cases of penicillin allergy or amoxicillin failure. Erythromycin and azithromycin are macrolides, generally reserved for patients with penicillin allergies, but they are less effective against the common organisms that cause AOM.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What antibiotic is most appropriate to treat an unvaccinated infant diagnosed with whooping cough?",
    "answers": [
      "Penicillins",
      "Macrolides",
      "Fluoroquinolones",
      "Cephalosporins"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/pertussis/hcp/clinical-care/index.html",
    "rationale": "Treatment options vary by age. Macrolides (erythromycin, clarithromycin, and azithromycin) are preferred for treating pertussis in persons 1 month of age and older. An alternative to macrolides for persons 2 months of age and older is trimethoprim-sulfamethoxazole. Penicillins are not typically used for pertussis. Fluoroquinolones are not recommended for use in infants due to concerns about side effects on developing cartilage. Cephalosporins are not the preferred treatment for whooping cough.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "An elderly gentleman is brought to the clinic with complaints of urinary hesitancy, frequency, and dysuria. He is diagnosed with complicated cystitis. Which antibiotic should the nurse practitioner prescribe?",
    "answers": [
      "3g Fosfomycin x 1",
      "400 mg Cefixime BID x 10 days",
      "TMP-SMX BID x 3 days",
      "Nitrofurantoin BID x 5 days"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK436013/#article-30858.s8",
    "rationale": "An elderly patient with complicated cystitis needs to be treated for at least seven days with a cephalosporin such as Cefixime. Uncomplicated cystitis can be treated with one of the other antibiotic options.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A teenage girl presents with eye pain, excessive tearing, and redness. She admits to occasionally sleeping with her contact lenses. Which treatment should the nurse practitioner prescribe after observing a small circular lesion on her cornea using a slit lamp?",
    "answers": [
      "PO steroid",
      "PO antibiotic",
      "Ophthalmic steroid",
      "Ophthalmic antibiotic"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK574509/#:~:text=Antibacterials%20are%20the%20mainstay%20of,medical%20treatment%20require%20therapeutic%20keratoplasty.",
    "rationale": "The symptoms and findings suggest bacterial keratitis, likely due to improper contact lens use. The ophthalmic antibiotic is the appropriate treatment to address the infection and prevent further complications, such as corneal scarring or vision loss. Depending on the severity of the infection, drop frequency can range from around four times a day to every 30 minutes, even during the night. Sometimes oral antibiotics are used as a supplement. PO steroid and ophthalmic steroid can worsen infections and are contraindicated in bacterial keratitis.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 25-year-old patient presents with a two-year history of alternating periods of deep depression and heightened energy. He reports difficulty maintaining a job and is seeking help. What medication is best to treat his condition?",
    "answers": [
      "Haldol",
      "Phenelzine",
      "Valium",
      "Lithium carbonate"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/9294-bipolar-disorder#management-and-treatment",
    "rationale": "The patient’s symptoms suggest bipolar disorder. Lithium carbonate is a first-line mood stabilizer used to treat both manic and depressive episodes in bipolar disorder, and it is effective in preventing future episodes. Haldol is an antipsychotic used for acute psychosis. Phenelzine is a monoamine oxidase inhibitor (MAOI) used for depression. Valium is a benzodiazepine used for anxiety.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Your 78-year-old patient, who is in good health, has developed systolic hypertension that has not improved with lifestyle changes. Which medication should you recommend?",
    "answers": [
      "40 mg Propranolol BID",
      "40 mg Spironolactone QPM",
      "12.5 mg Hydrochlorothiazide daily",
      "1 mg Prazosin TID"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2005/0201/p469.html",
    "rationale": "Hydrochlorothiazide, a thiazide diuretic, is recommended as first-line treatment for isolated systolic hypertension in older adults. It helps reduce blood pressure by promoting sodium and water excretion and has been shown to improve outcomes in elderly patients with hypertension. Propranolol is a non-selective beta-blocker, which is not typically the first choice for systolic hypertension, particularly in elderly patients, as it may have unfavorable side effects. Spironolactone is an aldosterone antagonist, used more for heart failure and resistant hypertension. Prazosin is an alpha-blocker, used primarily for benign prostatic hyperplasia (BPH).",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the recommended regimen for uncomplicated gonorrhea in a patient without allergies?",
    "answers": [
      "PO ciprofloxacin BID",
      "Tinidazole 2g PO x 1 dose",
      "Benzathine penicillin IM x 1",
      "Ceftriaxone 500 mg IM x 1"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm/#:~:text=Recommended%20Regimen%20for%20Uncomplicated%20Gonococcal%20Infection",
    "rationale": "The CDC’s recommended first-line treatment for uncomplicated gonorrhea in patients without allergies is Ceftriaxone 500 mg IM in a single dose. This regimen is effective in treating <em>Neisseria gonorrhoeae</em> and addresses increasing antibiotic resistance. Ciprofloxacin is no longer recommended due to widespread resistance. Tinidazole is used to treat trichomoniasis. Benzathine penicillin is used for treating syphilis, not gonorrhea.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the recommended treatment for uncomplicated chlamydia in a patient without allergies?",
    "answers": [
      "Doxycycline 100 mg PO BID x 7 days",
      "Metronidazole 500 mg PO BID x 7 days",
      "Amoxicillin 500 mg PO TID x 7 days",
      "Ceftriaxone 500 mg IM x 1 dose"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm",
    "rationale": "The CDC recommends Doxycycline 100 mg PO BID for 7 days as the first-line treatment for uncomplicated chlamydia infections. Metronidazole is used for trichomoniasis or bacterial vaginosis. Amoxicillin can be used for chlamydia in pregnant women but is not the first-line treatment for non-pregnant patients. Ceftriaxone is used for gonorrhea.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "What is the recommended treatment for trichomoniasis in a female patient without allergies?",
    "answers": [
      "Doxycycline 100 mg PO BID x 7 days",
      "Azithromycin 1 g PO x 1 dose",
      "Metronidazole 500 mg PO BID x 7 days",
      "Ceftriaxone 500 mg IM x 1 dose"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/std/treatment-guidelines/trichomoniasis.htm",
    "rationale": "For trichomoniasis in female patients, the CDC recommends Metronidazole 500 mg PO BID for 7 days as the preferred treatment. This regimen is highly effective in eradicating Trichomonas vaginalis. Doxycycline and Azithromycin are used for chlamydia, Ceftriaxone for gonorrhea.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 25-year-old female presents with pain during urination, increased frequency, and mild low pelvic pain. A dipstick test shows moderate nitrates and leukocytes. What is the most appropriate regimen?",
    "answers": [
      "Bactrim BID x 3 days",
      "Bactrim BID x 5 days",
      "Bactrim BID x 7 days",
      "Bactrim BID x 10 days"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.webmd.com/a-to-z-guides/what-are-antibiotics-for-uti/#:~:text=How%20Long%20to%20Take%20Antibiotics%20for%20UTI%20Treatment",
    "rationale": "For uncomplicated urinary tract infections (UTIs), the recommended treatment is Bactrim (trimethoprim-sulfamethoxazole) BID for 3 days. This short course is effective in eradicating most causative bacteria, such as Escherichia coli, while minimizing the risk of antibiotic resistance. Longer courses, are not typically necessary for uncomplicated cases.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The nurse practitioner notices a few diffuse pink/brown pigmented areas on the back of her patient and suspects a mild case of tinea versicolor. Which medication should be the first-line treatment for this condition?",
    "answers": [
      "PO fluconazole (Diflucan)",
      "PO ketoconazole (Nizoral)",
      "Topical selenium sulfide",
      "Topical tacrolimus (Protopic)"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/tinea-versicolor/diagnosis-treatment/drc-20378390#self-care",
    "rationale": "Topical selenium sulfide is often effective in treating mild <em>Tinea versicolor</em>, a superficial fungal infection caused by <em>Malassezia species</em>, by reducing the colonization of the yeast on the skin. PO fluconazole and PO ketoconazole can be used in more severe or widespread cases. Topical tacrolimus is an immunosuppressive medication used to treat eczema and other inflammatory skin conditions.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "The nurse practitioner notices diffuse pink/brown pigmented areas on the back, torso, upper chest, and arms of her patient. The condition has not improved with OTC antifugal treatment. A skin scraping test using potassium hydroxide (KOH) reveals hyphae and budding cells under the microscope. Which medication should the NP prescribe next?",
    "answers": [
      "Topical miconazole",
      "PO fluconazole (Diflucan)",
      "PO terbinafine",
      "Topical tacrolimus (Protopic)"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.mayoclinic.org/diseases-conditions/tinea-versicolor/diagnosis-treatment/drc-20378390",
    "rationale": "For severe or refractory cases of tinea versicolor that have not responded to topical treatments, oral fluconazole is an appropriate next step. Oral antifungals are effective in treating widespread or persistent infections by targeting the yeast systemically. Topical miconazole may be ineffective if the patient has not responded to other topical treatments. PO terbinafine is more effective against dermatophytes. Topical tacrolimus is not used for fungal infections, as it is an immunosuppressant for inflammatory conditions like eczema.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 45-year-old patient presents to an urgent care clinic with a fever of 104°F, vomiting, and a petechial rash on the hands and feet that has progressed to the torso over the past three days. What treatment should be prescribed?",
    "answers": [
      "2g Ceftriaxone (Rocephin) IV q12 hours",
      "PO Rifampin q12 hours, x2 days",
      "PO Doxycycline BID x10 days",
      "Cephalexin (Keflex) QID x 10 days"
    ],
    "correct": 2,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.cdc.gov/rocky-mountain-spotted-fever/hcp/clinical-care/index.html#:~:text=Doxycycline%20is%20the%20treatment%20of,years%20old%20and%20pregnant%20people.",
    "rationale": "The patient’s presentation of high fever, vomiting, and petechial rash suggests Rocky Mountain spotted fever (RMSF), a serious tick-borne illness caused by <em>Rickettsia rickettsii</em>. The recommended treatment is doxycycline, regardless of the patient’s age, as it is the most effective antibiotic for RMSF. Ceftriaxone is used for bacterial meningitis or severe infections like gonorrhea. Rifampin is used for tuberculosis and Cephalexin is a cephalosporin used for skin and soft tissue infections.",
    "Age Group": "Older Adult and Elderly",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 10-year-old girl with a sore throat tests positive for strep on a culture. She has a severe allergy to penicillins and reports vomiting after taking erythromycin. Which of the following antibiotics is the best choice?",
    "answers": [
      "Azithromycin",
      "Cephalexin",
      "Levofloxacin (Levaquin)",
      "Cefuroxime (Ceftin)"
    ],
    "correct": 0,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.aafp.org/pubs/afp/issues/2013/0901/p338.html",
    "rationale": "Azithromycin is a macrolide antibiotic that is effective against Streptococcus pyogenes (the bacteria responsible for strep throat) and is well-tolerated by most patients. It is a suitable option for this patient who cannot take penicillins or erythromycin. Cephalexin (Keflex) and Cefuroxime (Ceftin) are cephalosporins, which can have cross-reactivity with penicillins, especially in patients with severe penicillin allergies. Levofloxacin (Levaquin) is a <strong>fluoroquinolone, which is not typically used for pediatric strep throat</strong> due to its side effects and risk profile.",
    "Age Group": "Child (6-12)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Which class of antihypertensive medication is most appropriate to prescribe to a post-menopausal woman?",
    "answers": [
      "Calcium channel blockers",
      "Thiazide diuretics",
      "ACE inhibitors",
      "ARBs"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/books/NBK554579/",
    "rationale": "Thiazide diuretics are often recommended as first-line treatment for hypertension in post-menopausal women. They have been shown to reduce the risk of osteoporosis by promoting calcium retention, which is a beneficial effect in this population. Thiazides are also effective in reducing blood pressure in this age group. Calcium channel blockers, ACE inhibitors, and ARBs are also effective antihypertensive medications, but thiazide diuretics offer the additional benefit of reducing fracture risk, making them a preferable choice for post-menopausal women.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "Older patients should be started on low doses of levothyroxine because of the drug’s effects on which system?",
    "answers": [
      "Central nervous system",
      "Cardiac",
      "Renal",
      "Hepatic"
    ],
    "correct": 1,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8006441/",
    "rationale": "Levothyroxine can increase metabolic activity, which may lead to increased oxygen demand and stress on the cardiac system. Older patients, especially those with underlying cardiovascular disease, are more susceptible to complications such as arrhythmias, angina, or heart failure if started on high doses. Therefore, starting at a low dose minimizes the risk of overstimulating the heart.",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  },
  {
    "prompt": "A 77-year-old female’s DEXA scan shows a T-score of -1.8. Which pharmacological intervention is most appropriate for treating this?",
    "answers": [
      "Selective estrogen receptor modulator (Tamoxifen)",
      "Bisphosphonates (Boniva)",
      "Hormone replacement therapy",
      "Calcium with vitamin D"
    ],
    "correct": 3,
    "userChoice": -1,
    "bookmarked": 0,
    "source": "https://my.clevelandclinic.org/health/diseases/21855-osteopenia#management-and-treatment",
    "rationale": "A T-score of -1.8 indicates osteopenia, not osteoporosis. For osteopenia, the best initial treatment includes calcium and vitamin D supplementation to support bone health and prevent further bone loss. Bisphosphonates are generally reserved for patients with osteoporosis (T-score ≤ -2.5) or higher fracture risk. Selective estrogen receptor modulators and hormone replacement therapy are options for postmenopausal women but are not typically first-line for osteopenia due to their risk profiles.<br><table border=\"1\"><tbody><tr><th>T-score</th><th>Result</th></tr><tr><td>-1.0 or higher</td><td>Normal</td></tr><tr><td>-2.5 to -1.01</td><td>Osteopenia</td></tr><tr><td>less than -2.5</td><td>Osteoporosis</td></tr></tbody></table>",
    "Age Group": "Elderly (65+)",
    "Pharmacology?": "TRUE"
  }
];
