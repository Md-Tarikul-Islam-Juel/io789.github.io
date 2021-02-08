const tempCUi = document.getElementById('tempinC');
const tempFUi = document.getElementById('tempinF');
const turbidUi = document.getElementById('turbidity');
const phUi = document.getElementById('phVal');

//processing returned object value. Keys name are random, so picking last key and return the value.

processVal = (obj) => Number(obj[Object.keys(obj)[Object.keys(obj).length - 1]]);


const manipulateUi = ({ TempinC, TempinF, Turbidity, pH }) => {
    const tempinC = processVal(TempinC);
    const tempinF = processVal(TempinF);
    const turbidity = processVal(Turbidity);
    const phVal = processVal(pH);
    
    tempCUi.textContent = tempinC +' °C';   
    tempFUi.textContent = tempinF+ ' °F';   
    turbidUi.textContent = turbidity;   
    phUi.textContent = phVal;    
}



const ref = firebase.database().ref();

ref.on('value', snapshot => {
    const val = snapshot.val();
    manipulateUi(val);
});