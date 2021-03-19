let entries = [];
const goal = 30;

const entriesWrapper = document.querySelector("#entries");

document.getElementById("target").innerText = goal;
function addNewEntry(newEntry)
{
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
   const listItem = document.createElement("li");
   const listValue = document.createTextNode(newEntry);
   listItem.appendChild(listValue);

   entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue)
{
    return total + currentValue;
}

function calTotal()
{
    const totalValue = entries.reduce(reducer);
    document.getElementById('total').innerText = totalValue.toFixed(1);
    document.getElementById('progressTotal').innerText = totalValue;
}

function calAverage()
{
    const average = entries.reduce(reducer)/entries.length;
    document.getElementById('average').innerText = average.toFixed(1);
}

function weeklyHigh()
{
    //... extracts all of the values in the array
    const high = Math.max(...entries);
    document.getElementById("high").innerText = high;
}

function calGoal()
{
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completed = (totalValue)/(goal/100);
    
    const progressCircle = document.querySelector("#progressCircle");
    progressCircle.style.background = `conic-gradient(#70db70 ${completed}%, #2d3740 ${completed}% 100%)`;

    if(completed>100) completed ===100;

    progressCircle.style.background = `conic-gradient(#70db70 ${completed}%, #2d3740 ${completed}% 100)`
}
function handleSubmit(event)
{
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value);

    if(!entry) return;

    document.querySelector("form").reset();

    if(entries.length==7)
    {
        entries.shift();
    }

    entries.push(entry);
    addNewEntry(entry);
    calTotal();
    calAverage();
    weeklyHigh();
    calGoal();

}
const form = document.querySelector('form').addEventListener('submit',handleSubmit);