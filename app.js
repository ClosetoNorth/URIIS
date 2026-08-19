/**
 * KerjaBersama — Clickable prototype navigation & interactions
 */

const jobsI18n = {
  ms: [
    {
      title: 'Operator Pengeluaran',
      company: 'Kilang Precision Tech Sdn Bhd',
      location: 'Shah Alam · 3.2 km',
      salary: 'RM1,700 – RM2,200',
      tasks: ['Mengendalikan mesin pengeluaran', 'Memastikan barang memenuhi standard kualiti', 'Bekerja dalam pasukan shift'],
      requirements: ['Boleh membaca arahan asas', 'Sihat tubuh badan', 'Boleh mula segera'],
      benefits: 'KWSP & SOCSO disediakan · Pengangkutan syarikat · Makan tengah hari'
    },
    {
      title: 'Pembantu Gudang',
      company: 'Logistik Maju Sdn Bhd',
      location: 'Klang · 8.1 km',
      salary: 'RM1,800 – RM2,300',
      tasks: ['Mengatur dan memuat barang', 'Mengendalikan forklift (latihan disediakan)', 'Menyimpan rekod inventori'],
      requirements: ['Boleh angkat berat sehingga 20kg', 'Rajin dan teliti', 'Boleh kerja shift'],
      benefits: 'KWSP & SOCSO · Elaun shift · Bonus prestasi'
    },
    {
      title: 'Pembantu Dapur',
      company: 'Restoran Sederhana Sdn Bhd',
      location: 'Subang Jaya · 5.4 km',
      salary: 'RM1,600 – RM2,000',
      tasks: ['Menyediakan bahan mentah', 'Membersihkan kawasan dapur', 'Membantu chef menyediakan hidangan'],
      requirements: ['Minat dalam kerja dapur', 'Bersih dan kemas', 'Boleh kerja hujung minggu'],
      benefits: 'Makan percuma · KWSP & SOCSO · Cuti tahunan'
    }
  ],
  en: [
    {
      title: 'Production Operator',
      company: 'Precision Tech Factory Sdn Bhd',
      location: 'Shah Alam · 3.2 km',
      salary: 'RM1,700 – RM2,200',
      tasks: ['Operate production machines', 'Ensure products meet quality standards', 'Work in shift teams'],
      requirements: ['Can read basic instructions', 'Physically fit', 'Can start immediately'],
      benefits: 'EPF & SOCSO provided · Company transport · Lunch provided'
    },
    {
      title: 'Warehouse Assistant',
      company: 'Logistics Maju Sdn Bhd',
      location: 'Klang · 8.1 km',
      salary: 'RM1,800 – RM2,300',
      tasks: ['Organise and load goods', 'Operate forklift (training provided)', 'Keep inventory records'],
      requirements: ['Can lift up to 20kg', 'Hardworking and careful', 'Can work shifts'],
      benefits: 'EPF & SOCSO · Shift allowance · Performance bonus'
    },
    {
      title: 'Kitchen Assistant',
      company: 'Restoran Sederhana Sdn Bhd',
      location: 'Subang Jaya · 5.4 km',
      salary: 'RM1,600 – RM2,000',
      tasks: ['Prepare raw ingredients', 'Clean kitchen area', 'Help chef prepare dishes'],
      requirements: ['Interest in kitchen work', 'Clean and tidy', 'Can work weekends'],
      benefits: 'Free meals · EPF & SOCSO · Annual leave'
    }
  ],
  zh: [
    {
      title: '生产操作员',
      company: 'Precision Tech 工厂有限公司',
      location: 'Shah Alam · 3.2 km',
      salary: 'RM1,700 – RM2,200',
      tasks: ['操作生产机器', '确保产品符合质量标准', '在轮班团队中工作'],
      requirements: ['能阅读基本指示', '身体健康', '可立即上班'],
      benefits: '提供公积金和社会保险 · 公司交通 · 提供午餐'
    },
    {
      title: '仓库助理',
      company: 'Logistics Maju 有限公司',
      location: 'Klang · 8.1 km',
      salary: 'RM1,800 – RM2,300',
      tasks: ['整理和装载货物', '操作叉车（提供培训）', '保存库存记录'],
      requirements: ['可举起20公斤', '勤劳细心', '可轮班工作'],
      benefits: '公积金和社会保险 · 轮班津贴 · 绩效奖金'
    },
    {
      title: '厨房助理',
      company: 'Restoran Sederhana 有限公司',
      location: 'Subang Jaya · 5.4 km',
      salary: 'RM1,600 – RM2,000',
      tasks: ['准备原材料', '清洁厨房区域', '协助厨师准备菜肴'],
      requirements: ['对厨房工作有兴趣', '干净整齐', '可周末工作'],
      benefits: '免费餐食 · 公积金和社会保险 · 年假'
    }
  ],
  ta: [
    {
      title: 'உற்பத்தி ஆப்பரேட்டர்',
      company: 'Precision Tech Factory Sdn Bhd',
      location: 'Shah Alam · 3.2 km',
      salary: 'RM1,700 – RM2,200',
      tasks: ['உற்பத்தி இயந்திரங்களை இயக்குதல்', 'தயாரிப்புகள் தரத்தை பூர்த்தி செய்வதை உறுதி செய்தல்', 'ஷிப்ட் குழுவில் பணியாற்றுதல்'],
      requirements: ['அடிப்படை அறிவுறுத்தல்களை படிக்க முடியும்', 'உடல் நலம்', 'உடனடியாக தொடங்க முடியும்'],
      benefits: 'EPF & SOCSO · நிறுவன போக்குவரத்து · மதிய உணவு'
    },
    {
      title: 'கிடங்கு உதவியாளர்',
      company: 'Logistics Maju Sdn Bhd',
      location: 'Klang · 8.1 km',
      salary: 'RM1,800 – RM2,300',
      tasks: ['பொருட்களை ஒழுங்கமைத்தல் மற்றும் ஏற்றுதல்', 'ஃபோர்க்லிஃப்ட் இயக்குதல் (பயிற்சி வழங்கப்படும்)', 'சரக்கு பதிவுகளை வைத்தல்'],
      requirements: ['20kg வரை தூக்க முடியும்', 'உழைப்பாளி மற்றும் கவனமானவர்', 'ஷிப்ட் பணி செய்ய முடியும்'],
      benefits: 'EPF & SOCSO · ஷிப்ட் கொடுப்பனவு · செயல்திறன் போனஸ்'
    },
    {
      title: 'சமையலறை உதவியாளர்',
      company: 'Restoran Sederhana Sdn Bhd',
      location: 'Subang Jaya · 5.4 km',
      salary: 'RM1,600 – RM2,000',
      tasks: ['மூலப்பொருட்களை தயார் செய்தல்', 'சமையலறையை சுத்தம் செய்தல்', 'செஃபுக்கு உணவு தயாரிக்க உதவுதல்'],
      requirements: ['சமையலறை வேலையில் ஆர்வம்', 'சுத்தமானவர்', 'வார இறுதியில் பணி செய்ய முடியும்'],
      benefits: 'இலவச உணவு · EPF & SOCSO · வருடாந்திர விடுமுறை'
    }
  ]
};

