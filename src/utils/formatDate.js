const formatDate = (date)=>{
    const d=new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    const year = d.getFullYear();
    if(month.length<2){
        month=`0${month}`
    }
    if(day.length<2){
        day=`0${day}`
    }
    return [year, month, day].join('-');
}
export default formatDate;