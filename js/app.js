const tempCUi = document.getElementById('tempC');
const tempFUi = document.getElementById('tempF');
const turbidUi = document.getElementById('turbidity');
const phUi = document.getElementById('ph');

//processing returned object value. Keys name are random, so picking last key and return the value.

processVal = (obj) => Number(obj);

/*TempinC, TempinF, Turbidity, pH should be matched with RTDB of Firebase*/
const manipulateUi = ({ TempinC, TempinF, Turbidity, pH }) => {
    const TEMPinC = processVal(TempinC);
    const TEMPinF = processVal(TempinF);
    const TURBIDITY = processVal(Turbidity);
    const PH = processVal(pH);
    
    tempCUi.textContent = TEMPinC + ' °C';   
    tempFUi.textContent = TEMPinF + ' °F';   
    turbidUi.textContent = TURBIDITY;   
    phUi.textContent = PH;    
}



const ref = firebase.database().ref();
ref.on('value', snapshot => {
    const val = snapshot.val();
    manipulateUi(val);
});



