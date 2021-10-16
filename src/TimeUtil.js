export default {
  timeStrToMins(strTime) {
    console.log(strTime);
    if (!strTime) return 1;
  
    let [h, m] = strTime.split(":");
  
    return Number(h) * 60 + Number(m);
  },
  
  minsToTimeStr(val) {
    let sign = val > 0 ? "" : "-";
    val = val > 0 ? val : -val;
    let m = val % 60;
    let h = (val - m) / 60;
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
  
    return `${sign}${h}:${m}`;
  }
}

// Está dando um aviso nessas exportações
// Link encontrado: https://stackoverflow.com/questions/65738988/assign-object-to-a-variable-before-exporting-as-module-default-warning
// export default { timeStrToMins, minsToTimeStr };