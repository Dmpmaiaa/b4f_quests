function umOuOutro(boolean1, boolean2, boolean3) {
    const arr = [boolean1, boolean2, boolean3]
    let lastArr = arr.filter(el => el == true).length === 1 ?? false
    return lastArr
 }

 console.log(umOuOutro(false, true, false))