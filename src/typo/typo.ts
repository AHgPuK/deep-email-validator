import mailCheck from 'mailcheck'

type TypoSuggestion = {
  address: string
  domain: string
  full: string
}

export const checkTypo = async (email: string): Promise<string | undefined> =>
  new Promise(r =>
    mailCheck.run({
      email,
      suggested: (suggestion: TypoSuggestion) => {
        r(`Likely typo, suggested email: ${suggestion.full}`)
      },
      empty: function() {
        r()
      },
      topLevelDomains: ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de",
            "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu",
            "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz",
            "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu", "com.sa", 
            "sa", "ps", "ai", "app", "co.in"],
    })
  )
