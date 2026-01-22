// Shared patient data for HealthSync demo
// This file is used by admin.html, index.html, and doctor.html

const PATIENTS_DATA = [
    {
        id: 1,
        name: 'Maya Chen',
        mrn: 'MRN-CF2847',
        age: 22,
        dob: '08/14/2002',
        email: 'maya.chen@email.com',
        phone: '(617) 555-0101',
        diagnosis: 'Cystic Fibrosis (F508del homozygous)',
        insurance: 'Blue Cross Blue Shield PPO',
        lastVisit: '2025-01-14',
        nextVisit: '2025-04-14',
        primaryPhysician: 'Dr. Sarah Martinez',
        
        // Status tracking
        status: {
            recordsComplete: 'pending', // 'complete', 'pending', 'urgent'
            epicSync: 'complete',
            uploadsComplete: false,
            pendingActions: 2
        },
        
        conditions: ['Cystic Fibrosis', 'CF-Related Diabetes', 'Pancreatic Insufficiency'],
        
        clinicalSummary: '22-year-old female with cystic fibrosis diagnosed in infancy. Remarkable clinical improvement since starting Trikafta 18 months ago—FEV1 improved from 65% to current 82% predicted. Managing CF-related diabetes with basal insulin, A1C 6.8%. On comprehensive CF regimen. Currently stable with no recent pulmonary exacerbations. Excellent adherence and self-management skills.',
        
        notesSinceLastVisit: 'Patient called 1/18 reporting mild increase in cough, no fever. Advised to increase airway clearance to TID. Will monitor closely. eFax received 1/17 with new PFT results showing continued improvement.',
        
        medications: [
            'Trikafta (Elexacaftor/Tezacaftor/Ivacaftor) 2 tabs AM, 1 tab PM',
            'Creon 36,000 units with meals and snacks',
            'Insulin degludec 18 units daily',
            'Azithromycin 500mg MWF',
            'Hypertonic saline 7% nebulized BID',
            'Pulmozyme (dornase alfa) nebulized daily'
        ],
        
        outstandingActions: [
            { title: 'Review New PFT Results', status: 'urgent', details: 'Spirometry from 1/17 shows FEV1 82%, up from baseline. Excellent response to Trikafta continues.', due: 'Today' },
            { title: 'Quarterly A1C Check', status: 'due-soon', details: 'Last A1C 6.8% on 12/28. Due for 3-month follow-up for CFRD monitoring.', due: 'Due in 2 weeks' },
            { title: 'Annual Chest CT', status: 'normal', details: 'Last CT 12/10 showed mild stable bronchiectasis with improvement on modulator therapy.', due: 'Next due: Dec 2025' }
        ],
        
        careIssues: [
            { issue: 'CF Pulmonary Exacerbations', detail: 'Monitor for increased cough, sputum production, decreased FEV1. Has been exacerbation-free for 14 months on Trikafta.' },
            { issue: 'CF-Related Diabetes Management', detail: 'Currently on basal insulin only. Monitor A1C quarterly. May need prandial insulin as pancreatic function declines.' },
            { issue: 'Medication Adherence', detail: 'Complex regimen requiring multiple daily therapies. Patient demonstrates excellent adherence with support from CF care team.' }
        ],
        
        specialists: [
            { name: 'Dr. Sarah Martinez', specialty: 'Pulmonology - CF Center', contact: 'CF Clinic: (617) 555-0123', lastSeen: '2025-01-14' },
            { name: 'Dr. Robert Kim', specialty: 'Endocrinology - CFRD Management', contact: 'Endo Clinic: (617) 555-0145', lastSeen: '2024-12-10' },
            { name: 'Jennifer Walsh, RD', specialty: 'CF Nutritionist', contact: 'Nutrition: (617) 555-0167', lastSeen: '2025-01-14' },
            { name: 'Dr. Lisa Wong', specialty: 'Cardiology - Annual surveillance', contact: 'Cardiology: (617) 555-0189', lastSeen: '2024-11-20' }
        ],
        
        records: [
            { date: '2025-01-17', type: 'PFT Results', provider: 'Pulmonary Lab', source: 'eFax', status: 'new' },
            { date: '2025-01-14', type: 'CF Clinic Visit', provider: 'Dr. Sarah Martinez', source: 'Epic', status: 'reviewed' },
            { date: '2024-12-28', type: 'Lab Results - A1C', provider: 'Quest Diagnostics', source: 'Epic', status: 'reviewed' },
            { date: '2024-12-10', type: 'Chest CT', provider: 'Boston Children\'s Radiology', source: 'Epic', status: 'reviewed' }
        ]
    },
    {
        id: 2,
        name: 'Alex Thompson',
        mrn: 'MRN-ONC5921',
        age: 19,
        dob: '03/22/2005',
        email: 'alex.thompson@email.com',
        phone: '(617) 555-0102',
        diagnosis: 'Papillary Thyroid Carcinoma s/p thyroidectomy',
        insurance: 'Aetna PPO',
        lastVisit: '2025-01-10',
        nextVisit: '2025-04-10',
        primaryPhysician: 'Dr. Jennifer Park',
        
        status: {
            recordsComplete: 'pending',
            epicSync: 'complete',
            uploadsComplete: false,
            pendingActions: 1
        },
        
        conditions: ['Thyroid Cancer Survivor', 'Hypothyroidism', 'Vocal Cord Paresis', 'Anxiety'],
        
        clinicalSummary: '19-year-old diagnosed with papillary thyroid carcinoma at age 14, s/p total thyroidectomy and RAI. Currently 5 years post-treatment with excellent response—thyroglobulin undetectable. Managing post-surgical vocal cord paresis and hypothyroidism. Anxiety well-controlled. Transitioning to annual surveillance. College freshman, excellent medication adherence.',
        
        notesSinceLastVisit: 'Patient doing well at college. No new concerns. Reminded about upcoming lipid panel due in 3 weeks.',
        
        medications: [
            'Levothyroxine 175mcg daily (TSH suppression)',
            'Calcium carbonate 1000mg BID',
            'Vitamin D3 2000 IU daily',
            'Sertraline 50mg daily'
        ],
        
        outstandingActions: [
            { title: 'Annual Lipid Panel', status: 'due-soon', details: 'Due for annual screening. On TSH suppression therapy which can affect lipids.', due: 'Due in 3 weeks' },
            { title: 'Thyroglobulin Surveillance', status: 'normal', details: 'Last Tg <0.1 on 12/15. Continue annual monitoring now that 5 years disease-free.', due: 'Next: Dec 2025' },
            { title: 'Neck Ultrasound', status: 'normal', details: 'Last U/S 11/20 showed no evidence of recurrence. Surveillance imaging now annual.', due: 'Next: Nov 2025' }
        ],
        
        careIssues: [
            { issue: 'Cancer Surveillance', detail: '5 years post-treatment, low risk for recurrence. Annual thyroglobulin and neck ultrasound. Can transition to less frequent TSH suppression.' },
            { issue: 'Vocal Cord Paresis', detail: 'Right vocal cord paresis stable. Continues voice therapy. ENT follow-up annually.' },
            { issue: 'Mental Health', detail: 'History of anxiety related to cancer surveillance. Well-controlled on sertraline. Psychiatry follow-up every 6 months.' }
        ],
        
        specialists: [
            { name: 'Dr. Jennifer Park', specialty: 'Endocrinology - Thyroid Cancer', contact: 'Endo: (617) 555-0134', lastSeen: '2025-01-10' },
            { name: 'Dr. Michael Chen', specialty: 'ENT - Voice Clinic', contact: 'ENT: (617) 555-0156', lastSeen: '2024-11-15' },
            { name: 'Dr. Amanda Rodriguez', specialty: 'Psychiatry', contact: 'Mental Health: (617) 555-0178', lastSeen: '2024-12-05' }
        ],
        
        records: [
            { date: '2025-01-10', type: 'Endocrinology Follow-up', provider: 'Dr. Jennifer Park', source: 'Epic', status: 'reviewed' },
            { date: '2024-12-15', type: 'Lab Results - Thyroglobulin', provider: 'Quest Diagnostics', source: 'Epic', status: 'reviewed' },
            { date: '2024-11-20', type: 'Neck Ultrasound', provider: 'Dana-Farber Radiology', source: 'Epic', status: 'reviewed' }
        ]
    },
    {
        id: 3,
        name: 'Jordan Martinez',
        mrn: 'MRN-DS4182',
        age: 20,
        dob: '11/08/2004',
        email: 'jordan.support@email.com',
        phone: '(617) 555-0103',
        diagnosis: 'Down Syndrome with ASD-VSD s/p repair',
        insurance: 'MassHealth',
        lastVisit: '2025-01-12',
        nextVisit: '2025-07-12',
        primaryPhysician: 'Dr. Robert Kim',
        
        status: {
            recordsComplete: 'complete',
            epicSync: 'complete',
            uploadsComplete: true,
            pendingActions: 1
        },
        
        conditions: ['Down Syndrome (Trisomy 21)', 'ASD/VSD s/p repair', 'Hypothyroidism', 'Autism Spectrum Disorder', 'OSA'],
        
        clinicalSummary: '20-year-old with Down syndrome, s/p ASD/VSD repair at 9 months with excellent long-term outcome. Also diagnosed with autism, primarily nonverbal but uses AAC device. Managing hypothyroidism. Living in supported group home with good adjustment. Recent cognitive testing shows stable functioning. Excellent family support.',
        
        notesSinceLastVisit: 'Family reports Jordan is doing well in day program. No medical concerns since last visit. Sleep study scheduled for March.',
        
        medications: [
            'Levothyroxine 88mcg daily',
            'Aspirin 81mg daily (cardiology)',
            'Melatonin 5mg at bedtime',
            'Omega-3 fatty acids 1000mg daily'
        ],
        
        outstandingActions: [
            { title: 'Tdap Booster', status: 'due-soon', details: 'Last tetanus vaccine at age 10. Due for Tdap booster.', due: 'Due now' },
            { title: 'Sleep Study', status: 'normal', details: 'Scheduled for March 2025 to reassess OSA. Previous study showed moderate OSA, declined CPAP.', due: 'Scheduled 3/15/25' },
            { title: 'Celiac Screening', status: 'normal', details: 'Annual screening for celiac disease (common in DS). Last screen 11/22 negative.', due: 'Next: Nov 2025' }
        ],
        
        careIssues: [
            { issue: 'Down Syndrome Health Surveillance', detail: 'Requires annual TSH, celiac screening, cognitive assessment for early dementia detection. Biennial cardiac echo.' },
            { issue: 'Obstructive Sleep Apnea', detail: 'High risk in Down syndrome. Moderate OSA documented. Family declined CPAP previously. Repeat study scheduled to reassess and discuss treatment options.' },
            { issue: 'Communication & Adaptive Function', detail: 'Primarily nonverbal, uses AAC device effectively. Continues to participate in day program with good progress in vocational skills.' }
        ],
        
        specialists: [
            { name: 'Dr. Robert Kim', specialty: 'Adult Down Syndrome Program', contact: 'DS Clinic: (617) 555-0123', lastSeen: '2025-01-12' },
            { name: 'Dr. Lisa Wong', specialty: 'Adult Congenital Heart Disease', contact: 'Cardiology: (617) 555-0145', lastSeen: '2024-12-18' },
            { name: 'Dr. Sarah Chen', specialty: 'Sleep Medicine', contact: 'Sleep Clinic: (617) 555-0167', lastSeen: '2024-10-10' },
            { name: 'Dr. Michael Torres', specialty: 'Neurology - Developmental', contact: 'Neuro: (617) 555-0189', lastSeen: '2024-11-15' }
        ],
        
        records: [
            { date: '2025-01-12', type: 'Annual DS Clinic Visit', provider: 'Dr. Robert Kim', source: 'Epic', status: 'reviewed' },
            { date: '2024-12-18', type: 'Cardiology Follow-up', provider: 'Dr. Lisa Wong', source: 'Epic', status: 'reviewed' },
            { date: '2024-11-22', type: 'Lab Results - Annual Screening', provider: 'LabCorp', source: 'Epic', status: 'reviewed' }
        ]
    }
];

// Helper function to get patient by ID
function getPatientById(id) {
    return PATIENTS_DATA.find(p => p.id === id);
}

// Helper function to get patient by MRN
function getPatientByMRN(mrn) {
    return PATIENTS_DATA.find(p => p.mrn === mrn);
}

// Helper function to get status color
function getStatusColor(status) {
    const colors = {
        'complete': '#10b981', // green
        'pending': '#f59e0b',  // orange
        'urgent': '#dc2626'    // red
    };
    return colors[status] || '#64748b';
}

// Helper function to get status badge class
function getStatusBadgeClass(status) {
    const classes = {
        'complete': 'status-complete',
        'pending': 'status-pending',
        'urgent': 'status-urgent'
    };
    return classes[status] || '';
}