const i18n = {
  ms: {
    headline: 'Mencari kerja jadi lebih mudah.',
    subtext: 'Cakap sahaja—kami bantu cari kerja berdekatan anda.',
    seekJob: 'Saya sedang mencari kerja',
    beGuide: 'Saya mahu jadi Career Guide',
    trustFooter: 'Perkhidmatan awam digital yang selamat & dipercayai',
    back: 'Kembali',
    titleHome: 'KerjaBersama',
    greeting: 'Assalamualaikum! Apakah kerja yang anda cari?',
    micLabel: 'Tekan dan cakap',
    micLabelAnswer: 'Tekan dan jawab',
    exampleLabel: 'Contoh:',
    exampleVoice: '"Saya cari kerja kilang dekat sini."',
    typeRequest: 'Taipkan permintaan saya',
    trustBanner: 'Hanya majikan yang disahkan dipaparkan.',
    titleProfile: 'Profil Anda',
    aiBuilding: 'AI sedang menyusun profil anda',
    voiceTranscript: '"Saya cari kerja kilang dekat Shah Alam, full-time. Saya ada pengalaman 2 tahun."',
    profileTitle: 'Profil Kerja Anda',
    profileHint: 'Anda boleh sunting maklumat di bawah',
    labelRole: 'Peranan pilihan',
    labelLocation: 'Lokasi',
    labelAvailability: 'Ketersediaan',
    labelExperience: 'Pengalaman',
    roleValue: 'Operator Kilang',
    locationValue: 'Shah Alam',
    experienceValue: '2 tahun',
    optFullTime: 'Full-time',
    optPartTime: 'Part-time',
    optShift: 'Shift',
    findJobs: 'Cari kerja yang sesuai',
    titleMatches: 'Kerja Sesuai',
    resultsCount: '3 jawatan ditemui berhampiran anda',
    verifiedEmployer: 'Majikan Disahkan',
    viewJob: 'Lihat jawatan',
    titleDetails: 'Butiran Kerja',
    tagFullTime: 'Full-time',
    whatYouDo: 'Apa yang anda perlu buat',
    simpleReq: 'Syarat mudah',
    benefitsLabel: 'Faedah',
    applyNow: 'Mohon Sekarang',
    needHelp: 'Perlukan bantuan?',
    modalTitle: 'Permohonan dihantar!',
    modalBody: 'Profil anda telah dihantar kepada majikan. Mereka akan hubungi anda dalam 2–3 hari bekerja.',
    viewProgress: 'Lihat kemajuan saya',
    close: 'Tutup',
    titleGuide: 'Career Guide',
    guideIntro: 'Kami jumpa Guide yang sesuai untuk bantu anda:',
    guideName: 'Puan Aisyah',
    guideRole: 'Bekas Pegawai Sumber Manusia',
    guideReviews: '4.9 · 87 ulasan',
    guideDesc: 'Boleh bantu semak permohonan dan latihan temuduga.',
    guideAvail: 'Tersedia: Isnin–Jumaat, 10 pagi – 4 petang',
    bookSession: 'Tempah sesi bimbingan',
    startInterview: 'Mulakan latihan temuduga',
    titleInterview: 'Latihan Temuduga',
    questionProgress: 'Soalan 1 daripada 3',
    interviewQuestion: 'Ceritakan pengalaman anda bekerja dalam pasukan.',
    aiFeedback: 'Maklum balas AI',
    feedbackText: 'Bagus! Anda memberi contoh spesifik tentang kerja berpasukan. Cuba tambah satu contoh bila anda bantu rakan sekerja menyelesaikan masalah. Ini menunjukkan anda peka dan bekerjasama.',
    continue: 'Teruskan',
    titleProgress: 'Kemajuan Anda',
    successMsg: 'Bagus! Anda sudah selangkah lebih dekat kepada kerja baharu.',
    timeline1Title: 'Profil dicipta',
    timeline1Desc: 'Operator Kilang · Shah Alam',
    timeline2Title: 'Permohonan dihantar',
    timeline2Desc: 'Operator Pengeluaran · Kilang Precision Tech',
    timeline3Title: 'Bantuan Guide',
    timeline3Desc: 'Puan Aisyah · Sesi dijadualkan Jumaat, 2 petang',
    timeline4Title: 'Temuduga dijadualkan',
    timeline4Desc: 'Isnin depan, 10 pagi · Shah Alam',
    backHome: 'Kembali ke laman utama',
    reportOffer: 'Laporkan tawaran mencurigakan',
    titleDashboard: 'Dashboard Guide',
    goodMorning: 'Selamat pagi,',
    guideVerified: 'Guide Disahkan',
    legacyScore: 'Skor Sumbangan',
    statHelped: 'pencari kerja dibantu bulan ini',
    statPending: 'permintaan menunggu',
    pendingRequests: 'Permintaan Menunggu',
    accept: 'Terima',
    upcomingSessions: 'Sesi Akan Datang',
    req1: 'Perlukan bantuan semak permohonan · Operator Kilang',
    req2: 'Latihan temuduga · Pembantu Gudang',
    req3: 'Semak resume · Pembantu Dapur',
    time2h: '2 jam lalu',
    time5h: '5 jam lalu',
    timeYesterday: 'Semalam',
    session1: 'Siti Aminah — Semak permohonan',
    session1Time: '2:00 petang · 30 minit',
    sessionDay1: 'Jum',
    session2: 'Kumar Raj — Latihan temuduga',
    session2Time: '10:00 pagi · 45 minit',
    sessionDay2: 'Isn',
    toastBooked: 'Sesi bimbingan telah ditempah! Puan Aisyah akan menghubungi anda.',
    toastReport: 'Terima kasih. Laporan anda telah dihantar untuk semakan.',
    chatTitle: 'Sesi Bimbingan',
    chatOnline: 'Dalam talian',
    chatTopicApplication: 'Semak permohonan',
    chatTopicInterview: 'Latihan temuduga',
    chatTopicResume: 'Semak resume',
    chatMessage1: 'Terima kasih kerana sudi membantu. Saya mahu semak permohonan kerja saya.',
    chatMessage2: 'Sama-sama. Mari kita lihat jawatan yang anda mohon dan pengalaman yang paling berkaitan.',
    chatMessage3: 'Saya memohon jawatan Operator Kilang di Shah Alam.',
    chatInputLabel: 'Tulis mesej',
    chatPlaceholder: 'Tulis mesej kepada pencari kerja...',
    chatSend: 'Hantar',
    chatReply: 'Terima kasih. Saya akan semak maklumat itu dan bantu anda dengan langkah seterusnya.'
  },
  en: {
    headline: 'Finding work, made easier.',
    subtext: 'Just tell us what you need. We’ll help you find jobs nearby.',
    seekJob: 'I’m looking for work',
    beGuide: 'I want to be a Career Guide',
    trustFooter: 'Safe & trusted digital public service',
    back: 'Back',
    titleHome: 'KerjaBersama',
    greeting: 'Hello! What kind of job are you looking for?',
    micLabel: 'Press and speak',
    micLabelAnswer: 'Press and answer',
    exampleLabel: 'Example:',
    exampleVoice: '"I am looking for factory work nearby."',
    typeRequest: 'Type your request',
    trustBanner: 'Only verified employers are shown.',
    titleProfile: 'Your Profile',
    aiBuilding: 'AI is preparing your profile',
    voiceTranscript: '"I am looking for factory work in Shah Alam, full-time. I have 2 years experience."',
    profileTitle: 'Your Job Profile',
    profileHint: 'You can edit the information below',
    labelRole: 'Preferred role',
    labelLocation: 'Location',
    labelAvailability: 'Availability',
    labelExperience: 'Experience',
    roleValue: 'Factory Operator',
    locationValue: 'Shah Alam',
    experienceValue: '2 years',
    optFullTime: 'Full-time',
    optPartTime: 'Part-time',
    optShift: 'Shift',
    findJobs: 'Find matching jobs',
    titleMatches: 'Matching Jobs',
    resultsCount: '3 jobs found near you',
    verifiedEmployer: 'Verified Employer',
    viewJob: 'View job',
    titleDetails: 'Job Details',
    tagFullTime: 'Full-time',
    whatYouDo: 'What you will do',
    simpleReq: 'Simple requirements',
    benefitsLabel: 'Benefits',
    applyNow: 'Apply Now',
    needHelp: 'Need help?',
    modalTitle: 'Application sent!',
    modalBody: 'Your profile has been sent to the employer. They will contact you within 2–3 working days.',
    viewProgress: 'View my progress',
    close: 'Close',
    titleGuide: 'Career Guide',
    guideIntro: 'We found a Career Guide who can help:',
    guideName: 'Puan Aisyah',
    guideRole: 'Former HR Officer',
    guideReviews: '4.9 · 87 reviews',
    guideDesc: 'Can review your application and help you practise for interviews.',
    guideAvail: 'Available: Mon–Fri, 10 am – 4 pm',
    bookSession: 'Book a guidance session',
    startInterview: 'Start interview practice',
    titleInterview: 'Interview Practice',
    questionProgress: 'Question 1 of 3',
    interviewQuestion: 'Tell us about your experience working in a team.',
    aiFeedback: 'AI Feedback',
    feedbackText: 'Good! You gave a specific example of teamwork. Try adding one example of when you helped a colleague solve a problem. This shows you are attentive and cooperative.',
    continue: 'Continue',
    titleProgress: 'Your Progress',
    successMsg: 'Great! You are one step closer to a new job.',
    timeline1Title: 'Profile created',
    timeline1Desc: 'Factory Operator · Shah Alam',
    timeline2Title: 'Application sent',
    timeline2Desc: 'Production Operator · Precision Tech Factory',
    timeline3Title: 'Guide support',
    timeline3Desc: 'Puan Aisyah · Session scheduled Friday, 2 pm',
    timeline4Title: 'Interview scheduled',
    timeline4Desc: 'Next Monday, 10 am · Shah Alam',
    backHome: 'Back to home',
    reportOffer: 'Report suspicious offer',
    titleDashboard: 'Guide Dashboard',
    goodMorning: 'Good morning,',
    guideVerified: 'Verified Guide',
    legacyScore: 'Legacy Score',
    statHelped: 'job seekers helped this month',
    statPending: 'pending requests',
    pendingRequests: 'Pending Requests',
    accept: 'Accept',
    upcomingSessions: 'Upcoming Sessions',
    req1: 'Need help reviewing application · Factory Operator',
    req2: 'Interview practice · Warehouse Assistant',
    req3: 'Resume review · Kitchen Assistant',
    time2h: '2 hours ago',
    time5h: '5 hours ago',
    timeYesterday: 'Yesterday',
    session1: 'Siti Aminah — Review application',
    session1Time: '2:00 pm · 30 minutes',
    sessionDay1: 'Fri',
    session2: 'Kumar Raj — Interview practice',
    session2Time: '10:00 am · 45 minutes',
    sessionDay2: 'Mon',
    toastBooked: 'Your guidance session is booked! Puan Aisyah will contact you.',
    toastReport: 'Thank you. Your report has been submitted for review.',
    chatTitle: 'Guidance Session',
    chatOnline: 'Online',
    chatTopicApplication: 'Application review',
    chatTopicInterview: 'Interview practice',
    chatTopicResume: 'Resume review',
    chatMessage1: 'Thank you for helping me. I would like to review my job application.',
    chatMessage2: 'You’re welcome. Let’s look at the role you applied for and the experience most relevant to it.',
    chatMessage3: 'I applied for a Factory Operator role in Shah Alam.',
    chatInputLabel: 'Write a message',
    chatPlaceholder: 'Write a message to the job seeker...',
    chatSend: 'Send',
    chatReply: 'Thank you. I’ll review that information and help you with the next steps.'
  },
  zh: {
    headline: '求职，更轻松。',
    subtext: '只要说出来，我们会帮您寻找附近的职位。',
    seekJob: '我在找工作',
    beGuide: '我想成为职业导师',
    trustFooter: '安全可信的数字公共服务',
    back: '返回',
    titleHome: 'KerjaBersama',
    greeting: '您好！您在找什么工作？',
    micLabel: '按住说话',
    micLabelAnswer: '按住回答',
    exampleLabel: '示例：',
    exampleVoice: '"我想找附近的工厂工作。"',
    typeRequest: '输入您的需求',
    trustBanner: '仅显示已验证的雇主。',
    titleProfile: '您的个人资料',
    aiBuilding: 'AI 正在为您整理个人资料',
    voiceTranscript: '"我想在 Shah Alam 找工厂全职工作。我有2年经验。"',
    profileTitle: '您的工作资料',
    profileHint: '您可以编辑以下信息',
    labelRole: '首选职位',
    labelLocation: '地点',
    labelAvailability: '工作时间',
    labelExperience: '经验',
    roleValue: '工厂操作员',
    locationValue: 'Shah Alam',
    experienceValue: '2年',
    optFullTime: '全职',
    optPartTime: '兼职',
    optShift: '轮班',
    findJobs: '寻找合适的职位',
    titleMatches: '匹配的职位',
    resultsCount: '在您附近找到 3 个职位',
    verifiedEmployer: '已验证雇主',
    viewJob: '查看职位',
    titleDetails: '工作详情',
    tagFullTime: '全职',
    whatYouDo: '您需要做什么',
    simpleReq: '简单要求',
    benefitsLabel: '福利',
    applyNow: '立即申请',
    needHelp: '需要帮助？',
    modalTitle: '申请已提交！',
    modalBody: '您的资料已发送给雇主。他们将在2–3个工作日内联系您。',
    viewProgress: '查看我的进度',
    close: '关闭',
    titleGuide: '职业顾问',
    guideIntro: '我们为您找到了一位合适的职业顾问：',
    guideName: 'Aisyah 女士',
    guideRole: '前人力资源官员',
    guideReviews: '4.9 · 87 条评价',
    guideDesc: '可以协助您检查求职申请并练习面试。',
    guideAvail: '可用时间：周一至周五，上午10点 – 下午4点',
    bookSession: '预约辅导课程',
    startInterview: '开始面试练习',
    titleInterview: '面试练习',
    questionProgress: '第1题，共3题',
    interviewQuestion: '请讲述您在团队中工作的经验。',
    aiFeedback: 'AI 反馈',
    feedbackText: '很好！您给出了具体的团队合作例子。试着再加一个帮助同事解决问题的例子。这表明您细心且善于合作。',
    continue: '继续',
    titleProgress: '您的进度',
    successMsg: '太好了！您离新工作又近了一步。',
    timeline1Title: '资料已创建',
    timeline1Desc: '工厂操作员 · Shah Alam',
    timeline2Title: '申请已发送',
    timeline2Desc: '生产操作员 · Precision Tech 工厂',
    timeline3Title: '职业顾问支持',
    timeline3Desc: 'Aisyah 女士 · 课程安排在周五下午2点',
    timeline4Title: '面试已安排',
    timeline4Desc: '下周一，上午10点 · Shah Alam',
    backHome: '返回主页',
    reportOffer: '举报可疑工作',
    titleDashboard: '导师仪表板',
    goodMorning: '早上好，',
    guideVerified: '已验证导师',
    legacyScore: '贡献积分',
    statHelped: '本月帮助的求职者',
    statPending: '待处理请求',
    pendingRequests: '待处理请求',
    accept: '接受',
    upcomingSessions: '即将到来的课程',
    req1: '需要审查申请 · 工厂操作员',
    req2: '面试练习 · 仓库助理',
    req3: '审查简历 · 厨房助理',
    time2h: '2小时前',
    time5h: '5小时前',
    timeYesterday: '昨天',
    session1: 'Siti Aminah — 审查申请',
    session1Time: '下午2:00 · 30分钟',
    sessionDay1: '周五',
    session2: 'Kumar Raj — 面试练习',
    session2Time: '上午10:00 · 45分钟',
    sessionDay2: '周一',
    toastBooked: '辅导课程已预约！Aisyah 女士会联系您。',
    toastReport: '谢谢。您的举报已提交审核。',
    chatTitle: '辅导课程',
    chatOnline: '在线',
    chatTopicApplication: '检查求职申请',
    chatTopicInterview: '面试练习',
    chatTopicResume: '简历检查',
    chatMessage1: '谢谢您愿意帮助我。我想检查我的求职申请。',
    chatMessage2: '不客气。我们来看看您申请的职位，以及最相关的工作经验。',
    chatMessage3: '我申请了 Shah Alam 的工厂操作员职位。',
    chatInputLabel: '输入消息',
    chatPlaceholder: '向求职者输入消息…',
    chatSend: '发送',
    chatReply: '谢谢。我会查看这些资料，并协助您完成下一步。'
  },
  ta: {
    headline: 'வேலை தேடுவது இப்போது எளிது.',
    subtext: 'பேசுங்கள்; அருகிலுள்ள வேலைகளை கண்டறிய நாங்கள் உதவுகிறோம்.',
    seekJob: 'நான் வேலை தேடுகிறேன்',
    beGuide: 'நான் ஒரு தொழில் வழிகாட்டியாக விரும்புகிறேன்',
    trustFooter: 'பாதுகாப்பான மற்றும் நம்பகமான டிஜிட்டல் பொது சேவை',
    back: 'திரும்பு',
    titleHome: 'KerjaBersama',
    greeting: 'வணக்கம்! நீங்கள் என்ன வேலை தேடுகிறீர்கள்?',
    micLabel: 'அழுத்தி பேசுங்கள்',
    micLabelAnswer: 'அழுத்தி பதிலளிக்கவும்',
    exampleLabel: 'எடுத்துக்காட்டு:',
    exampleVoice: '"அருகிலுள்ள தொழிற்சாலை வேலை தேடுகிறேன்."',
    typeRequest: 'என் கோரிக்கையை தட்டச்சு செய்யவும்',
    trustBanner: 'சரிபார்க்கப்பட்ட முதலாளிகள் மட்டுமே காட்டப்படும்.',
    titleProfile: 'உங்கள் சுயவிவரம்',
    aiBuilding: 'AI உங்கள் சுயவிவரத்தை உருவாக்குகிறது',
    voiceTranscript: '"Shah Alam-ல் தொழிற்சாலை முழுநேர வேலை தேடுகிறேன். 2 வருட அனுபவம் உள்ளது."',
    profileTitle: 'உங்கள் வேலை சுயவிவரம்',
    profileHint: 'கீழுள்ள தகவல்களை திருத்தலாம்',
    labelRole: 'விருப்பப் பணி',
    labelLocation: 'இடம்',
    labelAvailability: 'கிடைக்கும் நேரம்',
    labelExperience: 'அனுபவம்',
    roleValue: 'தொழிற்சாலை ஆப்பரேட்டர்',
    locationValue: 'Shah Alam',
    experienceValue: '2 ஆண்டுகள்',
    optFullTime: 'முழுநேரம்',
    optPartTime: 'பகுதிநேரம்',
    optShift: 'ஷிப்ட்',
    findJobs: 'பொருத்தமான வேலைகளைத் தேடுங்கள்',
    titleMatches: 'பொருத்தமான வேலைகள்',
    resultsCount: 'உங்கள் அருகில் 3 வேலைகள் கிடைத்துள்ளன',
    verifiedEmployer: 'சரிபார்க்கப்பட்ட முதலாளி',
    viewJob: 'வேலையைப் பார்க்கவும்',
    titleDetails: 'வேலை விவரங்கள்',
    tagFullTime: 'முழுநேரம்',
    whatYouDo: 'நீங்கள் செய்ய வேண்டியவை',
    simpleReq: 'எளிய தேவைகள்',
    benefitsLabel: 'நன்மைகள்',
    applyNow: 'இப்போதே விண்ணப்பிக்கவும்',
    needHelp: 'உதவி வேண்டுமா?',
    modalTitle: 'விண்ணப்பம் அனுப்பப்பட்டது!',
    modalBody: 'உங்கள் சுயவிவரம் முதலாளிக்கு அனுப்பப்பட்டது. 2–3 வேலை நாட்களில் தொடர்பு கொள்வார்கள்.',
    viewProgress: 'என் முன்னேற்றத்தை பார்',
    close: 'மூடு',
    titleGuide: 'தொழில் வழிகாட்டி',
    guideIntro: 'உங்களுக்கு உதவ ஒரு தொழில் வழிகாட்டியைக் கண்டறிந்துள்ளோம்:',
    guideName: 'Puan Aisyah',
    guideRole: 'முன்னாள் மனிதவள அதிகாரி',
    guideReviews: '4.9 · 87 மதிப்பீடுகள்',
    guideDesc: 'விண்ணப்பத்தைச் சரிபார்க்கவும் நேர்காணலுக்குப் பயிற்சி அளிக்கவும் உதவுவார்.',
    guideAvail: 'கிடைக்கும் நேரம்: திங்கள்–வெள்ளி, காலை 10 – மாலை 4',
    bookSession: 'வழிகாட்டல் அமர்வை முன்பதிவு செய்யவும்',
    startInterview: 'நேர்காணல் பயிற்சியைத் தொடங்குங்கள்',
    titleInterview: 'நேர்காணல் பயிற்சி',
    questionProgress: 'கேள்வி 1 / 3',
    interviewQuestion: 'ஒரு குழுவில் பணியாற்றிய உங்கள் அனுபவத்தைப் பகிருங்கள்.',
    aiFeedback: 'AI கருத்து',
    feedbackText: 'நல்லது! குழுப்பணியின் குறிப்பிட்ட எடுத்துக்காட்டு கொடுத்தீர்கள். சக தொழிலாளருக்கு உதவிய ஒரு எடுத்துக்காட்டையும் சேர்க்கவும். இது நீங்கள் கவனமானவர் என்பதை காட்டும்.',
    continue: 'தொடரவும்',
    titleProgress: 'உங்கள் முன்னேற்றம்',
    successMsg: 'அருமை! புதிய வேலைக்கு நீங்கள் ஒரு படி முன்னேறிவிட்டீர்கள்.',
    timeline1Title: 'சுயவிவரம் உருவாக்கப்பட்டது',
    timeline1Desc: 'தொழிற்சாலை ஆப்பரேட்டர் · Shah Alam',
    timeline2Title: 'விண்ணப்பம் அனுப்பப்பட்டது',
    timeline2Desc: 'உற்பத்தி ஆப்பரேட்டர் · Precision Tech Factory',
    timeline3Title: 'Guide உதவி',
    timeline3Desc: 'Puan Aisyah · வெள்ளி மாலை 2 மணிக்கு அமர்வு',
    timeline4Title: 'நேர்காணல் திட்டமிடப்பட்டது',
    timeline4Desc: 'அடுத்த திங்கள், காலை 10 · Shah Alam',
    backHome: 'முகப்புக்கு திரும்பு',
    reportOffer: 'சந்தேக வேலை வாய்ப்பை புகார் செய்',
    titleDashboard: 'வழிகாட்டி டாஷ்போர்டு',
    goodMorning: 'காலை வணக்கம்,',
    guideVerified: 'சரிபார்க்கப்பட்ட வழிகாட்டி',
    legacyScore: 'பங்களிப்பு மதிப்பெண்',
    statHelped: 'இந்த மாதம் உதவிய வேலை தேடுபவர்கள்',
    statPending: 'நிலுவையில் உள்ள கோரிக்கைகள்',
    pendingRequests: 'நிலுவையில் உள்ள கோரிக்கைகள்',
    accept: 'ஏற்றுக்கொள்',
    upcomingSessions: 'வரவிருக்கும் அமர்வுகள்',
    req1: 'விண்ணப்பம் மதிப்பாய்வு உதவி · தொழிற்சாலை ஆப்பரேட்டர்',
    req2: 'நேர்காணல் பயிற்சி · கிடங்கு உதவியாளர்',
    req3: 'சுயவிவரக் குறிப்பு மதிப்பாய்வு · சமையலறை உதவியாளர்',
    time2h: '2 மணி நேரம் முன்',
    time5h: '5 மணி நேரம் முன்',
    timeYesterday: 'நேற்று',
    session1: 'Siti Aminah — விண்ணப்பம் மதிப்பாய்வு',
    session1Time: 'மாலை 2:00 · 30 நிமிடம்',
    sessionDay1: 'வெள்',
    session2: 'Kumar Raj — நேர்காணல் பயிற்சி',
    session2Time: 'காலை 10:00 · 45 நிமிடம்',
    sessionDay2: 'திங்',
    toastBooked: 'வழிகாட்டல் அமர்வு முன்பதிவு செய்யப்பட்டது! புவான் ஆயிஷா உங்களைத் தொடர்புகொள்வார்.',
    toastReport: 'நன்றி. உங்கள் புகார் மதிப்பாய்வுக்கு அனுப்பப்பட்டது.',
    chatTitle: 'வழிகாட்டல் அமர்வு',
    chatOnline: 'ஆன்லைனில் உள்ளார்',
    chatTopicApplication: 'விண்ணப்ப மதிப்பாய்வு',
    chatTopicInterview: 'நேர்காணல் பயிற்சி',
    chatTopicResume: 'சுயவிவரக் குறிப்பு மதிப்பாய்வு',
    chatMessage1: 'உதவ முன்வந்ததற்கு நன்றி. என் வேலை விண்ணப்பத்தைச் சரிபார்க்க விரும்புகிறேன்.',
    chatMessage2: 'மகிழ்ச்சி. நீங்கள் விண்ணப்பித்த பணியையும் அதற்கு மிகவும் பொருத்தமான அனுபவத்தையும் பார்க்கலாம்.',
    chatMessage3: 'Shah Alam-ல் தொழிற்சாலை ஆப்பரேட்டர் பணிக்கு விண்ணப்பித்துள்ளேன்.',
    chatInputLabel: 'செய்தி எழுதவும்',
    chatPlaceholder: 'வேலை தேடுபவருக்கு செய்தி எழுதவும்...',
    chatSend: 'அனுப்பு',
    chatReply: 'நன்றி. அந்தத் தகவலைப் பார்த்து, அடுத்த படிகளுக்கு உங்களுக்கு உதவுகிறேன்.'
  }
};

