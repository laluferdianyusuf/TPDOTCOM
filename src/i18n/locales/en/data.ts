export const contentEn = {
  impactStats: [
    {
      label: "Cases Supported",
      detail: "Since 2018 across 34 provinces",
    },
    {
      label: "Takedown Success Rate",
      detail: "Non-consensual intimate content removed",
    },
    {
      label: "People Reached Through Education",
      detail: "Digital literacy and security training",
    },
    {
      label: "Free & Confidential Services",
      detail: "Supported by public donations and independent partners",
    },
  ],

  kbgoCategories: {
    ncii: {
      name: "Non-Consensual Intimate Imagery (NCII)",
      shortDesc:
        "The distribution, threat of distribution, or publication of intimate photos or videos without the victim's consent (revenge porn / sextortion).",
      fullDesc:
        "Non-Consensual Intimate Imagery (NCII) is one of the most psychologically and socially damaging forms of technology-facilitated gender-based violence. Perpetrators distribute or threaten to distribute sexually explicit visual material to extort, humiliate, or coerce victims.",
      examples: [
        "An ex-partner threatens to share private photos with family members or colleagues if the relationship ends.",
        "An intimate video call recording is shared without consent in Telegram messaging groups or online forums.",
        "Money or additional content is demanded in exchange for not exposing previously obtained material (sextortion).",
      ],
      legalBasis: [
        "Law No. 12 of 2022 on Sexual Violence Crimes (UU TPKS), Article 14 paragraph (1) letters a and b (penalties may include imprisonment and fines, subject to the applicable provisions).",
        "Article 27 paragraph (1) in conjunction with Article 45 paragraph (1) of Law No. 1 of 2024 on the Electronic Information and Transactions Law (UU ITE).",
      ],
      riskLevel: "Critical",
      immediateActions: [
        "DO NOT comply with the perpetrator's demands for money or additional content.",
        "Secure evidence, including complete screenshots showing account names, profile URLs, dates, and times.",
        "Use StopNCII.org or Take It Down to create a digital fingerprint (hash) without uploading the original image.",
        "Contact the TPDcom Hotline immediately for emergency assistance and cross-platform content takedown support.",
      ],
    },

    doxing: {
      name: "Doxing & Digital Privacy Violations",
      shortDesc:
        "Publicly disclosing a victim's personal information, such as their address, phone number, identity card, or workplace, to encourage harassment.",
      fullDesc:
        "Doxing involves collecting and publishing someone's personal information online with malicious intent. It can trigger mass harassment, physical intimidation, and threats to the victim's safety in the offline world.",
      examples: [
        "Publishing a victim's WhatsApp number and photo on a dating website with a false description.",
        "Sharing a woman's activist's home address, family identities, and travel routes to intimidate her.",
        "Distributing identity card details and selfies on social media following an online conflict.",
      ],
      legalBasis: [
        "Law No. 27 of 2022 on Personal Data Protection (UU PDP), Articles 65 and 67.",
        "Article 29 in conjunction with Article 45B of the Electronic Information and Transactions Law (UU ITE), concerning threats of violence or intimidation.",
      ],
      riskLevel: "High",
      immediateActions: [
        "Set all social media accounts to private.",
        "Report doxing links and posts directly to the platform, citing personal data violations.",
        "Inform close family members and residential management so they can prepare for the possible arrival of unknown individuals.",
        "Submit an urgent request to Google to remove search results containing personal information.",
      ],
    },

    cyberstalking: {
      name: "Cyberstalking",
      shortDesc:
        "Repeated monitoring, GPS tracking, or intensive surveillance of someone's online activities without permission.",
      fullDesc:
        "Cyberstalking involves the use of technology, such as stalkerware, spyware, tracking features, or fake accounts, to monitor a victim's movements and activities. This can create persistent fear and prolonged anxiety.",
      examples: [
        "Secretly installing a tracking application on a partner's phone without their knowledge.",
        "A perpetrator repeatedly appears in the victim's comment sections, messages all of their followers, and tracks their location check-ins.",
        "Sending dozens of emails and messages every day, even after being blocked.",
      ],
      legalBasis: [
        "Article 14 paragraph (1) letter c of the Sexual Violence Crimes Law (UU TPKS), concerning electronic stalking.",
        "Article 30 of the Electronic Information and Transactions Law (UU ITE), concerning unauthorized access to electronic systems.",
      ],
      riskLevel: "High",
      immediateActions: [
        "Ask TPDcom's digital security team to audit your devices and check for stalkerware.",
        'Turn off location history and features such as "Find My" or family location sharing.',
        "Change passwords for all important accounts and enable two-factor authentication (2FA) using an authenticator app.",
        "Record message logs and the timing of harassment for inclusion in a police report.",
      ],
    },

    impersonation: {
      name: "Impersonation & Identity Fraud",
      shortDesc:
        "Creating fake accounts using a victim's name, photos, and reputation to damage their image or deceive others.",
      fullDesc:
        "Perpetrators create fake accounts on Instagram, X, TikTok, or messaging applications using a victim's photos and personal details. They may then send explicit content or fraudulent messages to the victim's friends and colleagues.",
      examples: [
        "A fake account using a lecturer's or student's identity offers paid sexual services.",
        "A cloned account is used to borrow money online in the victim's name.",
        "An activist's identity is misused to spread fabricated hate speech.",
      ],
      legalBasis: [
        "Article 35 in conjunction with Article 51 paragraph (1) of the Electronic Information and Transactions Law (UU ITE), concerning electronic information manipulation.",
        "Articles 310 and 311 of the Indonesian Criminal Code (KUHP), concerning defamation and slander.",
      ],
      riskLevel: "Moderate",
      immediateActions: [
        "Publish a brief clarification through your official account without sharing screenshots containing explicit material from the fake account.",
        'Ask trusted contacts to report the fake account using the "Impersonation / Pretending to be me" reporting option.',
        "Request an assistance letter from TPDcom to support escalation to Meta or TikTok representatives in Indonesia.",
      ],
    },

    "ai-deepfake": {
      name: "AI-Based Image Manipulation & Deepfakes",
      shortDesc:
        "Using artificial intelligence to place a victim's face into pornographic content or manipulated videos.",
      fullDesc:
        "Advances in generative AI are increasingly being misused to create fake nude images and videos (non-consensual deepfake pornography) from ordinary photos taken from victims' social media accounts.",
      examples: [
        "A victim's graduation or holiday photo is turned into a fake nude image using a Telegram bot or AI website.",
        "A short video featuring a victim's face is manipulated to match another person's adult video.",
        "A perpetrator threatens to make an AI-generated audio or video recording go viral as a form of extortion.",
      ],
      legalBasis: [
        "Articles 14 paragraphs (1) and (2) of the Sexual Violence Crimes Law (UU TPKS), concerning electronic-based sexual violence.",
        "Article 27 paragraph (1) in conjunction with Article 45 paragraph (1) of the Electronic Information and Transactions Law (UU ITE).",
      ],
      riskLevel: "Critical",
      immediateActions: [
        "Do not panic or negotiate emotionally with the perpetrator.",
        "Report the Telegram channel or bot group to TPDcom's crisis response team for coordinated takedown assistance.",
        'Report the content to Google using its "Remove sexually explicit non-consensual synthetic media" reporting form.',
        "Discuss legal options under the Sexual Violence Crimes Law (UU TPKS) with TPDcom's pro bono legal team.",
      ],
    },

    "cyber-harassment": {
      name: "Online Harassment & Bullying (Cyber Harassment)",
      shortDesc:
        "Sending abusive messages, unwanted sexual advances, coerced sexting, or coordinated sexist hate speech.",
      fullDesc:
        "This form of violence involves repeatedly bombarding victims with sexually explicit content, gender-based insults, rape threats, or unsolicited images of genitalia (cyber flashing).",
      examples: [
        "Sending an unsolicited image of genitalia (a dick pic) to a victim through direct messages.",
        "Repeatedly posting obscene comments and objectifying a victim's body during livestreams.",
        "Organized sexist comment attacks intended to silence a victim's opinions in public spaces.",
      ],
      legalBasis: [
        "Article 5 of the Sexual Violence Crimes Law (UU TPKS), concerning non-physical sexual harassment in electronic spaces.",
        "Article 27 paragraph (1) of the Electronic Information and Transactions Law (UU ITE).",
      ],
      riskLevel: "Moderate",
      immediateActions: [
        "Enable keyword filters, such as Hidden Words, in Instagram, X, or TikTok privacy settings.",
        "Block the perpetrator after safely saving all screenshots and profile links.",
        "Limit post comments to people you follow.",
        "Seek emotional support from TPDcom's survivor support group.",
      ],
    },
  },

  programs: {
    "keamanan-digital": {
      title: "Digital Security Clinic & Forensic Response",
      category: "Prevention & Technical Mitigation",
      description:
        "Integrated services covering account security audits, digital footprint cleanup, court-standard forensic evidence extraction, and cyber threat mitigation training for women human rights defenders and journalists.",
      beneficiariesCount: "1,240+ individuals receiving technical assistance",
      keyFeatures: [
        "Device Vulnerability Audits & Stalkerware Detection",
        "Hashing Protocols & Intimate Content Takedown (StopNCII / Take It Down)",
        "Encrypted Digital Evidence Preservation (SHA-256 Hash)",
        "Community & Campus Cybersecurity Training",
      ],
    },

    "advokasi-hukum": {
      title: "Legal Aid & Pro Bono Litigation",
      category: "Protection & Access to Justice",
      description:
        "Comprehensive legal assistance, from initial consultations and preparation of police reports to assistance during police examinations (BAP) and court proceedings, using a victim-centered justice approach based on the Sexual Violence Crimes Law (UU TPKS).",
      beneficiariesCount: "860+ victims receiving legal assistance",
      keyFeatures: [
        "Legal Case Development Based on the Sexual Violence Crimes Law (UU TPKS) & Personal Data Protection Law (UU PDP)",
        "Police Assistance (Women and Children Protection Unit / PPA and Cybercrime Subdirectorate)",
        "Protection Requests to the Witness and Victim Protection Agency (LPSK)",
        "Ethics Mediation & Formal Demands to Social Media Platforms",
      ],
    },

    "pemulihan-psikologis": {
      title: "Trauma Counseling & Safe Recovery Space",
      category: "Psychosocial Support & Mental Health",
      description:
        "A safe recovery space offering support from licensed clinical psychologists and peer-support facilitators. The program helps survivors address acute anxiety, depression, and isolation following digital violence.",
      beneficiariesCount: "1,450+ free counseling sessions",
      keyFeatures: [
        "One-on-One Psychological Crisis Counseling (Online & In Person)",
        "Weekly KBGO Survivor Peer Support Groups",
        "Psychoeducation on Anxiety Management & Self-Compassion",
        "Medical Referrals & Further Psychiatric Assistance",
      ],
    },

    "advokasi-kebijakan": {
      title: "Policy Advocacy & Platform Accountability",
      category: "Systemic Reform",
      description:
        "Advocating for global technology platforms (Meta, Google, X, Telegram, and TikTok) to establish responsive representatives in Indonesia, while monitoring implementing regulations under the Sexual Violence Crimes Law to promote gender-just digital spaces.",
      beneficiariesCount: "6 Policy Documents & National Coalitions",
      keyFeatures: [
        "Annual National Monitoring Research on KBGO",
        "Policy Dialogues with the Ministry of Women's Empowerment and Child Protection and the Ministry of Communication and Digital Affairs",
        "Civil Society Coalition for Digital Human Rights (KMSHAD)",
        "Advocacy for Transparent Content Moderation in Local Languages",
      ],
    },
  },

  activityTypes: {
    pelatihan: "Training",
    kasus: "Case Assistance",
    workshop: "Workshop",
    sosialisasi: "Outreach & Awareness",
    event: "Event",
    diskusi: "Discussion",
    evaluasi: "Evaluation",
    networking: "Networking",
    kunjungan: "Field Visit",
  },

  activityFallback: {
    date: "Date information unavailable",
    location: "Location information unavailable",
    mainPhoto: "Main activity photo",
  },

  activities: {
    "pdp-paralegal": {
      title: "BASIC PARALEGAL TRAINING",
      participants: "Prospective Paralegals / Community Members",
      description:
        "Basic Paralegal Training (PDP) to strengthen legal understanding at the community level, help people access justice, and provide basic non-litigation legal assistance.",
      captions: [
        "Main activity photo",
        "Paralegal activity documentation",
        "Paralegal learning session documentation",
        "Paralegal discussion documentation",
      ],
    },

    "pelatihan-keamanan-digital-kelompok-rentan": {
      title: "DIGITAL SECURITY TRAINING FOR VULNERABLE GROUPS",
      participants: "Vulnerable Groups",
      description:
        "Practical training to improve vulnerable groups' awareness and skills in protecting personal data, responding to online threats, and using digital devices safely.",
    },

    "pelatihan-literasi-digital-pencegahan-kekerasan": {
      title:
        "Digital Literacy Training and Violence Prevention for Women and Children",
      participants: "Women, Children, and Support Workers",
      description:
        "Digital literacy education focused on preventing online gender-based violence (KBGO) and protecting children online, equipping participants with preventive and response measures.",
    },

    "pelatihan-pemberdayaan-ekonomi-digital": {
      title: "DIGITAL ECONOMIC EMPOWERMENT TRAINING",
      participants: "MSME Owners / Community Members",
      description:
        "A capacity-building program for economic empowerment through digitalization, including e-commerce, digital marketing, and app-based financial management to expand market reach.",
    },

    "pelatihan-participatory-rural-appraisal": {
      title: "PARTICIPATORY RURAL APPRAISAL TRAINING",
      participants: "Village Communities / Community Facilitators",
      description:
        "Training in Participatory Rural Appraisal (PRA), an approach that actively involves communities in analyzing their conditions, challenges, and potential to plan development initiatives.",
    },

    "kasus-alih-fungsi-rumah": {
      title: "HOUSE PROPERTY USE DISPUTE",
      participants: "Relevant Parties",
      description:
        "Legal assistance and case handling related to a property dispute or change in the use of a house.",
    },

    "kasus-ijazah-unw": {
      title: "UNW CERTIFICATE CASE",
      participants: "Relevant Parties",
      description:
        "Case handling and legal assistance concerning a dispute or issue involving an UNW academic certificate.",
    },

    "marni-setuta": {
      title: "HUMAN TRAFFICKING CASE",
      participants: "Relevant Parties",
      description: "Legal assistance and advocacy in the Marni Setuta case.",
    },

    "pelecehan-online-oleh-oknum-dosen": {
      title: "ONLINE HARASSMENT INVOLVING A LECTURER",
      participants: "Victim and Relevant Parties",
      description:
        "Assistance for a victim of technology-facilitated gender-based violence (KBGO) involving an academic staff member.",
    },

    "sengketa-status-perkawinan": {
      title: "MARITAL STATUS DISPUTE",
      participants: "Relevant Parties",
      description:
        "Civil legal assistance concerning a marital status dispute and family rights.",
    },

    "refreshing-penanganan-kasus": {
      title: "CASE HANDLING REFRESHER",
      participants: "Support Workers and Relevant Parties",
      description:
        "A refresher and capacity-building activity for support workers involved in handling various cases in the field.",
    },

    "workshop-penanganan-kasus-kbgo": {
      title: "WORKSHOP ON HANDLING ONLINE GENDER-BASED VIOLENCE CASES",
      participants: "Relevant Parties",
      description:
        "A comprehensive workshop on strategies, mitigation, and case handling for online gender-based violence (KBGO).",
    },

    "workshop-kebutuhan-kelompok-berkebutuhan-khusus": {
      title:
        "WORKSHOP ON THE NEEDS OF PEOPLE WITH DISABILITIES AND SPECIFIC NEEDS",
      participants: "People with Disabilities / Relevant Parties",
      description:
        "A discussion and training session to understand and address the needs of vulnerable groups and people with disabilities through more inclusive approaches.",
    },

    "workshop-qamarul-huda": {
      title: "HUMAN EMPOWERMENT WORKSHOP",
      participants: "Relevant Participants",
      description:
        "A Human Empowerment workshop and training activity organized at or in collaboration with Qamarul Huda institution.",
    },

    "workshop-transfer-knowledge-lingkungan": {
      title: "ENVIRONMENTAL KNOWLEDGE-SHARING WORKSHOP",
      participants: "Environmental Activists / Community Members",
      description:
        "An activity to share knowledge, innovations, and best practices in environmental conservation and management.",
    },

    "sosialisasi-desa-jenggala": {
      title: "INTRODUCTION TO TPDOTCOM",
      participants: "Village Community",
      description:
        "An outreach and awareness activity held in Jenggala Village to introduce Transformasi Perempuan Dotcom.",
    },

    "sosialisasi-diskusi-kbgo": {
      title: "DISCUSSION ON KBGO WITH CSOs AND RELATED ORGANIZATIONS",
      participants: "Relevant Participants",
      description:
        "A discussion and outreach activity on preventing and responding to online gender-based violence (KBGO).",
    },

    "sosialisasi-sman-1-janapria": {
      title: "DIGITAL LITERACY AND VIOLENCE PREVENTION FOR WOMEN AND CHILDREN",
      participants: "Students and Teachers",
      description:
        "An outreach and educational activity held at SMAN 1 Janapria.",
    },

    "sosialisasi-sman-3-mataram": {
      title: "DIGITAL LITERACY AND VIOLENCE PREVENTION FOR WOMEN AND CHILDREN",
      participants: "Students and Teachers",
      description:
        "An outreach and educational activity held at SMAN 3 Mataram.",
    },

    "sosialisasi-kanwil-kemenkum-ntb-posbankum-batulayar": {
      title:
        "Outreach by the West Nusa Tenggara Regional Office of the Ministry of Law at the Batulayar Village Legal Aid Post",
      participants: "Legal Aid Post Administrators / Community Members",
      description:
        "An outreach activity on legal aid services and capacity strengthening by the West Nusa Tenggara Regional Office of the Ministry of Law for administrators of the Village Legal Aid Post in Batulayar.",
    },

    "sosialisasi-kbgo-sman-1-janapria-okt": {
      title: "KBGO AWARENESS SESSION AT SMAN 1 JANAPRIA — 22 OCTOBER 2026",
      participants: "Students and Teachers",
      description:
        "An educational and awareness session on preventing online gender-based violence (KBGO), held specifically at SMAN 1 Janapria.",
    },

    "acara-senyumpuan": {
      title: "WOMEN'S DAY COMMEMORATION WITH THE SENYUMPUAN NETWORK",
      participants: "Relevant Participants",
      description:
        "The Senyumpuan event, organized as an expression of community and collective participation.",
    },

    "begawe-ngulat-oktober-2026": {
      title: "BEGAWE NGULAT — 18 OCTOBER 2026",
      participants: "Community Members",
      description:
        "The organization of Begawe Ngulat, a traditional or community event.",
    },

    "dialog-terbuka-janapria": {
      title:
        "OPEN DIALOGUE ON THE DANGERS OF CHILD MARRIAGE AND RISKY SOCIAL BEHAVIOR IN JANAPRIA",
      participants: "Community Members and Young People",
      description:
        "An interactive open dialogue addressing important issues surrounding child or early marriage and risky social behavior.",
    },

    "diskusi-bersama-mahasiswa": {
      title:
        "DISCUSSION WITH UNIVERSITY STUDENTS ON VIOLENCE IN CAMPUS ENVIRONMENTS",
      participants: "University Students",
      description:
        "A thematic discussion forum with student representatives to gather perspectives and raise awareness of social and legal issues.",
    },

    "diskusi-dengan-sp-mataram": {
      title: "DISCUSSION WITH SP MATARAM ON CLIMATE CHANGE",
      participants: "SP Mataram / Relevant Parties",
      description:
        "A meeting and discussion with the SP Mataram group to strengthen institutional engagement or coordinate programs.",
    },

    "evaluasi-penanganan-kasus": {
      title: "CASE HANDLING EVALUATION",
      participants: "Support Team and Internal Team",
      description:
        "A regular internal evaluation of the methods, processes, and outcomes of handling various client cases in the field.",
    },

    "hobicon-2026": {
      title: "HOBICON 2026",
      participants: "General Public",
      description:
        "A large-scale exhibition, community, and gathering event as part of the Hobicon 2026 program.",
    },

    "hobicon-student-olympiad": {
      title: "HOBICON STUDENT OLYMPIAD",
      participants: "Students",
      description:
        "A student-level competition and olympiad organized as part of Hobicon.",
    },

    "networking-cso-apik": {
      title: "DISCUSSION ON COLLABORATION BETWEEN TPDOTCOM AND LBH APIK",
      participants: "Civil Society Organizations / APIK Network",
      description:
        "An inter-organizational Civil Society Organization (CSO) forum to build working networks and strengthen collaboration with APIK.",
    },

    "kunjungan-umkm-lombok-tengah-april-2026": {
      title: "VISIT TO SMALL BUSINESSES IN CENTRAL LOMBOK — 28 APRIL 2026",
      participants: "MSME Owners / Visiting Team",
      description:
        "A field visit to various micro, small, and medium enterprises (MSMEs) in Central Lombok to provide business support and assistance.",
    },
  },

  publications: {
    "strategic-plan-tpdotcom": {
      title: "TPDotcom Strategic Plan",
      subtitle: "Organizational Strategic Plan",
      summary:
        "A strategic planning document outlining the organization's direction, program priorities, objectives, and development strategies for the planning period.",
      keyFindings: [
        "The organization's strategic direction and priorities.",
        "Organizational development goals and objectives.",
        "Program and activity implementation strategies.",
        "The organization's monitoring and evaluation framework.",
      ],
    },

    "sop-tpdotcom": {
      title: "TPDotcom Standard Operating Procedures",
      subtitle: "Guidelines for Organizational Operations and Governance",
      summary:
        "A collection of operational procedures guiding activities, team coordination, administration, and organizational governance at TPDotcom.",
      keyFindings: [
        "Procedures for implementing organizational activities.",
        "Internal coordination and communication workflows.",
        "Administrative and documentation procedures.",
        "Standards for activity implementation and evaluation.",
      ],
    },
  },
} as const;
