function introduction(name = "Cynthia") {
    return `Hi, my name is ${name}.`;
  }
  
  
  function introductionWithLanguage(name = "Cynthia", language = "java") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  
  function introductionWithLanguageOptional(name = "Cynthia", language = '') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    
    }
  
  function introductionWithLanguageOptional(name = "Ivan", language = "JavaScript") {
      return `Hi, my name is ${name} and I am learning to program in ${language}.`;
      
  }