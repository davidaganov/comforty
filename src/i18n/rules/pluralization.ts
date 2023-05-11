const ruPluralizationRules = (choice: number, choiceLength: number): number => {
  if (choice === 0) {
    return 0
  }

  const teen: boolean = choice > 10 && choice < 20
  const endsWithOne: boolean = choice % 10 === 1

  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }
  return choiceLength < 4 ? 2 : 3
}

export default {
  ru: ruPluralizationRules
}