let currentLang = 'ms';
let currentJobIndex = 0;

function navigateTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
    const body = target.querySelector('.screen-body');
    if (body) body.scrollTop = 0;
  }
}

function showToast(messageKey) {
  const message = i18n[currentLang][messageKey] || messageKey;
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function updateAvailabilityOptions(lang) {
  const select = document.getElementById('availability');
  if (!select) return;
  const strings = i18n[lang];
  const options = select.querySelectorAll('option');
  const keys = ['optFullTime', 'optPartTime', 'optShift'];
  options.forEach((opt, i) => {
    if (strings[keys[i]]) opt.textContent = strings[keys[i]];
  });
}

function updateJobCards(lang) {
  const jobs = jobsI18n[lang];
  document.querySelectorAll('.job-card').forEach((card, index) => {
    const job = jobs[index];
    if (!job) return;
    const title = card.querySelector('[data-i18n-job="title"]');
    const location = card.querySelector('[data-i18n-job="location"]');
    const badge = card.querySelector('[data-i18n="verifiedEmployer"]');
    const btn = card.querySelector('[data-i18n="viewJob"]');
    if (title) title.textContent = job.title;
    if (location) location.textContent = job.location;
    if (badge) badge.textContent = i18n[lang].verifiedEmployer;
    if (btn) btn.textContent = i18n[lang].viewJob;
  });
}

function loadJobDetails(index) {
  const jobs = jobsI18n[currentLang];
  const job = jobs[index];
  if (!job) return;
  currentJobIndex = index;

  document.getElementById('detail-title').textContent = job.title;
  document.getElementById('detail-company').textContent = job.company;
  document.getElementById('detail-location').textContent = job.location;
  document.getElementById('detail-salary').textContent = job.salary;

  document.getElementById('detail-tasks').innerHTML = job.tasks.map(t => `<li>${t}</li>`).join('');
  document.getElementById('detail-requirements').innerHTML = job.requirements.map(r => `<li>${r}</li>`).join('');
  document.getElementById('detail-benefits').textContent = job.benefits;
}

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;

  const htmlLang = { ms: 'ms', en: 'en', zh: 'zh', ta: 'ta' };
  document.documentElement.lang = htmlLang[lang];

  const strings = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key] !== undefined) {
      el.textContent = strings[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (strings[key] !== undefined) {
      el.setAttribute('aria-label', strings[key]);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (strings[key] !== undefined) {
      el.setAttribute('placeholder', strings[key]);
    }
  });

  document.querySelectorAll('[data-lang]').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  const roleInput = document.getElementById('role');
  const locationInput = document.getElementById('location');
  const experienceInput = document.getElementById('experience');
  if (roleInput) roleInput.value = strings.roleValue;
  if (locationInput) locationInput.value = strings.locationValue;
  if (experienceInput) experienceInput.value = strings.experienceValue;

  updateAvailabilityOptions(lang);
  updateJobCards(lang);
  loadJobDetails(currentJobIndex);
}

