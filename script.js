setInterval(() => update(), 1000);

function update()
{
    var date = new Date()
    let date1 = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let mons = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    document.getElementById('date').innerHTML = date1
    document.getElementById('month').innerHTML = mons[0]
    document.getElementById('year').innerHTML = year%2000
    document.getElementById('hours').innerHTML = hrs 
    document.getElementById('mins').innerHTML = mins
    document.getElementById('secs').innerHTML = secs
}
