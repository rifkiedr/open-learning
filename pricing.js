const starterMonthlyValueUsd = document.getElementById("starter-monthly-value-usd")
const starterMonthlyValueAud = document.getElementById("starter-monthly-value-aud")
const starterMonthlyValueSgd = document.getElementById("starter-monthly-value-sgd")
const institutionMonthlyValueUsd = document.getElementById("institution-monthly-value-usd")
const institutionMonthlyValueAud = document.getElementById("institution-monthly-value-aud")
const institutionMonthlyValueSgd = document.getElementById("institution-monthly-value-sgd")
const institutionMonthlyValueMyr = document.getElementById("institution-monthly-value-myr")
const institutionMonthlyValueIdr = document.getElementById("institution-monthly-value-idr")
const starterYearlyValueUsd = document.getElementById("starter-yearly-value-usd")
const starterYearlyValueAud = document.getElementById("starter-yearly-value-aud")
const starterYearlyValueSgd = document.getElementById("starter-yearly-value-sgd")
const starterYearlyValueMyr = document.getElementById("starter-yearly-value-myr")
const starterYearlyValueIdr = document.getElementById("starter-yearly-value-idr")
const institutionYearlyValueUsd = document.getElementById("institution-yearly-value-usd")
const institutionYearlyValueAud = document.getElementById("institution-yearly-value-aud")
const institutionYearlyValueSgd = document.getElementById("institution-yearly-value-sgd")
const institutionYearlyValueIdr = document.getElementById("institution-yearly-value-myr")
const institutionYearlyValueMyr = document.getElementById("institution-yearly-value-idr")
const allRadioStarter = document.getElementsByName('radio-starter')
const allRadioInstitutionGlobal = document.getElementsByName('radio-institution-global')
const allRadioInstitutionAsia = document.getElementsByName('radio-institution-asia')
const educatorStarter = document.getElementById('educator-starter-value')
const learnersStarter = document.getElementById('learners-starter-value')
const educatorStarterYearly = document.getElementById('educator-starter-value-yearly')
const learnersStarterYearly = document.getElementById('learners-starter-value-yearly')
const educatorInstitution = document.getElementById('educator-institution-value')
const learnersInstitution = document.getElementById('learners-institution-value')
const educatorInstitutionYearly = document.getElementById('educator-institution-value-yearly')
const learnersInstitutionYearly = document.getElementById('learners-institution-value-yearly')
const dataPricing = [
    {
        level: 1,
        pricingMonthlyAud: 475,
        pricingYearlyAud: "4,750",
        pricingMonthlyUsd: 345,
        pricingYearlyUsd: "3,450",
        pricingMonthlySgd: 475,
        pricingYearlySgd: "4,750",
        educators: 5,
        learners: 500,
    },
    {
        level: 2,
        pricingMonthlyAud: 700,
        pricingYearlyAud: "7,000",
        pricingMonthlyUsd: 500,
        pricingYearlyUsd: "5,000",
        pricingMonthlySgd: 700,
        pricingYearlySgd: "7,000",
        educators: 10,
        learners: 750,
    },
    {
        level: 3,
        pricingMonthlyAud: 900,
        pricingYearlyAud: "9,000",
        pricingMonthlyUsd: 650,
        pricingYearlyUsd: "6,500",
        pricingMonthlySgd: 900,
        pricingYearlySgd: "9,000",
        pricingMonthlyMyr: "2,333",
        pricingYearlyMyr: "20,000",
        pricingMonthlyIdr: "7,8jt",
        pricingYearlyIdr: "67jt",
        educators: 25,
        learners: "1,000"
    },
    {
        level: 4,
        pricingMonthlyAud: "1,350",
        pricingYearlyAud: "13,500",
        pricingMonthlyUsd: 975,
        pricingYearlyUsd: "9,750",
        pricingMonthlySgd: "1,350",
        pricingYearlySgd: "13,500",
        pricingMonthlyMyr: "2,625",
        pricingYearlyMyr: "22,500",
        pricingMonthlyIdr: "8,7jt",
        pricingYearlyIdr: "75jt",
        educators: "Unlimited",
        learners: "1,500"
    },
    {
        level: 5,
        pricingMonthlyAud: "1,700",
        pricingYearlyAud: "17,000",
        pricingMonthlyUsd: "1,200",
        pricingYearlyUsd: "12,000",
        pricingMonthlySgd: "1,700",
        pricingYearlySgd: "17,000",
        pricingMonthlyMyr: "3,500",
        pricingYearlyMyr: "30,000",
        pricingMonthlyIdr: "11,7jt",
        pricingYearlyIdr: "100jt",
        educators: "Unlimited",
        learners: "2,000"
    },
    {
        level: 6,
        pricingMonthlyAud: "2,500",
        pricingYearlyAud: "25,000",
        pricingMonthlyUsd: "1,750",
        pricingYearlyUsd: "17,500",
        pricingMonthlySgd: "2,500",
        pricingYearlySgd: "25,000",
        pricingMonthlyMyr: "5,250",
        pricingYearlyMyr: "45,000",
        pricingMonthlyIdr: "17,5jt",
        pricingYearlyIdr: "150jt",
        educators: "Unlimited",
        learners: "3,000"
    },
    {
        level: 7,
        pricingMonthlyAud: "3,300",
        pricingYearlyAud: "33,000",
        pricingMonthlyUsd: "2,250",
        pricingYearlyUsd: "22,500",
        pricingMonthlySgd: "3,300",
        pricingYearlySgd: "33,000",
        pricingMonthlyIdr: "18,7jt",
        pricingYearlyIdr: "160jt",
        pricingMonthlyMyr: "5,600",
        pricingYearlyMyr: "48,000",
        educators: "Unlimited",
        learners: "4,000"
    },
    {
        level: 8,
        pricingMonthlyMyr: 875,
        pricingYearlyMyr: "7,500",
        pricingMonthlyIdr: "2,9jt",
        pricingYearlyIdr: "25jt",
        educators: 5,
        learners: 300
    },
    {
        level: 9,
        pricingMonthlyMyr: "1,400",
        pricingYearlyMyr: "12,000",
        pricingMonthlyIdr: "4,7jt",
        pricingYearlyIdr: "40jt",
        educators: 15,
        learners: 500
    },
    {
        level: 10,
        pricingMonthlyMyr: "1,400",
        pricingYearlyMyr: "12,000",
        educators: 15,
        learners: 500
    },
    {
        level: 11,
        pricingMonthlyUsd: 90,
        pricingYearlyUsd: 900,
        pricingMonthlyAud: 125,
        pricingYearlyAud: "1,250",
        pricingMonthlySgd: 125,
        pricingYearlySgd: "1,250",
        educators: 2,
        learners: 100
    },
    {
        level: 12,
        pricingMonthlyUsd: 180,
        pricingYearlyUsd: "1,800",
        pricingMonthlyAud: 250,
        pricingYearlyAud: "2,500",
        pricingMonthlyMyr: 250,
        pricingYearlyMyr: "2,500",        
        educators: 2,
        learners: 250
    },
]
allRadioStarter.forEach((el) => {
    el.addEventListener('click', e => {
        console.log(e.target.value)
        if (e.target.value == 11 || e.target.value == 12) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorStarter.innerHTML = specificData.educators;
            learnersStarter.innerHTML = specificData.learners;
            starterMonthlyValueUsd.innerHTML = specificData.pricingMonthlyUsd;
            starterYearlyValueUsd.innerHTML = specificData.pricingYearlyUsd;
            starterMonthlyValueAud.innerHTML = specificData.pricingMonthlyAud;
            starterYearlyValueAud.innerHTML = specificData.pricingYearlyAud;
            starterMonthlyValueSgd.innerHTML = specificData.pricingMonthlySgd;
            starterYearlyValueSgd.innerHTML = specificData.pricingYearlySgd;
        } else {
            return
        }
    })
})
allRadioInstitutionGlobal.forEach((el) => {
    el.addEventListener('click', e => {
        if (e.target.value >= 1 && e.target.value <= 7) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorInstitution.innerHTML = specificData.educators;
            learnersInstitution.innerHTML = specificData.learners;
            educatorInstitutionYearly.innerHTML = specificData.educators;
            learnersInstitutionYearly.innerHTML = specificData.learners;            
            institutionMonthlyValueUsd.innerHTML = specificData.pricingMonthlyUsd;
            institutionYearlyValueUsd.innerHTML = specificData.pricingYearlyUsd;
            institutionMonthlyValueAud.innerHTML = specificData.pricingMonthlyAud;
            institutionYearlyValueAud.innerHTML = specificData.pricingYearlyAud;
            institutionMonthlyValueSgd.innerHTML = specificData.pricingMonthlySgd;
            institutionYearlyValueSgd.innerHTML = specificData.pricingYearlySgd;
        } else {
            return
        }
    })
})
allRadioInstitutionAsia.forEach((el) => {
    el.addEventListener('click', e => {
        if (e.target.value >= 1 && e.target.value <= 7) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorInstitution.innerHTML = specificData.educators;
            learnersInstitution.innerHTML = specificData.learners;
            educatorInstitutionYearly.innerHTML = specificData.educators;
            learnersInstitutionYearly.innerHTML = specificData.learners;            
            institutionMonthlyValueMyr.innerHTML = specificData.pricingMonthlyMyr;
            institutionYearlyValueMyr.innerHTML = specificData.pricingYearlyMyr;
            institutionMonthlyValueIdr.innerHTML = specificData.pricingMonthlyIdr;
            institutionYearlyValueIdr.innerHTML = specificData.pricingYearlyIdr;
        } else {
            return
        }
    })
});