function setupNavigation() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const screen = el.dataset.nav;
      const closeModalId = el.dataset.closeModal;
      if (closeModalId) closeModal(closeModalId);
      navigateTo(screen);
    });
  });

  document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', () => {
      const index = parseInt(card.dataset.job, 10);
      loadJobDetails(index);
      navigateTo('job-details');
    });
  });
}

function setupLanguageSelector() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

function setupMicButton(btnId, onActivate) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.classList.add('listening');
    setTimeout(() => {
      btn.classList.remove('listening');
      onActivate();
    }, 1500);
  });
}

function setupApplyFlow() {
  document.getElementById('btn-apply')?.addEventListener('click', () => {
    openModal('modal-apply');
  });

  document.querySelector('#modal-apply .modal-backdrop')?.addEventListener('click', () => {
    closeModal('modal-apply');
  });
}

function setupInterviewPractice() {
  setupMicButton('btn-mic-practice', () => {
    const feedback = document.getElementById('feedback-card');
    const nextBtn = document.getElementById('btn-next-question');
    if (feedback) {
      feedback.hidden = false;
      nextBtn.hidden = false;
    }
  });
}

function setupGuideBooking() {
  document.getElementById('btn-book-session')?.addEventListener('click', () => {
    showToast('toastBooked');
    setTimeout(() => navigateTo('success-progress'), 1500);
  });
}

