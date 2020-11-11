const getSortedUniqueSkills = (array) => array.map(function ({ skills }, i) {
    return skills
  }).reduce(function (allSkills, skills) {
      return allSkills.concat(...skills)
  }, []).filter((e,i,a)=>a.indexOf(e)==i).sort()