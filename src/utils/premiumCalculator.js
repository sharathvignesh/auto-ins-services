const masterData = require('../config/master.json')

function premiumCalculator(data) {
    let totalScore = 0
    const typeData = masterData[data?.type]
    const typeScore = typeData?.score || 0
    totalScore = totalScore + typeScore

    const liscenceTypeScore = typeData.liscenceType[data?.liscenceType] || 0
    totalScore = totalScore + liscenceTypeScore

    const ageSection = typeData.age.filter((e) => data?.age >= e.ageLowerLimit && data?.age <= e.ageUpperLimit)
    const ageScore = ageSection && ageSection.length > 0 && ageSection[0].score || 0
    totalScore = totalScore + ageScore

    const distanceSection = typeData.estimatedDistancePerYear.filter((e) => data?.estimateDistance >= e.lowerLimit && data?.estimateDistance <= e.upperLimit)
    const distanceScore = distanceSection && distanceSection.length > 0 && distanceSection[0].score || 0
    totalScore = totalScore + distanceScore
    
    const towServiceScore = data?.towingService === true ? typeData.towingService.needed : typeData.towingService.notNeeded
    const lawyerServiceScore = data?.lawyerService === true ? typeData.lawyerService.needed : typeData.towingService.notNeeded
    totalScore = totalScore + towServiceScore + lawyerServiceScore

    return totalScore * 4000
}

module.exports = premiumCalculator