function appendChatMessage(text, sender) {
  const messages = document.getElementById('chat-messages');
  if (!messages) return;
  const message = document.createElement('div');
  message.className = `chat-message chat-message-${sender}`;
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function setupGuideChat() {
  document.querySelectorAll('.btn-accept-request').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.guideName;
      const topic = i18n[currentLang][button.dataset.guideTopicKey];
      document.getElementById('chat-name').textContent = name;
      const chatTopic = document.getElementById('chat-topic');
      chatTopic.dataset.i18n = button.dataset.guideTopicKey;
      chatTopic.textContent = topic;
      document.getElementById('chat-avatar').textContent = name.charAt(0);
      navigateTo('guide-chat');
    });
  });

  document.getElementById('chat-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;
    appendChatMessage(message, 'guide');
    input.value = '';
    setTimeout(() => {
      appendChatMessage(i18n[currentLang].chatReply, 'user');
    }, 700);
  });
}

function setupReportButton() {
  document.getElementById('btn-report')?.addEventListener('click', () => {
    showToast('toastReport');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupLanguageSelector();
  setupMicButton('btn-mic', () => navigateTo('ai-profile'));
  setupApplyFlow();
  setupInterviewPractice();
  setupGuideBooking();
  setupGuideChat();
  setupReportButton();
  setLanguage('ms');
});
